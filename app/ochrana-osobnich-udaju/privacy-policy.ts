export interface PrivacyPolicyParagraph {
  text: string;
}

export interface PrivacyPolicySection {
  id: string;
  title: string;
  paragraphs?: PrivacyPolicyParagraph[];
  items?: string[];
  footer?: string;
}

export const privacyPolicy = {
  title: "Ochrana osobních údajů",
  introduction: "Informace o zpracování osobních údajů",
};

export const privacyPolicySections: PrivacyPolicySection[] = [
  {
    id: "spravce",
    title: "Správce osobních údajů",
    paragraphs: [
      {
        text: "Správcem osobních údajů je Roman Staněk, IČO: 24576468, se sídlem Ivana Olbrachta 110, 273 08 Pchery.",
      },
      {
        text: "V případě dotazů mě můžete kontaktovat na e-mailu info@stanek-roman.cz.",
      },
    ],
  },
  {
    id: "zpracovavane-udaje",
    title: "Jaké osobní údaje zpracovávám?",
    paragraphs: [
      {
        text: "Při využívání mých služeb mohu zpracovávat následující osobní údaje:",
      },
    ],
    items: [
      "Jméno",
      "E-mailovou adresu",
      "Telefonní číslo",
      "Informace uvedené v poptávkovém formuláři",
      "Obsah vzájemné komunikace a případných příloh",
    ],
  },
  {
    id: "ucel-zpracovani",
    title: "Účel zpracování osobních údajů",
    paragraphs: [
      {
        text: "Vaše osobní údaje zpracovávám za účelem vyřízení poptávek, vzájemné komunikace, poskytování služeb a plnění smluvních či zákonných povinností.",
      },
      {
        text: "Osobní údaje zpracovávám na základě plnění smlouvy a předsmluvních opatření, oprávněného zájmu a zákonných povinností.",
      },
    ],
    items: [
      "Plnění smlouvy a předsmluvních opatření – pokud poptáváte nebo využíváte mé služby.",
      "Oprávněný zájem – například při vyřizování běžné komunikace a zajištění bezpečného provozu webu.",
      "Zákonné povinnosti – například při vedení účetní dokumentace.",
    ],
  },
  {
    id: "predavani-udaju",
    title: "Komu mohou být údaje předány?",
    paragraphs: [
      {
        text: "Vaše osobní údaje mohou být zpřístupněny následujícím kategoriím příjemců:",
      },
    ],
    items: [
      "Poskytovatelům webhostingu a technické infrastruktury",
      "Poskytovatelům e-mailových a komunikačních služeb",
      "Osobám zajišťujícím účetní, právní nebo jiné nezbytné odborné služby",
    ],
    footer:
      "Při využívání některých služeb může docházet k předávání údajů mimo Evropský hospodářský prostor. Takové předávání podléhá příslušným pravidlům GDPR.",
  },
  {
    id: "uchovavani",
    title: "Doba uchovávání osobních údajů",
    paragraphs: [
      {
        text: "Osobní údaje uchovávám pouze po dobu nezbytnou k vyřízení poptávky, plnění smlouvy a splnění zákonných povinností.",
      },
      {
        text: "Poptávky, ze kterých nevznikne spolupráce, uchovávám nejdéle 6 měsíců od poslední relevantní komunikace.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies a analytika",
    paragraphs: [
      {
        text: "Na tomto webu nepoužívám analytické ani marketingové sledovací nástroje. Pro jeho provoz mohou být využívány pouze technicky nezbytné mechanismy.",
      },
    ],
  },
  {
    id: "prava",
    title: "Vaše práva podle GDPR",
    paragraphs: [
      {
        text: "Podle nařízení GDPR máte za stanovených podmínek právo:",
      },
    ],
    items: [
      "Požadovat přístup ke svým osobním údajům",
      "Požadovat opravu nepřesných údajů",
      "Požadovat výmaz osobních údajů",
      "Požadovat omezení zpracování",
      "Získat údaje ve strukturovaném formátu a předat je jinému správci (právo na přenositelnost)",
      "Vznést námitku proti zpracování na základě oprávněného zájmu",
      "Podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.gov.cz)",
    ],
  },
  {
    id: "kontakt",
    title: "Kontaktní údaje",
    paragraphs: [
      {
        text: "V případě dotazů nebo žádostí týkajících se osobních údajů mě můžete kontaktovat:",
      },
      {
        text: "Roman Staněk – info@stanek-roman.cz",
      },
    ],
  },
];
