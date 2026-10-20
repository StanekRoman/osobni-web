import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";
import { seoData } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    seoData.home,
    seoData.services,
    seoData.about,
    seoData.contact,
    seoData.inquiry,
    ...Object.values(seoData.serviceDetails),
  ];

  const paths = [...pages.map((page) => page.path), "/ochrana-osobnich-udaju"];

  return paths.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
