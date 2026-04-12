import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { businessItems } from "@/app/business/data";
import sharedStyles from "@/app/shared-page.module.css";
import { Card } from "@/components/ui/Card";

type BusinessDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BusinessDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const item = businessItems.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: "Business" };
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function BusinessDetailPage({ params }: BusinessDetailProps) {
  const { slug } = await params;
  const item = businessItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div>
      <section className={sharedStyles.detailHero}>
        <div className="container">
          <span className={sharedStyles.eyebrow}>{item.category}</span>
          <h1 className={sharedStyles.detailTitle}>{item.title}</h1>
          <p className={sharedStyles.pageKicker}>{item.summary}</p>
        </div>
      </section>
      <section className={sharedStyles.section}>
        <div className={`container ${sharedStyles.detailStack}`}>
          <Card>
            <div className={sharedStyles.cardBody}>
              <h2 className={sharedStyles.cardTitle}>ポイント</h2>
              <ul className={sharedStyles.simpleList}>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Card>
          <div className={sharedStyles.detailLinks}>
            <Link className={sharedStyles.textLink} href="/business">
              事業一覧へ戻る
            </Link>
            <Link className={sharedStyles.textLink} href="/careers">
              採用ページを見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
