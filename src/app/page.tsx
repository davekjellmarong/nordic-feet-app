import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fotterapi from "@/components/Fotterapi";
import Produkter from "@/components/Produkter";
import Prisliste from "@/components/Prisliste";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fotterapi />
        <Produkter />
        <Prisliste />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
