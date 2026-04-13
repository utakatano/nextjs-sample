import { businessItems } from "@/app/business/data";
import { careerRoles } from "@/app/careers/data";
import { newsPosts } from "@/app/news/data";
import pageStyles from "@/app/page.module.css";
import sharedStyles from "@/app/shared-page.module.css";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  const latestNews = [...newsPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div>
      <section className={pageStyles.hero}>
        <div className={`container ${pageStyles.heroGrid}`}>
          <div className={pageStyles.heroCopy}>
            <p className={sharedStyles.eyebrow}>Corporate Site Sample</p>
            <h1 className={pageStyles.heroTitle}>はじめてでも追いやすい、シンプルな企業サイト。</h1>
            <p className={pageStyles.heroDescription}>
              トップ、事業、ニュース、採用の4ページだけに絞り、見出しやカードを差し替えやすい教材用構成にしています。
            </p>
            <div className={pageStyles.heroActions}>
              <Button href="/business">事業を見る</Button>
              <Button href="/careers" variant="ghost">
                採用を見る
              </Button>
            </div>
          </div>
          <div className={pageStyles.heroPanel}>
            <p className={pageStyles.heroPanelLabel}>Page Structure</p>
            <ul className={sharedStyles.simpleList}>
              <li>Home: 全体像を短く紹介</li>
              <li>Business: 事業カードを並べる</li>
              <li>News: 更新情報を一覧化する</li>
              <li>Careers: 募集職種を見せる</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={`container ${sharedStyles.stack}`}>
          <div className={sharedStyles.sectionCopy}>
            <p className={sharedStyles.eyebrow}>Business</p>
            <h2 className={sharedStyles.sectionTitle}>事業は短いカード3枚に整理しています。</h2>
            <p className={sharedStyles.sectionDescription}>
              長い説明を減らし、タイトルと1文だけを差し替えればページ全体を変えられる形にしています。
            </p>
          </div>
          <div className={sharedStyles.grid3}>
            {businessItems.map((item) => (
              <Card key={item.slug}>
                <div className={sharedStyles.cardBody}>
                  <p className={sharedStyles.cardLabel}>{item.category}</p>
                  <h3 className={sharedStyles.cardTitle}>{item.title}</h3>
                  <p className={sharedStyles.cardCopy}>{item.summary}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${sharedStyles.sectionSubtle}`}>
        <div className={`container ${sharedStyles.stack}`}>
          <div className={sharedStyles.sectionCopy}>
            <p className={sharedStyles.eyebrow}>News</p>
            <h2 className={sharedStyles.sectionTitle}>更新情報も最小限の一覧だけにしています。</h2>
            <p className={sharedStyles.sectionDescription}>
              カテゴリや本文の情報量を減らし、まずは日付付きカード一覧の形を追いやすくしています。
            </p>
          </div>
          <div className={sharedStyles.grid3}>
            {latestNews.map((post) => (
              <Card key={post.slug}>
                <div className={sharedStyles.cardBody}>
                  <p className={sharedStyles.cardMeta}>{post.date}</p>
                  <h3 className={sharedStyles.cardTitle}>{post.title}</h3>
                  <p className={sharedStyles.cardCopy}>{post.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={`container ${sharedStyles.stack} ${pageStyles.ctaPanel}`}>
          <div className={sharedStyles.sectionCopy}>
            <p className={sharedStyles.eyebrow}>Careers</p>
            <h2 className={sharedStyles.sectionTitle}>募集職種も追加しやすいカード構成です。</h2>
            <p className={sharedStyles.sectionDescription}>
              まずは2つだけ見せて、授業中に新しい職種カードを自分で増やしやすい状態にしています。
            </p>
          </div>
          <div className={sharedStyles.grid2}>
            {careerRoles.slice(0, 2).map((role) => (
              <Card key={role.slug}>
                <div className={sharedStyles.cardBody}>
                  <p className={sharedStyles.cardLabel}>{role.team}</p>
                  <h3 className={sharedStyles.cardTitle}>{role.title}</h3>
                  <p className={sharedStyles.cardCopy}>{role.summary}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className={pageStyles.heroActions}>
            <Button href="/careers">募集職種を見る</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
