import { notFound } from "next/navigation";

import ServiceHero from "./_components/hero/ServiceHero";
import { getServiceDetail, serviceDetails } from "./service-details";
import ServiceApproach from "./_components/approach/ServiceApproach";
import ServiceBenefits from "./_components/benefits/ServiceBenefits";
import ServicePricing from "./_components/pricing/ServicePricing";
import ServiceProcess from "./_components/process/ServiceProcess";
import ServiceFaq from "./_components/faq/ServiceFaq";
import ServiceCta from "./_components/cta/ServiceCta";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceHero {...service.hero} />
      <ServiceApproach {...service.approach} />
      <ServiceBenefits {...service.benefits} />
      <ServicePricing {...service.pricing} />
      <ServiceProcess {...service.process} />
      <ServiceFaq {...service.faq} />
      <ServiceCta {...service.cta} />
    </main>
  );
}
