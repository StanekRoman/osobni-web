import type { SeoConfig } from "./seo";

export const seoData = {
  home: {
    title: "Tvorba webů, aplikací a automatizací",
    description:
      "Tvořím moderní webové stránky, webové aplikace a automatizace pro firmy a podnikatele. Pomohu vám získat zákazníky a zjednodušit každodenní práci.",
    path: "/",
  },

  services: {
    title: "Služby",
    description:
      "Od tvorby webových stránek a aplikací přes redesign až po automatizace a správu webu. Prohlédněte si služby a zjistěte, s čím vám mohu pomoci.",
    path: "/sluzby",
  },

  about: {
    title: "O mně",
    description:
      "Jsem Roman Staněk a věnuji se tvorbě webových stránek, aplikací a automatizací. Poznejte můj přístup k vývoji a spolupráci s klienty.",
    path: "/o-mne",
  },

  contact: {
    title: "Kontakt",
    description:
      "Potřebujete nový web, aplikaci nebo automatizaci? Kontaktujte mě a společně probereme vaše potřeby a možnosti spolupráce.",
    path: "/kontakt",
  },

  inquiry: {
    title: "Nezávazná poptávka",
    description:
      "Máte nápad na nový web, aplikaci nebo automatizaci? Pošlete mi nezávaznou poptávku. Nemusíte mít hotové zadání ani znát technické detaily.",
    path: "/nezavazne-poptat",
  },

  serviceDetails: {
    "tvorba-webu": {
      title: "Tvorba webových stránek",
      description:
        "Vytvořím vám moderní, rychlé a přehledné webové stránky, které představí vaše služby, posílí důvěryhodnost a pomohou získávat zákazníky.",
      path: "/sluzby/tvorba-webu",
    },

    "webove-aplikace": {
      title: "Vývoj webových aplikací",
      description:
        "Vyvíjím webové aplikace a interní systémy na míru. Digitalizujte firemní procesy, zjednodušte práci s daty a získejte nástroje podle svých potřeb.",
      path: "/sluzby/webove-aplikace",
    },

    "redesign-webu": {
      title: "Redesign webových stránek",
      description:
        "Proměňte zastaralý web v moderní a přehlednou prezentaci. Redesign zaměřený na použitelnost, důvěryhodnost a lepší cestu zákazníka ke kontaktu.",
      path: "/sluzby/redesign-webu",
    },

    "sprava-a-servis": {
      title: "Správa a servis webu",
      description:
        "Postarám se o technickou správu, úpravy a průběžný rozvoj vašeho webu. Získejte spolehlivou podporu bez nutnosti řešit technické záležitosti.",
      path: "/sluzby/sprava-a-servis",
    },

    "automatizace-a-nastroje": {
      title: "Automatizace a digitální nástroje",
      description:
        "Automatizuji opakující se úkoly, propojuji systémy a vytvářím praktické nástroje na míru. Ušetřete čas a omezte zbytečnou ruční práci.",
      path: "/sluzby/automatizace-a-nastroje",
    },

    "doplnkove-sluzby": {
      title: "Doplňkové webové služby",
      description:
        "Potřebujete menší úpravu webu, technickou konzultaci nebo pomoc s konkrétním problémem? Nabízím také doplňkové služby podle vašich potřeb.",
      path: "/sluzby/doplnkove-sluzby",
    },
  },
} satisfies {
  home: SeoConfig;
  services: SeoConfig;
  about: SeoConfig;
  contact: SeoConfig;
  inquiry: SeoConfig;
  serviceDetails: Record<string, SeoConfig>;
};
