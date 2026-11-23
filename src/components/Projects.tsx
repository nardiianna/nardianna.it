"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const arrowClass =
    "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/[0.08] bg-white text-pink-dark shadow-md shadow-black/10 transition hover:text-pink disabled:pointer-events-none disabled:opacity-0 md:flex";

  return (
    <section id="progetti" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          Progetti realizzati
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          Design su misura, dal primo pixel alla pubblicazione.
        </h2>

        <div className="relative mt-14">
          <div
            ref={trackRef}
            onScroll={updateArrows}
            className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-6 pb-4 pt-2 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
            aria-roledescription="carosello"
          >
          {PROJECTS.map((project) => (
            <a
              key={project.label}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white text-left shadow-md shadow-black/5 transition hover:-translate-y-1 hover:shadow-lg sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
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

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Progetti precedenti"
            className={`${arrowClass} left-0 -translate-x-1/2`}
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Progetti successivi"
            className={`${arrowClass} right-0 translate-x-1/2`}
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>

        <Link
          href="/progetti"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-pink px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-pink-dark transition-colors hover:bg-pink hover:text-white"
        >
          Vedi tutti i progetti
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
