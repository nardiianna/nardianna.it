import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy | Nardi Creates",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-foreground/90">
      <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
        Privacy &amp; Cookie Policy
      </h1>

      <p className="mt-6 text-sm text-foreground/60">
        Ultimo aggiornamento: settembre 2026.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-medium text-foreground">
          Titolare del trattamento
        </h2>
        <p>
          Anna Nardi — Nardi Creates. Per qualsiasi richiesta relativa ai tuoi
          dati puoi scrivere a{" "}
          <a
            href="mailto:annanardi99@gmail.com"
            className="underline hover:text-pink-dark"
          >
            annanardi99@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-medium text-foreground">
          Quali dati raccolgo e perché
        </h2>
        <p>
          <strong>Modulo di contatto:</strong> se compili il form richiedendo
          un preventivo, raccolgo nome, email e il messaggio che scrivi, solo
          per risponderti. Questi dati non vengono usati per altre finalità né
          ceduti a terzi.
        </p>
        <p>
          <strong>Statistiche di navigazione (Google Analytics):</strong> con
          il tuo consenso, uso Google Analytics per capire quante persone
          visitano il sito e quali pagine guardano, in forma aggregata.
        </p>
        <p>
          <strong>Pubblicità personalizzata (Google Ads):</strong> con il tuo
          consenso, i dati di navigazione possono essere usati per mostrarti
          annunci pertinenti su Google in campagne future (remarketing).
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-medium text-foreground">
          Cookie utilizzati
        </h2>
        <p>
          <strong>Cookie tecnici</strong> — sempre attivi, necessari al
          funzionamento del sito (es. per ricordare la tua scelta sui cookie).
        </p>
        <p>
          <strong>Cookie di analisi e marketing</strong> (Google Analytics,
          Google Ads) — attivati solo se scegli &quot;Accetta tutti&quot; nel
          banner. Puoi rifiutarli senza che questo limiti la navigazione del
          sito.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-medium text-foreground">
          Gestire le tue preferenze
        </h2>
        <p>
          Puoi cambiare idea in qualsiasi momento cliccando su &quot;Gestisci
          cookie&quot; in fondo al sito, oppure cancellando i cookie dal tuo
          browser.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-medium text-foreground">I tuoi diritti</h2>
        <p>
          Puoi chiedere in qualsiasi momento accesso, correzione o
          cancellazione dei tuoi dati, oppure opporti al trattamento,
          scrivendo all&apos;indirizzo email sopra indicato. Hai inoltre
          diritto a presentare reclamo al Garante per la protezione dei dati
          personali.
        </p>
      </section>

      <p className="mt-14 rounded-2xl bg-pink-soft/40 p-5 text-sm text-foreground/70">
        Questa pagina è una bozza informativa di base e non sostituisce una
        consulenza legale. Se il sito raccoglie dati sensibili, ha traffico
        internazionale o esigenze particolari, è consigliabile farla
        revisionare da un legale o da un servizio specializzato (es. Iubenda).
      </p>
    </main>
  );
}
