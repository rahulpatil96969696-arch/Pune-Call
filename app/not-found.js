import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page not found — Pune Call Girl",
};

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1>404</h1>
      <p>This profile or page could not be found.</p>
      <div className={styles.actions}>
        <Link href="/" className={styles.link}>
          Back to companions
        </Link>
        <WhatsAppButton label="Book on WhatsApp" variant="secondary" />
      </div>
    </main>
  );
}
