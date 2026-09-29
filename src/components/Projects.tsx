"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (index + PROJECTS.length) % PROJECTS.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section id="progetti" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          Progetti realizzati
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          Design su misura, dal primo pixel alla pubblicazione.
        </h2>

        <div className="relative mt-14">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-roledescription="carosello"
          >
          {PROJECTS.map((project, i) => (
            <div
              key={project.label}
              className="w-full shrink-0 snap-center px-1 pb-4"
              aria-roledescription="slide"
              aria-label={`${i + 1} di ${PROJECTS.length}`}
            >
            <div
              className="grid h-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-md shadow-black/5 md:grid-cols-2 md:items-stretch"
            >
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={project.image}
                  alt={project.label}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8 text-left md:p-10">
                <span className="inline-block rounded-md bg-pink-soft px-3 py-1 text-xs font-medium text-foreground/80">
                  {project.label}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {project.description}
                </p>
                <a
                  href={project.href}
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
          ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Progetto precedente"
            className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/[0.08] bg-white text-pink-dark shadow-md shadow-black/10 hover:text-pink md:flex"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Progetto successivo"
            className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-black/[0.08] bg-white text-pink-dark shadow-md shadow-black/10 hover:text-pink md:flex"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {PROJECTS.map((project, i) => (
              <button
                key={project.label}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Vai a ${project.label}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-pink-dark" : "w-2 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
