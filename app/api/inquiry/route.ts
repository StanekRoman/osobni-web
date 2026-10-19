import { NextResponse } from "next/server";
import { inquirySchema } from "../../nezavazne-poptat/lib/inquiry-schema";
import { sendInquiry } from "../../nezavazne-poptat/lib/send-inquiry";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_BODY_SIZE = 6 * 1024 * 1024;

const ALLOWED_FILE_TYPES = new Map([
  ["application/pdf", [".pdf"]],
  [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    [".docx"],
  ],
  ["image/png", [".png"]],
  ["image/jpeg", [".jpg", ".jpeg"]],
]);

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().startsWith("multipart/form-data")) {
      return errorResponse("Nepodporovaný formát požadavku.", 415);
    }

    const contentLength = Number(request.headers.get("content-length") ?? 0);

    if (contentLength > MAX_BODY_SIZE) {
      return errorResponse("Požadavek je příliš velký.", 413);
    }

    const rawBody = await request.arrayBuffer();

    if (rawBody.byteLength > MAX_BODY_SIZE) {
      return errorResponse("Požadavek je příliš velký.", 413);
    }

    let formData: FormData;

    try {
      formData = await new Request(request.url, {
        method: "POST",
        headers: {
          "content-type": contentType,
        },
        body: rawBody,
      }).formData();
    } catch {
      return errorResponse("Neplatný formát dat.", 400);
    }

    const getString = (key: string) => {
      const value = formData.get(key);
      return typeof value === "string" ? value : undefined;
    };

    const body = {
      name: getString("name"),
      email: getString("email"),
      serviceType: getString("serviceType"),
      message: getString("message"),
      phone: getString("phone"),
      budget: getString("budget"),
      websiteUrl: getString("websiteUrl"),
      timeframe: getString("timeframe"),
      website: getString("website"),
    };

    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Zkontrolujte vyplněné údaje.", 400);
    }

    const { website, ...inquiry } = parsed.data;

    if (website) {
      return NextResponse.json({ success: true });
    }

    const attachmentValue = formData.get("attachment");
    let attachment:
      | {
          filename: string;
          content: Buffer;
        }
      | undefined;

    if (attachmentValue instanceof File && attachmentValue.size > 0) {
      if (attachmentValue.size > MAX_FILE_SIZE) {
        return errorResponse("Příloha může mít maximálně 5 MB.", 413);
      }

      const extension = attachmentValue.name
        .slice(attachmentValue.name.lastIndexOf("."))
        .toLowerCase();

      const allowedExtensions = ALLOWED_FILE_TYPES.get(attachmentValue.type);

      if (!allowedExtensions || !allowedExtensions.includes(extension)) {
        return errorResponse(
          "Povolené formáty příloh jsou PDF, DOCX, PNG a JPG.",
          400,
        );
      }

      attachment = {
        filename: attachmentValue.name,
        content: Buffer.from(await attachmentValue.arrayBuffer()),
      };
    }

    await sendInquiry(inquiry, attachment);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "Inquiry submission failed:",
      error instanceof Error ? error.name : "UnknownError",
    );

    return errorResponse(
      "Poptávku se nepodařilo odeslat. Zkuste to prosím znovu.",
      500,
    );
  }
}
