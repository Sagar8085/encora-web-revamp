import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.company) return NextResponse.json({ ok: true }); // honeypot

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const org = String(body.org || "").trim();
    const useCase = String(body.useCase || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message)
      return new NextResponse("Missing required fields", { status: 400 });
    if (!/.+@.+\..+/.test(email))
      return new NextResponse("Invalid email", { status: 400 });

    const to = process.env.CONTACT_TO || "tedw@encora.co";
    const from = process.env.CONTACT_FROM || "noreply@encora.co";
    const apiKey = process.env.RESEND_API_KEY;

    try {
      if (apiKey) {
        const { Resend } = await import("resend");
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from,
          to,
          subject: `New contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nOrg: ${org}\nUse case: ${useCase}\n\n${message}`,
        });
      } else {
        console.log("[contact]", { name, email, org, useCase, message });
      }
    } catch (err) {
      console.error("send_failed", err);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return new NextResponse("Bad request", { status: 400 });
  }
}
