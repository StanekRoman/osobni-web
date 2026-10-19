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
    eyebrow: "Nejdřív pochopit",
    title: "Cíl a kontext",
    description:
      "Projdeme podnikání, služby, zákazníky a to, co má nový web změnit.",
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
    eyebrow: "Pak dát věcem řád",
    title: "Struktura a směr",
    description:
      "Vznikne logika obsahu a vizuální směr. Ještě před vývojem víme, co stavíme.",
    background: "accentSurface",
    borderColor: "accentLight",
    progressColor: "accent",
    rotation: "-1.5deg",
    offset: "54px",
    tabletLeft: "calc(100% - 330px)",
    tabletTop: "205px",
    zIndex: 2,
  },
  {
    eyebrow: "Teprve potom stavět",
    title: "Realizace",
    description:
      "Návrh převedu do funkčního webu a průběžně ladíme detaily i obsah.",
    background: "surfacePrimary",
    borderColor: "border",
    progressColor: "border",
    rotation: "1deg",
    offset: "18px",
    tabletLeft: "0px",
    tabletTop: "410px",
    zIndex: 3,
  },
  {
    eyebrow: "A nenechat to ležet",
    title: "Spuštění a péče",
    description:
      "Po kontrole web spustíme. Podle potřeby pokračujeme správou a dalším rozvojem.",
    background: "surfaceSecondary",
    borderColor: "border",
    progressColor: "border",
    rotation: "-2deg",
    offset: "72px",
    tabletLeft: "calc(100% - 330px)",
    tabletTop: "615px",
    zIndex: 4,
  },
];
