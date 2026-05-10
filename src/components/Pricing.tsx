import { useTranslation } from "react-i18next";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      key: "monthly",
      name: t("pricing.monthly.name"),
      price: "$35",
      period: t("pricing.monthly.period"),
      method: "Stripe",
      description: t("pricing.monthly.desc"),
      features: t("pricing.monthly.features", { returnObjects: true }) as string[],
      cta: t("pricing.monthly.cta"),
      highlighted: false,
    },
    {
      key: "oneTime",
      name: t("pricing.oneTime.name"),
      price: "$300",
      period: t("pricing.oneTime.period"),
      method: "Wise · Stripe · PayPal",
      description: t("pricing.oneTime.desc"),
      features: t("pricing.oneTime.features", { returnObjects: true }) as string[],
      cta: t("pricing.oneTime.cta"),
      badge: t("pricing.oneTime.badge"),
      highlighted: true,
    },
  ];

  return (
    <section id="precos" className="py-24 relative">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t("pricing.heading1")} <span className="text-gradient">{t("pricing.heading2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("pricing.sub")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`relative rounded-3xl p-8 border transition-all ${
                plan.highlighted
                  ? "bg-card border-primary/60 shadow-glow"
                  : "bg-card border-border/60 hover:border-primary/40"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground inline-flex items-center gap-1">
                  <Crown className="w-3 h-3" /> {plan.badge}
                </div>
              )}
              <div className="flex items-baseline justify-between mb-2 gap-2">
                <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/30 whitespace-nowrap">
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
                <a href="#contato">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">{t("pricing.note")}</p>
      </div>
    </section>
  );
};

export default Pricing;
