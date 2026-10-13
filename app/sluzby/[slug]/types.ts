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

export interface ServiceDetailData {
  hero: ServiceHeroData;
  approach: ServiceApproachData;
}
