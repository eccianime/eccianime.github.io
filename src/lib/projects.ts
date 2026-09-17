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

import futuraLogo from "@/assets/projects/futura/logo.webp";
import futura1 from "@/assets/projects/futura/1.webp";
import futura2 from "@/assets/projects/futura/2.webp";
import futura3 from "@/assets/projects/futura/3.webp";

import pauliLogo from "@/assets/projects/pauli/logo.webp";
import pauli1 from "@/assets/projects/pauli/1.webp";
import pauli2 from "@/assets/projects/pauli/2.webp";
import pauli3 from "@/assets/projects/pauli/3.webp";
import pauli4 from "@/assets/projects/pauli/4.webp";

import muvLogo from "@/assets/projects/muv/logo.webp";
import muv1 from "@/assets/projects/muv/1.webp";
import muv2 from "@/assets/projects/muv/2.webp";
import muv3 from "@/assets/projects/muv/3.webp";
import muv4 from "@/assets/projects/muv/4.webp";

import deliveryLogo from "@/assets/projects/delivery/logo.webp";
import delivery1 from "@/assets/projects/delivery/1.webp";
import delivery2 from "@/assets/projects/delivery/2.webp";
import delivery3 from "@/assets/projects/delivery/3.webp";
import delivery4 from "@/assets/projects/delivery/4.webp";

import bluetoothLogo from "@/assets/projects/bluetooth/logo.webp";
import bluetooth1 from "@/assets/projects/bluetooth/1.webp";
import bluetooth2 from "@/assets/projects/bluetooth/2.webp";
import bluetooth3 from "@/assets/projects/bluetooth/3.webp";
import bluetooth4 from "@/assets/projects/bluetooth/4.webp";

import neonLogo from "@/assets/projects/neon/logo.webp";
import neon1 from "@/assets/projects/neon/1.webp";
import neon2 from "@/assets/projects/neon/2.webp";
import neon3 from "@/assets/projects/neon/3.webp";
import neon4 from "@/assets/projects/neon/4.webp";
import neon5 from "@/assets/projects/neon/5.webp";

import boletoLogo from "@/assets/projects/boleto/logo.webp";
import boleto1 from "@/assets/projects/boleto/1.webp";
import boleto2 from "@/assets/projects/boleto/2.webp";
import boleto3 from "@/assets/projects/boleto/3.webp";
import boleto4 from "@/assets/projects/boleto/4.webp";
import boleto5 from "@/assets/projects/boleto/5.webp";
import boleto6 from "@/assets/projects/boleto/6.webp";

