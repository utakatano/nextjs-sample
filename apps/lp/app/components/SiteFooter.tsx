import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  copyright: string;
  rights: string;
};

export function SiteFooter({ copyright, rights }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>STARLIGHT QUEST</p>
        <p className={styles.text}>{copyright}</p>
        <p className={styles.text}>{rights}</p>
      </div>
    </footer>
  );
}
