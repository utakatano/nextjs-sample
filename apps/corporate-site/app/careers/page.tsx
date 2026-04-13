import type { Metadata } from "next";

import { careerRoles } from "@/app/careers/data";
import pageStyles from "@/app/page.module.css";
import sharedStyles from "@/app/shared-page.module.css";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Careers",
  description: "シンプルな採用一覧ページの教材サンプルです。",
};

export default function CareersPage() {
  return (
    <div>
      <section className={sharedStyles.pageHero}>
        <div className="container">
          <span className={sharedStyles.eyebrow}>Careers</span>
          <h1 className={sharedStyles.detailTitle}>採用ページも、職種カードを追加しやすい形にしています。</h1>
          <p className={sharedStyles.pageKicker}>
            チーム名、職種名、短い説明だけを見せる構成にして、受講者が新しい募集職種を追加しやすくしています。
          </p>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={`container ${sharedStyles.stack}`}>
          <div className={sharedStyles.grid2}>
            {careerRoles.map((role) => (
              <Card key={role.slug}>
                <div className={sharedStyles.cardBody}>
                  <p className={sharedStyles.cardLabel}>{role.team}</p>
                  <h2 className={sharedStyles.cardTitle}>{role.title}</h2>
                  <p className={sharedStyles.cardCopy}>{role.summary}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionSubtle}`}>
        <div className={`container ${sharedStyles.stack} ${pageStyles.ctaPanel}`}>
          <div className={sharedStyles.sectionCopy}>
            <p className={sharedStyles.eyebrow}>Contact</p>
            <h2 className={sharedStyles.sectionTitle}>最後はボタンだけのシンプルな導線です。</h2>
            <p className={sharedStyles.sectionDescription}>
              ここもテキストを増やさず、CTA の置き方だけを確認できるようにしています。
            </p>
          </div>
          <div className={pageStyles.heroActions}>
            <Button href="mailto:jobs@axisshift.jp">応募する</Button>
            <Button href="mailto:hello@axisshift.jp" variant="ghost">
              カジュアル面談を申し込む
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
