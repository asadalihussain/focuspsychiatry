export interface ProviderEducation {
  school: string;
  degree: string;
  years: string;
  note?: string;
}

export interface ProviderLicense {
  title: string;
  issuer?: string;
  date?: string;
  note?: string;
}

export interface Provider {
  id: string;
  name: string;
  shortName: string;
  initials: string;
  title: string;
  credentials: string;
  role: string;
  image: string | null;
  bio: string;
  training: string;
  languages: string[];
  practicingSince: number;
  education: ProviderEducation[];
  licensure: ProviderLicense[];
  memberships?: string[];
}

export const providers: Provider[] = [
  {
    id: "syed-zaidi",
    name: "Dr. Syed Sajjad Zaidi, MD",
    shortName: "Dr. Zaidi",
    initials: "SZ",
    title: "Psychiatrist",
    credentials: "MD",
    role: "Founder & Psychiatrist",
    image: "/dr-zaidi.png",
    bio: "Dr. Syed Sajjad Zaidi is a local psychiatrist in the heart of Alvin, Texas. He opened Focus Psychiatry in 2014 and is certified to perform outpatient narcotics detoxification and maintenance treatment using buprenorphine. Dr. Zaidi has assisted individuals with a wide range of mental health conditions — including depression, anxiety, bipolar disorder, sleep disorders, OCD, and schizophrenia — through medication management and integrative therapy techniques. He believes in client-focused treatment and is dedicated to the mental wellness of every individual who walks through his doors.",
    training:
      "Dr. Zaidi moved to Lubbock, TX to attend Texas Tech University, where he completed his first 3 years of Adult Psychiatry Residency and was awarded Resident of the Month at University Medical Center. After residency, he practiced in multiple settings across different socioeconomic communities and several parts of the United States before opening Focus Psychiatry.",
    languages: ["English", "Urdu", "Hindi"],
    practicingSince: 2014,
    education: [
      {
        school: "University of Texas Health Science Center at Houston",
        degree: "Residency, Psychiatry",
        years: "2010–2011",
      },
      {
        school: "Texas Tech University Health Sciences Center, Lubbock",
        degree: "Residency, Psychiatry",
        years: "2007–2010",
        note: "Resident of the Month, University Medical Center",
      },
      {
        school: "Dow University of Health Sciences",
        degree: "Doctor of Medicine",
        years: "Class of 2000",
      },
    ],
    licensure: [
      {
        title: "Texas State Medical License",
        date: "Active · since 2011",
      },
      {
        title: "DEA / Buprenorphine Certification",
        note: "Certified to perform outpatient narcotics detoxification and maintenance treatment using buprenorphine (Suboxone®)",
      },
    ],
    memberships: ["Texas Medical Association (TMA)"],
  },
  {
    id: "aelia-waqif",
    name: "Aelia Waqif, DNP, PMHNP-BC",
    shortName: "Aelia Waqif",
    initials: "AW",
    title: "Psychiatric Mental Health Nurse Practitioner",
    credentials: "DNP, PMHNP-BC",
    role: "Psychiatric Mental Health Nurse Practitioner",
    image: "/aelia-waqif.jpg",
    bio: "Aelia Waqif is a board-certified Psychiatric Mental Health Nurse Practitioner with over six years of nursing experience across diverse healthcare settings. Witnessing a growing need for compassionate, accessible, and patient-centered mental healthcare throughout her career drove her commitment to mental health advocacy. She is dedicated to providing culturally sensitive, evidence-based care and is fluent in English and Urdu/Hindi.",
    training:
      "Aelia earned her Bachelor of Science in Biomedical Sciences from Texas A&M University, then a Bachelor of Science in Nursing from Sam Houston State University. After working as a nurse for several years, she pursued her Doctor of Nursing Practice (DNP) with a specialization in mental health (PMHNP) from the University of Arizona.",
    languages: ["English", "Urdu", "Hindi"],
    practicingSince: 2019,
    education: [
      {
        school: "University of Arizona",
        degree: "Doctor of Nursing Practice (DNP), PMHNP",
        years: "2024",
      },
      {
        school: "Sam Houston State University",
        degree: "Bachelor of Science, Nursing",
        years: "2017–2018",
      },
      {
        school: "Texas A&M University",
        degree: "Bachelor of Science, Biomedical Sciences",
        years: "2013–2016",
      },
    ],
    licensure: [
      {
        title: "PMHNP-BC",
        issuer: "American Nurses Credentialing Center",
        date: "Issued Feb 2025",
      },
      {
        title: "Registered Nurse",
        issuer: "Texas Board of Nursing",
        date: "Issued Feb 2019",
      },
      {
        title: "Sexual Assault Nurse Examiner – Adult/Adolescent (SANE)",
        issuer: "International Association of Forensic Nurses",
      },
      {
        title: "Medications for Opioid Use Disorder (MOUD) – 16-hour Training",
        issuer: "American Academy of Addiction Psychiatry (AAAP)",
      },
      {
        title: "Basic Life Support (BLS)",
        issuer: "American Heart Association",
      },
    ],
  },
];

