import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Assinatura Mensal",
    price: "$35",
    period: "/mês",
    method: "PayPal",
    description: "Tudo incluso, com flexibilidade total e suporte contínuo.",
    features: [
      "Landing page profissional",
      "Alterações ilimitadas",
      "Conexão de domínio incluída",
      "Hospedagem otimizada",
      "Design responsivo (mobile / tablet / desktop)",
      "Suporte sempre que precisar",
    ],
    cta: "Assinar via PayPal",
    href: "#contato",
    highlighted: false,
  },
  {
    name: "Pagamento Único",
    price: "$300",
    period: "uma vez",
    method: "Wise",
    description: "Pague uma vez e leve o pacote completo, sem mensalidades.",
    features: [
      "Landing page profissional",
      "Conexão de domínio incluída no valor",
      "Design responsivo completo",
      "Entrega definitiva",
      "Alterações posteriores: $5 cada",
      "Pagamento internacional via Wise",
    ],
    cta: "Pagar via Wise",
    href: "#contato",
    highlighted: true,
  },
];

const Pricing = () => (
  <section id="precos" className="py-24 relative">
    <div className="container mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Escolha o plano <span className="text-gradient">ideal para você</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Dois caminhos simples — assine mensalmente ou pague uma vez. Sem taxas escondidas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl p-8 border transition-all ${
              plan.highlighted
                ? "bg-card border-primary/60 shadow-glow"
                : "bg-card border-border/60 hover:border-primary/40"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground inline-flex items-center gap-1">
                <Crown className="w-3 h-3" /> Mais vantajoso
              </div>
            )}
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
              <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/30">
                {plan.method}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
            <div className="mb-6">
              <span className="font-display text-5xl font-bold text-gradient">{plan.price}</span>
              <span className="text-muted-foreground ml-1">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className={`w-full ${
                plan.highlighted
                  ? "bg-gradient-primary hover:opacity-90 shadow-glow"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              <a href={plan.href}>{plan.cta}</a>
            </Button>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        Valores em dólar (USD). Pagamentos processados via PayPal ou Wise.
      </p>
    </div>
  </section>
);

export default Pricing;
