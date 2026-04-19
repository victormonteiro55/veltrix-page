import { useTranslation } from "react-i18next";
import { Rocket, TrendingUp, Smartphone, Palette, Globe, RefreshCw } from "lucide-react";

const items = [
  { key: "delivery", icon: Rocket },
  { key: "conversion", icon: TrendingUp },
  { key: "mobile", icon: Smartphone },
  { key: "design", icon: Palette },
  { key: "domain", icon: Globe },
  { key: "edits", icon: RefreshCw },
] as const;

const Features = () => {
  const { t } = useTranslation();
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t("features.heading1")} <span className="text-gradient">{t("features.heading2")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("features.sub")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <div
              key={f.key}
              className="group relative p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/50 transition-all hover:shadow-card hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{t(`features.items.${f.key}.t`)}</h3>
              <p className="text-sm text-muted-foreground">{t(`features.items.${f.key}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
