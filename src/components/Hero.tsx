import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl border-2 border-pink/40" />
          <div className="marble-bg flex aspect-[4/5] items-center justify-center rounded-lg p-6 sm:aspect-[5/6]">
            <Image
              src="/images/anna-hero-2.png"
              alt="Anna Nardi"
              width={2000}
              height={1044}
              priority
              className="w-full rounded-md object-contain"
            />
          </div>
        </div>

        <div>
          <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Creatività, strategia e digitale.
            <br />
            <span className="text-pink italic">Su misura per te.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Creo siti web personali e landing page che raccontano chi sei.
            Gestisco la presenza social e digitale di brand e professionisti
            con strategie su misura. E sviluppo soluzioni digitali e web app
            personalizzate per esigenze specifiche.
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
              Vedi i progetti
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
