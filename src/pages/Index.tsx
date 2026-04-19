import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <section id="sobre" className="container mx-auto py-12 text-center max-w-3xl">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Sou especialista em <span className="text-foreground font-semibold">landing pages de alta conversão</span>.
          Crio páginas profissionais, conecto seu domínio e cuido das alterações sempre que você precisar —
          tudo para o seu negócio crescer online sem dor de cabeça.
        </p>
      </section>
      <Features />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
