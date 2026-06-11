import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "es" | "pt";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.work": "Work",
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.expertise": "Expertise",
  "nav.contact": "Contact",
  "cta.viewProjects": "View Projects",
  "cta.contactMe": "Contact Me",
  "cta.getInTouch": "Get in touch",

  "hero.eyebrow": "Senior Engineer · Available for select projects",
  "hero.title1": "Building mobile products that scale.",
  "hero.subtitle":
    "Senior React Native & Full-Stack Engineer specialized in fintech, AI-powered applications, real-time systems, and production-grade mobile experiences.",
  "hero.metric.years": "Years of Experience",
  "hero.metric.apps": "Production Apps",
  "hero.metric.industries": "Industries",
  "hero.metric.intl": "International Markets",

  "about.eyebrow": "About",
  "about.title": "Engineering products people actually use.",
  "about.body":
    "I help startups and established companies design and ship mobile products with the polish of a flagship app and the reliability of enterprise software. From the first architecture decision to the final App Store release.",
  "about.pillar.mobile.title": "Mobile Engineering",
  "about.pillar.mobile.desc":
    "Native-grade React Native apps with deep performance work and offline-first patterns.",
  "about.pillar.product.title": "Product Development",
  "about.pillar.product.desc":
    "From whiteboard to production. I think in shipped features, not tickets.",
  "about.pillar.ai.title": "AI Integration",
  "about.pillar.ai.desc": "OpenAI, Claude, RAG and agentic workflows in real, paying products.",
  "about.pillar.fullstack.title": "Full-Stack Capabilities",
  "about.pillar.fullstack.desc":
    "TypeScript end to end. Node, GraphQL, edge functions, observability.",
  "about.stack": "Tools I reach for",

  "experience.eyebrow": "Experience",
  "experience.title": "Seven years. Many industries.",
  "experience.subtitle":
    "Fintech, broadcasting, energy, education, marketing — selected engagements.",

  "projects.eyebrow": "Selected work",
  "projects.title": "Products in production.",
  "projects.subtitle": "A small selection of recent mobile and full-stack projects.",
  "projects.viewCase": "View case study",
  "projects.viewLive": "Live",
  "projects.viewGithub": "GitHub",

  "expertise.eyebrow": "What I do",
  "expertise.title": "Senior across the stack.",
  "expertise.subtitle": "Depth where it matters. Breadth where it ships product.",

  "testimonials.eyebrow": "Words",
  "testimonials.title": "Trusted by teams that ship.",
  "testimonials.placeholder": "Testimonials from past collaborators land here soon.",

  "contact.eyebrow": "Let's talk",
  "contact.title": "Have a product to build?",
  "contact.subtitle":
    "Open to senior engineering roles, technical leadership and selective consulting.",
  "contact.name": "Your name",
  "contact.email": "Email",
  "contact.message": "Tell me about your project",
  "contact.send": "Send message",
  "contact.sent": "Thanks. I'll get back to you within 24 hours.",
  "contact.or": "Or reach out directly",

  "footer.tagline": "Designing and shipping premium mobile products.",
  "footer.rights": "All rights reserved.",
};

const es: Dict = {
  "nav.work": "Proyectos",
  "nav.about": "Acerca",
  "nav.experience": "Experiencia",
  "nav.expertise": "Expertise",
  "nav.contact": "Contacto",
  "cta.viewProjects": "Ver proyectos",
  "cta.contactMe": "Contáctame",
  "cta.getInTouch": "Hablemos",

  "hero.eyebrow": "Ingeniero Senior · Disponible para proyectos selectos",
  "hero.title1": "Construyendo productos móviles que escalan",
  "hero.subtitle":
    "Ingeniero Senior React Native y Full-Stack especializado en fintech, aplicaciones con IA, sistemas en tiempo real y experiencias móviles de calidad de producción.",
  "hero.metric.years": "Años de experiencia",
  "hero.metric.apps": "Apps en producción",
  "hero.metric.industries": "Industrias",
  "hero.metric.intl": "Mercados internacionales",

  "about.eyebrow": "Acerca",
  "about.title": "Construyo productos que la gente realmente usa.",
  "about.body":
    "Ayudo a startups y empresas establecidas a diseñar y lanzar productos móviles con la calidad de una app insignia y la fiabilidad del software empresarial. Desde la primera decisión de arquitectura hasta el lanzamiento en la App Store.",
  "about.pillar.mobile.title": "Ingeniería Móvil",
  "about.pillar.mobile.desc":
    "Apps React Native de calidad nativa con trabajo profundo de rendimiento y patrones offline.",
  "about.pillar.product.title": "Desarrollo de Producto",
  "about.pillar.product.desc":
    "De la pizarra a producción. Pienso en features lanzadas, no en tickets.",
  "about.pillar.ai.title": "Integración de IA",
  "about.pillar.ai.desc": "OpenAI, Claude, RAG y flujos agentivos en productos reales que cobran.",
  "about.pillar.fullstack.title": "Capacidades Full-Stack",
  "about.pillar.fullstack.desc":
    "TypeScript de punta a punta. Node, GraphQL, edge functions, observabilidad.",
  "about.stack": "Herramientas que uso",

  "experience.eyebrow": "Experiencia",
  "experience.title": "Siete años. Muchas industrias.",
  "experience.subtitle":
    "Fintech, broadcasting, energía, educación, marketing — proyectos selectos.",

  "projects.eyebrow": "Trabajo seleccionado",
  "projects.title": "Productos en producción.",
  "projects.subtitle": "Una pequeña selección de proyectos móviles y full-stack recientes.",
  "projects.viewCase": "Ver caso de estudio",
  "projects.viewLive": "En vivo",
  "projects.viewGithub": "GitHub",

  "expertise.eyebrow": "Qué hago",
  "expertise.title": "Senior en todo el stack.",
  "expertise.subtitle": "Profundidad donde importa. Amplitud donde lanza producto.",

  "testimonials.eyebrow": "Palabras",
  "testimonials.title": "Confiado por equipos que lanzan.",
  "testimonials.placeholder": "Pronto aparecerán aquí testimonios de colaboradores.",

  "contact.eyebrow": "Hablemos",
  "contact.title": "¿Tienes un producto que construir?",
  "contact.subtitle":
    "Abierto a roles senior de ingeniería, liderazgo técnico y consultoría selectiva.",
  "contact.name": "Tu nombre",
  "contact.email": "Email",
  "contact.message": "Cuéntame sobre tu proyecto",
  "contact.send": "Enviar mensaje",
  "contact.sent": "Gracias. Te responderé en 24 horas.",
  "contact.or": "O contáctame directamente",

  "footer.tagline": "Diseñando y lanzando productos móviles premium.",
  "footer.rights": "Todos los derechos reservados.",
};

