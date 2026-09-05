export const site = {
  name: "Jonimel Services",
  shortName: "J",
  tagline: "Expert consultancy services in Florida",
  description:
    "Tailored consultancy for the Florida market — business planning, operational excellence, and financial modeling that connect strategy to execution.",
  market: "Florida",
  marketBody: "Business planning, operational excellence, and financial modeling.",
  rights: "All rights reserved.",
  footerLine: "Strategy connected to execution.",
};

export const nav = [
  { to: "/business-plans" as const, label: "Planning & Strategy" },
  { to: "/operational-excellence" as const, label: "Operational Excellence" },
  { to: "/contact" as const, label: "Contact" },
];

export const ui = {
  skip: "Skip to content",
  home: "Home",
  pages: "Pages",
  market: "Market",
  navAria: "Primary",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  language: "Language",
  toSpanish: "Español",
  toEnglish: "English",
  notFoundTitle: "Page not found.",
  notFoundBody: "That page doesn't exist. Head back home or get in touch.",
  stars: "5 out of 5 stars",
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
  legal: "Legal",
};

export const home = {
  eyebrow: "Expert consultancy · Florida",
  headline: "Strategy, Planned.",
  headline2: "Operations, Perfected.",
  lede: "We design strategic blueprints and operational systems to guide businesses through Florida's dynamic economy with confidence. By bridging the gap between vision and results, we turn obstacles into pathways for growth.",
  heroCaption: "Miami waterfront · strategy sessions",
  heroAlt: "Sunlit Miami waterfront conference room overlooking palms and the bay",
  explore: "Explore services",
  getInTouch: "Get in touch",
  viewService: "View service",
  servicesTitle: "An Integrated Approach to Growth",
  servicesLede: "We connect your high-level strategy to the daily execution required for scalable success. Explore our core services.",
  resultsTitle: "Results, in their words.",
};

export const services = [
  {
    to: "/business-plans" as const,
    title: "Business Planning & Strategy",
    summary:
      "Bespoke business plans, pitch decks, and financial models to secure investment and fuel growth.",
    image: "/images/planning.jpg",
    imageAlt: "Business plan, financial charts, and fountain pen on a walnut desk",
  },
  {
    to: "/operational-excellence" as const,
    title: "Operational Excellence",
    summary:
      "Tailored standard operating procedures, process improvement, and performance systems for sustained growth.",
    image: "/images/operations.jpg",
    imageAlt: "Organized operations studio with binders, process board, and KPI dashboard",
  },
];

