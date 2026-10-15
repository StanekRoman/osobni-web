import {
  LuArrowUpRight,
  LuCheck,
  LuDiamond,
  LuEye,
  LuListTree,
  LuMousePointerClick,
  LuShieldCheck,
} from "react-icons/lu";

import type { ServiceDetailData } from "../types";

export const tvorbaWebu = {
  hero: {
    content: {
      eyebrow: "Tvorba webů",
      heading: "Nový web jako pevný základ vašeho podnikání.",
      description:
        "Pro živnostníky a malé firmy, které potřebují srozumitelnou prezentaci, důvěru a jednoduchou cestu ke kontaktu.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Co drží web pohromadě",
      steps: [
        {
          title: "Struktura",
          description: "Návštěvník se rychle zorientuje.",
        },
        {
          title: "Obsah",
          description: "Nabídka je jasná a konkrétní.",
        },
        {
          title: "Realizace",
          description: "Výsledek funguje na všech zařízeních.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o webu přemýšlím",
      heading: "Nejdřív cesta návštěvníka. Potom obrazovky.",
      description:
        "Web má návštěvníka dovést od prvního dojmu k pochopení nabídky a dalšímu kroku.",
    },
    visual: {
      steps: [
        {
          title: "Pozornost",
          description: "Co má člověk pochopit jako první?",
          icon: LuEye,
        },
        {
          title: "Nabídka",
          description: "Jak rychle zjistí, co nabízíte?",
          icon: LuListTree,
        },
        {
          title: "Důvěra",
          description: "Co mu pomůže rozhodnout se?",
          icon: LuShieldCheck,
        },
        {
          title: "Kontakt",
          description: "Jak snadno udělá další krok?",
          icon: LuMousePointerClick,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Web, který návštěvníka vede.",
      description: "Výsledek má fungovat obchodně i technicky.",
    },
    visual: {
      items: [
        {
          title: "Důvěryhodnost",
          description: "Obsah a vizuál potvrzují kvalitu vaší práce.",
          icon: LuDiamond,
        },
        {
          title: "Jasná nabídka",
          description: "Lidé pochopí, co nabízíte a pro koho.",
          icon: LuArrowUpRight,
        },
        {
          title: "Snadný kontakt",
          description: "Další krok je viditelný a přirozený.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading:
        "Cena vychází ze skutečného rozsahu webu, funkcí a náročnosti realizace.",
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
          title: "Cíl a kontext",
          description: "Projdeme nabídku, zákazníky a roli webu.",
        },
        {
          title: "Struktura a směr",
          description: "Vznikne logika obsahu a vizuální směr.",
        },
        {
          title: "Realizace",
          description: "Web technicky postavím a otestuji.",
        },
        {
          title: "Spuštění",
          description: "Nasazení a případná další péče.",
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
        question: "Co všechno je vlastně zahrnuto v ceně webu?",
        answer:
          "Cena zahrnuje kompletní realizaci webu podle dohodnutého zadání – od analýzy potřeb, návrhu struktury a vizuální podoby až po samotný vývoj, responzivní zpracování, základní technické SEO a spuštění webu. V ceně standardně není registrace domény, hosting ani tvorba profesionálních textů a fotografií. Přesný rozsah si vždy odsouhlasíme před zahájením spolupráce.",
      },
      {
        question:
          "Proč bych měl/a platit za web na míru, když si ho můžu vytvořit ve Wixu nebo Webnode?",
        answer:
          "Webové editory jako Wix nebo Webnode mohou být dobrou volbou pro jednoduchou prezentaci. Jejich možnosti jsou ale omezené funkcemi a šablonami dané platformy. Web na míru umožňuje větší kontrolu nad vzhledem, strukturou, výkonem i dalším rozvojem. Výsledkem je řešení přizpůsobené vašemu podnikání, nikoliv naopak.",
      },
      {
        question: "Musím mít připravené texty a fotky, než vás oslovím?",
        answer:
          "Nemusíte. Na začátku stačí vědět, co nabízíte a čeho chcete webem dosáhnout. Společně určíme, jaké podklady budou potřeba. Pokud zatím nemáte hotové texty, pomohu vám s jejich strukturou a uspořádáním. U fotografií můžeme využít vaše vlastní snímky nebo vhodné fotografie z fotobanky.",
      },
      {
        question:
          "Kolik času mi tvorba webu zabere? Co ode mě budete potřebovat?",
        answer:
          "Nejvíce vaší součinnosti budu potřebovat na začátku, kdy společně projdeme vaše podnikání, cíle a požadavky. Během realizace pak budete především schvalovat návrhy, dodávat potřebné podklady a poskytovat zpětnou vazbu. Celý postup nastavíme tak, abyste měli přehled o projektu, ale nemuseli se zabývat technickými detaily.",
      },
      {
        question: "Budu po spuštění webu hned dohledatelný/á na Googlu?",
        answer:
          "Web připravím tak, aby měl správné technické základy pro vyhledávače. Součástí je například nastavení metadat, struktury stránek a dalších základních SEO prvků. Samotné spuštění ale nezaručuje okamžité zobrazení ve výsledcích vyhledávání ani konkrétní pozice. Zařazení webu do vyhledávače může nějakou dobu trvat a jeho viditelnost ovlivňuje více faktorů.",
      },
      {
        question: "Zvládnu si sám/sama na webu změnit texty nebo přidat fotku?",
        answer:
          "Záleží na zvoleném řešení. Ne každý web potřebuje administrační systém. Pokud plánujete obsah pravidelně upravovat, můžeme už při návrhu počítat s možností samostatné správy. U webů, kde se obsah mění jen výjimečně, mohou být jednodušší a ekonomičtější jednotlivé úpravy v rámci následného servisu.",
      },
      {
        question:
          "Co se stane, když web po čase přestane fungovat nebo ho někdo napadne?",
        answer:
          "Web vytvářím s důrazem na bezpečnost, stabilitu a aktuální technické postupy. Ani u kvalitně vytvořeného webu ale nelze zcela vyloučit technické problémy nebo bezpečnostní incidenty. Vady spadající do sjednané záruky řeším podle záručních podmínek. Pro pravidelnou údržbu, aktualizace, kontrolu funkčnosti a další technickou péči se můžeme domluvit na samostatné servisní spolupráci.",
      },
      {
        question: "Pomůžete mi s výběrem a nastavením domény a hostingu?",
        answer:
          "Ano. Pomohu vám vybrat vhodnou doménu a hosting podle potřeb projektu a zajistím jejich technické nastavení. Doména i hosting budou vedené na vás, takže nad nimi budete mít plnou kontrolu. Nemusíte se tak obávat, že byste kvůli provozu webu byli závislí na jednom dodavateli.",
      },
    ],
  },

  cta: {
    eyebrow: "Další krok",
    heading: "Potřebujete nový web, ale ne hotové zadání?",
    description: "Stačí popsat situaci a cíl. Rozsah společně upřesníme.",
  },
} satisfies ServiceDetailData;
