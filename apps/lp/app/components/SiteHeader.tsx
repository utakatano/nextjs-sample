import Link from "next/link";

import type { NavItem } from "@/app/data/lpContent";

import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  navItems: NavItem[];
  title: string;
};

export function SiteHeader({ navItems, title }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href="#top">
          <span className={styles.brandBadge}>N</span>
          <span>{title}</span>
        </Link>
        <nav aria-label="ページ内ナビゲーション" className={styles.nav}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
