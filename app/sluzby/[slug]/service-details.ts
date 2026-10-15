import { automatizaceANastroje } from "./services/automatizace-a-nastroje";
import { doplnkoveSluzby } from "./services/doplnkove-sluzby";
import { redesign } from "./services/redesign";
import { spravaAServis } from "./services/sprava-a-servis";
import { tvorbaWebu } from "./services/tvorba-webu";
import { weboveAplikace } from "./services/webove-aplikace";
import type { ServiceDetailData } from "./types";

export const serviceDetails = {
  "tvorba-webu": tvorbaWebu,
  "webove-aplikace": weboveAplikace,
  "redesign-webu": redesign,
  "sprava-a-servis": spravaAServis,
  "automatizace-a-nastroje": automatizaceANastroje,
  "doplnkove-sluzby": doplnkoveSluzby,
} satisfies Record<string, ServiceDetailData>;

export type ServiceSlug = keyof typeof serviceDetails;

export function getServiceDetail(slug: string): ServiceDetailData | undefined {
  if (!Object.prototype.hasOwnProperty.call(serviceDetails, slug)) {
    return undefined;
  }

  return serviceDetails[slug as ServiceSlug];
}
