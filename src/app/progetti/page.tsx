import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRightIcon } from "@/components/icons";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Progetti realizzati | Anna Nardi — Nardi Creates",
  description:
    "Siti web realizzati su misura per aziende agricole, agriturismi, centri estetici, centri sportivi e professionisti: guarda i casi studio di Nardi Creates.",
  alternates: { canonical: "/progetti" },
  openGraph: {
    title: "Progetti realizzati | Nardi Creates",
    description:
      "Siti web realizzati su misura per piccole attività e professionisti.",
    url: "/progetti",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Progetti realizzati",
  url: "https://nardianna.it/progetti",
  hasPart: PROJECTS.map((project) => ({
    "@type": "WebSite",
    name: project.label,
    url: project.href,
    description: project.description,
  })),
};

export default function ProgettiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-pink-soft py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-dark">
              Progetti realizzati
            </p>
            <h1 className="mt-3 text-balance font-serif text-4xl text-foreground sm:text-5xl">
              Siti su misura, pensati per chi li usa.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              Aziende agricole, agriturismi, centri estetici, centri sportivi e
              professionisti: ogni sito parte da come lavora l&apos;attività e
              da cosa devono trovare i suoi clienti.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <a
                  key={project.label}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-md shadow-black/5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-black/[0.06]">
                    <Image
                      src={project.image}
                      alt={`Anteprima del sito ${project.label}`}
                      fill
                      sizes="(min-width: 1152px) 550px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="self-start rounded-md bg-pink-soft px-3 py-1 text-xs font-medium text-foreground/80">
                      {project.label}
                    </span>
                    <h2 className="mt-4 font-serif text-2xl text-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-3 flex-1 leading-relaxed text-foreground/70">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-black/10 px-3 py-1 text-xs text-foreground/70"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-pink-dark group-hover:text-pink">
                      Visita il sito
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-pink-soft py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              Il prossimo può essere il tuo.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/70">
              Raccontami la tua attività: ti preparo un preventivo gratuito e
              senza impegno.
            </p>
            <Link
              href="/#contatti"
              className="mt-8 inline-flex items-center rounded-full bg-pink px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-pink-dark"
            >
              Lavora con me
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
