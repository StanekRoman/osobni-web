import type { IconType } from "react-icons";
import { LuArrowUpRight, LuPlus, LuRotateCw, LuZap } from "react-icons/lu";

export interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: IconType;
  iconLabel?: string;
  background: string;
  iconBackground: string;
  borderColor: string;
  dark?: boolean;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "tvorba-webu",
    title: "Tvorba webů",
    description:
      "Moderní a přehledné weby, které profesionálně představí vaše služby a usnadní zákazníkům kontakt.",
    href: "/sluzby/tvorba-webu",
    iconLabel: "W",
    background: "surfaceDark",
    iconBackground: "accent",
    borderColor: "surfaceDark",
    dark: true,
    featured: true,
  },
  {
    id: "webove-aplikace",
    title: "Webové aplikace",
    description:
      "Interní systémy, zákaznické portály a aplikace vytvořené pro konkrétní potřeby vašeho podnikání.",
    href: "/sluzby/webove-aplikace",
    icon: LuArrowUpRight,
    background: "accentSurface",
    iconBackground: "accentLight",
    borderColor: "accentLight",
  },
  {
    id: "redesign-webu",
    title: "Redesign webu",
    description:
      "Proměním zastaralý nebo nepřehledný web v moderní prezentaci, která lépe osloví vaše zákazníky.",
    href: "/sluzby/redesign-webu",
    icon: LuRotateCw,
    background: "background",
    iconBackground: "accentLight",
    borderColor: "border",
  },
  {
    id: "sprava-a-servis",
    title: "Správa a servis",
    description:
      "Aktualizace, opravy, úpravy obsahu a další rozvoj, aby váš web zůstával funkční a aktuální.",
    href: "/sluzby/sprava-a-servis",
    icon: LuPlus,
    background: "surfacePrimary",
    iconBackground: "#CFFAFE",
    borderColor: "border",
  },
  {
    id: "automatizace-a-nastroje",
    title: "Automatizace a nástroje",
    description:
      "Propojení služeb a automatizace opakovaných úkolů, které vám ušetří čas při každodenní práci.",
    href: "/sluzby/automatizace-a-nastroje",
    icon: LuZap,
    background: "accentSurface",
    iconBackground: "accentLight",
    borderColor: "accentLight",
  },
];
