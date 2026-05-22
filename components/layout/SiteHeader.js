import Link from "next/link";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Pune <span>Call Girl</span>
      </Link>
      <nav className={styles.nav} aria-label="Main">
        <Link href="/#companions">Companions</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
