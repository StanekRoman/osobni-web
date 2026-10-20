import { createMetadata } from "@/lib/seo";
import { seoData } from "@/lib/seo-data";
import AboutApproach from "./_components/approach/AboutApproach";
import AboutCta from "./_components/cta/AboutCta";
import AboutHero from "./_components/hero/AboutHero";

export const metadata = createMetadata(seoData.about);

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutApproach />
      <AboutCta />
    </main>
  );
}
