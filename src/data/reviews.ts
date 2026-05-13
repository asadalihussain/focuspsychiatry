export interface Review {
  author: string;
  body: string;
  ageLabel: string;
  featured?: boolean;
  tag?: string;
}

export const googleRating = {
  average: 4.9,
  count: 68,
  shareUrl: "https://share.google/hzFhFSLKjYywPql5p",
} as const;

export const reviews: Review[] = [
  {
    author: "Rhonda Wright",
    ageLabel: "Patient since 2016",
    tag: "9 years as a patient",
    featured: true,
    body: "I have been a patient for 9 years and counting. Dr. Zaidi is very professional, interested in my health and helps me coordinate my priorities. Very nice staff as well!",
  },
  {
    author: "Aaron Burton",
    ageLabel: "11 months ago",
    tag: "First visit",
    featured: true,
    body: "First visit. Everyone is very kind. Dr. Zaidi asked a lot of very relevant questions to better ascertain my needs and did not judge anything said. He came up with a suggested treatment and I was in and out quickly. Highly recommend this office.",
  },
  {
    author: "Michaela Ensing",
    ageLabel: "7 months ago",
    featured: true,
    body: "Dr. Zaidi has helped me in so many ways. He pretty much saved my life. Such a wonderful man and an excellent doctor!! Highly recommend!",
  },
  {
    author: "Tommie Reddoch",
    ageLabel: "11 months ago",
    tag: "Listens before diagnosing",
    featured: true,
    body: "Dr. Zaidi is an intuitive and personable psychiatrist. He actually listens before making a diagnosis. His office staff are all friendly and professional. Highly recommend!",
  },
  {
    author: "Annette Rodriguez",
    ageLabel: "4 days ago",
    body: "He is a doctor that not only cares but really makes you feel like a person — or more like family. He always goes out of his way to make it better.",
  },
  {
    author: "Jay Man",
    ageLabel: "7 months ago",
    tag: "7 years as a patient",
    body: "Dr. Zaidi is the best! He has been my doctor for about 7 years now. He is caring and goes out of his way to help you.",
  },
  {
    author: "Tracy R",
    ageLabel: "10 months ago",
    tag: "5 years as a patient",
    body: "I've been going to Dr. Zaidi for about five years and have had nothing but great things to say. He and his staff are great and courteous and always treat me with respect.",
  },
  {
    author: "Peggy Lewis",
    ageLabel: "a year ago",
    tag: "Family caregiver — 5 years",
    body: "Dr. Zaidi has taken care of my step-son for the last 5 years. His Traumatic Brain Injury has caused some OCD, sleep issues, and behavioral issues, and Dr. Zaidi helps me by monitoring his behavior and adjusts or changes his meds. The staff is wonderful, very nice, and helpful in any way they can.",
  },
  {
    author: "Angela Kirkland",
    ageLabel: "a year ago",
    body: "Office is very professional and calming to be in. They even have snacks. Admin staff is kind and compassionate. Dr. Zaidi is great. He makes me comfortable, spends an adequate amount of time with me, and really dives into how I'm doing — walks through all symptoms and his thoughts and different solutions.",
  },
  {
    author: "Melissa Lopez",
    ageLabel: "a year ago",
    tag: "New patient",
    body: "As a new patient, I felt very comfortable. I felt heard and Dr. Zaidi answered my questions. He took his time and treated me with care — not just a MRN number. I am looking forward to my next appointment.",
  },
  {
    author: "norma hinojosa",
    ageLabel: "a year ago",
    tag: "ADHD & sleep",
    body: "Dr. Zaidi is excellent to visit and I highly recommend him. He helped me with my ADHD and sleep deprivation. He is very attentive, listens, and genuinely cares about his patients' overall mental health.",
  },
  {
    author: "Richard Jones",
    ageLabel: "a year ago",
    tag: "Drives from Houston",
    body: "I live all the way in Houston and I drive to Alvin to see Dr. Syed Sajjad Zaidi — so that should tell you how good he is.",
  },
  {
    author: "Mnm Raz",
    ageLabel: "a year ago",
    body: "He is the best doctor I have had in a long time coming. His skills are unmatched, he is kind, and he has a great bedside manner. He is skilled at providing the correct medicine that is needed to treat you for all your needs. I am truly grateful.",
  },
  {
    author: "Kolby Morgan",
    ageLabel: "a year ago",
    body: "Dr. Zaidi cares about his patients. He remembers what you discussed in previous appointments and provides added guidance, if interested, in other treatments that may improve your quality of life.",
  },
  {
    author: "Arturo Ayala",
    ageLabel: "a year ago",
    body: "My experience with Dr. Zaidi has been great. He listens to everything I have to say, always asking the right questions to get you to open up. He seems to always remember what was talked about in previous sessions.",
  },
  {
    author: "Stephanie Masterson",
    ageLabel: "a year ago",
    body: "Friendly staff. Dr. Zaidi is very thorough and personable. He answered all of my questions and took the time to explain everything to me.",
  },
  {
    author: "John Deere",
    ageLabel: "a year ago",
    body: "It's been great working with Dr. Zaidi and his team. I've felt comfortable communicating any concerns or details for my situation. I am still a customer here, and I can say I'm glad I found this place.",
  },
  {
    author: "Killer of Giants",
    ageLabel: "a year ago",
    body: "I was very impressed with my visit to the clinic. The doctor and his assistant listened to me intently, as well as making sure to take the time to go over my current meds and current health issues.",
  },
  {
    author: "Jacob Guillot",
    ageLabel: "a year ago",
    body: "Dr. Zaidi is fantastic. He very much helped me out and I'm in a much better spot.",
  },
  {
    author: "Arthur Tailleur",
    ageLabel: "a year ago",
    body: "Patient and attentive. Really listens and asks relevant and important questions. Sincerely interested in helping those who reach out to him.",
  },
  {
    author: "Leah Booth",
    ageLabel: "8 months ago",
    body: "Great doctor! Wonderful staff. Dr. Zaidi listens and studies carefully to help get things lined out. Yes, there may be times when a medicine may not work, but as patients we know not all drugs are meant for all people — and so we have to try.",
  },
  {
    author: "David Stobart",
    ageLabel: "9 months ago",
    body: "Excellent service and care, and always accommodating. They put in a lot of effort dealing with my insurance company and it has saved me money. Very professional, caring team!",
  },
  {
    author: "Julie Welling",
    ageLabel: "2 years ago",
    body: "Dr. Zaidi wants you to tell him what your thoughts are. Be honest. Put everything out there. He can help you go in the right direction. He has done wonders for me.",
  },
  {
    author: "Jenna Garza",
    ageLabel: "2 years ago",
    body: "The staff is so kind and amazing! Dr. Zaidi really listens to you and has been great with me. I highly recommend this practice!",
  },
  {
    author: "Ames Kendrick",
    ageLabel: "2 years ago",
    body: "Friendly admin staff and empathetic care team. Reliably communicative, professional, kind, and patient. Go-to recommendation to others for psych needs!",
  },
  {
    author: "Amelia Flores Cervantes",
    ageLabel: "2 years ago",
    body: "I love Dr. Zaidi and his team. They are always so helpful and sincere — explaining and listening to my needs.",
  },
  {
    author: "Wooody Winfeild",
    ageLabel: "2 years ago",
    body: "Clearly explains all details of the reasons for your visit. A caring approach to your problems.",
  },
  {
    author: "Samantha Corbett",
    ageLabel: "a year ago",
    body: "Made me feel very comfortable and was very interested in what is going on in my life. He asked how he could help.",
  },
  {
    author: "alex rubi",
    ageLabel: "a year ago",
    body: "Absolutely great experience. As a new patient it's kind of nerve-wracking going, but everyone was nice. Would recommend.",
  },
  {
    author: "Lori Arnold",
    ageLabel: "11 months ago",
    body: "I always feel heard and respected by Dr. Zaidi and his staff.",
  },
  {
    author: "Gypsy on the Rhodes",
    ageLabel: "a year ago",
    body: "He listens and shows he really cares about my mental health.",
  },
  {
    author: "Yolanda Castillo",
    ageLabel: "9 months ago",
    body: "Dr. Zaidi listens and truly tries to help you.",
  },
  {
    author: "Billie Johnson",
    ageLabel: "a year ago",
    body: "I feel like he listens to me, and if I develop serious issues I am confident he will help me get through it.",
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
