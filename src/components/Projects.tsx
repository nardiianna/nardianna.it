import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const PROJECTS = [
  {
    label: "nardifederico.it",
    title: "Sito portfolio",
    description:
      "Sito portfolio professionale, semplice, raffinato e d'impatto — progettato e sviluppato su misura, dal design alla pubblicazione.",
    href: "https://www.nardifederico.it",
    image: "/images/project-nardifederico.png",
  },
  {
    label: "epilsystem.it",
    title: "Centro di fotoepilazione",
    description:
      "Sito per un centro specializzato in fotoepilazione laser: presenta metodo, sedi e fondatori e porta le persone a prenotare una consulenza.",
    href: "https://www.epilsystem.it",
    image: "/images/project-epilsystem.png",
  },
  {
    label: "samanthabeautyboutique.it",
    title: "Centro estetico",
    description:
      "Sito vetrina per centro estetico, pensato per presentare trattamenti e prodotti e facilitare la prenotazione online.",
    href: "https://www.samanthabeautyboutique.it",
    image: "/images/project-beautyboutique.png",
  },
  {
    label: "praticaenea.nardifederico.it",
    title: "Gestione pratiche ENEA",
    description:
      "Sito di servizio per la gestione delle pratiche ENEA aziendali, dalla richiesta informazioni all'area riservata partner.",
    href: "https://praticaenea.nardifederico.it",
    image: "/images/project-praticaenea.png",
  },
];

export default function Projects() {
  return (
    <section id="progetti" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          Progetti realizzati
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          Design su misura, dal primo pixel alla pubblicazione.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <a
              key={project.label}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white text-left shadow-md shadow-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-black/[0.06]">
                <Image
                  src={project.image}
                  alt={project.label}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="self-start rounded-md bg-pink-soft px-3 py-1 text-xs font-medium text-foreground/80">
                  {project.label}
                </span>
                <h3 className="mt-4 font-serif text-xl text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-pink-dark group-hover:text-pink">
                  Scopri di più
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
