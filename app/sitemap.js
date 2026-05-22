import { profiles } from "@/lib/profiles";
import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const base = SITE_URL.replace(/\/$/, "");

  const escortPages = profiles.map((p) => ({
    url: `${base}/escorts/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...escortPages,
  ];
}
