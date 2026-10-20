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
      heading: "Menší úpravy a nové funkce pro váš web nebo aplikaci.",
      description:
        "Potřebujete doplnit formulář, propojit službu, upravit design nebo rozšířit stávající web o novou funkci? Pomohu vám s konkrétními změnami bez nutnosti stavět celý projekt znovu.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Od požadavku k hotové úpravě",
      steps: [
        {
          title: "Současný stav",
          description: "Zjistím, jak web nebo aplikace funguje.",
        },
        {
          title: "Konkrétní změna",
          description: "Společně vymezíme, co je potřeba upravit.",
        },
        {
          title: "Hotový výsledek",
          description: "Nová funkce nebo úprava zapadne do stávajícího řešení.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o doplňkových službách přemýšlím",
      heading: "Konkrétní úprava s jasným rozsahem a výsledkem.",
      description:
        "Ne každá změna vyžaduje nový web nebo rozsáhlý projekt. Nejprve posoudím současné řešení a navrhnu, jak požadovanou úpravu provést bez zbytečných zásahů.",
    },
    visual: {
      steps: [
        {
          title: "Současné řešení",
          description: "Na jaký web nebo aplikaci budeme navazovat?",
          icon: LuLayers,
        },
        {
          title: "Rozsah úpravy",
          description: "Co přesně potřebujete změnit nebo doplnit?",
          icon: LuListChecks,
        },
        {
          title: "Výsledek",
          description: "Jak má hotová úprava fungovat?",
          icon: LuPackageCheck,
        },
        {
          title: "Návaznosti",
          description: "Kterých dalších částí systému se změna dotkne?",
          icon: LuPuzzle,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Nové funkce, lepší použitelnost a rozvoj stávajícího řešení.",
      description:
        "Pomohu vám doplnit to, co na webu nebo v aplikaci chybí, upravit nevyhovující části a rozšířit možnosti současného řešení.",
    },
    visual: {
      items: [
        {
          title: "Nové možnosti",
          description:
            "Doplnění funkcí, formulářů nebo propojení s dalšími službami.",
          icon: LuDiamond,
        },
        {
          title: "Cílené úpravy",
          description:
            "Změny konkrétních částí bez zbytečného předělávání celého projektu.",
          icon: LuArrowUpRight,
        },
        {
          title: "Další rozvoj",
          description: "Stávající web nebo aplikaci lze postupně rozšiřovat.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading: "Kolik stojí menší úpravy webu nebo aplikace?",
      description:
        "Cena vychází z náročnosti úpravy a technického stavu současného řešení. U samostatných zakázek platí minimální hodnota 5 000 Kč. Konkrétní rozsah a cenu si odsouhlasíme před realizací.",
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
      heading: "Od konkrétního zadání po hotovou úpravu.",
      description:
        "Popíšete požadovanou změnu, posoudím současné řešení a navrhnu postup. Po odsouhlasení úpravu provedu, otestuji a předám.",
    },
    visual: {
      steps: [
        {
          title: "Zadání",
          description: "Popíšete, co potřebujete upravit nebo doplnit.",
        },
        {
          title: "Posouzení",
          description: "Prověřím technické možnosti a upřesníme rozsah i cenu.",
        },
        {
          title: "Realizace a testování",
          description: "Úpravu provedu a ověřím její správné fungování.",
        },
        {
          title: "Předání",
          description: "Hotovou změnu nasadím a předám potřebné informace.",
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
    eyebrow: "Potřebujete něco upravit?",
    heading: "Máte konkrétní úpravu, kterou potřebujete vyřešit? Napište mi.",
    description:
      "Popište mi požadovanou změnu a pošlete adresu webu nebo informace o aplikaci. Posoudím možnosti realizace.",
  },
} satisfies ServiceDetailData;
