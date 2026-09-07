"use client";

import { useEffect, useState } from "react";
import { applyConsent, getStoredConsent, storeConsent } from "@/lib/consent";

export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);

    function handleOpen() {
      setVisible(true);
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen);
    return () =>
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen);
  }, []);

  function handleChoice(analytics: boolean) {
    const consent = { analytics, ads: analytics };
    storeConsent(consent);
    applyConsent(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-6 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm text-foreground/80 md:text-left">
          Uso cookie tecnici e, solo con il tuo consenso, cookie di analisi e
          pubblicità per capire come viene usato il sito.{" "}
          <a href="/privacy" className="underline hover:text-pink-dark">
            Scopri di più
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="rounded-full bg-pink px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-pink-dark"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
