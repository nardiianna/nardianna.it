import Image from "next/image";
import {
  InstagramIcon,
  LeafBranchIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";
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
            Chiamami, scrivimi su WhatsApp o compila il modulo: ti rispondo il
            prima possibile con un preventivo gratuito e senza impegno.
          </p>

          <div className="mx-auto mt-6 grid w-fit gap-x-8 gap-y-3 text-sm text-foreground/80 sm:grid-cols-2 md:mx-0">
            <a
              href="tel:+393496866877"
              className="flex items-center gap-2 hover:text-pink-dark"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink text-white">
                <PhoneIcon className="h-4 w-4" />
              </span>
              349 686 6877
            </a>
            <a
              href="https://wa.me/393496866877"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-dark"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink text-white">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              Scrivimi su WhatsApp
            </a>
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
        </div>

        <div className="hidden h-32 w-px bg-foreground/15 md:block" />

        <div className="flex flex-col items-center gap-4 md:items-start">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
