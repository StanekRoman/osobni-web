export const SITE_URL = "https://stanek-roman.cz";

export const SITE_NAME = "Roman Staněk";

export const SITE_DESCRIPTION =
  "Tvořím moderní webové stránky, webové aplikace a automatizace. Pomáhám firmám a podnikatelům získat profesionální web a zjednodušit každodenní práci.";

import type { Metadata } from "next";

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
}

export function createMetadata({
  title,
  description,
  path,
}: SeoConfig): Metadata {
  return {
    title,
    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      type: "website",
      locale: "cs_CZ",
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
    },

    twitter: {
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}
