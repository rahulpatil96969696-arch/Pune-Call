import WhatsAppButton from "./WhatsAppButton";
import styles from "./StickyMobileCTA.module.css";

export default function StickyMobileCTA() {
  return (
    <div className={styles.bar}>
      <WhatsAppButton label="Book Now on WhatsApp" className={styles.btn} />
    </div>
  );
}
