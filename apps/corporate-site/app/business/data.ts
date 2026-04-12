import type { BusinessItem } from "@/types/business";

export const businessItems: BusinessItem[] = [
  {
    slug: "workforce-studio",
    title: "Workforce Studio",
    category: "HR Platform",
    summary: "人事まわりの情報を1か所にまとめる、組織運営向けサービスです。",
    points: [
      "配置や育成の情報をまとめて見られる",
      "面談メモや評価運用を整理しやすい",
      "人事ページ追加の練習題材にしやすい",
    ],
  },
  {
    slug: "trust-ops-cloud",
    title: "Trust Ops Cloud",
    category: "Compliance SaaS",
    summary: "管理部門の運用を整える、シンプルな統制支援サービスです。",
    points: [
      "ルールやタスクの置き場をまとめやすい",
      "担当と期限を見える形にしやすい",
      "一覧カードの増減を試しやすい",
    ],
  },
  {
    slug: "care-spectrum",
    title: "Care Spectrum",
    category: "Healthcare Workflow",
    summary: "地域ケアの連携を見やすくする、現場向けサポートサービスです。",
    points: [
      "記録や共有の流れをそろえやすい",
      "関係者どうしの連携をイメージしやすい",
      "別テーマの事業カードへ差し替えやすい",
    ],
  },
];
