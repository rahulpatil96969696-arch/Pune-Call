import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.kicker}>Premium · Discreet · Pune</p>
        <h1 className={styles.title}>
          Pune Call Girl &amp; Independent Pune Escorts
        </h1>
        <p className={styles.subtitle}>
          Experience a refined Pune escort service with VIP companions, romantic
          dates, and girlfriend experience — available across Koregaon Park,
          Baner, Hinjewadi, and all prime Pune locations.
        </p>
        <div className={styles.ctas}>
          <WhatsAppButton label="Book on WhatsApp" />
          <Link href="#companions" className={styles.secondary}>
            View companions
          </Link>
        </div>
        <ul className={styles.trust}>
          <li>100% discreet</li>
          <li>Verified profiles</li>
          <li>24/7 WhatsApp</li>
        </ul>
      </div>
    </section>
  );
}
