import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import styles from "./layout.module.css";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AXIS SHIFT",
    template: "%s | AXIS SHIFT",
  },
  description: "Next.js 初学者向けに整理した、シンプルなコーポレートサイト教材です。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.siteShell}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
