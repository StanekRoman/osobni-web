export type NavigationItem = {
  label: string;
  href: string;
  children?: readonly NavigationItem[];
};

export const navigation = [
  {
    label: "Domů",
    href: "/",
  },
  {
    label: "Služby",
    href: "/sluzby",
    children: [
      {
        label: "Tvorba webů",
        href: "/sluzby/tvorba-webu",
      },
      {
        label: "Webové apliakce",
        href: "/sluzby/webove-aplikace",
      },
      {
        label: "Redesign webu",
        href: "/sluzby/redesign-webu",
      },
      {
        label: "Správa a servis",
        href: "/sluzby/sprava-a-servis",
      },
      {
        label: "Automatizace a nástroje",
        href: "/sluzby/automatizace-a-nastroje",
      },
      {
        label: "Doplňkové služby",
        href: "/sluzby/doplnkove-sluzby",
      },
    ],
  },
  {
    label: "O mně",
    href: "/o-mne",
  },
] satisfies readonly NavigationItem[];

export const headerCta = {
  label: "Kontakt",
  href: "/kontakt",
} as const;
