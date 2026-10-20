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
      heading: "Správa a servis webu, abyste se mohli věnovat podnikání.",
      description:
        "Postarám se o technické aktualizace, opravy, úpravy obsahu i postupný rozvoj vašeho webu. Nemusíte kvůli každé změně hledat nového dodavatele.",
      cta: {
        label: "Nezávazně poptat",
        href: "/nezavazne-poptat",
      },
    },
    visual: {
      title: "Průběžná péče",
      steps: [
        {
          title: "Aktualizace",
          description: "Technické aktualizace a úpravy obsahu.",
        },
        {
          title: "Opravy",
          description: "Řešení chyb a technických problémů.",
        },
        {
          title: "Rozvoj",
          description: "Nové funkce a vylepšení podle potřeby.",
        },
      ],
    },
  },

  approach: {
    content: {
      eyebrow: "Jak o správě přemýšlím",
      heading: "Pravidelná péče i jednorázové zásahy podle potřeby.",
      description:
        "Ne každý web potřebuje měsíční servis. Podle jeho technického stavu a vašich požadavků navrhnu vhodnou formu spolupráce, od jednotlivých úprav až po dlouhodobou správu.",
    },
    visual: {
      steps: [
        {
          title: "Požadavek",
          description: "Co potřebujete změnit nebo opravit?",
          icon: LuMessageSquare,
        },
        {
          title: "Posouzení",
          description: "Jaký zásah je potřeba a čeho se dotkne?",
          icon: LuClipboardCheck,
        },
        {
          title: "Realizace",
          description: "Provedu potřebné úpravy nebo opravy.",
          icon: LuWrench,
        },
        {
          title: "Kontrola",
          description: "Ověřím správné fungování po změně.",
          icon: LuShieldCheck,
        },
      ],
    },
  },

  benefits: {
    content: {
      eyebrow: "Co má řešení přinést",
      heading: "Aktuální obsah, technická funkčnost a průběžné zlepšování.",
      description:
        "Váš web se může měnit spolu s podnikáním. Pomohu vám udržovat jeho obsah, řešit technické problémy a postupně přidávat potřebná vylepšení.",
    },
    visual: {
      items: [
        {
          title: "Aktuální web",
          description:
            "Informace, nabídka a obsah odpovídají vašemu podnikání.",
          icon: LuDiamond,
        },
        {
          title: "Technická péče",
          description:
            "Aktualizace, opravy a kontrola funkčnosti podle dohodnutého rozsahu.",
          icon: LuArrowUpRight,
        },
        {
          title: "Postupný rozvoj",
          description:
            "Web lze průběžně vylepšovat bez nutnosti kompletního předělání.",
          icon: LuCheck,
        },
      ],
    },
  },

  pricing: {
    content: {
      eyebrow: "Cena a rozsah",
      heading: "Kolik stojí správa a servis webu?",
      description:
        "Podle rozsahu lze domluvit jednorázovou úpravu nebo dlouhodobější servis. Předem stanovíme, jaké práce budou zahrnuté, jak se budou účtovat a za jakých podmínek bude spolupráce probíhat.",
    },
    visual: {
      factors: [
        {
          title: "Typ spolupráce",
          description:
            "Jednorázová úprava, pravidelná údržba nebo dlouhodobý servis.",
        },
        {
          title: "Rozsah prací",
          description:
            "Jaké aktualizace, opravy a další činnosti bude potřeba zajistit.",
        },
        {
          title: "Technický stav",
          description:
            "Na jaké technologii web funguje a v jakém je aktuálně stavu.",
        },
      ],
    },
  },

  process: {
    content: {
      eyebrow: "Jak probíhá spolupráce",
      heading: "Od požadavku až po hotovou úpravu.",
      description:
        "Popíšete mi problém nebo požadovanou změnu. Posoudím rozsah práce, připravím návrh postupu a po odsouhlasení úpravu provedu a otestuji.",
    },
    visual: {
      steps: [
        {
          title: "Požadavek",
          description: "Popíšete, co potřebujete změnit nebo opravit.",
        },
        {
          title: "Posouzení",
          description: "Prověřím technický stav a upřesníme rozsah i cenu.",
        },
        {
          title: "Úprava a kontrola",
          description: "Změnu provedu a ověřím její správné fungování.",
        },
        {
          title: "Další péče",
          description:
            "Výsledek předám a podle potřeby se domluvíme na další spolupráci.",
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
    eyebrow: "Potřebujete pomoc se svým webem?",
    heading:
      "Potřebujete opravit, upravit nebo pravidelně spravovat web? Napište mi.",
    description:
      "Pošlete mi adresu webu a stručně popište, co potřebujete vyřešit. Navrhnu vhodný postup a možnosti spolupráce.",
  },
} satisfies ServiceDetailData;
