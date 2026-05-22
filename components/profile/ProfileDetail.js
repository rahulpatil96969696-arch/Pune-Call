import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { profileWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./ProfileDetail.module.css";

export default function ProfileDetail({ profile }) {
  return (
    <aside className={styles.info}>
      {profile.badge && (
        <span className={styles.badge}>{profile.badge}</span>
      )}
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.meta}>
        {profile.age} years · {profile.location}
      </p>
      <p className={styles.availability}>{profile.availability}</p>
      <p className={styles.tagline}>{profile.tagline}</p>

      <ul className={styles.tags}>
        {profile.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <WhatsAppButton
        href={profileWhatsAppUrl(profile.name)}
        label="Book Now on WhatsApp"
        className={styles.waBtn}
      />

      <section className={styles.block}>
        <h2>About</h2>
        <p>{profile.about}</p>
      </section>

      <section className={styles.block}>
        <h2>Services</h2>
        <ul>
          {profile.services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className={styles.block}>
        <h2>Girlfriend Experience</h2>
        <p>{profile.girlfriendExperience}</p>
      </section>

      <section className={styles.block}>
        <h2>Romantic Companionship</h2>
        <p>{profile.romanticCompanionship}</p>
      </section>
    </aside>
  );
}
