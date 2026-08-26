"use client";

import { useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#servizi", label: "Servizi" },
  { href: "#progetti", label: "Progetti" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#pacchetto-lancio", label: "Pacchetto lancio" },
  { href: "#contatti", label: "Contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide uppercase">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-pink-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contatti"
          className="hidden md:inline-flex items-center rounded-full bg-pink px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white hover:bg-pink-dark transition-colors"
        >
          Lavora con me
        </a>

        <button
          type="button"
          className="md:hidden text-foreground"
          aria-label="Apri il menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 text-sm uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-foreground/80 hover:text-pink-dark"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="mt-2 inline-flex w-fit items-center rounded-full bg-pink px-6 py-2.5 font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Lavora con me
          </a>
        </nav>
      )}
    </header>
  );
}
