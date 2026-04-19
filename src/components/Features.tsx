import { Rocket, TrendingUp, Smartphone, Palette, Globe, RefreshCw } from "lucide-react";

const features = [
  { icon: Rocket, title: "Entrega rápida", desc: "Sua landing page pronta em poucos dias, sem enrolação." },
  { icon: TrendingUp, title: "Alta conversão", desc: "Estrutura pensada para transformar visitas em clientes reais." },
  { icon: Smartphone, title: "Mobile first", desc: "Perfeita em qualquer tela: celular, tablet ou desktop." },
  { icon: Palette, title: "Design moderno", desc: "Visual limpo, profissional e com a cara da sua marca." },
  { icon: Globe, title: "Domínio incluso", desc: "Conecto seu domínio próprio sem custo extra no plano." },
  { icon: RefreshCw, title: "Alterações flexíveis", desc: "Ajuste sempre que precisar — seu site evolui com você." },
];

const Features = () => (
  <section id="servicos" className="py-24 relative">
    <div className="container mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Tudo que você precisa <span className="text-gradient">em um só lugar</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Eu cuido de toda a parte técnica e de design para você focar no seu negócio.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/50 transition-all hover:shadow-card hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
