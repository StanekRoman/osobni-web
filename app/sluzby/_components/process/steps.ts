export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "cil-a-kontext",
    title: "Cíl a kontext",
    description: "Ujasníme, co má řešení změnit.",
  },
  {
    id: "smer",
    title: "Směr",
    description: "Vybereme nejvhodnější rozsah a podobu.",
  },
  {
    id: "realizace",
    title: "Realizace",
    description: "Návrh převedu do funkčního řešení.",
  },
  {
    id: "dalsi-pece",
    title: "Další péče",
    description: "Po spuštění lze pokračovat správou a rozvojem.",
  },
];
