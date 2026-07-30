import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto">
        <div className="relative rounded-3xl p-10 md:p-16 border border-primary/30 bg-card overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t("contact.heading1")} <span className="text-gradient">{t("contact.heading2")}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t("contact.sub")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground shadow-[0_0_60px_hsl(142_70%_45%/0.45)]">
                <a href="https://wa.me/5541995057791" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> {t("contact.whatsapp")} +55 41 9505-7791
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:border-primary/60">
                <a href="mailto:veltrixpagepage@gmail.com">
                  <Mail className="w-4 h-4 mr-2" /> veltrixpagepage@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
