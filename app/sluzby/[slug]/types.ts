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

export interface ServiceDetailData {
  hero: ServiceHeroData;
}
