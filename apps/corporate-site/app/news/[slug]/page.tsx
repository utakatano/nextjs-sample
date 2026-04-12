import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { newsPosts } from "@/app/news/data";
import sharedStyles from "@/app/shared-page.module.css";
import { Card } from "@/components/ui/Card";

type NewsDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: NewsDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return { title: "News" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const post = newsPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <section className={sharedStyles.detailHero}>
        <div className="container">
          <p className={sharedStyles.cardMeta}>{post.date}</p>
          <h1 className={sharedStyles.detailTitle}>{post.title}</h1>
          <p className={sharedStyles.pageKicker}>{post.excerpt}</p>
        </div>
      </section>
      <section className={sharedStyles.section}>
        <div className={`container ${sharedStyles.detailStack}`}>
          <Card>
            <div className={sharedStyles.cardBody}>
              <h2 className={sharedStyles.cardTitle}>ポイント</h2>
              <ul className={sharedStyles.simpleList}>
                {post.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Card>
          <div className={sharedStyles.detailLinks}>
            <Link className={sharedStyles.textLink} href="/news">
              ニュース一覧へ戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
