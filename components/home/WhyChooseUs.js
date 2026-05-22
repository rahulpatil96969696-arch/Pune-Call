import styles from "./WhyChooseUs.module.css";

const points = [
  {
    title: "Independent Pune escorts",
    text: "Handpicked profiles — no agencies, direct WhatsApp booking.",
  },
  {
    title: "Privacy first",
    text: "Discreet communication and confidential meet arrangements.",
  },
  {
    title: "Prime Pune locations",
    text: "Koregaon Park, Viman Nagar, Hinjewadi, Baner, and more.",
  },
  {
    title: "Premium experience",
    text: "Luxury-minded companions who match five-star expectations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.header}>
        <p className={styles.kicker}>Why choose us</p>
        <h2 className={styles.title}>The Pune Call Girl Difference</h2>
      </div>
      <ul className={styles.list}>
        {points.map((p) => (
          <li key={p.title}>
            <span className={styles.num} aria-hidden="true" />
            <div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
