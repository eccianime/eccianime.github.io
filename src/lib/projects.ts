import xgrowLogo from "@/assets/projects/xgrow/logo.webp";
import xgrow1 from "@/assets/projects/xgrow/1.webp";
import xgrow2 from "@/assets/projects/xgrow/2.webp";
import xgrow3 from "@/assets/projects/xgrow/3.webp";
import xgrow4 from "@/assets/projects/xgrow/4.webp";

import sigicLogo from "@/assets/projects/sigic/logo.webp";
import sigic1 from "@/assets/projects/sigic/1.webp";
import sigic2 from "@/assets/projects/sigic/2.webp";
import sigic3 from "@/assets/projects/sigic/3.webp";
import sigic4 from "@/assets/projects/sigic/4.webp";
import sigic5 from "@/assets/projects/sigic/5.webp";

import jogamaisLogo from "@/assets/projects/jogamais/logo.webp";
import jogamais1 from "@/assets/projects/jogamais/1.webp";
import jogamais2 from "@/assets/projects/jogamais/2.webp";
import jogamais3 from "@/assets/projects/jogamais/3.webp";

import gipsyyLogo from "@/assets/projects/gipsyy/logo.webp";
import gipsyy1 from "@/assets/projects/gipsyy/1.webp";
import gipsyy2 from "@/assets/projects/gipsyy/2.webp";
import gipsyy3 from "@/assets/projects/gipsyy/3.webp";
import gipsyy4 from "@/assets/projects/gipsyy/4.webp";
import gipsyy5 from "@/assets/projects/gipsyy/5.webp";
import gipsyy6 from "@/assets/projects/gipsyy/6.webp";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: { en: string; es: string; pt: string };
  thumbnail: string;
  carousel?: string[];
  stack: string[];
  screenshots?: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "xgrow-learning",
    title: "XGrow Learning",
    category: "EdTech",
    description: {
      en: "Course platform serving 100k+ students with mobile-first learning experiences, offline lessons, and creator analytics.",
      es: "Plataforma de cursos con +100k estudiantes, experiencias móviles, lecciones offline y analíticas para creadores.",
      pt: "Plataforma de cursos com +100k alunos, experiências mobile-first, lições offline e analytics para criadores.",
    },
    thumbnail: xgrowLogo,
    carousel: [xgrow1, xgrow2, xgrow3, xgrow4],
    stack: ["React Native", "Next.js", "GraphQL", "Firebase"],
    year: "2023",
    liveUrl: "https://play.google.com/store/apps/details?id=com.xgrow.learningarea",
  },
  {
    id: "sigic",
    title: "SIGIC",
    category: "Civil Protection",
    description: {
      en: "Support for Civil Protection teams in the organization of shelters during emergency situations.",
      es: "Apoya a los equipos de Protección Civil en la organización de albergues durante situaciones de emergencia.",
      pt: "Apoya a equipes de Proteção Civil na organização de albergues durante situações de emergência.",
    },
    thumbnail: sigicLogo,
    carousel: [sigic1, sigic2, sigic3, sigic4, sigic5],
    stack: ["React Native", "Expo", "GraphQL", "Firebase"],
    year: "2026",
    liveUrl: "https://play.google.com/store/apps/details?id=com.setec.sigic",
  },
  {
    id: "gipsyy",
    title: "Gipsyy",
    category: "Travel",
    description: {
      en: "Gipsyy is a platform for sale and ticketing of bus tickets in Brazil and other markets. It allows you to check routes, schedules, prices and travel options, as well as seat selection and digital purchase.",
      es: "Gipsyy es una plataforma de venta y reserva de pasajes de autobús que conecta pasajeros con destinos en Brasil y otros mercados. Permite consultar rutas, horarios, precios y opciones de viaje, además de seleccionar asientos y realizar la compra de forma digital.",
      pt: "Gipsyy é uma plataforma de venda e reserva de passagens de ônibus que conecta passageiros a destinos no Brasil e em outros mercados. A plataforma permite consultar rotas, horários, preços e opções de viagem, além de selecionar assentos e realizar a compra de forma digital.",
    },
    thumbnail: gipsyyLogo,
    carousel: [gipsyy1, gipsyy2, gipsyy3, gipsyy4, gipsyy5, gipsyy6],
    stack: ["React Native", "Expo", "GraphQL", "Firebase"],
    year: "2021",
    liveUrl: "https://play.google.com/store/apps/details?id=br.com.gipsyy.app",
  },
  {
    id: "joga-mais",
    title: "JOGA+",
    category: "Game",
    description: {
      en: "The platform that has come to revolutionize amateur football. Through our app, teams can manage their games: send, receive, accept and reject game invitations in a practical and intuitive way.",
      es: "Joga+ es una plataforma que ha llegado para revolucionar el fútbol amateur. A través de nuestra aplicación, los equipos pueden administrar sus juegos: enviar, recibir, aceptar y rechazar invitaciones a juegos de una manera práctica e intuitiva.",
      pt: "Joga+ chegou para revolucionar o futebol amateur. Atrás da nossa app, os times podem gerenciar seus jogos: enviar, receber, aceitar e recusar convites de jogos de uma maneira prática e intuitiva.",
    },
    thumbnail: jogamaisLogo,
    carousel: [jogamais1, jogamais2, jogamais3],
    stack: ["React Native", "Expo", "GraphQL", "Firebase"],
    year: "2021",
    liveUrl: "https://play.google.com/store/apps/details?id=app.jogamais2",
  },
];

