import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { careerRoles } from "@/app/careers/data";
import pageStyles from "@/app/page.module.css";
import sharedStyles from "@/app/shared-page.module.css";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type CareerDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CareerDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const role = careerRoles.find((entry) => entry.slug === slug);

  if (!role) {
    return { title: "Careers" };
  }

  return {
    title: role.title,
    description: role.summary,
  };
}

export default async function CareerDetailPage({ params }: CareerDetailProps) {
  const { slug } = await params;
  const role = careerRoles.find((entry) => entry.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <div>
      <section className={sharedStyles.detailHero}>
        <div className="container">
          <p className={sharedStyles.cardLabel}>{role.team}</p>
          <h1 className={sharedStyles.detailTitle}>{role.title}</h1>
          <p className={sharedStyles.pageKicker}>{role.summary}</p>
        </div>
      </section>
      <section className={sharedStyles.section}>
        <div className={`container ${sharedStyles.detailStack}`}>
            <Card>
              <div className={sharedStyles.cardBody}>
                <h2 className={sharedStyles.cardTitle}>ポイント</h2>
                <ul className={sharedStyles.simpleList}>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Card>
          <div className={pageStyles.heroActions}>
            <Button href="mailto:jobs@axisshift.jp">応募する</Button>
            <Button href="mailto:hello@axisshift.jp" variant="ghost">
              カジュアル面談
            </Button>
            <Link className={sharedStyles.textLink} href="/careers">
              募集職種一覧へ戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
