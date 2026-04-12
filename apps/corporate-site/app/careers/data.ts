import type { CareerRole } from "@/types/careers";

export const careerRoles: CareerRole[] = [
  {
    slug: "product-designer",
    title: "Product Designer",
    team: "Design",
    summary: "事業の内容を分かりやすい画面に整理するポジションです。",
    points: [
      "情報の見せ方を整える",
      "体験の流れを考える",
      "画面づくりが好きな人向け",
    ],
  },
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    team: "Product Engineering",
    summary: "Next.js で見やすく更新しやすい画面をつくるポジションです。",
    points: [
      "ページやカードを実装する",
      "共通 UI を整える",
      "今回の講座テーマに近い職種例",
    ],
  },
  {
    slug: "enterprise-ae",
    title: "Enterprise Account Executive",
    team: "Business",
    summary: "顧客課題を聞きながら、導入提案を進めるポジションです。",
    points: [
      "課題を整理して提案する",
      "複数の関係者と話す",
      "ビジネス職の例として差し替えやすい",
    ],
  },
  {
    slug: "customer-success",
    title: "Customer Success",
    team: "Success",
    summary: "導入後の活用を支え、使い続けてもらうポジションです。",
    points: [
      "導入後のサポートを行う",
      "継続利用につながる改善を考える",
      "採用ページのカード追加練習に向く",
    ],
  },
];
