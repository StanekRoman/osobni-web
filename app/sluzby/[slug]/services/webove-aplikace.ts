import type { ServiceDetailData } from "../types";

export const weboveAplikace = {
  hero: {
    content: {
      eyebrow: "Webové aplikace",
      heading: "Když nestačí stránka a potřebujete nástroj.",
      description:
        "Webová aplikace dává smysl tam, kde má uživatel něco udělat, zpracovat nebo spravovat — ne jen číst obsah.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Aplikační tok",
      steps: [
        {
          title: "Vstup",
          description: "Uživatel zadá nebo vybere data.",
        },
        {
          title: "Logika",
          description: "Aplikace provede konkrétní proces.",
        },
        {
          title: "Výstup",
          description: "Výsledek je srozumitelný a použitelný.",
        },
      ],
    },
  },
} satisfies ServiceDetailData;
