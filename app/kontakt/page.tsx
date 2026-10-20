import { createMetadata } from "@/lib/seo";
import { seoData } from "@/lib/seo-data";
import ContactBusinessInfo from "./_components/business-info/ContactBussinessInfo";
import ContactHero from "./_components/hero/ContactHero";
import ContactInquiry from "./_components/inquiry/ContactInquiry";

export const metadata = createMetadata(seoData.contact);

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactBusinessInfo />
      <ContactInquiry />
    </main>
  );
}
