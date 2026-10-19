export const SERVICE_OPTIONS = [
  { value: "web", label: "Tvorba webů" },
  { value: "app", label: "Webová aplikace" },
  { value: "redesign", label: "Redesign" },
  { value: "maintenance", label: "Správa" },
  { value: "automation", label: "Automatizace" },
  { value: "additional", label: "Doplňkové služby" },
  { value: "consultation", label: "Konzultace" },
  { value: "unknown", label: "Nevím" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "", label: "Nevím / zatím nemám představu" },
  { value: "under-15k", label: "Do 15 000 Kč" },
  { value: "15-30k", label: "15 000–30 000 Kč" },
  { value: "30-50k", label: "30 000–50 000 Kč" },
  { value: "50k-plus", label: "Nad 50 000 Kč" },
] as const;

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const MAX_BODY_SIZE = 6 * 1024 * 1024;

export const ALLOWED_FILE_TYPES: Record<string, readonly string[]> = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "image/png": [".png"],
  "image/jpeg": [".jpg", ".jpeg"],
};

export const ATTACHMENT_ACCEPT = [
  ".pdf",
  ".docx",
  ".png",
  ".jpg",
  ".jpeg",
].join(",");

export const FIELD_ERROR_MESSAGES = {
  name: "Zadejte jméno alespoň o 2 znacích.",
  email: "Zadejte platnou e-mailovou adresu.",
  serviceType: "Vyberte typ služby.",
  message: "Popis projektu musí mít 10 až 5 000 znaků.",
  phone: "Telefon může mít maximálně 30 znaků.",
  budget: "Vyberte platné rozpočtové pásmo.",
  websiteUrl: "Zadejte platnou adresu.",
  timeframe: "Termín může mít maximálně 100 znaků.",
} as const;

export function getServiceLabel(value: string): string {
  return (
    SERVICE_OPTIONS.find((option) => option.value === value)?.label ??
    "Neuveden"
  );
}

export function getBudgetLabel(value?: string): string {
  return (
    BUDGET_OPTIONS.find((option) => option.value === value)?.label ?? "Neuveden"
  );
}
