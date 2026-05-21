import { NextRequest } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { ok: false, error: result.error.issues[0]?.message ?? "Validation failed" },
      { status: 422 }
    );
  }

  try {
    await sendContactNotification(result.data);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ ok: false, error: "Failed to send message" }, { status: 500 });
  }
}
