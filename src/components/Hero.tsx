import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-devices.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Landing pages que convertem
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Criamos páginas que <span className="text-gradient">trazem mais clientes</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Páginas modernas, rápidas e otimizadas para conversão. Atraia visitantes,
            transforme em clientes — e foque no que importa: crescer seu negócio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-base">
              <a href="#precos">Ver planos <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 text-base">
              <a href="#servicos">Como funciona</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div><span className="block text-2xl font-bold text-foreground">100%</span>Responsivo</div>
            <div><span className="block text-2xl font-bold text-foreground">7 dias</span>Entrega rápida</div>
            <div><span className="block text-2xl font-bold text-foreground">∞</span>Alterações no plano mensal</div>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" aria-hidden="true" />
          <img
            src={heroImg}
            alt="Mockup de landing page em laptop e celular com design moderno escuro"
            width={1536}
            height={1024}
            className="relative rounded-2xl border border-border/50 shadow-card"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
