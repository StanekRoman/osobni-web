import {
  LuArrowUpRight,
  LuCheck,
  LuDiamond,
  LuRepeat,
  LuListChecks,
  LuWorkflow,
  LuCheckCheck,
} from "react-icons/lu";

import type { ServiceDetailData } from "../types";

export const automatizaceANastroje = {
  hero: {
    content: {
      eyebrow: "Automatizace a nástroje",
      heading: "Když ruční rutina může udělat malý nástroj.",
      description:
        "Ne každá automatizace potřebuje velký systém. Často stačí jednoduchý skript nebo propojení, které odstraní opakované přepisování a kontrolu.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Jednoduchý tok",
      steps: [
        {
          title: "Vstup",
          description: "E-mail, formulář nebo soubor.",
        },
        {
          title: "Pravidla",
          description: "Co se má automaticky stát.",
        },
        {
          title: "Výstup",
          description: "Tabulka, upozornění nebo jiný výsledek.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o automatizaci přemýšlím",
      heading: "Nejdřív rutina. Potom automatizace.",
      description:
        "Automatizovat má smysl stabilní opakovaný krok, ne chaos, který ještě nemá jasná pravidla.",
    },
    visual: {
      steps: [
        {
          title: "Rutina",
          description: "Co dnes děláte ručně?",
          icon: LuRepeat,
        },
        {
          title: "Pravidla",
          description: "Co se opakuje pokaždé stejně?",
          icon: LuListChecks,
        },
        {
          title: "Propojení",
          description: "Odkud data přicházejí a kam mají jít?",
          icon: LuWorkflow,
        },
        {
          title: "Výsledek",
          description: "Co už člověk nemusí dělat ručně?",
          icon: LuCheckCheck,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Automatizovat jen to, co dává smysl.",
      description:
        "Cílem není další software navíc, ale méně ruční práce a menší prostor pro chybu.",
    },
    visual: {
      items: [
        {
          title: "Méně chyb",
          description: "Pravidla se provedou pokaždé stejně.",
          icon: LuDiamond,
        },
        {
          title: "Úspora času",
          description: "Opakovaný krok proběhne bez ručního přepisování.",
          icon: LuArrowUpRight,
        },
        {
          title: "Jednoduché použití",
          description: "Nástroj odpovídá tomu, kdo s ním skutečně pracuje.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading: "Cena se odvíjí hlavně od počtu zdrojů, pravidel a integrací.",
      description:
        "Nejdřív projdeme současný postup a určíme, co má automatizace zvládnout. Podle náročnosti propojení a zpracování dat pak připravím konkrétní cenovou nabídku.",
    },
    visual: {
      factors: [
        {
          title: "Zdroje dat",
          description: "Odkud data přicházejí a v jaké podobě je získáváme.",
        },
        {
          title: "Logika",
          description:
            "Jaká pravidla, podmínky a výjimky musí automatizace řešit.",
        },
        {
          title: "Integrace",
          description:
            "Kolik systémů propojujeme a jaké možnosti napojení nabízejí.",
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
          title: "Rutina",
          description: "Popíšete, co dnes děláte ručně.",
        },
        {
          title: "Zjednodušení",
          description: "Najdeme nejmenší automatizovatelný tok.",
        },
        {
          title: "Nástroj",
          description: "Vznikne skript, utilita nebo propojení.",
        },
        {
          title: "Předání",
          description: "Ověříme použití a předám jednoduchý postup.",
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
          "Co všechno se dá v mém podnikání automatizovat a jak mi to pomůže?",
        answer:
          "Automatizovat lze řadu opakujících se činností, například přepisování objednávek do tabulek, předávání kontaktů z formulářů do CRM, vytváření dokumentů nebo odesílání upozornění. Nejprve se podíváme na váš současný postup a zjistíme, které kroky mají jasná pravidla a opakují se dostatečně často. Cílem není automatizovat všechno, ale odstranit práci, která vám zbytečně zabírá čas.",
      },
      {
        question:
          "Je propojování systémů bezpečné? Nemůže dojít k úniku dat klientů?",
        answer:
          "Bezpečnost řeším už při návrhu. Kde je to možné, využívám oficiální rozhraní služeb, omezená přístupová oprávnění a bezpečné ukládání přístupových údajů. Každé propojení ale přináší určitá rizika, která závisí na zapojených systémech a zpracovávaných datech. Proto předem posoudím, jaké informace se budou přenášet a jak je vhodné chránit.",
      },
      {
        question:
          "Budeme propojení stavět na platformách jako Make nebo Zapier, nebo psát vlastní kód?",
        answer:
          "Záleží na konkrétním procesu. Pro jednodušší propojení může být vhodná hotová automatizační platforma. U složitější logiky, specifických požadavků nebo většího objemu dat může dávat větší smysl vlastní skript či aplikace. Nejdříve porovnám možnosti, náklady a omezení. Teprve potom doporučím řešení, které odpovídá vašemu způsobu práce.",
      },
      {
        question: "Musím mít placené účty v nástrojích typu Make nebo Zapier?",
        answer:
          "Ne vždy. Některé služby nabízejí bezplatné tarify, které mohou pro menší automatizace stačit. S rostoucím počtem operací nebo náročností procesu ale mohou vzniknout pravidelné poplatky. Pokud bude automatizace využívat placenou službu, upozorním vás na očekávané provozní náklady ještě před realizací.",
      },
      {
        question:
          "Co se stane, když se automatizace zasekne nebo některý nástroj změní své fungování?",
        answer:
          "I automatizace může narazit na chybu, nedostupnou službu nebo změnu jejího rozhraní. Podle povahy řešení proto navrhuji vhodné ošetření chyb, například opakování neúspěšného požadavku, záznam chyby nebo upozornění. Pokud se změní služba třetí strany, může být potřeba automatizaci upravit. Následnou technickou podporu a údržbu můžeme řešit v rámci servisní spolupráce.",
      },
      {
        question:
          "Jak poznám, že automatizace funguje správně a data se neztrácejí?",
        answer:
          "Před spuštěním ověřím hlavní scénáře včetně situací, kdy vstupní data chybí nebo některá služba neodpovídá. Podle náročnosti řešení můžeme doplnit záznamy o zpracování, upozornění na chyby nebo přehled výsledků. Konkrétní způsob kontroly nastavíme podle toho, jak důležitý je daný proces a jaké následky by měla chyba.",
      },
      {
        question:
          "Co když v budoucnu vyměním jeden z nástrojů, například přejdu na jiné CRM?",
        answer:
          "Záleží na tom, jak je automatizace navržená a jaké možnosti nabízí nový nástroj. V některých případech stačí upravit jedno propojení, jindy je nutné přepracovat větší část procesu. Už při návrhu se snažím jednotlivé části vhodně oddělit, aby budoucí změny nevyžadovaly zbytečné předělávání celého řešení.",
      },
    ],
  },

  cta: {
    eyebrow: "Další krok",
    heading: "Který opakovaný úkol vám bere zbytečně čas?",
    description:
      "Popište současný postup. Nejprve zjistíme, jestli automatizace vůbec dává smysl.",
  },
} satisfies ServiceDetailData;
