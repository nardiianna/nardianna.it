import { HeartIcon } from "./icons";

export default function Mission() {
  return (
    <section id="chi-sono" className="marble-bg py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Distinguersi nel digitale: la mia missione
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Sono <strong className="font-semibold">Anna Nardi</strong>, digital
            strategist e web designer. Aiuto piccole attività, professionisti e
            personal brand a comunicare il proprio valore online con
            creatività, strategia e soluzioni digitali su misura.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm shadow-pink/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-pink/40">
            <path d="M7.5 6C4.5 6 2 8.5 2 11.5 2 14 4 16 6.5 16c.4 2.3-1 4.3-3 5.4 3.7.4 7-2 7.5-5.9.4-3-1-8-3.5-9.5ZM17 6c-3 0-5.5 2.5-5.5 5.5 0 2.5 2 4.5 4.5 4.5.4 2.3-1 4.3-3 5.4 3.7.4 7-2 7.5-5.9.4-3-1-8-3.5-9.5Z" />
          </svg>
          <p className="mt-4 font-serif text-xl italic leading-relaxed text-foreground">
            Il mio obiettivo è supportare chi vuole distinguersi, crescere e
            brillare nel digitale, trasformando idee in progetti concreti e
            risultati misurabili.
          </p>
          <HeartIcon className="mt-4 h-5 w-5 text-pink" />
        </div>
      </div>
    </section>
  );
}
