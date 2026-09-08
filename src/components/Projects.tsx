import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const PROJECT = {
  label: "nardifederico.it",
  title: "Sito portfolio",
  description:
    "Sito portfolio professionale, semplice, raffinato e d'impatto — progettato e sviluppato su misura, dal design alla pubblicazione.",
  href: "https://www.nardifederico.it",
  image: "/images/project-nardifederico.png",
};

export default function Projects() {
  return (
    <section id="progetti" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          Un progetto realizzato
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          Design su misura, dal primo pixel alla pubblicazione.
        </h2>

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-md shadow-black/5 md:grid-cols-2 md:items-stretch">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src={PROJECT.image}
              alt={PROJECT.label}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="p-8 text-left md:p-10">
            <span className="inline-block rounded-md bg-pink-soft px-3 py-1 text-xs font-medium text-foreground/80">
              {PROJECT.label}
            </span>
            <h3 className="mt-5 font-serif text-2xl text-foreground">
              {PROJECT.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {PROJECT.description}
            </p>
            <a
              href={PROJECT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-pink-dark hover:text-pink"
            >
              Scopri di più
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
