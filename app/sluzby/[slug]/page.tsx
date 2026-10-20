import { notFound } from "next/navigation";

import type { Metadata } from "next";
import ServiceApproach from "./_components/approach/ServiceApproach";
import ServiceBenefits from "./_components/benefits/ServiceBenefits";
import ServiceCta from "./_components/cta/ServiceCta";
import ServiceFaq from "./_components/faq/ServiceFaq";
import ServiceHero from "./_components/hero/ServiceHero";
import ServicePricing from "./_components/pricing/ServicePricing";
import ServiceProcess from "./_components/process/ServiceProcess";
import { getServiceDetail, serviceDetails } from "./service-details";

import { createMetadata } from "@/lib/seo";
import { seoData } from "@/lib/seo-data";
import type { ServiceSlug } from "./service-details";

import JsonLd from "@/components/shared/JsonLd";
import {
  createServiceBreadcrumbJsonLd,
  createServiceJsonLd,
} from "@/lib/json-ld";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

  return createMetadata(seoData.serviceDetails[slug as ServiceSlug]);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }
  const seo = seoData.serviceDetails[slug as ServiceSlug];

  const jsonLd = [createServiceJsonLd(seo), createServiceBreadcrumbJsonLd(seo)];

  return (
    <main>
      <JsonLd data={jsonLd} />
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
