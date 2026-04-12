import type { Metadata } from "next";

import { businessItems } from "@/app/business/data";
import sharedStyles from "@/app/shared-page.module.css";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Business",
  description: "シンプルな事業一覧ページの教材サンプルです。",
};

export default function BusinessPage() {
  return (
    <div>
      <section className={sharedStyles.pageHero}>
        <div className="container">
          <span className={sharedStyles.eyebrow}>Business</span>
          <h1 className={sharedStyles.detailTitle}>事業ページは、カード一覧を中心に学べる形です。</h1>
          <p className={sharedStyles.pageKicker}>
            それぞれの事業を短い説明で並べ、初学者でもどの部分を編集すれば変わるかを追いやすくしています。
          </p>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={`container ${sharedStyles.stack}`}>
          <div className={sharedStyles.grid3}>
            {businessItems.map((item) => (
              <Card href={`/business/${item.slug}`} key={item.slug}>
                <div className={sharedStyles.cardBody}>
                  <p className={sharedStyles.cardLabel}>{item.category}</p>
                  <h2 className={sharedStyles.cardTitle}>{item.title}</h2>
                  <p className={sharedStyles.cardCopy}>{item.summary}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
