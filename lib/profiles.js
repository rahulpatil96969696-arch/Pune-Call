// Static profile data — images in /public/image1.png … image10.png

export const PROFILE_IMAGES = [
  "/image1.png",
  "/image2.jpeg",
  "/image3.png",
  "/image4.jpeg",
  "/image5.png",
  "/image6.png",
  "/image7.png",
  "/image8.png",
  "/image9.png",
  "/image10.png",
];

/** Same image for cover + all gallery thumbnails */
export function profileImages(src) {
  return {
    cover: src,
    gallery: [src, src, src],
  };
}

export const profiles = [
  {
    slug: "aanya-sharma",
    name: "Aanya Sharma",
    age: 23,
    location: "Koregaon Park, Pune",
    tagline: "Elegant dinner dates & VIP companionship",
    badge: "VIP",
    tags: ["VIP", "Dinner Dates", "GFE"],
    availability: "Available today · 6 PM – 2 AM",
    about:
      "Aanya is a refined independent Pune escort known for warm conversation, polished presence, and discreet meet-ups at premium hotels across Koregaon Park. Ideal for gentlemen who value privacy, charm, and a genuinely romantic atmosphere.",
    services: [
      "Hotel & residence visits",
      "Dinner & social companionship",
      "Overnight bookings",
      "Travel-friendly dates",
      "Discreet short meets",
    ],
    girlfriendExperience:
      "Expect attentive conversation, light affection, and the feeling of a real date — hand-holding, shared laughs, and unhurried time together without rush.",
    romanticCompanionship:
      "Perfect for candlelit dinners, lounge evenings, and slow, intimate chemistry built through the night.",
    images: profileImages(PROFILE_IMAGES[0]),
  },
  {
    slug: "isha-mehta",
    name: "Isha Mehta",
    age: 25,
    location: "Viman Nagar, Pune",
    tagline: "Sophisticated corporate companion",
    badge: "Featured",
    tags: ["Corporate", "Overnight", "Classy"],
    availability: "Available · Pre-book recommended",
    about:
      "Isha blends poise with playful energy — a favourite among professionals seeking a polished Pune call girl for events, after-work drinks, or private evenings in Viman Nagar and Kalyani Nagar.",
    services: [
      "Corporate event companion",
      "Couple-friendly ambience",
      "Extended overnight",
      "Airport pickup dates",
      "Premium hotel meets",
    ],
    girlfriendExperience:
      "Natural chemistry, meaningful eye contact, and girlfriend-style warmth from the first hello to goodbye.",
    romanticCompanionship:
      "Suited for wine bars, rooftop lounges, and unhurried nights where elegance matters.",
    images: profileImages(PROFILE_IMAGES[1]),
  },
  {
    slug: "kavya-iyer",
    name: "Kavya Iyer",
    age: 22,
    location: "Baner, Pune",
    tagline: "Youthful energy · Party-friendly",
    badge: "New",
    tags: ["Party", "Young", "Fun"],
    availability: "Available weekends · Flexible weekdays",
    about:
      "Kavya brings vibrant, youthful energy to every booking — popular with clients who want a fun, stylish independent Pune escort for parties, brunches, or relaxed hotel stays in Baner and Balewadi.",
    services: [
      "Party & club companionship",
      "Short & long bookings",
      "Weekend getaways",
      "Casual coffee dates",
      "Private apartment visits",
    ],
    girlfriendExperience:
      "Playful banter, cuddly vibes, and a light-hearted date that feels spontaneous and real.",
    romanticCompanionship:
      "Great for lively nights out followed by intimate, private time.",
    images: profileImages(PROFILE_IMAGES[2]),
  },
  {
    slug: "meera-desai",
    name: "Meera Desai",
    age: 27,
    location: "Camp, Pune",
    tagline: "Mature · Discreet · Cultured",
    badge: "Premium",
    tags: ["Mature", "Discreet", "Cultured"],
    availability: "By appointment · Evenings preferred",
    about:
      "Meera offers a mature, understated Pune escort service experience for discerning clients who appreciate art, conversation, and complete discretion near Camp and Deccan.",
    services: [
      "Cultural & dinner outings",
      "Long-form overnight",
      "Discreet daytime meets",
      "Intro-friendly for first-timers",
      "Luxury hotel preferred",
    ],
    girlfriendExperience:
      "Calm, emotionally present company with the comfort of a long-term partner for the evening.",
    romanticCompanionship:
      "Ideal for theatre evenings, fine dining, and slow, sensual connection.",
    images: profileImages(PROFILE_IMAGES[3]),
  },
  {
    slug: "naina-kapoor",
    name: "Naina Kapoor",
    age: 24,
    location: "Hinjewadi, Pune",
    tagline: "Tech-hub favourite · Late nights",
    badge: "Popular",
    tags: ["Hinjewadi", "Late Night", "Friendly"],
    availability: "Available late night · 8 PM – 4 AM",
    about:
      "Naina is the go-to companion for IT professionals in Hinjewadi seeking stress-free, private Pune call girl bookings after long workdays — always punctual and easy-going.",
    services: [
      "Late-night hotel visits",
      "In-call near Hinjewadi",
      "Short refresh meets",
      "Overnight stay",
      "Repeat-client priority",
    ],
    girlfriendExperience:
      "Relaxed, caring energy — like unwinding with someone who genuinely enjoys your company.",
    romanticCompanionship:
      "Comfortable for Netflix-style hotel evenings and intimate conversation.",
    images: profileImages(PROFILE_IMAGES[4]),
  },
  {
    slug: "priya-verma",
    name: "Priya Verma",
    age: 26,
    location: "Kharadi, Pune",
    tagline: "Fitness-inspired · Active lifestyle",
    badge: "Athletic",
    tags: ["Fitness", "Outdoors", "Energetic"],
    availability: "Available · Morning & evening slots",
    about:
      "Priya combines athletic confidence with soft femininity — a premium choice for active dates, poolside lounges, and vibrant independent Pune escorts experiences in Kharadi.",
    services: [
      "Pool & resort companionship",
      "Active daytime dates",
      "Spa & wellness outings",
      "Hotel & serviced apartment",
      "Multi-hour packages",
    ],
    girlfriendExperience:
      "Upbeat, motivating presence with affectionate moments that feel fresh and genuine.",
    romanticCompanionship:
      "Perfect for resort afternoons turning into romantic evenings.",
    images: profileImages(PROFILE_IMAGES[5]),
  },
  {
    slug: "riya-nair",
    name: "Riya Nair",
    age: 21,
    location: "Wakad, Pune",
    tagline: "Sweet · Petite · First-timer friendly",
    badge: "Sweetheart",
    tags: ["Petite", "Sweet", "GFE"],
    availability: "Available today · Limited slots",
    about:
      "Riya is petite, sweet, and naturally warm — ideal for clients new to booking a Pune escort who want gentle, respectful, and memorable company in Wakad and Pimpri.",
    services: [
      "Intro & short meets",
      "Coffee & casual dates",
      "Hotel introductions",
      "Evening companionship",
      "Photo-verified meet",
    ],
    girlfriendExperience:
      "Soft-spoken, affectionate, and attentive — the classic girlfriend vibe clients love.",
    romanticCompanionship:
      "Cozy, tender evenings with emphasis on connection and comfort.",
    images: profileImages(PROFILE_IMAGES[6]),
  },
  {
    slug: "tara-bose",
    name: "Tara Bose",
    age: 28,
    location: "Boat Club Road, Pune",
    tagline: "Luxury dates · High-end clientele",
    badge: "Elite",
    tags: ["Luxury", "Elite", "VIP"],
    availability: "Pre-book 24h · VIP only",
    about:
      "Tara curates ultra-premium VIP escorts Pune experiences — designer attire, five-star settings, and impeccable discretion for executives and international visitors.",
    services: [
      "Five-star hotel only",
      "International client friendly",
      "Black-tie event companion",
      "Weekend luxury getaways",
      "Strictly discreet billing",
    ],
    girlfriendExperience:
      "Impeccable manners, exclusive attention, and an elite partner presence for the entire engagement.",
    romanticCompanionship:
      "Champagne evenings, private suites, and world-class romantic ambience.",
    images: profileImages(PROFILE_IMAGES[7]),
  },
  {
    slug: "simran-kulkarni",
    name: "Simran Kulkarni",
    age: 24,
    location: "Magarpatta, Pune",
    tagline: "Bilingual · Culturally versatile",
    badge: "Featured",
    tags: ["Bilingual", "Versatile", "Dinner"],
    availability: "Available · Afternoon & night",
    about:
      "Simran is fluent, adaptable, and polished — excellent for bilingual conversation, family-style dinners, and versatile Pune escort service bookings around Magarpatta and Hadapsar.",
    services: [
      "Dinner & family-style outings",
      "Shopping companion",
      "Hotel & corporate park meets",
      "Extended conversation dates",
      "Festive season bookings",
    ],
    girlfriendExperience:
      "Warm Marathi-Hindi-English chat, shared meals, and authentic date energy.",
    romanticCompanionship:
      "Relaxed restaurant dates flowing into private, intimate time.",
    images: profileImages(PROFILE_IMAGES[8]),
  },
  {
    slug: "diya-patil",
    name: "Diya Patil",
    age: 23,
    location: "Senapati Bapat Road, Pune",
    tagline: "College-town charm · Spontaneous",
    badge: "Hot",
    tags: ["Spontaneous", "Charming", "Night"],
    availability: "Available tonight · On request",
    about:
      "Diya offers spontaneous, charming company near SB Road and FC Road — a popular independent Pune escort for last-minute plans and exciting nightlife chemistry.",
    services: [
      "Last-minute bookings",
      "Nightlife & lounge dates",
      "Short hotel meets",
      "Overnight on request",
      "WhatsApp-fast confirmation",
    ],
    girlfriendExperience:
      "Flirty, fun, and emotionally engaging — feels like meeting someone you have been texting for weeks.",
    romanticCompanionship:
      "Electric nights out with a soft, romantic finish in private.",
    images: profileImages(PROFILE_IMAGES[9]),
  },
];

export function getProfile(slug) {
  return profiles.find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  return profiles.map((p) => p.slug);
}

export function galleryImages(profile) {
  const src = profile.images.cover;
  return [src, src, src, src];
}
