const steps = [
  { n: "01", title: "Conversamos", desc: "Você me conta sobre seu negócio e o que precisa." },
  { n: "02", title: "Eu crio", desc: "Desenho e desenvolvo sua landing page do zero." },
  { n: "03", title: "Ajustamos", desc: "Refinamos juntos até ficar perfeita para você." },
  { n: "04", title: "No ar", desc: "Conecto seu domínio e sua página entra em produção." },
];

const Process = () => (
  <section className="py-24 border-y border-border/50 bg-card/30">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Simples do <span className="text-gradient">início ao fim</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="relative p-6 rounded-2xl border border-border/60 bg-background/50">
            <div className="font-display text-4xl font-bold text-gradient mb-4">{s.n}</div>
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
