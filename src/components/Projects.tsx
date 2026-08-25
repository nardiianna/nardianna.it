import { ArrowRightIcon } from "./icons";

const PROJECTS = [
  {
    label: "@magnetica_design",
    title: "Presenza Social",
    description: "Gestione della presenza Instagram per un brand di design di prodotto.",
    href: "https://www.instagram.com/magnetica_design/",
    gradient: "from-[#efe0d3] to-[#e3c9a8]",
  },
  {
    label: "nardifederico.it",
    title: "Sito portfolio",
    description: "Sito portfolio professionale, semplice, raffinato e d'impatto.",
    href: "https://www.nardifederico.it",
    gradient: "from-[#2b2b2b] to-[#565656]",
  },
  {
    label: "WhiteTime",
    title: "Web App personalizzata",
    description: "Web app su misura per la pianificazione di contenuti e promemoria.",
    href: "https://whitetime.nardianna.it",
    gradient: "from-[#f4d7de] to-[#e6a3b0]",
  },
];

export default function Projects() {
  return (
    <section id="progetti" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          I miei progetti
        </p>
        <h2 className="mx-auto mt-3 font-serif text-3xl text-foreground sm:text-4xl">
          Design su misura. Risultati reali.
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.title} className="text-left">
              <div
                className={`flex aspect-[4/3] items-end rounded-xl bg-gradient-to-br p-4 shadow-md ${project.gradient}`}
              >
                <span className="rounded-md bg-white/85 px-3 py-1 text-xs font-medium text-foreground/80">
                  {project.label}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-lg text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {project.description}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-pink-dark hover:text-pink"
              >
                Scopri di più
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
