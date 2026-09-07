import Logo from "./Logo";
import CookieSettingsButton from "./CookieSettingsButton";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#servizi", label: "Servizi" },
  { href: "#progetti", label: "Progetti" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#contatti", label: "Contatti" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <span className="text-lg">
          <Logo />
        </span>

        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wide text-foreground/70">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-pink-dark">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 text-xs text-foreground/50 md:items-end">
          <p>
            © {new Date().getFullYear()} Nardi Creates. Tutti i diritti
            riservati.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="underline hover:text-pink-dark">
              Privacy &amp; Cookie
            </a>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
