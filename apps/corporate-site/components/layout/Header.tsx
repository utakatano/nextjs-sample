import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/business", label: "Business" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href="/">
          <span className={styles.mark}>AX</span>
          <span>AXIS SHIFT</span>
        </Link>
        <nav className={styles.nav} aria-label="Global">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
