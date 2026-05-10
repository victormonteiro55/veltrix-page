import { useTranslation } from "react-i18next";
import { ShieldAlert } from "lucide-react";

const Refunds = () => {
  const { t } = useTranslation();
  return (
    <section id="reembolso" className="py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-3xl border border-destructive/30 bg-card p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              {t("refunds.heading1")} <span className="text-gradient">{t("refunds.heading2")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">{t("refunds.body")}</p>
        </div>
      </div>
    </section>
  );
};

export default Refunds;
