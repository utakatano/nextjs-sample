import { CtaSection } from "@/app/components/CtaSection";
import { FeatureSection } from "@/app/components/FeatureSection";
import { HeroSection } from "@/app/components/HeroSection";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { cta, features, hero, navItems, siteMeta } from "@/app/data/lpContent";

export default function LpHomePage() {
  return (
    <div className="page-shell">
      <SiteHeader navItems={navItems} title={siteMeta.shortTitle} />
      <main>
        <HeroSection hero={hero} />
        <FeatureSection features={features} />
        <CtaSection cta={cta} />
      </main>
      <SiteFooter copyright={siteMeta.copyright} rights={siteMeta.rights} />
    </div>
  );
}