export const experience = [
  {
    company: "Projeto 22",
    role: "React & React Native Developer",
    period: "Jan 2026 — Present",
    description: {
      en: "Collaborating with the Mobile team on a Design System for Ipiranga, one of Brazil's largest fuel distributors. Architected a dashboard/back-office system for managing gas station network data at scale.",
      es: "Colaborando con el equipo Mobile en un Design System para Ipiranga, una de las mayores distribuidoras de combustible de Brasil. Arquitecté un sistema de dashboard/back-office para gestionar redes de estaciones de servicio.",
      pt: "Colaborando com o time Mobile em um Design System para a Ipiranga, uma das maiores distribuidoras de combustível do Brasil. Arquitetei um sistema de dashboard/back-office para gerenciamento de redes de postos de gasolina.",
    },
  },
  {
    company: "Vector Casa de Bolsa",
    role: "Senior React Native Developer",
    period: "Oct 2023 — Jan 2026",
    description: {
      en: "Architected and shipped a production financial investment app for iOS and Android with biometric auth, secure session management, and an AI-powered in-app assistant. Implemented JS obfuscation and AWS (S3, Lambda) to meet financial-sector compliance requirements.",
      es: "Arquitecté y lancé una app de inversión financiera en producción para iOS y Android con autenticación biométrica, gestión segura de sesiones y un asistente con IA. Implementé ofuscación de JS e integré AWS (S3, Lambda) para cumplir con regulaciones del sector financiero.",
      pt: "Arquitetei e lancei um app de investimento financeiro em produção para iOS e Android com autenticação biométrica, gestão segura de sessão e um assistente com IA. Implementei ofuscação de JS e integrei AWS (S3, Lambda) para conformidade com o setor financeiro.",
    },
  },
  {
    company: "XGROW Tecnologia",
    role: "React Native Developer",
    period: "Oct 2022 — Oct 2023",
    description: {
      en: "Designed and launched 5 educational mobile apps for financial literacy campaigns, reaching 10,000+ downloads on Google Play. Built a real-time passenger transport app with live geolocation, push notifications, and Firebase-powered in-app chat.",
      es: "Diseñé y lancé 5 aplicaciones móviles educativas para campañas de educación financiera, alcanzando +10.000 descargas en Google Play. Desarrollé una app de transporte en tiempo real con geolocalización, notificaciones push y chat con Firebase.",
      pt: "Desenvolvi e lancei 5 apps educacionais para campanhas de educação financeira, atingindo +10.000 downloads no Google Play. Construí um app de transporte em tempo real com geolocalização ao vivo, notificações push e chat via Firebase.",
    },
  },
  {
    company: "Envixo Sistemas LTDA",
    role: "React Native Developer",
    period: "Aug 2020 — Sep 2022",
    description: {
      en: "Built a full-featured food delivery app for the Angolan market and a laundry delivery app for Portugal. Engineered a multilingual (EN/DE) IoT companion app for smart baby cribs with Bluetooth Low Energy (BLE) integration.",
      es: "Desarrollé una app de delivery de comida para el mercado angoleño y una app de lavandería para Portugal. Creé una app IoT multilingüe (EN/DE) para cunas inteligentes con comunicación Bluetooth Low Energy (BLE).",
      pt: "Desenvolvi um app de delivery para o mercado angolano e um app de lavanderia para Portugal. Criei um app IoT multilíngue (EN/DE) para berços inteligentes com integração Bluetooth Low Energy (BLE).",
    },
  },
  {
    company: "MG Network Marketing Digital LTDA",
    role: "Software Developer",
    period: "May 2019 — Jul 2020",
    description: {
      en: "Built a high-volume bus ticketing platform serving Brazil, the Americas, Spain, Portugal, and the UK. Developed an offline-first mobile app for seed order management and a SCADA-style web panel for remote water treatment station control.",
      es: "Construí una plataforma de venta de pasajes de autobús de alto volumen para Brasil, las Américas, España, Portugal y el UK. Desarrollé una app móvil offline-first para gestión de pedidos de semillas y un panel web estilo SCADA para estaciones de tratamiento de agua.",
      pt: "Construí uma plataforma de venda de passagens de ônibus de alto volume para Brasil, Américas, Espanha, Portugal e UK. Desenvolvi um app móvil offline-first para pedidos de sementes e um painel SCADA para controle remoto de estações de tratamento de água.",
    },
  },
  {
    company: "Trentim Gestão e Tecnologia LTDA",
    role: "Software Developer",
    period: "Jan 2018 — Apr 2019",
    description: {
      en: "Developed a fintech/crowdfunding platform connecting stores, clients, and gift registries with GPS-based store discovery. Built a subscription-based online fitness platform with video delivery, authentication, and payment integration.",
      es: "Desarrollé una plataforma fintech/crowdfunding conectando tiendas, clientes y registros de regalos con descubrimiento de tiendas por GPS. Construí una plataforma fitness online con entrega de video, autenticación y pagos.",
      pt: "Desenvolvi uma plataforma fintech/crowdfunding conectando lojas, clientes e listas de presentes com descoberta por GPS. Construí uma plataforma fitness online com entrega de vídeo, autenticação e integração de pagamentos.",
    },
  },
  {
    company: "Empresa Mixta PETROPIAR, S.A.",
    role: "Software Developer",
    period: "Mar 2017 — Nov 2017",
    description: {
      en: "Built a web application to control and monitor end-to-end contracting processes, from request submission through approval workflows to final digital signature.",
      es: "Desarrollé una aplicación web para controlar y monitorear procesos de contratación de extremo a extremo, desde la solicitud hasta la firma digital final.",
      pt: "Desenvolvi uma aplicação web para controlar e monitorar processos de contratação de ponta a ponta, desde a solicitação até a assinatura digital final.",
    },
  },
];

