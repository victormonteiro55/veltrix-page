import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Master translation keys. English is the source of truth and the default.
// Portuguese and Spanish are hand-translated. All other languages fall back
// to English automatically (still selectable via the language switcher).
const en = {
  nav: { about: "About", services: "Services", pricing: "Pricing", contact: "Contact", cta: "Get started" },
  hero: {
    badge: "Landing pages that convert",
    title1: "We build pages that",
    title2: "bring you more clients",
    desc: "Modern, fast, conversion-optimized landing pages. Attract visitors, turn them into clients — and focus on growing your business.",
    seePlans: "See plans",
    howItWorks: "How it works",
    stat1Value: "100%", stat1Label: "Responsive",
    stat2Value: "2-3 days", stat2Label: "Fast delivery",
    stat3Value: "∞", stat3Label: "Simple edits on monthly plan",
    imageAlt: "Modern dark landing page mockup on laptop and phone",
  },
  about: "I specialize in high-conversion landing pages. I build professional pages, connect your domain and handle edits whenever you need — everything so your business can grow online without the hassle.",
  features: {
    heading1: "Everything you need", heading2: "in one place",
    sub: "I take care of the technical and design work so you can focus on your business.",
    items: {
      delivery: { t: "Fast delivery", d: "Your landing page ready in just a few days, no delays." },
      conversion: { t: "High conversion", d: "Built to turn visitors into real customers." },
      mobile: { t: "Mobile first", d: "Looks perfect on any screen: phone, tablet or desktop." },
      design: { t: "Modern design", d: "Clean, professional, on-brand visuals." },
      domain: { t: "Domain included", d: "I connect your own domain at no extra cost." },
      edits: { t: "Flexible edits", d: "Adjust whenever you need — your site evolves with you." },
    },
  },
  process: {
    heading1: "Simple from", heading2: "start to finish",
    steps: [
      { t: "We talk", d: "You tell me about your business and what you need." },
      { t: "I build", d: "I design and develop your landing page from scratch." },
      { t: "We refine", d: "We adjust together until it's perfect for you." },
      { t: "Goes live", d: "I connect your domain and your page goes live." },
    ],
  },
  pricing: {
    heading1: "Choose the plan", heading2: "that fits you best",
    sub: "One simple monthly subscription. Everything included, no hidden fees.",
    note: "Price in US dollars (USD). Payment via Stripe.",
    monthly: {
      name: "Monthly Subscription",
      period: "/month",
      desc: "Everything included, with full flexibility and ongoing support.",
      cta: "Subscribe via Stripe",
      badge: "All included",
      features: [
        "Professional landing page",
        "Unlimited simple edits",
        "Domain connection included",
        "Optimized hosting",
        "Responsive design (mobile / tablet / desktop)",
        "Support whenever you need",
      ],
    },
  },
  faq: {
    heading1: "Frequently asked", heading2: "questions",
    items: [
      { q: "What is included in the monthly plan?", a: "The $69/month plan via Stripe includes everything: a professional landing page, unlimited simple edits, domain connection, optimized hosting, responsive design and ongoing support." },
      { q: "Do you connect my domain?", a: "Yes. Domain connection is included in the monthly plan." },
      { q: "Can I cancel the subscription anytime?", a: "Absolutely. You can cancel directly through Stripe at any time, with no fees." },
      { q: "How long does it take to be ready?", a: "Usually between 2 and 3 days after the initial briefing, depending on complexity." },
      { q: "What if I want to change something later?", a: "Simple edits are unlimited on the monthly plan." },
      { q: "Do you offer refunds?", a: "No. Once the website has been delivered and is in use, no refunds will be issued under any circumstances. By hiring the service you acknowledge and accept this policy." },
    ],
  },
  refunds: {
    heading1: "Refund", heading2: "policy",
    body: "Important: there are no refunds after the website has been used. Once your landing page is delivered, published or actively in use, no refund will be granted — neither partial nor total — for the monthly subscription. By contracting the service you confirm that you have read and accepted this policy.",
  },
  contact: {
    heading1: "Ready to", heading2: "grow online?",
    sub: "Get in touch and let's build the landing page that will bring you more clients.",
    whatsapp: "Message on WhatsApp",
    email: "Send email",
  },
  footer: { rights: "All rights reserved." },
  langPicker: { label: "Language", search: "Search language..." },
};

