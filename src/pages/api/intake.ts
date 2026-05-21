import type { APIRoute } from "astro";

export const prerender = false;

const GITHUB_OWNER = "asadalihussain";
const GITHUB_REPO = "focuspsychiatry";
const MAX_FILES = 5;
const MAX_PER_FILE = 3 * 1024 * 1024;
const MAX_TOTAL = 10 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

const KIND_LABELS: Record<string, string> = {
  copy: "Copy / text update",
  design: "Design / layout / colors",
  "new-content": "Add new content",
  image: "Image / photo update",
  bug: "Bug",
  other: "Other",
};

function sanitizeFilename(name: string): string {
  return (
    name
      .replace(/[^a-zA-Z0-9._-]/g, "-")
      .replace(/^[-.]+|[-.]+$/g, "")
      .slice(0, 80) || "file"
  );
}

function bufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function githubFetch(token: string, path: string, init: RequestInit = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "focuspsychiatry-intake",
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`GitHub ${path} -> ${res.status}: ${txt.slice(0, 300)}`);
  }
  return res;
}

export const POST: APIRoute = async ({ request }) => {
  const token = (import.meta as any).env?.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) {
    return new Response(
      JSON.stringify({ error: "Server is missing GITHUB_TOKEN configuration." }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid form data." }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  // Honeypot — quietly succeed for bots
  if (((form.get("company") as string) || "").trim()) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  const url = ((form.get("url") as string) || "").trim();
  const kind = ((form.get("kind") as string) || "other").trim();
  const title = ((form.get("title") as string) || "").trim().slice(0, 120);
  const details = ((form.get("details") as string) || "").trim();
  const submitterName = ((form.get("name") as string) || "").trim().slice(0, 120);
  const submitterEmail = ((form.get("email") as string) || "").trim().slice(0, 200);

  if (!url || !title || !details) {
    return new Response(
      JSON.stringify({ error: "Page, summary, and description are required." }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }

  const rawFiles = form.getAll("attachments").filter((v): v is File => v instanceof File);
  let totalSize = 0;
  const acceptedFiles: File[] = [];
  for (const f of rawFiles) {
    if (acceptedFiles.length >= MAX_FILES) break;
    if (f.size > MAX_PER_FILE) continue;
    if (!ALLOWED_TYPES.includes(f.type)) continue;
    if (totalSize + f.size > MAX_TOTAL) break;
    totalSize += f.size;
    acceptedFiles.push(f);
  }

  // Upload each file to the repo under intake-attachments/<timestamp>-<random>/<safeName>
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").replace("Z", "");
  const random = Math.random().toString(36).slice(2, 8);
  const folder = `intake-attachments/${stamp}-${random}`;

  const uploadedLinks: { rawUrl: string; safeName: string; type: string }[] = [];
  for (const f of acceptedFiles) {
    const safeName = sanitizeFilename(f.name);
    const path = `${folder}/${safeName}`;
    const buf = await f.arrayBuffer();
    const content = bufferToBase64(buf);
    try {
      await githubFetch(token, `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${encodeURI(path)}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          message: `Intake attachment: ${safeName}`,
          content,
        }),
      });
      const rawUrl = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/main/${encodeURI(path)}`;
      uploadedLinks.push({ rawUrl, safeName, type: f.type });
    } catch (err) {
      console.error("Attachment upload failed:", err);
    }
  }

  const kindLabel = KIND_LABELS[kind] ?? "Other";
  const submitter =
    submitterName || submitterEmail
      ? `**Submitter:** ${[submitterName, submitterEmail].filter(Boolean).join(" — ")}`
      : "**Submitter:** anonymous";

  const attachmentsMd = uploadedLinks.length
    ? uploadedLinks
        .map((l) =>
          l.type.startsWith("image/")
            ? `![${l.safeName}](${l.rawUrl})`
            : `- [${l.safeName}](${l.rawUrl})`
        )
        .join("\n")
    : "_No attachments._";

  const body = [
    `**Page / area:** \`${url}\``,
    `**Type:** ${kindLabel}`,
    submitter,
    "",
    "---",
    "",
    "### Description",
    details,
    "",
    "### Attachments",
    attachmentsMd,
    "",
    "---",
    `_Submitted via /intake on ${new Date().toISOString()}_`,
  ].join("\n");

  let issueData: { html_url: string; number: number };
  try {
    const issueRes = await githubFetch(token, `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: `[Change Request] ${title}`,
        body,
        labels: ["change-request", kind].filter((x) => x !== "other"),
      }),
    });
    issueData = (await issueRes.json()) as { html_url: string; number: number };
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: `Failed to create ticket: ${err.message || err}` }),
      { status: 502, headers: { "content-type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({
      ok: true,
      issueUrl: issueData.html_url,
      issueRef: `#${issueData.number}`,
      attachmentsUploaded: uploadedLinks.length,
    }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
};
