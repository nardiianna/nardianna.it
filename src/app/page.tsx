import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Mission from "@/components/Mission";
import Process from "@/components/Process";
import LaunchPackage from "@/components/LaunchPackage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
