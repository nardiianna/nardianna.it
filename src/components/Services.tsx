import { CodeIcon, MegaphoneIcon, MonitorIcon, RefreshIcon } from "./icons";

const SERVICES = [
  {
    icon: MonitorIcon,
    title: "Siti personali & Landing Page",
    description:
      "Creo siti web moderni, eleganti e responsive che valorizzano la tua immagine e parlano al tuo pubblico. Perfetti per presentarti al meglio e raggiungere i tuoi obiettivi.",
  },
  {
    icon: MegaphoneIcon,
    title: "Presenza Social & Digitale",
    description:
      "Gestisco i tuoi social e la tua presenza digitale con strategie su misura, contenuti efficaci e una comunicazione coerente che fa crescere la tua visibilità.",
  },
  {
    icon: CodeIcon,
    title: "Soluzioni / App personalizzate",
    description:
      "Sviluppo soluzioni digitali e web app personalizzate per automatizzare processi, semplificare il lavoro e rispondere a esigenze specifiche.",
  },
  {
    icon: RefreshIcon,
    title: "Manutenzione & Restyling",
    description:
      "Aggiorno siti già esistenti con un restyling grafico o nuovi contenuti, e mi occupo della manutenzione continua per mantenerli sempre al passo.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="marble-bg py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          I miei servizi
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
          Soluzioni digitali su misura per far crescere il tuo brand e la tua
          presenza online.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/[0.08] bg-white p-8 text-left shadow-md shadow-black/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
