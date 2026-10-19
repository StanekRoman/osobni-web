export interface ProcessStep {
  eyebrow: string;
  title: string;
  description: string;
  background: string;
  borderColor: string;
  progressColor: string;
  rotation: string;
  offset: string;
  tabletLeft: string;
  tabletTop: string;
  zIndex: number;
}

export const processSteps: ProcessStep[] = [
  {
    eyebrow: "Seznámení",
    title: "Poznáme vaše podnikání",
    description:
      "Probereme vaše cíle, zákazníky a požadavky. Společně určíme, co má web nebo aplikace přinést.",
    background: "surfacePrimary",
    borderColor: "border",
    progressColor: "border",
    rotation: "2deg",
    offset: "0px",
    tabletLeft: "0px",
    tabletTop: "0px",
    zIndex: 1,
  },
  {
    eyebrow: "Návrh",
    title: "Připravím návrh",
    description:
      "Navrhnu strukturu, obsah a vizuální podobu. Vše si odsouhlasíme ještě před zahájením vývoje.",
    background: "accentSurface",
    borderColor: "accentLight",
    progressColor: "accent",
    rotation: "-1.5deg",
    offset: "54px",
    tabletLeft: "calc(100% - 330px)",
    tabletTop: "225px",
    zIndex: 2,
  },
  {
    eyebrow: "Vývoj",
    title: "Vytvořím a otestuji",
    description:
      "Schválený návrh převedu do funkčního řešení, které otestuji a připravím ke spuštění.",
    background: "surfacePrimary",
    borderColor: "border",
    progressColor: "border",
    rotation: "1deg",
    offset: "18px",
    tabletLeft: "0px",
    tabletTop: "450px",
    zIndex: 3,
  },
  {
    eyebrow: "Spuštění",
    title: "Spuštění a další péče",
    description:
      "Web nasadím do provozu a podle potřeby zajistím jeho správu, úpravy a další rozvoj.",
    background: "surfaceSecondary",
    borderColor: "border",
    progressColor: "border",
    rotation: "-2deg",
    offset: "72px",
    tabletLeft: "calc(100% - 330px)",
    tabletTop: "675px",
    zIndex: 4,
  },
];
