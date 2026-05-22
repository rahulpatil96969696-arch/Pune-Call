import WhatsAppButton from "@/components/ui/WhatsAppButton";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.box}>
        <div className={styles.glow} aria-hidden="true" />
        <p className={styles.kicker}>Ready to book?</p>
        <h2 className={styles.title}>Connect on WhatsApp — Available 24/7</h2>
        <p className={styles.text}>
          Message us for instant confirmation, rates, and availability for
          independent Pune escorts and VIP escorts Pune.
        </p>
        <WhatsAppButton label="Book Now on WhatsApp" />
      </div>
    </section>
  );
}
