import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Mission from "@/components/Mission";
import Process from "@/components/Process";
import LaunchPackage from "@/components/LaunchPackage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anna Nardi",
  alternateName: "Nardi Creates",
  url: "https://nardianna.it",
  image: "https://nardianna.it/images/anna-hero-2.png",
  email: "annanardi99@gmail.com",
  jobTitle: "Web Designer & Digital Strategist",
  sameAs: ["https://instagram.com/nardicreates"],
  knowsAbout: [
    "Creazione siti web",
    "Landing page",
    "Gestione social media",
    "Sviluppo web app su misura",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Siti personali & Landing Page",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Presenza Social & Digitale",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Soluzioni / App personalizzate",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Mission />
        <Process />
        <LaunchPackage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
