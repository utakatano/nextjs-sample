import type { Metadata } from "next";
import type { ReactNode } from "react";

import { siteMeta } from "@/app/data/lpContent";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteMeta.fullTitle,
    template: `%s | ${siteMeta.fullTitle}`,
  },
  description: siteMeta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