export const expertiseAreas = [
  { key: "mobile", icon: "Smartphone" },
  { key: "rn", icon: "Layers" },
  { key: "ai", icon: "Sparkles" },
  { key: "fintech", icon: "LineChart" },
  { key: "realtime", icon: "Radio" },
  { key: "backend", icon: "Server" },
  { key: "cloud", icon: "Cloud" },
  { key: "product", icon: "Compass" },
] as const;

export const expertiseLabels: Record<
  string,
  { en: string; es: string; pt: string; desc: { en: string; es: string; pt: string } }
> = {
  mobile: {
    en: "Mobile Engineering",
    es: "Ingeniería Móvil",
    pt: "Engenharia Mobile",
    desc: {
      en: "7+ years shipping production iOS and Android apps across fintech, e-commerce, logistics, and EdTech.",
      es: "Más de 7 años lanzando apps en producción para iOS y Android en fintech, e-commerce, logística y EdTech.",
      pt: "Mais de 7 anos lançando apps em produção para iOS e Android em fintech, e-commerce, logística e EdTech.",
    },
  },
  rn: {
    en: "React Native & Expo",
    es: "React Native & Expo",
    pt: "React Native & Expo",
    desc: {
      en: "React Native CLI and Expo (EAS Build & Submit), Reanimated, NativeWind, MMKV, React Navigation, and OTA updates.",
      es: "React Native CLI y Expo (EAS Build & Submit), Reanimated, NativeWind, MMKV, React Navigation y actualizaciones OTA.",
      pt: "React Native CLI e Expo (EAS Build & Submit), Reanimated, NativeWind, MMKV, React Navigation e atualizações OTA.",
    },
  },
  ai: {
    en: "AI Integrations",
    es: "Integraciones de IA",
    pt: "Integrações de IA",
    desc: {
      en: "Production experience with Anthropic Claude, OpenAI, Gemini, and Grok APIs — including an AI-powered in-app assistant shipped to a financial investment app.",
      es: "Experiencia en producción con APIs de Anthropic Claude, OpenAI, Gemini y Grok, incluyendo un asistente con IA lanzado en una app de inversión financiera.",
      pt: "Experiência em produção com APIs da Anthropic Claude, OpenAI, Gemini e Grok, incluindo um assistente com IA lançado em um app de investimento financeiro.",
    },
  },
  fintech: {
    en: "Fintech Applications",
    es: "Aplicaciones Fintech",
    pt: "Aplicações Fintech",
    desc: {
      en: "Built a financial investment app with biometric auth (Face ID / Touch ID), secure session management, JS obfuscation, and AWS compliance integrations.",
      es: "Desarrollé una app de inversión financiera con autenticación biométrica (Face ID / Touch ID), gestión segura de sesiones, ofuscación de JS e integraciones de cumplimiento en AWS.",
      pt: "Desenvolvi um app de investimento financeiro com autenticação biométrica (Face ID / Touch ID), gestão segura de sessão, ofuscação de JS e integrações de compliance na AWS.",
    },
  },
  realtime: {
    en: "Real-Time Features",
    es: "Funcionalidades en Tiempo Real",
    pt: "Funcionalidades em Tempo Real",
    desc: {
      en: "Live geolocation tracking, push notifications, and in-app chat powered by Firebase Realtime Database and Cloud Functions.",
      es: "Seguimiento de geolocalización en vivo, notificaciones push y chat en tiempo real con Firebase Realtime Database y Cloud Functions.",
      pt: "Rastreamento de geolocalização ao vivo, notificações push e chat em tempo real com Firebase Realtime Database e Cloud Functions.",
    },
  },
  backend: {
    en: "Backend & APIs",
    es: "Backend y APIs",
    pt: "Backend e APIs",
    desc: {
      en: "Node.js, Express.js, Apollo GraphQL, REST APIs, MySQL, and MongoDB — including high-volume transactional platforms with multi-currency support.",
      es: "Node.js, Express.js, Apollo GraphQL, APIs REST, MySQL y MongoDB, incluyendo plataformas transaccionales de alto volumen con soporte multi-moneda.",
      pt: "Node.js, Express.js, Apollo GraphQL, APIs REST, MySQL e MongoDB, incluindo plataformas transacionais de alto volume com suporte a múltiplas moedas.",
    },
  },
  cloud: {
    en: "Cloud & DevOps",
    es: "Cloud y DevOps",
    pt: "Cloud e DevOps",
    desc: {
      en: "AWS S3 and Lambda, Firebase (Auth, Firestore, Realtime DB, Cloud Functions), Docker, GitHub Actions, and Bitbucket Pipelines.",
      es: "AWS S3 y Lambda, Firebase (Auth, Firestore, Realtime DB, Cloud Functions), Docker, GitHub Actions y Bitbucket Pipelines.",
      pt: "AWS S3 e Lambda, Firebase (Auth, Firestore, Realtime DB, Cloud Functions), Docker, GitHub Actions e Bitbucket Pipelines.",
    },
  },
  product: {
    en: "End-to-End Delivery",
    es: "Entrega de Extremo a Extremo",
    pt: "Entrega de Ponta a Ponta",
    desc: {
      en: "Taken multiple apps from concept to App Store / Google Play release, coordinating with designers, backend engineers, QA, and product managers in Agile/Scrum teams.",
      es: "Llevé múltiples apps desde el concepto hasta el lanzamiento en App Store / Google Play, coordinando con diseñadores, ingenieros backend, QA y product managers en equipos Agile/Scrum.",
      pt: "Levei múltiplos apps do conceito ao lançamento na App Store / Google Play, coordenando com designers, engenheiros backend, QA e product managers em times Agile/Scrum.",
    },
  },
};

export const stack = [
  "React Native",
  "TypeScript",
  "Next.js",
  "Node.js",
  "AWS",
  "Firebase",
  "GraphQL",
  "OpenAI",
  "Claude",
  "Docker",
];
