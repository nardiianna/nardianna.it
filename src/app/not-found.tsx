import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center px-6 py-24 text-center">
        <div>
          <p className="font-serif text-6xl text-pink">404</p>
          <h1 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
            Questa pagina non esiste.
          </h1>
          <p className="mt-4 max-w-md text-base text-foreground/80">
            Il link che hai seguito potrebbe essere sbagliato o la pagina è
            stata spostata.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-pink px-7 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-pink-dark"
          >
            Torna alla home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