const pt = {
  nav: { about: "Sobre", services: "Serviços", pricing: "Preços", contact: "Contato", cta: "Começar agora" },
  hero: {
    badge: "Landing pages que convertem",
    title1: "Criamos páginas que",
    title2: "trazem mais clientes",
    desc: "Páginas modernas, rápidas e otimizadas para conversão. Atraia visitantes, transforme em clientes — e foque no que importa: crescer seu negócio.",
    seePlans: "Ver planos",
    howItWorks: "Como funciona",
    stat1Value: "100%", stat1Label: "Responsivo",
    stat2Value: "2-3 dias", stat2Label: "Entrega rápida",
    stat3Value: "∞", stat3Label: "Alterações simples no plano mensal",
    imageAlt: "Mockup moderno de landing page escura em laptop e celular",
  },
  about: "Sou especialista em landing pages de alta conversão. Crio páginas profissionais, conecto seu domínio e cuido das alterações sempre que você precisar — tudo para o seu negócio crescer online sem dor de cabeça.",
  features: {
    heading1: "Tudo que você precisa", heading2: "em um só lugar",
    sub: "Eu cuido de toda a parte técnica e de design para você focar no seu negócio.",
    items: {
      delivery: { t: "Entrega rápida", d: "Sua landing page pronta em poucos dias, sem enrolação." },
      conversion: { t: "Alta conversão", d: "Estrutura pensada para transformar visitas em clientes reais." },
      mobile: { t: "Mobile first", d: "Perfeita em qualquer tela: celular, tablet ou desktop." },
      design: { t: "Design moderno", d: "Visual limpo, profissional e com a cara da sua marca." },
      domain: { t: "Domínio incluso", d: "Conecto seu domínio próprio sem custo extra no plano." },
      edits: { t: "Alterações flexíveis", d: "Ajuste sempre que precisar — seu site evolui com você." },
    },
  },
  process: {
    heading1: "Simples do", heading2: "início ao fim",
    steps: [
      { t: "Conversamos", d: "Você me conta sobre seu negócio e o que precisa." },
      { t: "Eu crio", d: "Desenho e desenvolvo sua landing page do zero." },
      { t: "Ajustamos", d: "Refinamos juntos até ficar perfeita para você." },
      { t: "No ar", d: "Conecto seu domínio e sua página entra em produção." },
    ],
  },
  pricing: {
    heading1: "Escolha o plano", heading2: "ideal para você",
    sub: "Uma assinatura mensal simples. Tudo incluso, sem taxas escondidas.",
    note: "Valor em dólar (USD). Pagamento via Stripe.",
    monthly: {
      name: "Assinatura Mensal",
      period: "/mês",
      desc: "Tudo incluso, com flexibilidade total e suporte contínuo.",
      cta: "Assinar via Stripe",
      badge: "Tudo incluso",
      features: [
        "Landing page profissional",
        "Alterações simples ilimitadas",
        "Conexão de domínio incluída",
        "Hospedagem otimizada",
        "Design responsivo (mobile / tablet / desktop)",
        "Suporte sempre que precisar",
      ],
    },
  },
  faq: {
    heading1: "Perguntas", heading2: "frequentes",
    items: [
      { q: "O que está incluído no plano mensal?", a: "O plano de $69/mês via Stripe inclui tudo: landing page profissional, alterações simples ilimitadas, conexão de domínio, hospedagem otimizada, design responsivo e suporte contínuo." },
      { q: "Vocês conectam meu domínio?", a: "Sim. A conexão do domínio está incluída no plano mensal." },
      { q: "Posso cancelar a assinatura quando quiser?", a: "Pode sim. Você cancela direto pelo Stripe a qualquer momento, sem multas." },
      { q: "Quanto tempo leva para ficar pronto?", a: "Normalmente entre 2 a 3 dias após o briefing inicial, dependendo da complexidade." },
      { q: "E se eu quiser mudar algo depois?", a: "No plano mensal, alterações simples são ilimitadas." },
      { q: "Vocês oferecem reembolso?", a: "Não. Após a entrega e utilização do site, não haverá reembolso em nenhuma hipótese. Ao contratar o serviço você reconhece e aceita esta política." },
    ],
  },
  refunds: {
    heading1: "Política de", heading2: "reembolso",
    body: "Importante: não há reembolso após a utilização do site. Uma vez que sua landing page seja entregue, publicada ou esteja em uso, nenhum reembolso será concedido — nem parcial nem total — na assinatura mensal. Ao contratar o serviço, você confirma que leu e aceitou esta política.",
  },
  contact: {
    heading1: "Pronto para", heading2: "crescer online?",
    sub: "Entre em contato e vamos criar juntos a landing page que vai trazer mais clientes para você.",
    whatsapp: "Chamar no WhatsApp",
    email: "Enviar e-mail",
  },
  footer: { rights: "Todos os direitos reservados." },
  langPicker: { label: "Idioma", search: "Buscar idioma..." },
};

