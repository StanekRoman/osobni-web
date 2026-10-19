import type { Metadata } from "next";

import PrivacyPolicy from "./_components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Roman Staněk",
  description:
    "Informace o zpracování osobních údajů při používání webu a odesílání nezávazných poptávek.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}
