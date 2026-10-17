import { NextResponse } from "next/server";
import { inquirySchema } from "../../nezavazne-poptat/lib/inquiry-schema";
import { sendInquiry } from "../../nezavazne-poptat/lib/send-inquiry";

export const runtime = "nodejs";

const MAX_BODY_SIZE = 16_384;

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().startsWith("application/json")) {
      return NextResponse.json(
        { error: "Nepodporovaný formát požadavku." },
        { status: 415 },
      );
    }

    const contentLength = Number(request.headers.get("content-length") ?? 0);

    if (contentLength > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: "Požadavek je příliš velký." },
        { status: 413 },
      );
    }

    const rawBody = await request.text();

    if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: "Požadavek je příliš velký." },
        { status: 413 },
      );
    }

    let body: unknown;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "Neplatný formát dat." },
        { status: 400 },
      );
    }

    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Zkontrolujte vyplněné údaje." },
        { status: 400 },
      );
    }

    const { website, ...inquiry } = parsed.data;

    if (website) {
      return NextResponse.json({ success: true });
    }

    await sendInquiry(inquiry);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "Inquiry submission failed:",
      error instanceof Error ? error.name : "UnknownError",
    );

    return NextResponse.json(
      { error: "Poptávku se nepodařilo odeslat. Zkuste to prosím znovu." },
      { status: 500 },
    );
  }
}
