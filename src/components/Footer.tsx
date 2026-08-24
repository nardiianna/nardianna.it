import Logo from "./Logo";

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

        <p className="text-xs text-foreground/50">
          © {new Date().getFullYear()} Nardi Creates. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
