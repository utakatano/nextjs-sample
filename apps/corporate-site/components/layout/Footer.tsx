import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>AXIS SHIFT は Next.js 講座用の架空コーポレートサイトです。</p>
        <p className={styles.meta}>© 2026 AXIS SHIFT</p>
      </div>
    </footer>
  );
}
