import { useTranslation } from "react-i18next";

const Process = () => {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as { t: string; d: string }[];

  return (
    <section className="py-24 border-y border-border/50 bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t("process.heading1")} <span className="text-gradient">{t("process.heading2")}</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative p-6 rounded-2xl border border-border/60 bg-background/50">
              <div className="font-display text-4xl font-bold text-gradient mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold mb-1">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
