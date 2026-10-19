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
      heading: "Automatizujte rutinní úkoly a získejte více času na podnikání.",
      description:
        "Přepisujete objednávky do tabulek, přenášíte data mezi službami nebo opakujete stejné úkoly každý den? Vytvořím jednoduchý nástroj nebo automatizaci, která část práce udělá za vás.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Jak automatizace funguje",
      steps: [
        {
          title: "Vstup",
          description: "Data přijdou z e-mailu, formuláře nebo souboru.",
        },
        {
          title: "Zpracování",
          description: "Nástroj provede předem nastavené kroky.",
        },
        {
          title: "Výsledek",
          description:
            "Data se zapíší, odešlou nebo vytvoří požadovaný výstup.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o automatizaci přemýšlím",
      heading:
        "Nejdřív pochopit současný postup. Potom odstranit zbytečnou ruční práci.",
      description:
        "Společně projdeme, co dnes děláte ručně, které kroky se opakují a jaká pravidla dodržujete. Podle toho navrhnu automatizaci, která vám práci skutečně usnadní.",
    },
    visual: {
      steps: [
        {
          title: "Rutina",
          description: "Které úkoly dnes děláte opakovaně?",
          icon: LuRepeat,
        },
        {
          title: "Pravidla",
          description: "Co se pokaždé provádí stejným způsobem?",
          icon: LuListChecks,
        },
        {
          title: "Propojení",
          description: "Odkud data přicházejí a kam mají putovat?",
          icon: LuWorkflow,
        },
        {
          title: "Výsledek",
          description: "Které kroky už nebudete muset dělat ručně?",
          icon: LuCheckCheck,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Úspora času, méně chyb a jednodušší každodenní provoz.",
      description:
        "Automatizace má odstranit opakované úkoly, omezit chyby při ručním přepisování a uvolnit vám čas na důležitější práci.",
    },
    visual: {
      items: [
        {
          title: "Méně chyb",
          description: "Opakované operace probíhají podle stejných pravidel.",
          icon: LuDiamond,
        },
        {
          title: "Úspora času",
          description: "Rutinní úkoly nemusíte pokaždé provádět ručně.",
          icon: LuArrowUpRight,
        },
        {
          title: "Jednoduché používání",
          description: "Nástroj přizpůsobím tomu, jak skutečně pracujete.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading: "Kolik stojí automatizace na míru?",
      description:
        "Cena závisí na zdrojích dat, složitosti pravidel a počtu služeb, které je potřeba propojit. Zohledníme také případné provozní poplatky a předem odsouhlasíme rozsah realizace.",
    },
    visual: {
      factors: [
        {
          title: "Zdroje dat",
          description: "Odkud data získáváme a v jaké podobě jsou dostupná.",
        },
        {
          title: "Pravidla a výjimky",
          description:
            "Jaké podmínky musí automatizace vyhodnocovat a jak má řešit chyby.",
        },
        {
          title: "Propojení služeb",
          description:
            "Kolik systémů zapojíme a jaké možnosti integrace nabízejí.",
        },
      ],
    },
  },

  process: {
    content: {
      eyebrow: "Jak probíhá spolupráce",
      heading: "Od opakovaného úkolu k fungující automatizaci.",
      description:
        "Nejprve si ukážeme současný postup, potom navrhnu vhodné zjednodušení, vytvořím potřebný nástroj a společně ověříme jeho fungování.",
    },
    visual: {
      steps: [
        {
          title: "Popis rutiny",
          description: "Ukážete mi, jak dnes daný úkol provádíte.",
        },
        {
          title: "Návrh automatizace",
          description: "Určíme, které kroky lze automatizovat a jak.",
        },
        {
          title: "Implementace",
          description: "Vytvořím skript, nástroj nebo propojení služeb.",
        },
        {
          title: "Testování a předání",
          description:
            "Ověříme správné zpracování dat a předám postup používání.",
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
    eyebrow: "Chcete si ušetřit práci?",
    heading:
      "Který opakovaný úkol vám zabírá nejvíc času? Pojďme ho zjednodušit.",
    description:
      "Popište mi, co dnes děláte ručně. Společně zjistíme, zda a jak se dá tento postup automatizovat.",
  },
} satisfies ServiceDetailData;
