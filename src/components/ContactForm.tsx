"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Invio non riuscito.");
      }

      router.push("/grazie");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Qualcosa è andato storto. Riprova o scrivimi direttamente via email.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-3"
    >
      {/* Honeypot field, hidden from real users via CSS */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <input
        type="text"
        name="name"
        placeholder="Nome"
        required
        className="rounded-full border border-foreground/15 bg-white px-5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-pink focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="rounded-full border border-foreground/15 bg-white px-5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-pink focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Raccontami la tua idea..."
        required
        rows={3}
        className="rounded-2xl border border-foreground/15 bg-white px-5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-pink focus:outline-none"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-pink px-7 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-pink-dark disabled:opacity-60"
      >
        {status === "sending" ? "Invio in corso..." : "Invia richiesta"}
      </button>

      {status === "error" && (
        <p className="text-sm text-pink-dark">{errorMessage}</p>
      )}
    </form>
  );
}
