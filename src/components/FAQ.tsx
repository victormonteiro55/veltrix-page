import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Qual a diferença entre os dois planos?", a: "O plano de $35/mês via PayPal inclui tudo (alterações simples ilimitadas, domínio, hospedagem). O plano de $300 via Wise é pagamento único com domínio incluso, mas alterações futuras custam $5 cada." },
  { q: "Vocês conectam meu domínio?", a: "Sim. Em ambos os planos a conexão do domínio está incluída no valor." },
  { q: "Posso cancelar a assinatura quando quiser?", a: "Pode sim. Você cancela direto pelo PayPal a qualquer momento, sem multas." },
  { q: "Quanto tempo leva para ficar pronto?", a: "Normalmente entre 3 a 7 dias após o briefing inicial, dependendo da complexidade." },
  { q: "E se eu quiser mudar algo depois?", a: "No plano mensal, alterações simples são ilimitadas. No plano único, cada alteração extra custa $5." },
];

const FAQ = () => (
  <section className="py-24">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12">
        Perguntas <span className="text-gradient">frequentes</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-border/60 rounded-xl px-5 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
