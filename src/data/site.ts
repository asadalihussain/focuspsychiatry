export const site = {
  name: "Focus Psychiatry",
  legalName: "Focus Psychiatry",
  tagline: "Compassionate psychiatric care in Alvin, Texas",
  url: "https://www.focuspsychiatry.com",
  description:
    "Focus Psychiatry is the Alvin, TX practice of Dr. Syed Sajjad Zaidi, MD. Treating depression, anxiety, bipolar disorder, ADHD, OCD, sleep disorders, and addiction for ages 14 and up. In-person and telepsychiatry visits. Accepting new patients.",
  doctor: {
    name: "Dr. Syed Sajjad Zaidi, MD",
    shortName: "Dr. Zaidi",
    title: "Psychiatrist",
    credentials: "MD",
    bio: "Dr. Syed Sajjad Zaidi is a local psychiatrist in the heart of Alvin, Texas. He opened Focus Psychiatry in 2014 and is certified to perform outpatient narcotics detoxification and maintenance treatment using buprenorphine. Dr. Zaidi has assisted individuals with a wide range of mental health conditions — including depression, anxiety, bipolar disorder, sleep disorders, OCD, and schizophrenia — through medication management and integrative therapy techniques. He believes in client-focused treatment and is dedicated to the mental wellness of every individual who walks through his doors.",
    training:
      "Dr. Zaidi moved to Lubbock, TX to attend Texas Tech University, where he completed his first 3 years of Adult Psychiatry Residency and was awarded Resident of the Month at University Medical Center. After residency, he practiced in multiple settings across different socioeconomic communities and several parts of the United States before opening Focus Psychiatry.",
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
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Conditions", href: "/conditions/" },
    { label: "New Patients", href: "/new-patients/" },
    { label: "Insurance", href: "/insurance/" },
    { label: "Reviews", href: "/reviews/" },
    { label: "Locations", href: "/locations/" },
    { label: "Contact", href: "/contact/" },
  ],
};
