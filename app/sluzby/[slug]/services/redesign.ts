import {
  LuArrowUpRight,
  LuCheck,
  LuDiamond,
  LuSearch,
  LuListTree,
  LuPalette,
  LuRefreshCw,
} from "react-icons/lu";

import type { ServiceDetailData } from "../types";

export const redesign = {
  hero: {
    content: {
      eyebrow: "Redesign webu",
      heading: "Starý web nemusí určovat podobu toho nového.",
      description:
        "Redesign není přebarvení. Nejdřív zjistíme, co na současném webu funguje, co překáží a co se v podnikání změnilo.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Před a po",
      steps: [
        {
          title: "Současný stav",
          description: "Co dnes brzdí pochopení nabídky.",
        },
        {
          title: "Nová hierarchie",
          description: "Co má být vidět dřív a jasněji.",
        },
        {
          title: "Nový směr",
          description: "Vizuál a obsah odpovídají dnešku.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o redesignu přemýšlím",
      heading: "Nejdřív důvod ke změně. Potom nový vzhled.",
      description:
        "Smyslem redesignu není zahodit vše staré, ale odstranit to, co už nefunguje.",
    },
    visual: {
      steps: [
        {
          title: "Audit",
          description: "Co dnes funguje a co brzdí?",
          icon: LuSearch,
        },
        {
          title: "Priorita",
          description: "Co musí návštěvník pochopit dřív?",
          icon: LuListTree,
        },
        {
          title: "Směr",
          description: "Jak má nový web působit?",
          icon: LuPalette,
        },
        {
          title: "Přechod",
          description: "Co zachovat a co postavit znovu?",
          icon: LuRefreshCw,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Změna, která má důvod.",
      description:
        "Zachováme to, co funguje. Zbytek není potřeba chránit jen proto, že už existuje.",
    },
    visual: {
      items: [
        {
          title: "Lepší hierarchie",
          description: "Důležité informace dostanou správnou váhu.",
          icon: LuArrowUpRight,
        },
        {
          title: "Aktuální prezentace",
          description: "Web odpovídá dnešní nabídce a značce.",
          icon: LuDiamond,
        },
        {
          title: "Čistší cesta ke kontaktu",
          description: "Návštěvník se neztrácí mezi starými vrstvami.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading:
        "Cena redesignu vychází z rozsahu změn, obsahu a toho, co lze ze současného webu zachovat.",
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

  process: {
    content: {
      eyebrow: "Jak probíhá spolupráce",
      heading: "Přehledný proces od prvního kontextu po výsledek.",
      description:
        "Každý krok má svůj důvod. Bez procesního divadla a bez zbytečných mezikroků.",
    },
    visual: {
      steps: [
        {
          title: "Audit",
          description: "Projdu současný web a jeho slabá místa.",
        },
        {
          title: "Nová struktura",
          description: "Určíme, co zachovat, přeskládat nebo odstranit.",
        },
        {
          title: "Nový návrh",
          description: "Vznikne nový vizuální a obsahový směr.",
        },
        {
          title: "Přechod",
          description: "Relevantní obsah převedeme a nový web spustíme.",
        },
      ],
    },
  },

  faq: {
    content: {
      eyebrow: "FAQ",
      heading: "Nejčastější otázky.",
      description: "To hlavní před prvním kontaktem.",
    },
    items: [
      {
        question:
          "Nepřijdu kvůli redesignu o své dosavadní pozice ve vyhledávačích (Google, Seznam)?",
        answer:
          "Při redesignu věnuji pozornost zachování stávajících URL adres a správnému nastavení přesměrování tam, kde se adresy mění. Díky tomu mohou vyhledávače lépe navázat na původní obsah. Určité změny pozic ale mohou nastat i při správně provedeném redesignu. Proto se snažím minimalizovat rizika, která by mohla negativně ovlivnit dosavadní dohledatelnost webu.",
      },
      {
        question:
          "Bude můj web během předělávání fungovat, nebo budeme mít výpadek?",
        answer:
          "Ve většině případů může váš současný web fungovat po celou dobu přípravy nové verze. Nový web vyvíjím v odděleném prostředí, kde ho můžeme průběžně kontrolovat a testovat. Samotné spuštění naplánujeme tak, aby byl případný výpadek co nejkratší. Konkrétní postup závisí na současném hostingu a technologii.",
      },
      {
        question:
          "Přenesete na nový web mé stávající texty, články nebo data uživatelů?",
        answer:
          "Ano, pokud je to technicky možné a součástí dohodnutého rozsahu. Předem projdeme, jaký obsah a data má smysl zachovat a jakým způsobem je lze převést. U složitějších systémů, například s uživatelskými účty nebo databází, je potřeba nejprve ověřit možnosti migrace a následně správnost převedených dat otestovat.",
      },
      {
        question:
          "Mám na webu systémy, které mi vyhovují. Budu je muset kvůli redesignu měnit?",
        answer:
          "Ne nutně. Pokud používáte rezervační systém, fakturační nástroj nebo jiné služby, které vám vyhovují, cílem není je bezdůvodně nahrazovat. Nejprve ověřím možnosti jejich propojení s novým webem. Pokud bude zachování některé integrace technicky omezené, společně projdeme dostupné varianty.",
      },
      {
        question:
          "Jak poznám, že redesign reálně pomohl a nebyla to zbytečná investice?",
        answer:
          "Ještě před zahájením si ujasníme, co má redesign zlepšit. Může jít například o přehlednější nabídku, jednodušší kontaktování, rychlejší načítání nebo lepší použitelnost na mobilu. Pokud máme k dispozici relevantní data, můžeme výsledky po spuštění porovnat s původním stavem. Cílem není pouze modernější vzhled, ale web, který lépe plní svou úlohu.",
      },
      {
        question:
          "Nezmate stávající zákazníky, když bude web vypadat úplně jinak?",
        answer:
          "Dobrý redesign nemusí znamenat změnu všeho. Zachováme důležité prvky vaší identity, například logo, charakteristické barvy nebo známé části obsahu, pokud stále dávají smysl. Novou podobu navrhnu tak, aby byla pro návštěvníky srozumitelná a usnadnila jim orientaci. Změna má zákazníkům používání webu zjednodušit, ne je nutit učit se všechno znovu.",
      },
      {
        question: "Kolik redesign webu stojí?",
        answer:
          "Cena závisí na rozsahu změn, současném stavu webu a na tom, kolik obsahu nebo funkcí můžeme zachovat. Po úvodním seznámení s projektem připravím návrh rozsahu a cenovou nabídku. Bez vašeho odsouhlasení se do realizace nepouštím.",
      },
    ],
  },

  cta: {
    eyebrow: "Další krok",
    heading: "Současný web už vás nevystihuje?",
    description: "Podíváme se, co má smysl zachovat a co postavit znovu.",
  },
} satisfies ServiceDetailData;
