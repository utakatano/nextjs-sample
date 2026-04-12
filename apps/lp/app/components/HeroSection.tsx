import type { HeroContent } from "@/app/data/lpContent";

import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copyBlock}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.catchCopy}>{hero.catchCopy}</p>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </a>
            {hero.secondaryAction ? (
              <a className={styles.secondaryAction} href={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </a>
            ) : null}
          </div>
        </div>

        <div className={styles.visualWrap}>
          <div className={styles.visual}>
            <div className={styles.consoleCard}>
              <div className={styles.consoleTop}>
                <span className={styles.badge}>GAME LP</span>
                <span className={styles.level}>LEVEL 01</span>
              </div>
              <div className={styles.consoleScreen}>
                <div className={styles.placeholder}>
                  <span className={styles.placeholderLabel}>Key Visual Area</span>
                  <strong>画像やメインビジュアルを置く想定</strong>
                  <p>授業ではこの領域を固定色のまま使うか、画像に差し替えて練習できます。</p>
                </div>
              </div>
              <div className={styles.consoleBottom}>
                <span className={styles.dot} />
                <span className={styles.pill}>Simple Layout Sample</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
