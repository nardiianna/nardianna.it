export type Project = {
  label: string;
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    label: "agriturismohoneyfarm.com",
    title: "Agriturismo",
    description:
      "Nuovo sito per un agriturismo con camere, ristorante e serate a tema: richiesta di preventivo per le camere direttamente dalla home, pagine dedicate e vetrina dei prodotti dell'azienda.",
    href: "https://agriturismohoneyfarm.com",
    image: "/images/project-honeyfarm.png",
    tags: ["WordPress", "Elementor", "Richiesta preventivo", "Vetrina prodotti"],
  },
  {
    label: "lincetto.it",
    title: "Azienda agricola",
    description:
      "Sito per un'azienda agricola alle porte di Padova, tra campi, api e miele millefiori: racconta il territorio e le attività con animazioni leggere e pagine dedicate.",
    href: "https://lincetto.it",
    image: "/images/project-lincetto.png",
    tags: ["WordPress", "Elementor", "Dominio e hosting", "Animazioni"],
  },
  {
    label: "nardifederico.it",
    title: "Sito portfolio",
    description:
      "Sito portfolio professionale, semplice, raffinato e d'impatto — progettato e sviluppato su misura, dal design alla pubblicazione.",
    href: "https://www.nardifederico.it",
    image: "/images/project-nardifederico.png",
    tags: ["WordPress", "Elementor", "Landing page"],
  },
  {
    label: "academyvillage.it",
    title: "Centro sportivo",
    description:
      "Sito per un centro sportivo con campi, tornei e scuola calcio, con prenotazione dei campi online integrata direttamente nella pagina.",
    href: "https://www.academyvillage.it",
    image: "/images/project-academyvillage.png",
    tags: ["WordPress", "Elementor", "Prenotazioni online"],
  },
  {
    label: "epilsystem.it",
    title: "Centro di fotoepilazione",
    description:
      "Sito per un centro specializzato in fotoepilazione laser: presenta metodo, sedi e fondatori e porta le persone a prenotare una consulenza.",
    href: "https://www.epilsystem.it",
    image: "/images/project-epilsystem.png",
    tags: ["WordPress", "Elementor", "Più sedi"],
  },
  {
    label: "samanthabeautyboutique.it",
    title: "Centro estetico",
    description:
      "Sito vetrina per centro estetico, pensato per presentare trattamenti e prodotti e facilitare la prenotazione online.",
    href: "https://www.samanthabeautyboutique.it",
    image: "/images/project-beautyboutique.png",
    tags: ["WordPress", "Elementor", "SEO"],
  },
  {
    label: "praticaenea.nardifederico.it",
    title: "Gestione pratiche ENEA",
    description:
      "Sito di servizio per la gestione delle pratiche ENEA aziendali, dalla richiesta informazioni all'area riservata partner.",
    href: "https://praticaenea.nardifederico.it",
    image: "/images/project-praticaenea.png",
    tags: ["Web app su misura", "Area riservata"],
  },
];
