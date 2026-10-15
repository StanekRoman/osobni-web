import {
  LuArrowUpRight,
  LuCheck,
  LuDiamond,
  LuMessageSquare,
  LuClipboardCheck,
  LuWrench,
  LuShieldCheck,
} from "react-icons/lu";

import type { ServiceDetailData } from "../types";

export const spravaAServis = {
  hero: {
    content: {
      eyebrow: "Správa a servis",
      heading: "Web nekončí dnem spuštění.",
      description:
        "Obsah se mění, vznikají nové služby a občas se něco rozbije. Průběžná péče drží web použitelný bez velkého předělávání.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Průběžná péče",
      steps: [
        {
          title: "Úpravy",
          description: "Obsahové a drobné funkční změny.",
        },
        {
          title: "Opravy",
          description: "Řešení technických problémů.",
        },
        {
          title: "Rozvoj",
          description: "Postupné zlepšování podle potřeby.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o správě přemýšlím",
      heading: "Nejdřív potřeba. Potom nejmenší smysluplný zásah.",
      description:
        "Ne každá změna potřebuje nový projekt. Servis má udržet web funkční a aktuální.",
    },
    visual: {
      steps: [
        {
          title: "Podnět",
          description: "Co se změnilo nebo nefunguje?",
          icon: LuMessageSquare,
        },
        {
          title: "Dopad",
          description: "Co je potřeba upravit?",
          icon: LuClipboardCheck,
        },
        {
          title: "Zásah",
          description: "Jaká je nejmenší vhodná změna?",
          icon: LuWrench,
        },
        {
          title: "Kontrola",
          description: "Funguje web po úpravě správně?",
          icon: LuShieldCheck,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Menší změny bez zbytečného projektu.",
      description:
        "Servis má držet web aktuální a funkční, ne vytvářet další administrativu.",
    },
    visual: {
      items: [
        {
          title: "Rychlejší změny",
          description: "Menší úpravy mají kratší cestu k realizaci.",
          icon: LuDiamond,
        },
        {
          title: "Kontinuita",
          description: "Nemusíte pokaždé vysvětlovat web novému člověku.",
          icon: LuArrowUpRight,
        },
        {
          title: "Postupný rozvoj",
          description: "Web lze zlepšovat podle skutečných potřeb.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading:
        "Cena závisí na typu a rozsahu konkrétního zásahu nebo domluvené péče.",
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
          title: "Požadavek",
          description: "Popíšete změnu nebo problém.",
        },
        {
          title: "Posouzení",
          description: "Určím rozsah a návaznosti.",
        },
        {
          title: "Úprava",
          description: "Změnu provedu a ověřím.",
        },
        {
          title: "Další péče",
          description: "Podle potřeby pokračujeme dalšími úpravami.",
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
          "Proč bych měl/a platit za měsíční správu, když je web nebo aplikace nově hotová?",
        answer:
          "I nový web může časem potřebovat aktualizace, technické úpravy nebo řešení nečekaných problémů. Pravidelná správa pomáhá udržovat web funkční, bezpečný a aktuální. Rozsah péče ale závisí na použité technologii a skutečných potřebách projektu. Ne každý web vyžaduje měsíční paušál.",
      },
      {
        question: "Co se stane, když si měsíční servis platit nebudu?",
        answer:
          "Web bude dál fungovat i bez servisní smlouvy. To ale neznamená, že nebude nikdy potřebovat údržbu. Některé technologie vyžadují pravidelné aktualizace a časem se mohou objevit chyby nebo bezpečnostní problémy. Pokud pravidelný servis nepotřebujete, můžeme případné úpravy a opravy řešit jednotlivě.",
      },
      {
        question: "Co přesně je v měsíčním paušálu zahrnuto?",
        answer:
          "Záleží na dohodnutém rozsahu spolupráce. Může zahrnovat technické aktualizace, kontrolu funkčnosti, zálohování, řešení problémů nebo určitý rozsah drobných úprav. Před zahájením si přesně stanovíme, co je součástí servisu a které práce se účtují samostatně.",
      },
      {
        question: "Jak rychle vyřešíte problém, když web nebo aplikace spadne?",
        answer:
          "Záleží na závažnosti problému a sjednaných podmínkách podpory. Kritické výpadky mají vyšší prioritu než běžné obsahové úpravy. Konkrétní reakční dobu a způsob řešení si můžeme předem dohodnout. Bez samostatné dohody ale negarantujeme nepřetržitou dostupnost podpory ani okamžité odstranění závady.",
      },
      {
        question:
          "Co se stane s hodinami z balíčku, které v daném měsíci nevyčerpám?",
        answer:
          "Způsob čerpání hodin závisí na sjednaném servisním balíčku. Předem si určíme, zda se nevyužité hodiny převádějí do dalšího období, nebo zda platí pouze pro daný měsíc. Budete tak přesně vědět, za co platíte a jak můžete sjednanou kapacitu využít.",
      },
      {
        question:
          "Jsem vázán/a nějakou dlouhodobou smlouvou? Jak mohu servis zrušit?",
        answer:
          "Podmínky spolupráce, délku jejího trvání i možnosti ukončení si stanovíme předem. Cílem není držet vás ve službě, kterou nepotřebujete. Pokud se rozhodnete servis ukončit, postupujeme podle sjednaných podmínek a domluvíme případné předání potřebných informací.",
      },
      {
        question: "Musíte být autorem původního webu?",
        answer:
          "Ne. Mohu se postarat i o web, který vytvořil někdo jiný. Nejdříve ale potřebuji zjistit, na jaké technologii funguje, v jakém je technickém stavu a zda mám k dispozici potřebné přístupy. Na základě toho posoudím, jaké úpravy nebo servis mohu zajistit.",
      },
      {
        question: "Lze servis kombinovat s větším redesignem?",
        answer:
          "Ano. Pokud během správy zjistíme, že jednotlivé úpravy už nestačí, můžeme společně naplánovat rozsáhlejší změny. Běžný servis a redesign pak oddělíme podle rozsahu, ceny a harmonogramu, abyste měli jasný přehled o obou částech spolupráce.",
      },
    ],
  },

  cta: {
    eyebrow: "Další krok",
    heading: "Potřebuje web spíš péči než další velký redesign?",
    description:
      "Pošlete mi, co se má změnit, a určíme nejmenší smysluplný zásah.",
  },
} satisfies ServiceDetailData;
