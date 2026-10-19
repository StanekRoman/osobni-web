import { Resend } from "resend";
import type { InquiryData } from "./inquiry-schema";

const FROM = "Poptávky | Roman Staněk <poptavky@stanek-roman.cz>";
const TO = "info@stanek-roman.cz";

type InquiryAttachment = {
  filename: string;
  content: Buffer;
};

const SERVICE_LABELS: Record<InquiryData["serviceType"], string> = {
  web: "Tvorba webů",
  app: "Webová aplikace",
  redesign: "Redesign",
  maintenance: "Správa",
  automation: "Automatizace",
  additional: "Doplňkové služby",
  consultation: "Konzultace",
  unknown: "Nevím",
};

const BUDGET_LABELS: Record<
  Exclude<NonNullable<InquiryData["budget"]>, "">,
  string
> = {
  "under-15k": "Do 15 000 Kč",
  "15-30k": "15 000–30 000 Kč",
  "30-50k": "30 000–50 000 Kč",
  "50k-plus": "Nad 50 000 Kč",
};

export async function sendInquiry(
  data: Omit<InquiryData, "website">,
  attachment?: InquiryAttachment,
) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);

  const budget =
    data.budget && data.budget in BUDGET_LABELS
      ? BUDGET_LABELS[data.budget as keyof typeof BUDGET_LABELS]
      : "Neuveden";

  const emailText = [
    "Nová poptávka z webu stanek-roman.cz",
    "",
    "KONTAKTNÍ ÚDAJE",
    `Jméno: ${data.name}`,
    `E-mail: ${data.email}`,
    `Telefon: ${data.phone || "Neuveden"}`,
    "",
    "INFORMACE O PROJEKTU",
    `Typ služby: ${SERVICE_LABELS[data.serviceType]}`,
    `Orientační rozpočet: ${budget}`,
    `Současný web: ${data.websiteUrl || "Neuveden"}`,
    `Požadovaný termín: ${data.timeframe || "Neuveden"}`,
    "",
    "POPIS PROJEKTU",
    data.message,
    "",
    `Příloha: ${attachment?.filename || "Bez přílohy"}`,
  ].join("\n");

  const { data: result, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `Nová poptávka – ${SERVICE_LABELS[data.serviceType]}`,
    text: emailText,
    ...(attachment
      ? {
          attachments: [
            {
              filename: attachment.filename,
              content: attachment.content,
            },
          ],
        }
      : {}),
  });

  if (error) {
    throw new Error(`Resend error: ${error.name}`);
  }

  if (!result?.id) {
    throw new Error("Resend did not return an email ID");
  }

  return result.id;
}
