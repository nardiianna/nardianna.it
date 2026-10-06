import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Mission from "@/components/Mission";
import Faq, { FAQS } from "@/components/Faq";
import LaunchPackage from "@/components/LaunchPackage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anna Nardi",
  alternateName: "Nardi Creates",
  url: "https://nardianna.it",
  image: "https://nardianna.it/images/anna-hero-2.png",
  email: "annanardi99@gmail.com",
  telephone: "+39 349 686 6877",
  jobTitle: "Web Designer freelance",
  sameAs: ["https://instagram.com/nardicreates"],
  knowsAbout: [
    "Creazione siti web",
    "Landing page",
    "Restyling e manutenzione siti web",
    "WordPress",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Creazione siti web e landing page",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Manutenzione & Restyling siti web",
      },
    },
  ],
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Mission />
        <LaunchPackage />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
