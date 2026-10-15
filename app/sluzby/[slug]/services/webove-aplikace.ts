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

  process: {
    content: {
      eyebrow: "Jak probíhá spolupráce",
      heading: "Přehledný proces od prvního kontextu po předání.",
      description: "Každý krok má svůj důvod. Bez procesního chaosu.",
    },
    visual: {
      steps: [
        {
          title: "Proces",
          description: "Rozepíšeme současný nebo nový pracovní tok.",
        },
        {
          title: "UX",
          description: "Navrhnu obrazovky a jejich návaznosti.",
        },
        {
          title: "Vývoj",
          description: "Implementace logiky a rozhraní.",
        },
        {
          title: "Testování",
          description: "Ověření hlavních scénářů před předáním.",
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
    heading: "Pojďme z něj udělat řešení, které vám usnadní práci",
    description:
      "Nemusíte mít připravené technické zadání. Stačí mi popsat, co potřebujete vyřešit, a společně najdeme vhodný postup.",
  },
} satisfies ServiceDetailData;
