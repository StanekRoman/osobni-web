import { IconType } from "react-icons";
import { LuCircleDot, LuSquare, LuArrowUpRight } from "react-icons/lu";

export type Benefit = {
  icon: IconType;
  title: string;
  description: string;
  background: string;
  color: string;
};

export const benefits: Benefit[] = [
  {
    icon: LuCircleDot,
    title: "Lepší první dojem",
    description: "Přehledná a jasná prezentace",
    background: "#F5F1FF",
    color: "#7C3AED",
  },
  {
    icon: LuSquare,
    title: "Více poptávek",
    description: "Díky srozumitelnému obsahu",
    background: "#DCFCE7",
    color: "#15803D",
  },
  {
    icon: LuArrowUpRight,
    title: "Dlouhodobě funkční",
    description: "Snadná správa a rozvoj",
    background: "#F5F1FF",
    color: "#7C3AED",
  },
];
