import type { FeatureItem } from "@/app/data/lpContent";

import styles from "./FeatureSection.module.css";

type FeatureSectionProps = {
  features: FeatureItem[];
};

export function FeatureSection({ features }: FeatureSectionProps) {
  return (
    <section className="section" id="features">
      <div className="container sectionInner">
        <p className="sectionEyebrow">Features</p>
        <h2 className="sectionTitle">シンプルな3つの特徴</h2>
        <p className="sectionLead">
          文章量を絞ったカードを並べるだけで、LPらしい構成を作れるようにしています。
        </p>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.card} key={feature.label}>
              <p className={styles.label}>{feature.label}</p>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
