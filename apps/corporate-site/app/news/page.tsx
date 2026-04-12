import type { Metadata } from "next";

import { newsPosts } from "@/app/news/data";
import sharedStyles from "@/app/shared-page.module.css";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "News",
  description: "シンプルなニュース一覧ページの教材サンプルです。",
};

const sortedPosts = [...newsPosts].sort((a, b) => b.date.localeCompare(a.date));

export default function NewsPage() {
  return (
    <div>
      <section className={sharedStyles.pageHero}>
        <div className="container">
          <span className={sharedStyles.eyebrow}>News</span>
          <h1 className={sharedStyles.detailTitle}>ニュースページも、日付付きカード一覧だけに絞っています。</h1>
          <p className={sharedStyles.pageKicker}>
            フィルターや注目記事の演出を減らし、一覧表示と詳細遷移の基本だけを追える教材にしています。
          </p>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={`container ${sharedStyles.stack}`}>
          <div className={sharedStyles.grid3}>
            {sortedPosts.map((post) => (
              <Card href={`/news/${post.slug}`} key={post.slug}>
                <div className={sharedStyles.cardBody}>
                  <p className={sharedStyles.cardMeta}>{post.date}</p>
                  <h2 className={sharedStyles.cardTitle}>{post.title}</h2>
                  <p className={sharedStyles.cardCopy}>{post.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
