import { useTranslation } from "react-i18next";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const { t } = useTranslation();

  const plan = {
    key: "monthly",
    name: t("pricing.monthly.name"),
    price: "$69",
    period: t("pricing.monthly.period"),
    method: "Stripe",
    description: t("pricing.monthly.desc"),
    features: t("pricing.monthly.features", { returnObjects: true }) as string[],
    cta: t("pricing.monthly.cta"),
  };

  return (
    <section id="precos" className="py-24 relative">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t("pricing.heading1")} <span className="text-gradient">{t("pricing.heading2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("pricing.sub")}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl p-10 md:p-12 border bg-card border-primary/60 shadow-glow">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground inline-flex items-center gap-1">
              <Crown className="w-3 h-3" /> {t("pricing.monthly.badge")}
            </div>
            <div className="flex items-baseline justify-between mb-3 gap-2 flex-wrap">
              <h3 className="font-display text-3xl font-semibold">{plan.name}</h3>
              <span className="text-sm px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/30 whitespace-nowrap">
                {plan.method}
              </span>
            </div>
            <p className="text-base text-muted-foreground mb-8">{plan.description}</p>
            <div className="mb-8">
              <span className="font-display text-6xl md:text-7xl font-bold text-gradient">{plan.price}</span>
              <span className="text-muted-foreground ml-2 text-lg">{plan.period}</span>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-base">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 shadow-glow text-lg py-6"
            >
              <a href="#contato">{plan.cta}</a>
            </Button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">{t("pricing.note")}</p>
      </div>
    </section>
  );
};

export default Pricing;
