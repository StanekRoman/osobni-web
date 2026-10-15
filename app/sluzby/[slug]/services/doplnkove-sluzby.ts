import {
  LuArrowUpRight,
  LuCheck,
  LuDiamond,
  LuLayers,
  LuListChecks,
  LuPackageCheck,
  LuPuzzle,
} from "react-icons/lu";

import type { ServiceDetailData } from "../types";

export const doplnkoveSluzby = {
  hero: {
    content: {
      eyebrow: "Doplňkové služby",
      heading: "Když hlavní projekt potřebuje něco navíc.",
      description:
        "Některé úkoly nedávají smysl jako samostatný velký projekt, ale přirozeně navazují na web, aplikaci nebo další digitální řešení.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Flexibilní rozsah",
      steps: [
        {
          title: "Kontext",
          description: "Co už existuje a na co navazujeme.",
        },
        {
          title: "Rozsah",
          description: "Řešíme jen konkrétní potřebnou část.",
        },
        {
          title: "Návaznost",
          description: "Výsledek zapadne do hlavního řešení.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o doplňku přemýšlím",
      heading: "Nejdřív návaznost. Potom samostatná práce.",
      description:
        "Doplňková služba má podporovat hlavní výsledek, ne vytvářet vedlejší projekt bez jasného účelu.",
    },
    visual: {
      steps: [
        {
          title: "Kontext",
          description: "Na co práce navazuje?",
          icon: LuLayers,
        },
        {
          title: "Hranice",
          description: "Co přesně je součástí?",
          icon: LuListChecks,
        },
        {
          title: "Výstup",
          description: "Jaký konkrétní výsledek vznikne?",
          icon: LuPackageCheck,
        },
        {
          title: "Návaznost",
          description: "Jak zapadne do hlavního řešení?",
          icon: LuPuzzle,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Doplněk, který má jasnou roli.",
      description:
        "Menší práce držíme malou a konkrétní. Pokud přeroste původní rozsah, oddělíme ji.",
    },
    visual: {
      items: [
        {
          title: "Návaznost",
          description: "Výsledek podporuje hlavní projekt.",
          icon: LuDiamond,
        },
        {
          title: "Jasná hranice",
          description: "Je zřejmé, co je součástí malého rozsahu.",
          icon: LuArrowUpRight,
        },
        {
          title: "Možnost rozšíření",
          description: "Větší potřeba se může změnit v samostatný projekt.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading:
        "Cena vychází z konkrétního rozsahu doplňkové práce a její návaznosti na hlavní projekt.",
      description:
        "Nejdřív posoudím současné řešení a upřesníme požadovanou změnu. Podle její náročnosti a potřebných návazností pak připravím konkrétní cenovou nabídku.",
    },
    visual: {
      factors: [
        {
          title: "Rozsah úpravy",
          description: "Co konkrétně potřebujeme změnit nebo doplnit.",
        },
        {
          title: "Technický stav",
          description: "Jak je současné řešení postavené a v jakém je stavu.",
        },
        {
          title: "Návaznosti",
          description: "Kterých dalších funkcí nebo systémů se změna dotkne.",
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
          title: "Kontext",
          description: "Upřesníme, na co má práce navazovat.",
        },
        {
          title: "Rozsah",
          description: "Vymezíme konkrétní malý výstup.",
        },
        {
          title: "Realizace",
          description: "Doplněk připravím a ověřím.",
        },
        {
          title: "Předání",
          description: "Výsledek zapadne do hlavního řešení.",
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
          "Co přesně spadá pod doplňkové služby a s čím vším mi můžete pomoci?",
        answer:
          "Doplňkové služby zahrnují menší, konkrétně vymezené práce na existujícím webu nebo aplikaci. Může jít například o doplnění formuláře, úpravu části designu, napojení externí služby, drobnou funkci nebo technickou kontrolu. Nejdříve posoudím, co potřebujete vyřešit a zda to skutečně dává smysl jako menší samostatný zásah.",
      },
      {
        question:
          "Pomůžete mi s doplňkovou službou, i když hlavní web nebo aplikaci stavěl jiný vývojář?",
        answer:
          "Ano, pokud to technický stav a použité technologie umožňují. Nejprve potřebuji zjistit, jak je současné řešení postavené, zda je dostupný zdrojový kód a potřebné přístupy. Na základě toho posoudím, zda mohu na existující řešení bezpečně navázat a jaký rozsah práce bude potřeba.",
      },
      {
        question: "Jak se u doplňkových služeb počítá cena? Vyplatí se mi to?",
        answer:
          "Cena vychází z konkrétního rozsahu práce, její náročnosti a případného seznámení se stávajícím systémem. Předem vám vysvětlím, co bude potřeba udělat a kolik to bude přibližně stát. Pokud by byla požadovaná úprava neúměrně drahá vzhledem k jejímu přínosu, upozorním vás na to a společně zvážíme jednodušší alternativu.",
      },
      {
        question:
          "Máte nějaký minimální rozsah zakázky, od kterého doplňkové práce přijímáte?",
        answer:
          "Ano, u samostatných zakázek počítám s minimální hodnotou 5 000 Kč. I menší zásah totiž vyžaduje seznámení s projektem, přípravu, samotnou realizaci a ověření funkčnosti. Drobné průběžné úpravy je možné řešit také v rámci servisní spolupráce, pokud se na ní domluvíme.",
      },
      {
        question:
          "Hrozí, že se při implementaci doplňkové služby rozbije zbytek mého fungujícího webu?",
        answer:
          "Každý zásah do existujícího systému s sebou nese určité riziko. Proto nejprve posoudím technický stav a možné návaznosti. Pokud to prostředí umožňuje, změny připravím a otestuji odděleně od ostrého provozu. Před nasazením ověřím dotčené funkce a podle potřeby připravím možnost návratu k předchozí verzi. Riziko problémů tak minimalizujeme, i když ho nelze zcela vyloučit.",
      },
      {
        question: "Jak probíhá celý proces od zadání po hotový výsledek?",
        answer:
          "Nejdříve mi popíšete, co potřebujete změnit a proč. Posoudím současné řešení, navrhnu vhodný postup a společně odsouhlasíme rozsah i cenu. Následně změnu připravím, otestuji a po schválení nasadím. U menších úprav celý proces přizpůsobím jejich náročnosti, aby nevznikala zbytečná administrativa.",
      },
    ],
  },

  cta: {
    eyebrow: "Další krok",
    heading: "Máte menší úkol, který se nevejde do jedné hlavní služby?",
    description:
      "Popište ho. Pokud dává smysl jako doplněk, rozsah udržíme malý a konkrétní.",
  },
} satisfies ServiceDetailData;
