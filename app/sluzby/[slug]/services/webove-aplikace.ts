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
      heading: "Webové aplikace, které zjednoduší práci vašemu podnikání.",
      description:
        "Navrhnu a vyvinu aplikaci na míru, která pomůže spravovat data, zákazníky nebo interní procesy. Od jednoduchého nástroje až po rozsáhlejší systém.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Jak aplikace pracuje",
      steps: [
        {
          title: "Vstup",
          description: "Uživatel zadá nebo vybere potřebná data.",
        },
        {
          title: "Zpracování",
          description: "Aplikace provede požadované operace.",
        },
        {
          title: "Výsledek",
          description: "Uživatel získá přehled nebo dokončí úkol.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o aplikaci přemýšlím",
      heading: "Funkce podle toho, co uživatelé skutečně potřebují.",
      description:
        "Nejdřív zjistím, kdo bude aplikaci používat, jaké úkoly potřebuje dokončit a s jakými daty pracuje. Podle toho navrhnu funkce a ovládání.",
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
      heading: "Jednodušší práce, přehled nad daty a možnost dalšího rozvoje.",
      description:
        "Aplikace má usnadnit každodenní činnosti, zpřehlednit informace a přizpůsobit se tomu, jak vaše podnikání funguje.",
    },
    visual: {
      items: [
        {
          title: "Jednodušší ovládání",
          description:
            "Uživatelé se snadno zorientují a rychle dokončí potřebné úkoly.",
          icon: LuArrowUpRight,
        },
        {
          title: "Funkce na míru",
          description: "Aplikace pracuje podle vašich pravidel a potřeb.",
          icon: LuDiamond,
        },
        {
          title: "Možnost rozvoje",
          description:
            "Další funkce lze plánovat podle toho, jak se vaše potřeby mění.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading: "Kolik stojí vývoj webové aplikace?",
      description:
        "Rozpočet určuje především počet funkcí, složitost jejich logiky, práce s daty a případná napojení na další služby. Před zahájením vývoje společně odsouhlasíme rozsah i cenu.",
    },
    visual: {
      factors: [
        {
          title: "Funkce aplikace",
          description:
            "Jaké úkoly má aplikace zvládat a kolik různých funkcí potřebuje.",
        },
        {
          title: "Data a logika",
          description:
            "Jaká data zpracovává a jak složitá pravidla musí dodržovat.",
        },
        {
          title: "Integrace",
          description:
            "Zda se bude propojovat s dalšími systémy nebo externími službami.",
        },
      ],
    },
  },

  process: {
    content: {
      eyebrow: "Jak probíhá spolupráce",
      heading: "Od požadavků až po otestovanou aplikaci.",
      description:
        "Společně upřesníme funkce, připravím návrh ovládání, aplikaci vyvinu a před předáním ověřím její hlavní scénáře.",
    },
    visual: {
      steps: [
        {
          title: "Analýza požadavků",
          description: "Probereme uživatele, potřebné funkce a práci s daty.",
        },
        {
          title: "Návrh aplikace",
          description:
            "Připravím strukturu obrazovek a způsob jejich ovládání.",
        },
        {
          title: "Vývoj",
          description: "Naprogramuji jednotlivé funkce a jejich propojení.",
        },
        {
          title: "Testování a předání",
          description: "Ověřím hlavní scénáře a předám aplikaci s dokumentací.",
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
        question: "Proč je webová aplikace o tolik dražší než běžný web?",
        answer:
          "Klasický web slouží především k prezentaci informací. Webová aplikace je nástroj, který za vás pracuje – například počítá, automatizuje procesy, spravuje uživatelské účty nebo propojuje další systémy. Neplatíte tedy jen za vzhled, ale za software na míru, který vám může šetřit čas i náklady.",
      },
      {
        question: "Co když se v průběhu vývoje cena navýší?",
        answer:
          "Cenu si odsouhlasíme před zahájením vývoje na základě dohodnutého zadání. Pokud se během realizace rozhodnete přidat nové funkce, nejprve společně odsouhlasíme jejich rozsah a cenu. Stejně tak pokud některé funkce nebudete potřebovat, můžeme je ze zadání odebrat a rozpočet odpovídajícím způsobem snížit. Bez vašeho souhlasu se cena nemění.",
      },
      {
        question: "Co když mi aplikaci předáte a já s ní nebudu umět pracovat?",
        answer:
          "Aplikaci navrhnu tak, aby její ovládání bylo co nejjednodušší a nejintuitivnější. Součástí předání bude dokumentace nebo uživatelský manuál, ke kterému se můžete kdykoliv vrátit. Podle potřeby můžeme připravit také videonávod.",
      },
      {
        question: "Nezůstanu na vás závislý? Co když zmizíte?",
        answer:
          "Ne. Po kompletním zaplacení přecházejí práva k vytvořenému řešení na vás v rozsahu sjednaném ve smlouvě. Aplikaci stavím na běžně používaných technologiích a zdrojový kód předávám včetně dokumentace. Pokud se v budoucnu rozhodnete spolupracovat s jiným vývojářem nebo vlastním týmem, mohou na mé práci pokračovat.",
      },
      {
        question:
          "Jak mám vědět, že na mé aplikaci skutečně pracujete a neprotáhne se to o rok?",
        answer:
          "Vývoj rozděluji na menší, přehledné části. Můžeme se domluvit na pravidelných ukázkách, při kterých vám představím aktuální stav a hotové funkce. Budete tak mít průběžný přehled o postupu prací a možnost včas připomínkovat výsledek.",
      },
      {
        question: "Co všechno ode mě budete k vývoji potřebovat?",
        answer:
          "Hlavně váš čas na začátku. Potřebuji pochopit, jak funguje vaše podnikání, jaký problém má aplikace řešit a kdo ji bude používat. Vy jste expert na své podnikání, já na technologie – společně to propojíme.",
      },
      {
        question: "Kolik mě bude stát provoz aplikace, až bude hotová?",
        answer:
          "Kromě samotného vývoje je potřeba počítat s provozem serveru a případnými službami třetích stran, například platební bránou nebo odesíláním SMS. Náklady závisí na náročnosti aplikace a počtu uživatelů. Infrastrukturu se snažím navrhovat tak, aby byly počáteční náklady co nejnižší a mohly růst postupně s využíváním aplikace.",
      },
      {
        question: "Co se stane, když aplikace přestane fungovat nebo spadne?",
        answer:
          "I po spuštění se může objevit chyba nebo technický problém. Vady, na které se vztahuje sjednaná záruka, řeším v rámci záručních podmínek. Pro dlouhodobou údržbu, aktualizace a technickou podporu se můžeme domluvit na následné servisní spolupráci. Její rozsah i podmínky si stanovíme předem.",
      },
    ],
  },

  cta: {
    eyebrow: "Máte nápad na webovou aplikaci?",
    heading: "Popište mi, co má aplikace umět. Navrhnu cestu k realizaci.",
    description:
      "Nemusíte mít připravené technické zadání. Stačí popsat, co potřebujete zjednodušit, spravovat nebo vytvořit. Společně upřesníme funkce i další postup.",
  },
} satisfies ServiceDetailData;
