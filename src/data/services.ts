import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business & Portfolio Websites",
    badge: "High Conversion & Speed",
    description: "Custom-designed marketing websites, product landing pages, and portfolio sites engineered for speed, SEO, and lead conversion.",
    clientOutcome: "A fast, polished web presence that builds instant credibility and turns prospective visitors into qualified leads.",
    typicalScope: [
      "Custom responsive design (mobile, tablet, desktop)",
      "Vite / Next.js high-performance architecture",
      "SEO meta tags, OpenGraph previews & Sitemap setup",
      "Interactive lead inquiry forms with anti-spam security",
      "Fast 1-click deployment on Vercel with custom domain"
    ],
    icon: "Layout"
  },
  {
    id: "fullstack-apps",
    title: "Full-Stack Web Applications",
    badge: "Scalable Architecture",
    description: "End-to-end web apps combining modern interactive frontends (React/Next.js) with secure, asynchronous backend APIs (FastAPI/Python/Node) and relational databases.",
    clientOutcome: "A robust digital product with clean authentication, reliable data storage, and scalable architecture ready to serve users.",
    typicalScope: [
      "User authentication & Role-Based Access Control (RBAC)",
      "RESTful API design with Python FastAPI or Node.js",
      "PostgreSQL database modeling & ACID transactions",
      "Third-party API integrations & Webhooks",
      "Docker containerization & production hosting setup"
    ],
    icon: "Code2"
  },
  {
    id: "ai-automations",
    title: "AI Chatbots & Workflow Automation",
    badge: "Operational Efficiency",
    description: "Practical AI integrations, speech-to-text voice pipelines, and multi-step automated workflows that eliminate repetitive manual business operations.",
    clientOutcome: "Measurable time saved by automating customer support queries, internal data extraction, and content processing.",
    typicalScope: [
      "Custom AI assistants powered by Gemini, Groq, or OpenAI APIs",
      "Local offline LLM runtimes using Ollama for privacy-sensitive tasks",
      "Audio transcription & voice pipelines using Whisper",
      "Automated data extraction & batch processing scripts",
      "Human-in-the-loop approval workflows for critical tasks"
    ],
    icon: "Bot"
  },
  {
    id: "uiux-dashboards",
    title: "UI/UX & Dashboard Development",
    badge: "Linear / Stripe Aesthetic",
    description: "Minimalist, high-density analytics dashboards, administrative control panels, and SaaS interfaces with fluid interactions.",
    clientOutcome: "Intuitive, distraction-free software interfaces that make complex data effortless for your team and customers to navigate.",
    typicalScope: [
      "Clean UI component design systems with Tailwind CSS",
      "Real-time data visualization & telemetry tracking",
      "Role-based administrative dashboards & permission gates",
      "Accessible dark & light mode styling",
      "Keyboard shortcuts, smooth micro-interactions & filter states"
    ],
    icon: "Sliders"
  }
];
