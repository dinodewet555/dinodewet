import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, business, projectType, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: "dinodewet555@gmail.com",
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
          <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666">Business</td><td style="padding:8px 0">${business || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Project Type</td><td style="padding:8px 0">${projectType || "—"}</td></tr>
        </table>
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
        <h3 style="margin:0 0 8px">Message</h3>
        <p style="white-space:pre-wrap;margin:0">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
