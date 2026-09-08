import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl border-2 border-pink/40" />
          <Image
            src="/images/anna-hero-2.png"
            alt="Anna Nardi"
            width={2000}
            height={1044}
            priority
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div>
          <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Il tuo sito web,
            <br />
            <span className="text-pink italic">fatto su misura per te.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Creo siti personali e landing page che raccontano davvero chi sei,
            curati nel design e nello sviluppo, dal primo pixel alla
            pubblicazione.
            <br />
            Mi occupo anche di restyling e manutenzione per siti già
            esistenti.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#servizi"
              className="rounded-full bg-pink px-7 py-3 text-sm font-medium uppercase tracking-wide text-white hover:bg-pink-dark transition-colors"
            >
              Scopri i servizi
            </a>
            <a
              href="#progetti"
              className="rounded-full border border-foreground/30 px-7 py-3 text-sm font-medium uppercase tracking-wide text-foreground hover:border-pink hover:text-pink-dark transition-colors"
            >
              Vedi il progetto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
