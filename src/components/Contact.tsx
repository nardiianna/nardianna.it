import Image from "next/image";
import { InstagramIcon, LeafBranchIcon, MailIcon } from "./icons";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contatti" className="marble-bg py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[auto_1fr_auto_auto]">
        <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
          <LeafBranchIcon className="absolute -left-10 bottom-0 h-32 w-20 text-pink/50 sm:h-40 sm:w-24" />
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <Image
              src="/images/logo-circle.png"
              alt="Nardi Creates"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
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
        </div>

        <div className="hidden h-32 w-px bg-foreground/15 md:block" />

        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex flex-col items-center gap-3 text-sm text-foreground/80 md:items-start">
            <a
              href="mailto:annanardi99@gmail.com"
              className="flex items-center gap-2 hover:text-pink-dark"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink text-white">
                <MailIcon className="h-4 w-4" />
              </span>
              annanardi99@gmail.com
            </a>
            <a
              href="https://instagram.com/nardicreates"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-dark"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink text-white">
                <InstagramIcon className="h-4 w-4" />
              </span>
              @nardicreates
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
