export const site = {
  name: "Jonimel Services",
  shortName: "J",
  tagline: "Servicios de consultoría en Florida",
  description:
    "Consultoría a medida para el mercado de Florida: planificación empresarial, excelencia operativa y modelado financiero que conectan la estrategia con la ejecución.",
  market: "Florida",
  marketBody: "Planificación empresarial, excelencia operativa y modelado financiero.",
  rights: "Todos los derechos reservados.",
  footerLine: "Estrategia conectada con la ejecución.",
};

export const nav = [
  { to: "/business-plans" as const, label: "Planificación y estrategia" },
  { to: "/operational-excellence" as const, label: "Excelencia operativa" },
  { to: "/contact" as const, label: "Contacto" },
];

export const ui = {
  skip: "Saltar al contenido",
  home: "Inicio",
  pages: "Páginas",
  market: "Mercado",
  navAria: "Principal",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  language: "Idioma",
  toSpanish: "Español",
  toEnglish: "English",
  notFoundTitle: "Página no encontrada.",
  notFoundBody: "Esa página no existe. Vuelva al inicio o escríbanos.",
  stars: "5 de 5 estrellas",
  privacy: "Política de privacidad",
  terms: "Términos y condiciones",
  legal: "Legal",
};

export const home = {
  eyebrow: "Consultoría experta · Florida",
  headline: "Estrategia, planificada.",
  headline2: "Operaciones, perfeccionadas.",
  lede: "Diseñamos hojas de ruta estratégicas y sistemas operativos para guiar a las empresas a través de la economía dinámica de Florida con confianza. Al unir la visión con los resultados, convertimos los obstáculos en caminos de crecimiento.",
  heroCaption: "Malecón de Miami · sesiones de estrategia",
  heroAlt: "Sala de juntas frente a la bahía de Miami, con palmeras y luz de atardecer",
  explore: "Ver servicios",
  getInTouch: "Hablemos",
  viewService: "Ver servicio",
  servicesTitle: "Un enfoque integrado para el crecimiento",
  servicesLede: "Conectamos su estrategia de alto nivel con la ejecución diaria que exige un crecimiento sostenible. Conozca nuestros servicios principales.",
  resultsTitle: "Resultados, en sus palabras.",
};

export const services = [
  {
    to: "/business-plans" as const,
    title: "Planificación y estrategia",
    summary:
      "Planes de negocio, presentaciones y modelos financieros a medida para atraer inversión e impulsar el crecimiento.",
    image: "/images/planning.jpg",
    imageAlt: "Plan de negocio, gráficos financieros y pluma sobre un escritorio de nogal",
  },
  {
    to: "/operational-excellence" as const,
    title: "Excelencia operativa",
    summary:
      "Procedimientos operativos, mejora de procesos y sistemas de desempeño para un crecimiento sostenido.",
    image: "/images/operations.jpg",
    imageAlt: "Estudio de operaciones con archivadores, tablero de procesos y panel de indicadores",
  },
];

