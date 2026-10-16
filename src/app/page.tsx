import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Work />
      <About />
      <Expertise />
      <Contact />
    </main>
  );
}