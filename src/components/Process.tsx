import { EarIcon, PencilIcon, RocketIcon, TargetIcon } from "./icons";

const STEPS = [
  {
    icon: EarIcon,
    number: "01",
    title: "Ascolto",
    description: "Ascolto le tue esigenze e obiettivi per capire davvero cosa ti serve.",
  },
  {
    icon: TargetIcon,
    number: "02",
    title: "Strategia",
    description:
      "Definisco la strategia giusta per valorizzare il tuo brand e raggiungere i tuoi obiettivi.",
  },
  {
    icon: PencilIcon,
    number: "03",
    title: "Creazione",
    description: "Progetto e creo soluzioni digitali su misura, curando ogni dettaglio.",
  },
  {
    icon: RocketIcon,
    number: "04",
    title: "Lancio",
    description:
      "Ti accompagno nel lancio e resto al tuo fianco per far crescere il tuo progetto.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          Il mio processo
        </p>
        <h2 className="mx-auto mt-3 font-serif text-3xl text-foreground sm:text-4xl">
          Un percorso chiaro, passo dopo passo.
        </h2>

        <div className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-pink/30 lg:block" />
          {STEPS.map(({ icon: Icon, number, title, description }) => (
            <div key={number} className="relative flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-white">
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-4 text-xs font-semibold tracking-widest text-pink-dark">
                {number}
              </p>
              <h3 className="mt-1 font-serif text-lg text-foreground">{title}</h3>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-foreground/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
