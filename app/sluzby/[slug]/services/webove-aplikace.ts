import {
  LuArrowUpRight,
  LuCheck,
  LuCheckCheck,
  LuDatabase,
  LuDiamond,
  LuTarget,
  LuWorkflow,
} from "react-icons/lu";
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

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Funkce mají sloužit procesu.",
      description:
        "Nejde o počet obrazovek, ale o to, jak spolu jednotlivé části aplikace fungují.",
    },
    visual: {
      items: [
        {
          title: "Srozumitelné UX",
          description: "Každý krok má jasný účel.",
          icon: LuArrowUpRight,
        },
        {
          title: "Vlastní logika",
          description: "Funkce odpovídají konkrétnímu procesu.",
          icon: LuDiamond,
        },
        {
          title: "Možnost rozvoje",
          description: "Architektura může růst s potřebami projektu.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading: "Rozsah aplikace určuje logika a počet klíčových funkcí.",
      description:
        "Konkrétní cenu určuje rozsah, obsah, funkce a náročnost realizace. Nejdřív si ujasníme, co má řešení skutečně zvládnout.",
    },
    visual: {
      factors: [
        {
          title: "Rozsah",
          description: "Kolik stránek, stavů nebo obrazovek řešíme.",
        },
        {
          title: "Funkce",
          description: "Co má řešení umět nad rámec prezentace.",
        },
        {
          title: "Obsah",
          description: "Co je připravené a co je potřeba vytvořit.",
        },
      ],
    },
  },
} satisfies ServiceDetailData;
