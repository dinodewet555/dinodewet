import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 120, email: 160, business: 160, projectType: 80, message: 5000 };

// Escape user-supplied text before interpolating into the HTML email body so a
// message can't inject markup or break the layout.
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const business = String(body.business ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const message = String(body.message ?? "").trim();
  // Honeypot: real users never fill a hidden field. Bots that do get a silent 200.
  const honeypot = String(body.company_website ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    business.length > MAX.business ||
    projectType.length > MAX.projectType ||
    message.length > MAX.message
  ) {
    return NextResponse.json({ error: "One or more fields are too long" }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Contact form: missing GMAIL_USER / GMAIL_APP_PASSWORD env vars");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name.replace(/"/g, "")}" <${process.env.GMAIL_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business || "—"}`,
        `Project Type: ${projectType || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 16px">New Contact Enquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666">Business</td><td style="padding:8px 0">${escapeHtml(business) || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Project Type</td><td style="padding:8px 0">${escapeHtml(projectType) || "—"}</td></tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
          <h3 style="margin:0 0 8px">Message</h3>
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Contact form: sendMail failed", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
