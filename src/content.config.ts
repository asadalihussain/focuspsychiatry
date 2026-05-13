import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const conditions = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/conditions" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    order: z.number().default(99),
    icon: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    order: z.number().default(99),
    icon: z.string().optional(),
  }),
});

const cities = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cities" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    state: z.string().default("TX"),
    county: z.string().optional(),
    distanceMiles: z.number(),
    drivingMinutes: z.number(),
    nearbyLandmarks: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    author: z.string().default("Dr. Syed Sajjad Zaidi"),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { conditions, services, cities, posts };
