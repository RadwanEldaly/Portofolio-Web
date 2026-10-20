import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WorkSection projects={projects} />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
