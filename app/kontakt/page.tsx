import ContactHero from "./_components/hero/ContactHero";
import ContactBusinessInfo from "./_components/business-info/ContactBussinessInfo";
import ContactInquiry from "./_components/inquiry/ContactInquiry";
import { createMetadata } from "@/lib/seo";
import { seoData } from "@/lib/seo-data";

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
