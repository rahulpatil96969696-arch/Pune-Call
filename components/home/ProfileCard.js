import Image from "next/image";
import Link from "next/link";
import styles from "./ProfileCard.module.css";

export default function ProfileCard({ profile, index = 0 }) {
  return (
    <li
      className={styles.card}
      style={{ animationDelay: `${index * 55}ms` }}
    >
      <Link href={`/escorts/${profile.slug}`} className={styles.link}>
        <div className={styles.imageWrap}>
          <div className={styles.overlay} />
          <Image
            src={profile.images.cover}
            alt={`${profile.name} — Pune call girl`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            className={styles.image}
            priority={index < 4}
          />
          {profile.badge && (
            <span className={styles.badge}>{profile.badge}</span>
          )}
        </div>
        <div className={styles.body}>
          <h3 className={styles.name}>{profile.name}</h3>
          <p className={styles.meta}>
            {profile.age} · {profile.location.split(",")[0]}
          </p>
          <p className={styles.tagline}>{profile.tagline}</p>
          <ul className={styles.tags}>
            {profile.tags.slice(0, 3).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}
