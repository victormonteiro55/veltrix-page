import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => (
  <section id="contato" className="py-24">
    <div className="container mx-auto">
      <div className="relative rounded-3xl p-10 md:p-16 border border-primary/30 bg-card overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Pronto para <span className="text-gradient">crescer online?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Entre em contato e vamos criar juntos a landing page que vai trazer mais clientes para você.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" /> Chamar no WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
              <a href="mailto:contato@veltrixpage.com">
                <Mail className="w-4 h-4 mr-2" /> Enviar e-mail
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
