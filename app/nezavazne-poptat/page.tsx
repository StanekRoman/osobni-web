import { createMetadata } from "@/lib/seo";
import { seoData } from "@/lib/seo-data";
import { InquiryForm } from "./_components/InquiryForm";
import { InquiryHero } from "./_components/InquiryHero";

export const metadata = createMetadata(seoData.inquiry);

export default function InquiryPage() {
  return (
    <main>
      <InquiryHero />
      <InquiryForm />
    </main>
  );
}
