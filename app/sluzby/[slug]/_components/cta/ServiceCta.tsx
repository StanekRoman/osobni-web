import CTASection from "@/components/shared/CTASection";

import type { ServiceCtaData } from "../../types";

export default function ServiceCta(props: ServiceCtaData) {
  return <CTASection {...props} />;
}
