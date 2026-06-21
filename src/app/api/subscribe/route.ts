import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Lightweight newsletter signup. There is no ESP wired in, so a confirmed
// signup simply notifies the site owner via the same mail transport the contact
// form uses. Swap this body for an ESP API call when a real list exists.
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  // Honeypot — bots fill this, humans don't.
  const honeypot = String(body.company_website ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ success: true });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 160) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Subscribe: missing GMAIL_USER / GMAIL_APP_PASSWORD env vars");
    return NextResponse.json({ error: "Subscriptions are not configured" }, { status: 503 });
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
      from: `"Blog Subscriptions" <${process.env.GMAIL_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: "New blog subscriber",
      text: `New subscriber: ${email}`,
    });
  } catch (err) {
    console.error("Subscribe: sendMail failed", err);
    return NextResponse.json({ error: "Could not complete signup. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
