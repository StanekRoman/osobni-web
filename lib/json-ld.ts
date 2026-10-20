import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SeoConfig } from "@/lib/seo";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "cs-CZ",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
};

export function createServiceJsonLd(service: SeoConfig) {
  const url = new URL(service.path, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.description,
    url,
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function createServiceBreadcrumbJsonLd(service: SeoConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domů",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Služby",
        item: `${SITE_URL}/sluzby`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: new URL(service.path, SITE_URL).toString(),
      },
    ],
  };
}