export const process = {
  title: "Our 3-step path to results",
  lede: "A simple, powerful process designed for clarity and impact.",
  steps: [
    {
      n: "01",
      title: "Discover & Analyze",
      body: "A deep dive into your business, market, and goals — a complete picture of the challenges and opportunities in front of you.",
      more: "We interview the people who run the work and pressure-test the numbers before we recommend a path.",
    },
    {
      n: "02",
      title: "Strategize & Plan",
      body: "A clear, data-driven strategic plan and the operational blueprint needed to hit your objectives with precision.",
      more: "Funding, visa, or scale — the plan is written for the decision in front of you.",
    },
    {
      n: "03",
      title: "Implement & Scale",
      body: "Execute the plan, build efficient processes, and put robust systems in place for long-term growth.",
      more: "SOPs, KPIs, and coaching so the team can run it without us in the room.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "The business plan was instrumental in securing our E2 Visa. The process was thorough, and the financial projections gave us incredible clarity on our path forward.",
    name: "Franco A.",
    role: "CEO, Discovery Pet USA",
    place: "Florida",
  },
  {
    quote:
      "Implementing the new SOPs transformed our daily operations. We've reduced errors and our team is more efficient than ever. It was the key to unlocking our ability to scale.",
    name: "Fernando Y.",
    role: "CEO, Buddies Bakery",
    place: "Florida",
  },
];

export const planning = {
  eyebrow: "Business Planning & Strategy",
  headline: "Let's build your winning strategy.",
  lede: "We don't just write plans. We craft strategic roadmaps that win over investors, secure funding, and guide your growth.",
  imageAlt: "Business plan, financial charts, and fountain pen on a walnut desk",
  blocks: [
    {
      title: "Business plan development",
      body: "Comprehensive 30–50 page business plans, written for the audience that will actually read them — investors, lenders, and immigration officers.",
      items: [
        "Immigration visa business plans",
        "Investor business plans",
        "Teaser business plans",
        "SBA business plans",
        "Specialized business plans",
      ],
    },
    {
      title: "Financial modeling",
      body: "Sophisticated, dynamic models that quantify your vision and validate the business case — including sensitivity analysis for any scenario.",
      items: [
        "5-year financial projections",
        "Scenario analysis",
        "Sensitivity testing",
        "Return on investment and business valuation",
      ],
    },
    {
      title: "Pitch deck creation",
      body: "We distill a complex plan into a 12–15 slide deck: problem, solution, market, and team — a clear, persuasive narrative with professional design.",
      items: [
        "Investor-ready 12–15 slide decks",
        "Graphic design and storytelling",
        "Core story: problem, solution, market, team",
      ],
    },
  ],
};

export const operations = {
  eyebrow: "Operational Excellence",
  headline: "Scale without the strain.",
  lede: "Standardize how work gets done, remove friction, and manage performance with numbers instead of guesswork.",
  imageAlt: "Organized operations studio with binders, process board, and KPI dashboard",
  blocks: [
    {
      title: "Standard operating procedures",
      body: "Step-by-step guides for core functions — designed to standardize workflows, reduce errors, and scale the team. Tailored to your industry, including labor shortages and regulatory shifts, so the business still runs during high-turnover periods. Includes comprehensive employee handbooks that go beyond the basics.",
      items: [
        "Core-function SOP playbooks",
        "Industry-specific best practices",
        "Employee handbooks",
      ],
    },
    {
      title: "Business process improvement",
      body: "We find the bottlenecks, then redesign the work: eliminate waste, automate where it pays, and leave a leaner, more agile operation. Includes business coaching for efficiency, productivity, and problem-solving.",
      items: [
        "Workflow friction analysis",
        "Process redesign and automation",
        "Business coaching",
      ],
    },
    {
      title: "Performance management",
      body: "Move from guesswork to data-informed management. We pinpoint the KPIs that actually drive the business and build straightforward dashboards for real-time operational insight — and a culture of accountability.",
      items: [
        "KPI selection and cascading",
        "Simple real-time dashboards",
        "Accountability systems",
      ],
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  headline: "Get in touch.",
  lede: "Tell us where the business is today and where it needs to go. We'll map the next step.",
  inbox: "jonimelservices@gmail.com",
  imageAlt: "Quiet Florida estuary at late afternoon",
  asides: [
    {
      title: "Where we work",
      body: "Tailored consultancy for the Florida market — planning, operations, and finance under one roof.",
    },
    {
      title: "What to include",
      body: "A short note on the stage of the business, the decision you're facing (funding, visa, scale, ops), and any deadline.",
    },
  ],
};

export const form = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  service: "How can we help?",
  selectService: "Select a service",
  planning: "Business Planning & Strategy",
  operations: "Operational Excellence",
  both: "Both",
  other: "Something else",
  message: "Message",
  messagePlaceholder: "Stage of the business, the decision in front of you, any deadline.",
  optional: "optional",
  send: "Send message",
  sending: "Sending…",
  sentTitle: "Message sent.",
  sentBody: "Thank you. We'll be in touch shortly.",
  sendAnother: "Send another",
  errName: "Please enter your name.",
  errEmail: "Enter a valid email.",
  errPhone: "Enter a valid phone number.",
  errMessage: "Tell us a bit more about what you need.",
  errService: "Please choose how we can help before submitting.",
  errSend: "The message could not be sent. Email us directly at jonimelservices@gmail.com.",
};

export const cta = {
  title: "Ready to connect strategy to execution?",
  body: "Whether you need a plan that wins capital or systems that let the team scale — start with a conversation.",
  action: "Get in touch",
};

export { legal } from "./legal-en";

