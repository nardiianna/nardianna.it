const STATS = [
  {
    value: "2 settimane",
    description:
      "Tempo stimato di lavoro, dalla raccolta dei materiali alla consegna del sito online.",
  },
  {
    value: "a partire da 200€",
    description:
      "Design, proposta grafica e creazione completa del sito.",
  },
  {
    value: "79€ + IVA",
    description:
      "Dominio e hosting Aruba per il primo anno (costo esterno).",
  },
];

const INCLUDES = [
  "Registrazione dominio e hosting ottimizzato per WordPress",
  "Raccolta e organizzazione dei materiali: testi, foto, tono di voce",
  "Proposta grafica prima dello sviluppo, per condividere la direzione visiva",
  "Sviluppo del sito, responsive e pronto da pubblicare",
];

export default function LaunchPackage() {
  return (
    <section id="pacchetto-lancio" className="bg-pink-soft py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          Pacchetto lancio
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          Il tuo sito online in 2 settimane,
          <br />
          <span className="text-pink italic">chiavi in mano.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-foreground/80">
          Un percorso pensato per chi parte da zero: dominio, design, sviluppo
          e pubblicazione, senza sorprese sui tempi o sui costi.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STATS.map(({ value, description }) => (
            <div
              key={value}
              className="rounded-2xl border border-black/[0.08] bg-white p-8 shadow-md shadow-black/5"
            >
              <p className="font-serif text-3xl italic text-pink-dark">
                {value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-black/[0.08] bg-white p-8 text-left shadow-md shadow-black/5">
          <h3 className="font-serif text-xl text-foreground">Cosa include</h3>
          <ul className="mt-5 space-y-3">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-pink" />
                <span className="text-sm leading-relaxed text-foreground/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#contatti"
          className="mt-10 inline-flex items-center rounded-full bg-pink px-7 py-3 text-sm font-medium uppercase tracking-wide text-white hover:bg-pink-dark transition-colors"
        >
          Richiedi il pacchetto lancio
        </a>
      </div>
    </section>
  );
}