import aphLogo from "@/assets/projects/aph/logo.png";
import aph1 from "@/assets/projects/aph/1.png";
import aph2 from "@/assets/projects/aph/2.png";
import aph3 from "@/assets/projects/aph/3.png";
import aph4 from "@/assets/projects/aph/4.png";
import aph5 from "@/assets/projects/aph/5.png";

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
    stack: ["React Native", "Expo", "GraphQL", "Firebase", "EAS", "zustand", "geolocation"],
    year: "2026",
    liveUrl: "https://play.google.com/store/apps/details?id=com.setec.sigic",
  },
  {
    id: "aph",
    title: "APH (Atenção Pre-Hospitalar)",
    category: "Utilities",
    description: {
      en: "Application made for paramedics. Accelerates the data collection process during an emergency.",
      es: "Aplicación realizada para los paramédicos. Agiliza el proceso de colecta de datos durante una emergencia.",
      pt: "Aplicação realizada para os paramédicos. Acelera o processo de coleta de dados durante uma emergência.",
    },
    thumbnail: aphLogo,
    carousel: [aph1, aph2, aph3, aph4, aph5],
    stack: ["React Native", "Expo", "GraphQL", "Firebase", "EAS", "zustand", "geolocation"],
    year: "2026",
  },
  {
    id: "neon-sweeper",
    title: "Neon Sweeper",
    category: "Game",
    description: {
      en: "Neon Sweeper is a reinterpretation of the classic Minesweeper with a cyberpunk and retro-futuristic aesthetic. The game allows players to reveal cells, flag mines, and complete boards at different difficulty levels, including a custom mode. ",
      es: "Neon Sweeper es una reinterpretación del clásico Buscaminas con una estética cyberpunk y retrofuturista. El juego permite descubrir casillas, marcar minas y completar tableros en diferentes niveles de dificultad, incluyendo un modo personalizado. ",
      pt: "Neon Sweeper é uma releitura do clássico Campo Minado com uma estética cyberpunk e retrofuturista. O jogo permite revelar casas, marcar minas e completar tabuleiros em diferentes níveis de dificuldade, incluindo um modo personalizado.",
    },
    thumbnail: neonLogo,
    carousel: [neon1, neon2, neon3, neon4, neon5],
    stack: ["React", "Next.js", "zustand", "zod"],
    year: "2026",
    liveUrl: "https://play.google.com/store/apps/details?id=com.ingjeanpaulrojas.neonsweeper",
  },
  {
    id: "editora-futura",
    title: "Editora Futura",
    category: "EdTech",
    description: {
      en: "Editora Futura is an educational platform focused on English learning through interactive content based on cognitive neuroscience. The app offers video and audio classes, exercises, games, quizzes, and personalized learning paths.",
      es: "Editora Futura es una plataforma educativa enfocada en el aprendizaje del inglés mediante contenidos interactivos basados en neurociencia cognitiva. La aplicación ofrece clases en video y audio, ejercicios, juegos, quizzes y rutas de aprendizaje personalizadas.",
      pt: "Editora Futura é uma plataforma educacional focada no aprendizado de inglês por meio de conteúdos interativos baseados em neurociência cognitiva. O aplicativo oferece aulas em vídeo e áudio, exercícios, jogos, quizzes e trilhas de aprendizado personalizadas.",
    },
    thumbnail: futuraLogo,
    carousel: [futura1, futura2, futura3],
    stack: ["Next.js", "React", "contextapi", "mongoDB", "zustand"],
    year: "2025",
    liveUrl: "https://play.google.com/store/apps/details?id=com.editorafutura",
  },
  {
    id: "pauli-and-co",
    title: "PAULI & CO",
    category: "IoT",
    description: {
      en: "PAULI & CO is an application developed to control the motor of spring baby hammocks from the German brand PAULI & CO. It allows you to automatically start and stop the motor, configure the duration and intensity of the movement, and control aspects such as lighting and brightness.",
      es: "PAULI & CO es una aplicación desarrollada para controlar el motor de hamacas de resorte para bebés de la marca alemana PAULI & CO. Permite iniciar y detener automáticamente el motor, configurar la duración e intensidad del movimiento y controlar aspectos como iluminación y brillo.",
      pt: "PAULI & CO é um aplicativo desenvolvido para controlar o motor de balanços de mola para bebês da marca alemã PAULI & CO. Permite ligar e desligar automaticamente o motor, configurar a duração e a intensidade do movimento e controlar aspectos como iluminação e brilho.",
    },
    thumbnail: pauliLogo,
    carousel: [pauli1, pauli2, pauli3, pauli4],
    stack: ["React Native", "EAS", "native modules"],
    year: "2024",
    liveUrl: "https://play.google.com/store/apps/details?id=com.envixo.pauliundco.de",
  },
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
    stack: ["React Native", "Next.js", "GraphQL", "Firebase", "EAS", "redux-toolkit"],
    year: "2023",
    liveUrl: "https://play.google.com/store/apps/details?id=com.xgrow.learningarea",
  },
  {
    id: "delivery365",
    title: "Delivery365",
    category: "Logistics",
    description: {
      en: "Delivery365 is a mobile application for drivers and couriers that is part of a logistics management platform. It allows users to view and accept deliveries, check distances and addresses, use navigation, perform GPS tracking, and register proof of delivery through signatures, photographs, and recipient data.",
      es: "Delivery365 es una aplicación móvil para conductores y repartidores que forma parte de una plataforma de gestión logística. Permite visualizar y aceptar entregas, consultar distancias y direcciones, utilizar navegación, realizar seguimiento GPS y registrar comprobantes de entrega mediante firmas, fotografías y datos del receptor.",
      pt: "Delivery365 é um aplicativo móvel para motoristas e entregadores que faz parte de uma plataforma de gestão logística. Permite visualizar e aceitar entregas, consultar distâncias e endereços, usar navegação, realizar rastreamento GPS e registrar comprovantes de entrega por meio de assinaturas, fotografias e dados do destinatário.",
    },
    thumbnail: deliveryLogo,
    carousel: [delivery1, delivery2, delivery3, delivery4],
    stack: ["React Native", "EAS", "geolocation", "zustand"],
    year: "2022",
    liveUrl:
      "https://play.google.com/store/apps/details?id=app.delivery365.deliveryman.delivery365",
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
    stack: ["React Native", "Expo", "GraphQL", "Firebase", "EAS", "geolocation", "native modules"],
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
    stack: ["React Native", "Expo", "GraphQL", "Firebase", "EAS", "geolocation", "native modules"],
    year: "2021",
    liveUrl: "https://play.google.com/store/apps/details?id=app.jogamais2",
  },
  {
    id: "bluetooth-app",
    title: "Bluetooth App",
    category: "IoT",
    description: {
      en: "Bluetooth App is a mobile application focused on communication and device control via Bluetooth connectivity. The project explores the interaction between a mobile app and external devices, allowing wireless connections to be established and communication to be managed from a simple interface.",
      es: "Bluetooth App es una aplicación móvil orientada a la comunicación y control de dispositivos mediante conectividad Bluetooth. El proyecto explora la interacción entre una aplicación móvil y dispositivos externos, permitiendo establecer conexiones inalámbricas y gestionar la comunicación desde una interfaz sencilla.",
      pt: "Bluetooth App é um aplicativo móvel voltado para a comunicação e o controle de dispositivos por meio de conectividade Bluetooth. O projeto explora a interação entre um aplicativo móvel e dispositivos externos, permitindo estabelecer conexões sem fio e gerenciar a comunicação a partir de uma interface simples.",
    },
    thumbnail: bluetoothLogo,
    carousel: [bluetooth1, bluetooth2, bluetooth3, bluetooth4],
    stack: ["React Native", "EAS", "native modules"],
    year: "2021",
    liveUrl: "https://play.google.com/store/apps/details?id=com.bluetooth_app",
  },
  {
    id: "boleto-tracker",
    title: "Boleto Tracker",
    category: "Fintech",
    description: {
      en: "Boleto Tracker is a mobile application developed to facilitate the tracking and control of payment slips and payment commitments. The project is aimed at centralizing information related to due dates, dates, and statuses of payment slips, helping the user maintain better control of their financial obligations.",
      es: "Boleto Tracker es una aplicación móvil desarrollada para facilitar el seguimiento y control de boletos y compromisos de pago. El proyecto está orientado a centralizar información relacionada con vencimientos, fechas y estados de boletos, ayudando al usuario a mantener un mejor control de sus obligaciones financieras.",
      pt: "Boleto Tracker é um aplicativo móvel desenvolvido para facilitar o acompanhamento e controle de boletos e compromissos de pagamento. O projeto visa centralizar informações relacionadas a vencimentos, datas e status dos boletos, ajudando o usuário a manter um melhor controle de suas obrigações financeiras.",
    },
    thumbnail: boletoLogo,
    carousel: [boleto1, boleto2, boleto3, boleto4, boleto5, boleto6],
    stack: ["React", "Next.js", "mongoDB", "zustand", "contextapi"],
    year: "2020",
    liveUrl: "https://play.google.com/store/apps/details?id=com.ingjeanpaulrojas.boletotracker",
  },
  {
    id: "muv",
    title: "MUV",
    category: "Mobility",
    description: {
      en: "MUV is a mobile application focused on mobility and transportation services, designed to connect users with different travel options. The app allows users to manage travel and mobility-related information from a mobile device, offering a centralized experience.",
      es: "MUV es una aplicación móvil orientada a servicios de movilidad y transporte, diseñada para conectar usuarios con diferentes opciones de desplazamiento. La aplicación permite gestionar información relacionada con viajes y movilidad desde un dispositivo móvil, ofreciendo una experiencia centralizada para los usuarios.",
      pt: "MUV é um aplicativo móvel voltado para serviços de mobilidade e transporte, projetado para conectar usuários a diferentes opções de deslocamento. O aplicativo permite gerenciar informações relacionadas a viagens e mobilidade a partir de um dispositivo móvel, oferecendo uma experiência centralizada.",
    },
    thumbnail: muvLogo,
    carousel: [muv1, muv2, muv3, muv4],
    stack: ["React Native", "EAS", "geolocation", "native modules"],
    year: "2019",
    liveUrl: "https://play.google.com/store/apps/details?id=com.muv.customer",
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
