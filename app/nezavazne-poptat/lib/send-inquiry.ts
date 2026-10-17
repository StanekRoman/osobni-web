import { Resend } from "resend";
import type { InquiryData } from "./inquiry-schema";

const FROM = "Poptávky | Roman Staněk <poptavky@stanek-roman.cz>";
const TO = "info@stanek-roman.cz";

export async function sendInquiry(data: InquiryData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);

  const { data: result, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: "Nová nezávazná poptávka z webu",
    text: [
      "Nová poptávka z webu stanek-roman.cz",
      "",
      `Jméno: ${data.name}`,
      `E-mail: ${data.email}`,
      `Telefon: ${data.phone || "Neuveden"}`,
      "",
      "Zpráva:",
      data.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend error: ${error.name}`);
  }

  if (!result?.id) {
    throw new Error("Resend did not return an email ID");
  }

  return result.id;
}
