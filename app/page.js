import { profiles } from "@/lib/profiles";
import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import ProfileCard from "@/components/home/ProfileCard";
import PremiumServices from "@/components/home/PremiumServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactCTA from "@/components/home/ContactCTA";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title:
    "Pune Call Girl | Independent Pune Escorts | Premium Escort Service Pune",
  description:
    "Book premium Pune call girls and independent Pune escorts. Discreet VIP escort service Pune — girlfriend experience, romantic dates, and hotel visits. WhatsApp booking 24/7.",
  path: "/",
});

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />

      <section className={styles.section} id="companions">
        <p className="sectionKicker">Featured companions</p>
        <h2 className="sectionTitle">Independent Pune Escorts</h2>
        <p className="sectionLede">
          Browse ten curated Pune call girl profiles — each offering premium
          companionship, verified availability, and direct WhatsApp booking.
        </p>
        <ul className={styles.grid}>
          {profiles.map((p, i) => (
            <ProfileCard key={p.slug} profile={p} index={i} />
          ))}
        </ul>
      </section>

      <PremiumServices />
      <WhyChooseUs />
      <ContactCTA />
    </main>
  );
}
