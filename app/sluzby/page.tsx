import ServicesCTA from "./_components/cta/ServicesCTA";
import ServicesHero from "./_components/hero/ServicesHero";
import ServicesProcess from "./_components/process/ServicesProcess";
import ServicesBento from "./_components/services/ServicesBento";
import { createMetadata } from "@/lib/seo";
import { seoData } from "@/lib/seo-data";

export const metadata = createMetadata(seoData.services);

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesBento />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}
