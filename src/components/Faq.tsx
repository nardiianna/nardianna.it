export const FAQS = [
  {
    question: "Quanto costa un sito web?",
    answer:
      "Dipende da quante pagine e funzionalità ti servono. Dopo una breve chiacchierata ti mando un preventivo gratuito e senza impegno, con tutti i costi indicati prima di iniziare, compresi dominio e hosting.",
  },
  {
    question: "Quanto tempo serve per avere il sito online?",
    answer:
      "Per un sito vetrina circa 2 settimane, dalla raccolta dei materiali alla pubblicazione. Per progetti più articolati concordiamo insieme i tempi fin dall'inizio.",
  },
  {
    question: "Devo occuparmi io di testi e foto?",
    answer:
      "Non preoccuparti: ti aiuto a raccogliere e organizzare testi, foto e tono di voce, così il sito racconta davvero la tua attività.",
  },
  {
    question: "Potrò modificare il sito in autonomia?",
    answer:
      "Sì. I siti sono realizzati su WordPress, quindi puoi aggiornare testi e immagini quando vuoi. Se preferisci non pensarci, me ne occupo io con il servizio di manutenzione.",
  },
  {
    question: "E se la grafica non mi convince?",
    answer:
      "Prima di sviluppare il sito ti presento una proposta grafica: la rivediamo insieme e passiamo allo sviluppo solo quando la direzione ti convince.",
  },
  {
    question: "Ho già un sito: puoi rinnovarlo?",
    answer:
      "Certo. Mi occupo di restyling grafico, nuovi contenuti e manutenzione di siti già esistenti, per renderli più moderni, veloci e facili da usare da smartphone.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
          Domande frequenti
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl text-foreground sm:text-4xl">
          Tutto quello che vuoi sapere, prima di iniziare.
        </h2>

        <div className="mt-12 divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {FAQS.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-foreground [&::-webkit-details-marker]:hidden">
                {question}
                <span className="flex-none text-2xl leading-none text-pink transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
