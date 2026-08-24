import Image from "next/image";
import { InstagramIcon, MailIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contatti" className="marble-bg py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[auto_1fr]">
        <div className="mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-pink/40 sm:h-48 sm:w-48">
          <Image
            src="/images/anna-hero-1.png"
            alt="Anna Nardi"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Hai un progetto in mente?
            <br />
            <span className="text-pink italic">Parliamone.</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-foreground/80 md:mx-0 mx-auto">
            Scrivimi e raccontami la tua idea: insieme la trasformeremo in
            realtà.
          </p>

          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-foreground/80 md:items-start">
            <a
              href="mailto:annacreates99@gmail.com"
              className="flex items-center gap-2 hover:text-pink-dark"
            >
              <MailIcon className="h-4 w-4" />
              annacreates99@gmail.com
            </a>
            <a
              href="https://instagram.com/nardicreates"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-dark"
            >
              <InstagramIcon className="h-4 w-4" />
              @nardicreates
            </a>
          </div>

          <a
            href="mailto:annacreates99@gmail.com"
            className="mt-6 inline-flex items-center rounded-full bg-pink px-7 py-3 text-sm font-medium uppercase tracking-wide text-white hover:bg-pink-dark transition-colors"
          >
            Contattami
          </a>
        </div>
      </div>
    </section>
  );
}
