import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-devices.jpg";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="top" className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {t("hero.badge")}
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            {t("hero.title1")} <span className="text-gradient">{t("hero.title2")}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">{t("hero.desc")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-base">
              <a href="#precos">{t("hero.seePlans")} <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 text-base">
              <a href="#servicos">{t("hero.howItWorks")}</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div><span className="block text-2xl font-bold text-foreground">{t("hero.stat1Value")}</span>{t("hero.stat1Label")}</div>
            <div><span className="block text-2xl font-bold text-foreground">{t("hero.stat2Value")}</span>{t("hero.stat2Label")}</div>
            <div><span className="block text-2xl font-bold text-foreground">{t("hero.stat3Value")}</span>{t("hero.stat3Label")}</div>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" aria-hidden="true" />
          <img
            src={heroImg}
            alt={t("hero.imageAlt") as string}
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
