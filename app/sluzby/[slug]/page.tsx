import { notFound } from "next/navigation";

import ServiceHero from "./_components/hero/ServiceHero";
import { getServiceDetail, serviceDetails } from "./service-details";
import ServiceApproach from "./_components/approach/ServiceApproach";
import ServiceBenefits from "./_components/benefits/ServiceBenefits";

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
    </main>
  );
}
