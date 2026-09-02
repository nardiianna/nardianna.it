import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, company } = body as {
    name?: string;
    email?: string;
    message?: string;
    company?: string; // honeypot: real users never fill this
  };

  // Bots that fill the honeypot get a fake success, no email is sent.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Compila tutti i campi." },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const contactTo = process.env.CONTACT_TO_EMAIL ?? "annanardi99@gmail.com";

  if (!gmailUser || !gmailAppPassword) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
    return NextResponse.json(
      { ok: false, error: "Servizio email non configurato." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Nardi Creates - Sito web" <${gmailUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `Nuova richiesta dal sito da ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { ok: false, error: "Invio non riuscito, riprova più tardi." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
