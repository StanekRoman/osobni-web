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
      heading: "Proměňte zastaralý web v moderní prezentaci vašeho podnikání.",
      description:
        "Pokud váš současný web působí zastarale, je nepřehledný nebo už neodpovídá vaší nabídce, navrhnu jeho novou podobu. S důrazem na vzhled, obsah a snadnou orientaci zákazníků.",
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
          description: "Zjistíme, co na webu funguje a co zákazníkům překáží.",
        },
        {
          title: "Nová struktura",
          description: "Důležité informace dostanou správné místo.",
        },
        {
          title: "Nová podoba",
          description: "Moderní design odpovídá vašemu dnešnímu podnikání.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o redesignu přemýšlím",
      heading: "Zachovat, co funguje. Zlepšit, co návštěvníkům překáží.",
      description:
        "Redesign není jen změna barev a obrázků. Nejprve projdu současný web, zjistím jeho slabá místa a navrhnu úpravy, které zlepší vzhled i použitelnost.",
    },
    visual: {
      steps: [
        {
          title: "Analýza",
          description: "Co na současném webu funguje a co je potřeba změnit?",
          icon: LuSearch,
        },
        {
          title: "Priority",
          description: "Které informace mají návštěvníci najít jako první?",
          icon: LuListTree,
        },
        {
          title: "Nový design",
          description: "Jak má web reprezentovat vaše podnikání?",
          icon: LuPalette,
        },
        {
          title: "Přechod",
          description: "Co zachováme a co vytvoříme znovu?",
          icon: LuRefreshCw,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading:
        "Modernější vzhled, srozumitelnější nabídka a jednodušší kontakt.",
      description:
        "Nový web má zákazníkům usnadnit orientaci, představit vaše služby a vytvořit lepší první dojem.",
    },
    visual: {
      items: [
        {
          title: "Přehlednější obsah",
          description: "Zákazníci rychleji najdou důležité informace.",
          icon: LuArrowUpRight,
        },
        {
          title: "Moderní prezentace",
          description: "Vzhled webu odpovídá současné nabídce a značce.",
          icon: LuDiamond,
        },
        {
          title: "Snadnější kontakt",
          description:
            "Návštěvníci se jednoduše dostanou k poptávce nebo kontaktním údajům.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading: "Kolik stojí redesign webu?",
      description:
        "Cena závisí na stavu původního webu, rozsahu požadovaných změn a množství obsahu, který bude potřeba upravit nebo převést. Po posouzení současného webu připravím konkrétní nabídku.",
    },
    visual: {
      factors: [
        {
          title: "Současný stav",
          description: "Jak je web postavený a které části lze zachovat.",
        },
        {
          title: "Rozsah změn",
          description:
            "Kolik stránek, funkcí a designových prvků budeme upravovat.",
        },
        {
          title: "Obsah a migrace",
          description:
            "Jaké texty, fotografie a data je potřeba převést nebo vytvořit znovu.",
        },
      ],
    },
  },

  process: {
    content: {
      eyebrow: "Jak probíhá spolupráce",
      heading: "Od analýzy současného webu po spuštění nové verze.",
      description:
        "Nejdřív zjistím, co potřebuje změnit. Potom připravím novou strukturu a design, web zrealizuji a postarám se o přechod na novou verzi.",
    },
    visual: {
      steps: [
        {
          title: "Analýza současného webu",
          description: "Projdu obsah, vzhled, funkce a technický stav webu.",
        },
        {
          title: "Nová struktura",
          description: "Určíme, co zachovat, upravit nebo odstranit.",
        },
        {
          title: "Design a realizace",
          description:
            "Připravím nový vizuální návrh a po schválení web vytvořím.",
        },
        {
          title: "Spuštění",
          description:
            "Převedu potřebný obsah, ověřím funkčnost a nastavím případná přesměrování.",
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
    eyebrow: "Chcete vylepšit současný web?",
    heading: "Podíváme se, co vašemu současnému webu chybí a jak ho vylepšit.",
    description:
      "Pošlete mi adresu svého webu a stručně popište, co vám na něm nevyhovuje. Společně probereme možnosti redesignu.",
  },
} satisfies ServiceDetailData;