export const site = {
  name: "Focus Psychiatry",
  legalName: "Focus Psychiatry",
  tagline: "Compassionate psychiatric care in Alvin, Texas",
  url: "https://www.focuspsychiatry.com",
  description:
    "Focus Psychiatry is the Alvin, TX practice of Dr. Syed Sajjad Zaidi, MD and Aelia Waqif, DNP, PMHNP-BC. Treating depression, anxiety, bipolar disorder, ADHD, OCD, sleep disorders, and addiction for ages 14 and up. In-person and telepsychiatry visits. Accepting new patients.",
  // Singular "doctor" kept for legacy references (Physician schema, location pages).
  // The full team lives in `providers`.
  doctor: {
    name: providers[0].name,
    shortName: providers[0].shortName,
    title: providers[0].title,
    credentials: providers[0].credentials,
    bio: providers[0].bio,
    training: providers[0].training,
  },
  contact: {
    address1: "412 W House St",
    city: "Alvin",
    region: "TX",
    postal: "77511",
    country: "US",
    phone: "281-968-7568",
    phoneRaw: "+12819687568",
    fax: "281-968-7569",
    email: "info@focuspsychiatry.com",
    hours: [
      { day: "Monday",    open: "8:30 AM", close: "5:00 PM" },
      { day: "Tuesday",   open: "8:30 AM", close: "5:00 PM" },
      { day: "Wednesday", open: "8:30 AM", close: "5:00 PM" },
      { day: "Thursday",  open: "8:30 AM", close: "5:00 PM" },
      { day: "Friday",    open: "8:30 AM", close: "5:00 PM" },
    ],
    closedDays: ["Saturday", "Sunday"],
    geo: { latitude: 29.4243, longitude: -95.2441 },
    placeId: "",
  },
  agesServed: "14 and up",
  acceptingNewPatients: true,
  telepsychAvailable: true,
  established: 2014,
  insurance: [
    { carrier: "Aetna", plans: ["EPO", "HMO", "Medicare", "POS", "PPO"] },
    { carrier: "Blue Cross Blue Shield of Massachusetts", plans: ["Medicare", "PPO"] },
    { carrier: "Blue Cross Blue Shield of Michigan", plans: ["HMO", "Medicare", "POS", "PPO"] },
    { carrier: "Cigna", plans: ["PPO"] },
  ],
  social: {
    facebook: "https://www.facebook.com/FocusPsychiatryAlvin/",
  },
} as const;

export const navigation = {
  primary: [
    { label: "Our Team", href: "/our-team/" },
    { label: "Services", href: "/services/" },
    { label: "Conditions", href: "/conditions/" },
    { label: "New Patients", href: "/new-patients/" },
    { label: "Insurance", href: "/insurance/" },
    { label: "Reviews", href: "/reviews/" },
    { label: "Locations", href: "/locations/" },
    { label: "Contact", href: "/contact/" },
  ],
};