export const process = {
  title: "Nuestro camino de 3 pasos hacia resultados",
  lede: "Un proceso simple y potente, pensado para la claridad y el impacto.",
  steps: [
    {
      n: "01",
      title: "Descubrir y analizar",
      body: "Una inmersión profunda en su negocio, mercado y objetivos: un retrato completo de los retos y las oportunidades que tiene delante.",
      more: "Entrevistamos a quien opera el día a día y ponemos a prueba los números antes de recomendar un camino.",
    },
    {
      n: "02",
      title: "Estrategia y plan",
      body: "Un plan estratégico claro, basado en datos, y el mapa operativo necesario para cumplir sus objetivos con precisión.",
      more: "Capital, visa o escala: el plan se escribe para la decisión que tiene delante.",
    },
    {
      n: "03",
      title: "Implementar y escalar",
      body: "Ejecutamos el plan, construimos procesos eficientes y dejamos sistemas sólidos para el crecimiento a largo plazo.",
      more: "Procedimientos, indicadores y acompañamiento para que el equipo pueda operar sin nosotros en la sala.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "El plan de negocio fue clave para obtener nuestra visa E2. El proceso fue minucioso y las proyecciones financieras nos dieron una claridad enorme sobre el camino a seguir.",
    name: "Franco A.",
    role: "CEO, Discovery Pet USA",
    place: "Florida",
  },
  {
    quote:
      "Implementar los nuevos procedimientos transformó el día a día. Redujimos errores y el equipo es más eficiente que nunca. Fue la clave para poder escalar.",
    name: "Fernando Y.",
    role: "CEO, Buddies Bakery",
    place: "Florida",
  },
];

export const planning = {
  eyebrow: "Planificación y estrategia",
  headline: "Construyamos su estrategia ganadora.",
  lede: "No solo redactamos planes. Diseñamos hojas de ruta que convencen a inversionistas, aseguran financiamiento y guían su crecimiento.",
  imageAlt: "Plan de negocio, gráficos financieros y pluma sobre un escritorio de nogal",
  blocks: [
    {
      title: "Desarrollo de planes de negocio",
      body: "Planes de 30 a 50 páginas, escritos para quien realmente los va a leer: inversionistas, bancos y oficiales de inmigración.",
      items: [
        "Planes para visas de inmigración",
        "Planes para inversionistas",
        "Planes teaser",
        "Planes para préstamos SBA",
        "Planes especializados",
      ],
    },
    {
      title: "Modelado financiero",
      body: "Modelos dinámicos que cuantifican su visión y validan el caso de negocio, con análisis de sensibilidad para cualquier escenario.",
      items: [
        "Proyecciones financieras a 5 años",
        "Análisis de escenarios",
        "Pruebas de sensibilidad",
        "Retorno de inversión y valoración",
      ],
    },
    {
      title: "Presentaciones (pitch decks)",
      body: "Condensamos un plan complejo en 12 a 15 diapositivas: problema, solución, mercado y equipo, con un relato claro y diseño profesional.",
      items: [
        "Decks de 12 a 15 diapositivas listos para inversionistas",
        "Diseño gráfico y narración",
        "Historia central: problema, solución, mercado, equipo",
      ],
    },
  ],
};

export const operations = {
  eyebrow: "Excelencia operativa",
  headline: "Escale sin desgaste.",
  lede: "Estandarice cómo se hace el trabajo, quite fricción y gestione el desempeño con números, no con suposiciones.",
  imageAlt: "Estudio de operaciones con archivadores, tablero de procesos y panel de indicadores",
  blocks: [
    {
      title: "Procedimientos operativos estándar",
      body: "Guías paso a paso para las funciones clave: estandarizan el flujo, reducen errores y permiten escalar el equipo. Adaptadas a su industria, incluyendo escasez de personal y cambios regulatorios, para que el negocio siga operando en periodos de alta rotación. Incluyen manuales de empleado que van más allá de lo básico.",
      items: [
        "Manuales SOP de funciones clave",
        "Mejores prácticas por industria",
        "Manuales de empleado",
      ],
    },
    {
      title: "Mejora de procesos",
      body: "Identificamos cuellos de botella y rediseñamos el trabajo: eliminamos desperdicio, automatizamos donde rinde y dejamos una operación más ágil. Incluye coaching empresarial en eficiencia, productividad y resolución de problemas.",
      items: [
        "Análisis de fricción en el flujo de trabajo",
        "Rediseño de procesos y automatización",
        "Coaching empresarial",
      ],
    },
    {
      title: "Gestión del desempeño",
      body: "Pasamos de la intuición a una gestión informada por datos. Definimos los indicadores que realmente mueven el negocio y paneles sencillos para ver la operación en tiempo real, con una cultura de responsabilidad.",
      items: [
        "Selección y cascada de KPIs",
        "Paneles simples en tiempo real",
        "Sistemas de accountability",
      ],
    },
  ],
};

export const contact = {
  eyebrow: "Contacto",
  headline: "Hablemos.",
  lede: "Cuéntenos dónde está el negocio hoy y hacia dónde debe ir. Trazaremos el siguiente paso.",
  inbox: "jonimelservices@gmail.com",
  imageAlt: "Estuario tranquilo de Florida al atardecer",
  asides: [
    {
      title: "Dónde trabajamos",
      body: "Consultoría a medida para el mercado de Florida: planificación, operaciones y finanzas bajo un mismo techo.",
    },
    {
      title: "Qué incluir",
      body: "Una nota breve sobre la etapa del negocio, la decisión que enfrenta (capital, visa, escala, operaciones) y cualquier fecha límite.",
    },
  ],
};

export const form = {
  name: "Nombre",
  email: "Correo",
  phone: "Teléfono",
  company: "Empresa",
  service: "¿En qué podemos ayudar?",
  selectService: "Seleccione un servicio",
  planning: "Planificación y estrategia",
  operations: "Excelencia operativa",
  both: "Ambos",
  other: "Otra consulta",
  message: "Mensaje",
  messagePlaceholder: "Etapa del negocio, la decisión que tiene delante, alguna fecha límite.",
  optional: "opcional",
  send: "Enviar mensaje",
  sending: "Enviando…",
  sentTitle: "Mensaje enviado.",
  sentBody: "Gracias. Nos pondremos en contacto pronto.",
  sendAnother: "Enviar otro",
  errName: "Indique su nombre.",
  errEmail: "Indique un correo válido.",
  errPhone: "Indique un teléfono válido.",
  errMessage: "Cuéntenos un poco más sobre lo que necesita.",
  errService: "Seleccione cómo podemos ayudar antes de enviar.",
  errSend: "No se pudo enviar el mensaje. Escríbanos a jonimelservices@gmail.com.",
};

export const cta = {
  title: "¿Listo para conectar estrategia y ejecución?",
  body: "Si necesita un plan que atraiga capital o sistemas que permitan escalar al equipo, empiece con una conversación.",
  action: "Hablemos",
};

export { legal } from "./legal-es";

