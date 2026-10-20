import PrivacyPolicy from "./_components/PrivacyPolicy";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ochrana osobních údajů",
  description:
    "Informace o zpracování osobních údajů při používání webu a odesílání nezávazných poptávek.",
  path: "/ochrana-osobnich-udaju",
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
