import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/profile/Gallery";
import ProfileDetail from "@/components/profile/ProfileDetail";
import {
  getProfile,
  profiles,
  galleryImages,
} from "@/lib/profiles";
import { profileMetadata } from "@/lib/seo";
import { ProfileJsonLd } from "@/components/seo/JsonLd";
import styles from "./escort.module.css";

export function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const profile = getProfile(slug);
  if (!profile) return { title: "Profile not found" };
  return profileMetadata(profile);
}

export default async function EscortPage({ params }) {
  const { slug } = await params;
  const profile = getProfile(slug);
  if (!profile) notFound();

  const images = galleryImages(profile);

  return (
    <main className={styles.page}>
      <ProfileJsonLd profile={profile} />
      <Link href="/#companions" className={styles.back}>
        ← All companions
      </Link>

      <div className={styles.layout}>
        <section className={styles.galleryCol}>
          <Gallery images={images} name={profile.name} />
        </section>
        <ProfileDetail profile={profile} />
      </div>
    </main>
  );
}