const es = {
  nav: { about: "Sobre", services: "Servicios", pricing: "Precios", contact: "Contacto", cta: "Empezar ahora" },
  hero: {
    badge: "Landing pages que convierten",
    title1: "Creamos páginas que",
    title2: "te traen más clientes",
    desc: "Páginas modernas, rápidas y optimizadas para la conversión. Atrae visitantes, conviértelos en clientes — y enfócate en hacer crecer tu negocio.",
    seePlans: "Ver planes",
    howItWorks: "Cómo funciona",
    stat1Value: "100%", stat1Label: "Responsive",
    stat2Value: "2-3 días", stat2Label: "Entrega rápida",
    stat3Value: "∞", stat3Label: "Cambios simples en el plan mensual",
    imageAlt: "Maqueta moderna de landing page oscura en portátil y móvil",
  },
  about: "Soy especialista en landing pages de alta conversión. Creo páginas profesionales, conecto tu dominio y me encargo de los cambios cuando lo necesites — todo para que tu negocio crezca online sin complicaciones.",
  features: {
    heading1: "Todo lo que necesitas", heading2: "en un solo lugar",
    sub: "Me encargo de toda la parte técnica y de diseño para que tú te enfoques en tu negocio.",
    items: {
      delivery: { t: "Entrega rápida", d: "Tu landing page lista en pocos días, sin demoras." },
      conversion: { t: "Alta conversión", d: "Diseñada para convertir visitas en clientes reales." },
      mobile: { t: "Mobile first", d: "Perfecta en cualquier pantalla: móvil, tablet o escritorio." },
      design: { t: "Diseño moderno", d: "Visual limpio, profesional y con la identidad de tu marca." },
      domain: { t: "Dominio incluido", d: "Conecto tu propio dominio sin costo extra." },
      edits: { t: "Cambios flexibles", d: "Ajusta cuando lo necesites — tu sitio evoluciona contigo." },
    },
  },
  process: {
    heading1: "Simple de", heading2: "principio a fin",
    steps: [
      { t: "Hablamos", d: "Me cuentas sobre tu negocio y lo que necesitas." },
      { t: "Yo creo", d: "Diseño y desarrollo tu landing page desde cero." },
      { t: "Ajustamos", d: "Refinamos juntos hasta que sea perfecta para ti." },
      { t: "En vivo", d: "Conecto tu dominio y tu página sale en producción." },
    ],
  },
  pricing: {
    heading1: "Elige el plan", heading2: "ideal para ti",
    sub: "Dos opciones simples — suscríbete mensualmente o paga una vez. Sin tarifas ocultas.",
    note: "Precios en dólares (USD). Pagos vía Stripe.",
    monthly: {
      name: "Suscripción Mensual",
      period: "/mes",
      desc: "Todo incluido, con flexibilidad total y soporte continuo.",
      cta: "Suscribirse vía Stripe",
      features: [
        "Landing page profesional",
        "Cambios simples ilimitados",
        "Conexión de dominio incluida",
        "Alojamiento optimizado",
        "Diseño responsive (móvil / tablet / escritorio)",
        "Soporte cuando lo necesites",
      ],
    },
    oneTime: {
      name: "Pago Único",
      period: "una vez",
      desc: "Paga una vez y lleva el paquete completo, sin mensualidades.",
      cta: "Pagar vía Stripe",
      badge: "Mejor valor",
      features: [
        "Landing page profesional",
        "Conexión de dominio incluida en el precio",
        "Diseño responsive completo",
        "Entrega definitiva",
        "Cambios futuros: $10 cada uno",
        "Pago internacional vía Stripe",
      ],
    },
  },
  faq: {
    heading1: "Preguntas", heading2: "frecuentes",
    items: [
      { q: "¿Cuál es la diferencia entre los dos planes?", a: "El plan de $35/mes vía Stripe incluye todo (cambios simples ilimitados, dominio, alojamiento). El plan de $300 vía Stripe es pago único con dominio incluido, pero cada cambio futuro cuesta $10." },
      { q: "¿Conectan mi dominio?", a: "Sí. La conexión del dominio está incluida en ambos planes." },
      { q: "¿Puedo cancelar la suscripción cuando quiera?", a: "Por supuesto. Puedes cancelar directamente desde Stripe en cualquier momento, sin penalizaciones." },
      { q: "¿Cuánto tarda en estar listo?", a: "Normalmente entre 2 y 3 días tras el briefing inicial, según la complejidad." },
      { q: "¿Y si quiero cambiar algo después?", a: "En el plan mensual, los cambios simples son ilimitados. En el plan único, cada cambio extra cuesta $10." },
      { q: "¿Ofrecen reembolsos?", a: "No. Una vez entregado y en uso el sitio, no se realizarán reembolsos bajo ninguna circunstancia. Al contratar el servicio aceptas esta política." },
    ],
  },
  refunds: {
    heading1: "Política de", heading2: "reembolso",
    body: "Importante: no hay reembolsos tras el uso del sitio. Una vez entregada, publicada o en uso tu landing page, no se concederá ningún reembolso — ni parcial ni total — tanto en la suscripción mensual como en el pago único. Al contratar el servicio confirmas que has leído y aceptado esta política.",
  },
  contact: {
    heading1: "¿Listo para", heading2: "crecer online?",
    sub: "Contáctame y construyamos juntos la landing page que te traerá más clientes.",
    whatsapp: "Escribir por WhatsApp",
    email: "Enviar correo",
  },
  footer: { rights: "Todos los derechos reservados." },
  langPicker: { label: "Idioma", search: "Buscar idioma..." },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
    },
    fallbackLng: "en",
    lng: "en", // Default to English. Detector still allows manual override via UI.
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "veltrix-lang",
    },
    returnObjects: true,
  });

export default i18n;
