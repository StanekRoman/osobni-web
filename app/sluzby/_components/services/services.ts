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
    description: "Nový web od struktury a obsahu po technickou realizaci",
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
    description: "Když prezentace nestačí a řešení potřebuje vlastní logiku",
    href: "/sluzby/webove-aplikace",
    icon: LuArrowUpRight,
    background: "accentSurface",
    iconBackground: "accentLight",
    borderColor: "accentLight",
  },
  {
    id: "redesigny",
    title: "Redesigny",
    description: "Nový směr pro web, který už neodpovídá dnešnímu podnikání",
    href: "/sluzby/redesigny",
    icon: LuRotateCw,
    background: "background",
    iconBackground: "accentLight",
    borderColor: "border",
  },
  {
    id: "sprava-a-servis",
    title: "Správa a servis",
    description: "Průběžné úpravy, opravy a další rozvoj",
    href: "/sluzby/sprava-a-servis",
    icon: LuPlus,
    background: "surfacePrimary",
    iconBackground: "#CFFAFE",
    borderColor: "border",
  },
  {
    id: "automatizace-a-nastroje",
    title: "Automatizace a nástroje",
    description: "Méně ruční opakované práce díky jednoduchému nástroji",
    href: "/sluzby/automatizace-a-nastroje",
    icon: LuZap,
    background: "accentSurface",
    iconBackground: "accentLight",
    borderColor: "accentLight",
  },
];
