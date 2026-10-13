import { LuCheckCheck, LuDatabase, LuTarget, LuWorkflow } from "react-icons/lu";
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

  approach: {
    content: {
      eyebrow: "Jak o aplikaci přemýšlím",
      heading: "Nejdřív tok. Potom obrazovky.",
      description:
        "Aplikace musí mít jasný účel a jednoduchou cestu uživatele.",
    },
    visual: {
      steps: [
        {
          title: "Úloha",
          description: "Co chce uživatel dokončit?",
          icon: LuTarget,
        },
        {
          title: "Data",
          description: "Co aplikace potřebuje znát?",
          icon: LuDatabase,
        },
        {
          title: "Akce",
          description: "Co se má stát po vstupu?",
          icon: LuWorkflow,
        },
        {
          title: "Výsledek",
          description: "Jak poznáme, že je hotovo?",
          icon: LuCheckCheck,
        },
      ],
    },
  },
} satisfies ServiceDetailData;
