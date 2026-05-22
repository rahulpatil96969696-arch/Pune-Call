import Link from "next/link";
import { profiles } from "@/lib/profiles";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <p className={styles.logo}>Pune Call Girl</p>
          <p className={styles.seo}>
            Premium Pune escort service featuring independent Pune escorts and
            VIP escorts Pune. Book discreet Pune call girls via WhatsApp for
            romantic companionship, girlfriend experience, and luxury hotel dates
            across Pune.
          </p>
          <WhatsAppButton label="WhatsApp Us" variant="ghost" />
        </div>

        <div>
          <p className={styles.heading}>Quick links</p>
          <ul className={styles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#companions">Companions</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.heading}>Popular escorts</p>
          <ul className={styles.links}>
            {profiles.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link href={`/escorts/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.disclaimer}>
        This website is intended for adults 18+ only. All companions are
        independent. Bookings are subject to availability. By using this site you
        agree to our discretion and privacy terms. Content is for informational
        purposes; verify details on WhatsApp before booking.
      </p>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Pune Call Girl — Independent Pune Escorts
      </p>
    </footer>
  );
}
