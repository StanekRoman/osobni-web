import { weboveAplikace } from "./services/webove-aplikace";
import type { ServiceDetailData } from "./types";

export const serviceDetails = {
  "webove-aplikace": weboveAplikace,
} satisfies Record<string, ServiceDetailData>;

export type ServiceSlug = keyof typeof serviceDetails;

export function getServiceDetail(slug: string): ServiceDetailData | undefined {
  if (!Object.prototype.hasOwnProperty.call(serviceDetails, slug)) {
    return undefined;
  }

  return serviceDetails[slug as ServiceSlug];
}
