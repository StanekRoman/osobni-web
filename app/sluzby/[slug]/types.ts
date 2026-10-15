import type { IconType } from "react-icons";

export interface ServiceHeroStep {
  title: string;
  description: string;
}

export interface ServiceHeroData {
  content: {
    eyebrow: string;
    heading: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
  };
  visual: {
    title: string;
    steps: readonly [ServiceHeroStep, ServiceHeroStep, ServiceHeroStep];
  };
}

export interface ServiceApproachStep {
  title: string;
  description: string;
  icon: IconType;
}
export interface ServiceApproachData {
  content: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  visual: {
    steps: readonly ServiceApproachStep[];
  };
}

export interface ServiceBenefitItem {
  title: string;
  description: string;
  icon: IconType;
}

export interface ServiceBenefitsData {
  content: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  visual: {
    items: readonly ServiceBenefitItem[];
  };
}
export interface ServicePricingFactor {
  title: string;
  description: string;
}

export interface ServicePricingData {
  content: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  visual: {
    factors: readonly ServicePricingFactor[];
  };
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceProcessData {
  content: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  visual: {
    steps: readonly ServiceProcessStep[];
  };
}
export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceFaqData {
  content: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  items: readonly ServiceFaqItem[];
}
export interface ServiceCtaData {
  eyebrow: string;
  heading: string;
  description: string;
}
export interface ServiceDetailData {
  hero: ServiceHeroData;
  approach: ServiceApproachData;
  benefits: ServiceBenefitsData;
  pricing: ServicePricingData;
  process: ServiceProcessData;
  faq: ServiceFaqData;
  cta: ServiceCtaData;
}
