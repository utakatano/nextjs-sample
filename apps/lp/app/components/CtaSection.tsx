import type { CtaContent } from "@/app/data/lpContent";

import styles from "./CtaSection.module.css";

type CtaSectionProps = {
  cta: CtaContent;
};

export function CtaSection({ cta }: CtaSectionProps) {
  return (
    <section className="section" id="cta">
      <div className="container sectionInner">
        <div className={styles.box}>
          <div>
            <p className="sectionEyebrow">Trailer</p>
            <h2 className={styles.title}>{cta.heading}</h2>
            <p className={styles.body}>{cta.body}</p>
          </div>
          <a className={styles.action} href={cta.action.href}>
            {cta.action.label}
          </a>
        </div>
      </div>
    </section>
  );
}
