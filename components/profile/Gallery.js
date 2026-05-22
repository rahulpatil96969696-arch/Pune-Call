"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ images, name }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainWrap}>
        <Image
          key={active}
          src={images[active]}
          alt={`${name} — photo ${active + 1}`}
          fill
          sizes="(max-width: 820px) 100vw, 55vw"
          className={styles.main}
          priority
        />
        <div className={styles.mainOverlay} aria-hidden="true" />
      </div>

      <div className={styles.thumbs} role="tablist" aria-label="Gallery">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`View image ${i + 1}`}
            className={`${styles.thumbBtn} ${
              i === active ? styles.thumbActive : ""
            }`}
            onClick={() => setActive(i)}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="80px"
              className={styles.thumbImg}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
