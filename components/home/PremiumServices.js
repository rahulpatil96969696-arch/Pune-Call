import styles from "./PremiumServices.module.css";

const services = [
  {
    title: "VIP Escorts Pune",
    desc: "Elite companions for five-star hotels, black-tie events, and executive travel.",
  },
  {
    title: "Girlfriend Experience",
    desc: "Warm, affectionate dates that feel natural — conversation, chemistry, and closeness.",
  },
  {
    title: "Romantic Companionship",
    desc: "Dinner dates, lounge evenings, and intimate nights tailored to your mood.",
  },
  {
    title: "Discreet Hotel Visits",
    desc: "Fast WhatsApp booking with privacy across Koregaon Park, Baner, and Hinjewadi.",
  },
];

export default function PremiumServices() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <p className={styles.kicker}>What we offer</p>
        <h2 className={styles.title}>Premium Pune Escort Service</h2>
      </div>
      <ul className={styles.grid}>
        {services.map((s) => (
          <li key={s.title} className={styles.card}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
