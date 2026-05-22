export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pune-call.vercel.app";

export const SITE_NAME = "Pune Call Girl";

export const DEFAULT_TITLE =
  "Pune Call Girl";

export const DEFAULT_DESCRIPTION =
  "Book premium Pune call girls and independent Pune escorts. Discreet VIP escort service Pune with verified companions, romantic dates, and girlfriend experience across Koregaon Park, Viman Nagar, and Hinjewadi.";

export const KEYWORDS = [
  "Pune call girl",
  "Pune escort service",
  "Independent Pune escorts",
  "VIP escorts Pune",
  "premium escort Pune",
  "Pune companions",
];

export function canonical(path = "") {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p === "/" ? "" : p}`;
}

export function buildMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = "/og-default.jpg",
}) {
  const url = canonical(path);
  const imageUrl = image.startsWith("http") ? image : canonical(image);

  return {
    title,
    description,
    keywords: KEYWORDS,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function profileMetadata(profile) {
  const title = `${profile.name} — Pune Call Girl | Independent Pune Escorts`;
  const description = `Meet ${profile.name}, ${profile.age} — ${profile.location}. Premium Pune escort service with ${profile.tags.slice(0, 3).join(", ")}. Book discreetly on WhatsApp.`;
  return buildMetadata({
    title,
    description,
    path: `/escorts/${profile.slug}`,
    image: profile.images.cover,
  });
}
