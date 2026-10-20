export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "seznameni-a-cile",
    title: "Seznámení a cíle",
    description: "Probereme vaše podnikání, požadavky a očekávaný výsledek.",
  },
  {
    id: "navrh-reseni",
    title: "Návrh řešení",
    description: "Připravím vhodný rozsah, strukturu a postup realizace.",
  },
  {
    id: "vyvoj-a-testovani",
    title: "Vývoj a testování",
    description:
      "Vytvořím funkční řešení, otestuji ho a připravím ke spuštění.",
  },
  {
    id: "spusteni-a-pece",
    title: "Spuštění a péče",
    description:
      "Projekt spustím a podle potřeby zajistím další správu a rozvoj.",
  },
];
