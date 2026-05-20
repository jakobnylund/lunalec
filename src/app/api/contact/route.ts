import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO ?? "info@lunalec.com";
const FROM = process.env.CONTACT_FROM ?? "LunaLEC <noreply@lunalec.com>";

const isString = (value: unknown): value is string => typeof value === "string";

const sanitize = (value: string, maxLength: number) =>
  value.trim().slice(0, maxLength);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, interest, message, website } = body as Record<
    string,
    unknown
  >;

  // Honeypot — bots fill the hidden `website` field; pretend to succeed.
  if (isString(website) && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!isString(name) || !isString(email) || !isString(message)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const cleanName = sanitize(name, 120);
  const cleanEmail = sanitize(email, 200);
  const cleanCompany = isString(company) ? sanitize(company, 200) : "";
  const cleanInterest = isString(interest) ? sanitize(interest, 60) : "";
  const cleanMessage = sanitize(message, 5000);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !cleanName ||
    !cleanEmail ||
    !cleanMessage ||
    !emailPattern.test(cleanEmail)
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const textLines = [
    `Name: ${cleanName}`,
    `Email: ${cleanEmail}`,
    cleanCompany ? `Company: ${cleanCompany}` : null,
    cleanInterest ? `Area of interest: ${cleanInterest}` : null,
    "",
    cleanMessage,
  ].filter(Boolean);

  const html = `
    <div style="font-family:Geist,system-ui,sans-serif;font-size:15px;line-height:1.6;color:#1a1a1a;">
      <p style="margin:0 0 16px;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;color:#6a6a6a;">New contact form submission</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:4px 12px 4px 0;color:#6a6a6a;">Name</td><td style="padding:4px 0;"><strong>${escapeHtml(cleanName)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6a6a6a;">Email</td><td style="padding:4px 0;"><a href="mailto:${escapeHtml(cleanEmail)}" style="color:#4c2ee5;">${escapeHtml(cleanEmail)}</a></td></tr>
        ${cleanCompany ? `<tr><td style="padding:4px 12px 4px 0;color:#6a6a6a;">Company</td><td style="padding:4px 0;">${escapeHtml(cleanCompany)}</td></tr>` : ""}
        ${cleanInterest ? `<tr><td style="padding:4px 12px 4px 0;color:#6a6a6a;">Interest</td><td style="padding:4px 0;">${escapeHtml(cleanInterest)}</td></tr>` : ""}
      </table>
      <div style="border-top:1px solid #e8e8e8;padding-top:16px;white-space:pre-wrap;">${escapeHtml(cleanMessage)}</div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: cleanEmail,
      subject: `New contact form submission${cleanCompany ? ` — ${cleanCompany}` : ""}`,
      text: textLines.join("\n"),
      html,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message ?? "Could not send your message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }
}
