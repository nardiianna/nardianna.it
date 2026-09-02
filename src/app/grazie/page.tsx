import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { HeartIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Grazie | Nardi Creates",
  robots: { index: false, follow: false },
};

export default function GraziePage() {
  return (
    <>
      <header className="mx-auto w-full max-w-6xl px-6 py-6 text-xl">
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <main className="marble-bg flex flex-1 flex-col items-center justify-center gap-6 px-6 py-32 text-center">
        <HeartIcon className="h-10 w-10 text-pink" />
        <h1 className="font-serif text-3xl text-foreground sm:text-4xl">
          Grazie per avermi scritto!
        </h1>
        <p className="max-w-md text-base text-foreground/80">
          Ho ricevuto il tuo messaggio e ti risponderò al più presto per
          organizzare un appuntamento.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-pink px-7 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-pink-dark"
        >
          Torna al sito
        </Link>
      </main>
      <Footer />
    </>
  );
}