const pt: Dict = {
  "nav.work": "Projetos",
  "nav.about": "Sobre",
  "nav.experience": "Experiência",
  "nav.expertise": "Expertise",
  "nav.contact": "Contato",
  "cta.viewProjects": "Ver projetos",
  "cta.contactMe": "Fale comigo",
  "cta.getInTouch": "Vamos conversar",

  "hero.eyebrow": "Engenheiro Sênior · Disponível para projetos selecionados",
  "hero.title1": "Construindo produtos mobile que escalam",
  "hero.subtitle":
    "Engenheiro Sênior React Native e Full-Stack especializado em fintech, aplicações com IA, sistemas em tempo real e experiências mobile de qualidade de produção.",
  "hero.metric.years": "Anos de experiência",
  "hero.metric.apps": "Apps em produção",
  "hero.metric.industries": "Indústrias",
  "hero.metric.intl": "Mercados internacionais",

  "about.eyebrow": "Sobre",
  "about.title": "Construo produtos que as pessoas realmente usam.",
  "about.body":
    "Ajudo startups e empresas estabelecidas a desenhar e lançar produtos mobile com o polimento de um app flagship e a confiabilidade de software corporativo. Da primeira decisão de arquitetura até o lançamento na App Store.",
  "about.pillar.mobile.title": "Engenharia Mobile",
  "about.pillar.mobile.desc":
    "Apps React Native de qualidade nativa com trabalho profundo de performance e padrões offline.",
  "about.pillar.product.title": "Desenvolvimento de Produto",
  "about.pillar.product.desc":
    "Do quadro branco à produção. Penso em features entregues, não em tickets.",
  "about.pillar.ai.title": "Integração de IA",
  "about.pillar.ai.desc": "OpenAI, Claude, RAG e fluxos agentivos em produtos reais.",
  "about.pillar.fullstack.title": "Capacidades Full-Stack",
  "about.pillar.fullstack.desc":
    "TypeScript de ponta a ponta. Node, GraphQL, edge functions, observabilidade.",
  "about.stack": "Ferramentas que uso",

  "experience.eyebrow": "Experiência",
  "experience.title": "Sete anos. Muitas indústrias.",
  "experience.subtitle":
    "Fintech, broadcasting, energia, educação, marketing — projetos selecionados.",

  "projects.eyebrow": "Trabalhos selecionados",
  "projects.title": "Produtos em produção.",
  "projects.subtitle": "Uma pequena seleção de projetos mobile e full-stack recentes.",
  "projects.viewCase": "Ver case",
  "projects.viewLive": "Ao vivo",
  "projects.viewGithub": "GitHub",

  "expertise.eyebrow": "O que eu faço",
  "expertise.title": "Sênior em toda a stack.",
  "expertise.subtitle": "Profundidade onde importa. Amplitude onde entrega produto.",

  "testimonials.eyebrow": "Palavras",
  "testimonials.title": "Confiado por times que entregam.",
  "testimonials.placeholder": "Em breve depoimentos de colaboradores aparecerão aqui.",

  "contact.eyebrow": "Vamos conversar",
  "contact.title": "Tem um produto para construir?",
  "contact.subtitle":
    "Aberto a posições sênior de engenharia, liderança técnica e consultoria seletiva.",
  "contact.name": "Seu nome",
  "contact.email": "Email",
  "contact.message": "Conte sobre seu projeto",
  "contact.send": "Enviar mensagem",
  "contact.sent": "Obrigado. Retornarei em 24 horas.",
  "contact.or": "Ou fale comigo direto",

  "footer.tagline": "Desenhando e lançando produtos mobile premium.",
  "footer.rights": "Todos os direitos reservados.",
};

const dictionaries: Record<Lang, Dict> = { en, es, pt };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored && ["en", "es", "pt"].includes(stored)) {
      setLangState(stored);
    } else {
      const nav = window.navigator.language.slice(0, 2).toLowerCase();
      if (nav === "es" || nav === "pt") setLangState(nav as Lang);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key,
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
