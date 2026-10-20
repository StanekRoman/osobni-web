import HomeAutomation from "@/app/components/automation/HomeAutomation";
import HomeCTA from "@/app/components/cta/HomeCTA";
import HomeHero from "@/app/components/hero/HomeHero";
import HomeOutcomes from "@/app/components/outcomes/HomeOutcomes";
import HomeProcess from "@/app/components/process/HomeProcess";
import HomeServices from "@/app/components/services/HomeServices";
import { createMetadata } from "@/lib/seo";
import { seoData } from "@/lib/seo-data";
import JsonLd from "@/components/shared/JsonLd";
import { personJsonLd, websiteJsonLd } from "@/lib/json-ld";

export const metadata = createMetadata(seoData.home);

export default function Home() {
  return (
    <main>
      <JsonLd data={[personJsonLd, websiteJsonLd]} />
      <HomeHero />
      <HomeOutcomes />
      <HomeServices />
      <HomeCTA />
      <HomeProcess />
      <HomeAutomation />
    </main>
  );
}
