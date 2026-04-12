export type NavItem = {
  label: string;
  href: string;
};

export type HeroAction = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  catchCopy: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
};

export type FeatureItem = {
  label: string;
  title: string;
  description: string;
};

export type CtaContent = {
  heading: string;
  body: string;
  action: {
    label: string;
    href: string;
  };
};

export const navItems: NavItem[] = [
  { label: "Top", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "Trailer", href: "#cta" },
];

export const siteMeta = {
  shortTitle: "STARLIGHT QUEST",
  fullTitle: "STARLIGHT QUEST Launch Page",
  description:
    "Next.js learning sample: a simple game-style landing page with a small number of sections and easy-to-edit text.",
  copyright: "© 2026 STARLIGHT QUEST",
  rights: "このページは Next.js 講座用の架空ゲームLPサンプルです。",
};

export const hero: HeroContent = {
  eyebrow: "Nintendo-style Game LP Sample",
  title: "STARLIGHT QUEST",
  catchCopy: "はじめての Next.js でも、ページ構成はシンプルに組める。",
  description:
    "赤と白を基調にした、明るくて見やすいゲーム風ランディングページです。テキスト量を減らし、見出しや説明文を各自で差し替えやすい教材用の構成に整理しています。",
  primaryAction: {
    label: "紹介ムービーを見る",
    href: "#cta",
  },
  secondaryAction: {
    label: "特徴を見る",
    href: "#features",
  },
};

export const features: FeatureItem[] = [
  {
    label: "Feature 01",
    title: "見出しを入れ替えやすい",
    description:
      "短いタイトルと1文だけで構成しているので、授業中でも内容をすぐ差し替えられます。",
  },
  {
    label: "Feature 02",
    title: "カードUIを学びやすい",
    description:
      "同じ形の要素を3つ並べるだけにして、JSXの繰り返し表示やCSS Modulesの練習に向けています。",
  },
  {
    label: "Feature 03",
    title: "レイアウトが追いやすい",
    description:
      "ヘッダー、ヒーロー、特徴、CTA、フッターの順に絞り、1ページの骨組みを把握しやすくしています。",
  },
];

export const cta: CtaContent = {
  heading: "最後に1つ、行動ボタンを置く",
  body:
    "LPの締めとして、短い説明とボタンだけを置く最小構成です。ボタン文言やリンク先を変えるだけで、別の教材テーマにも流用できます。",
  action: {
    label: "今すぐチェック",
    href: "#top",
  },
};
