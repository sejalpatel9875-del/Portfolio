import type { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Programming / Core Languages
  {
    name: 'Python',
    level: 'Hands-on',
    category: 'Languages & Core',
    description: 'Core backend development, AI agent scripting, FastAPI microservices, and automation pipelines.',
    contextUsed: 'Used extensively across FlowPilot AI, Jarvis AI assistant, and backend scripting.',
    usedInProjects: ['FlowPilot AI', 'Jarvis AI', 'FastAPI Microservices'],
    featured: true
  },
  {
    name: 'JavaScript / TypeScript',
    level: 'Hands-on',
    category: 'Languages & Core',
    description: 'Type-safe frontend development, Next.js applications, component state architectures, and Node.js APIs.',
    contextUsed: 'Primary frontend language across React/Next.js dashboards and client-side systems.',
    usedInProjects: ['FlowPilot AI', 'Karya Pharmacy', 'Portfolio OS'],
    featured: true
  },
  {
    name: 'Java',
    level: 'Working Knowledge',
    category: 'Languages & Core',
    description: 'Object-Oriented Programming (OOP) design patterns, academic coursework algorithms, and system utilities.',
    contextUsed: 'BCA coursework, data structures implementations, and experimental Java utilities.',
    usedInProjects: ['Academic & Systems Lab', 'Data Structures Coursework'],
    featured: false
  },
  {
    name: 'SQL',
    level: 'Hands-on',
    category: 'Languages & Core',
    description: 'Relational database schema modeling, queries, joins, indices, and constraints.',
    contextUsed: 'PostgreSQL schemas, academic DBMS projects, and Karya Pharmacy application data store.',
    usedInProjects: ['FlowPilot AI', 'Karya Pharmacy', 'DBMS Coursework'],
    featured: true
  },
  {
    name: 'HTML & CSS',
    level: 'Hands-on',
    category: 'Languages & Core',
    description: 'Semantic markup, accessibility fundamentals, CSS variables, flexbox, and modern CSS grid architectures.',
    contextUsed: 'All web applications, responsive layouts, and design prototypes.',
    usedInProjects: ['FlowPilot AI', 'Karya Pharmacy', 'Portfolio OS'],
    featured: false
  },

  // Frontend Engineering
  {
    name: 'Next.js',
    level: 'Project Experience',
    category: 'Frontend Engineering',
    description: 'App Router, Server/Client components, SSR/SSG patterns, and API routes.',
    contextUsed: 'FlowPilot AI Command Center interface and modern SaaS web apps.',
    usedInProjects: ['FlowPilot AI', 'SaaS Dashboards'],
    featured: true
  },
  {
    name: 'React',
    level: 'Hands-on',
    category: 'Frontend Engineering',
    description: 'State management, custom hooks, reusable design component architecture, and virtual DOM performance.',
    contextUsed: 'Core UI framework across personal projects, dashboards, and experimental apps.',
    usedInProjects: ['FlowPilot AI', 'Karya Pharmacy', 'Portfolio OS'],
    featured: true
  },
  {
    name: 'Tailwind CSS',
    level: 'Hands-on',
    category: 'Frontend Engineering',
    description: 'Utility-first styling, glassmorphism tokens, dark/light theme switching, and responsive design systems.',
    contextUsed: 'Complete styling system for all portfolio apps and FlowPilot dashboard.',
    usedInProjects: ['FlowPilot AI', 'Karya Pharmacy', 'Appearance Studio'],
    featured: true
  },
  {
    name: 'Responsive Layouts & Design Systems',
    level: 'Hands-on',
    category: 'Frontend Engineering',
    description: 'Mobile-first breakpoints, clean typography scales, accessible color contrast, and micro-interactions.',
    contextUsed: 'SaaS interfaces inspired by Linear and Stripe aesthetic principles.',
    usedInProjects: ['FlowPilot AI', 'Portfolio OS'],
    featured: false
  },

  // Backend & APIs
  {
    name: 'FastAPI',
    level: 'Project Experience',
    category: 'Backend & APIs',
    description: 'High-performance asynchronous Python API endpoints, Pydantic schemas, and OpenAPI documentation.',
    contextUsed: 'AI backend servers, workflow execution endpoints, and Jarvis assistant API.',
    usedInProjects: ['FlowPilot AI', 'Jarvis AI'],
    featured: true
  },
  {
    name: 'REST APIs & Architecture',
    level: 'Hands-on',
    category: 'Backend & APIs',
    description: 'Resource-oriented API design, JWT authentication flows, status codes, and JSON serialization.',
    contextUsed: 'Backend API design for FlowPilot, Karya Pharmacy, and microservices.',
    usedInProjects: ['FlowPilot AI', 'Karya Pharmacy', 'Jarvis AI'],
    featured: true
  },
  {
    name: 'Node.js',
    level: 'Working Knowledge',
    category: 'Backend & APIs',
    description: 'Event loop architecture, Express.js / Next.js backend utilities, and asynchronous I/O handling.',
    contextUsed: 'Full-stack integrations and lightweight backend services.',
    usedInProjects: ['Karya Pharmacy', 'Tooling Scripts'],
    featured: false
  },

  // AI & Agentic Tech
  {
    name: 'AI Agent Architectures',
    level: 'Project Experience',
    category: 'AI & Agentic Tech',
    description: 'Multi-agent orchestration, supervisor patterns, tool execution loops, and human-in-the-loop approval gates.',
    contextUsed: 'Core architecture in FlowPilot AI Command Center.',
    usedInProjects: ['FlowPilot AI'],
    featured: true
  },
  {
    name: 'LLM Integrations (Gemini & Groq)',
    level: 'Hands-on',
    category: 'AI & Agentic Tech',
    description: 'Context window management, structured JSON outputs, streaming completions, and ultra-fast inference APIs.',
    contextUsed: 'FlowPilot workflow generation and Jarvis AI intelligent query routing.',
    usedInProjects: ['FlowPilot AI', 'Jarvis AI'],
    featured: true
  },
  {
    name: 'Ollama (Local LLM Execution)',
    level: 'Hands-on',
    category: 'AI & Agentic Tech',
    description: 'Local model execution (Llama, Mistral, Qwen) for offline privacy-first AI workflows and experimentation.',
    contextUsed: 'Jarvis AI local fallback and privacy-centric reasoning testing.',
    usedInProjects: ['Jarvis AI'],
    featured: true
  },
  {
    name: 'Whisper (Speech-to-Text)',
    level: 'Project Experience',
    category: 'AI & Agentic Tech',
    description: 'Audio transcription, voice query preprocessing, and voice command pipelines.',
    contextUsed: 'Jarvis AI voice assistant interaction flow.',
    usedInProjects: ['Jarvis AI'],
    featured: false
  },
  {
    name: 'NVIDIA NIM & AI Orchestration',
    level: 'Exploring',
    category: 'AI & Agentic Tech',
    description: 'Microservice-based AI inference, optimized model containers, and multi-model routing.',
    contextUsed: 'Exploratory benchmarks and high-throughput LLM testing.',
    usedInProjects: ['AI Inference Lab'],
    featured: false
  },

  // Databases & Infrastructure
  {
    name: 'PostgreSQL',
    level: 'Working Knowledge',
    category: 'Databases & Infrastructure',
    description: 'Relational data modeling, ACID transactions, foreign keys, indexing, and migration patterns.',
    contextUsed: 'Data persistence in full-stack project prototypes.',
    usedInProjects: ['FlowPilot AI', 'Karya Pharmacy'],
    featured: true
  },
  {
    name: 'Redis',
    level: 'Learning',
    category: 'Databases & Infrastructure',
    description: 'In-memory key-value caching, session state management, and pub/sub message brokering concepts.',
    contextUsed: 'Session caching and agent state caching experiments.',
    usedInProjects: ['FlowPilot AI Session Cache'],
    featured: false
  },
  {
    name: 'Docker',
    level: 'Working Knowledge',
    category: 'Databases & Infrastructure',
    description: 'Containerizing Python & Node applications, Dockerfile writing, and local container orchestration.',
    contextUsed: 'Reproducible local dev environments for backend and AI services.',
    usedInProjects: ['FlowPilot AI Container', 'FastAPI Deployments'],
    featured: true
  },
  {
    name: 'Railway & Vercel',
    level: 'Hands-on',
    category: 'Databases & Infrastructure',
    description: 'Frontend static/SSR deployment on Vercel, backend service and PostgreSQL container hosting on Railway.',
    contextUsed: 'Deploying personal web apps and live project demos.',
    usedInProjects: ['FlowPilot AI', 'Portfolio Deployments'],
    featured: true
  },

  // Developer Tools
  {
    name: 'Git & GitHub',
    level: 'Hands-on',
    category: 'Developer Tools',
    description: 'Version control workflows, branching, pull requests, conventional commits, and repo management.',
    contextUsed: 'Daily source control across all codebases.',
    usedInProjects: ['All Projects', 'Open Source Lab'],
    featured: true
  },
  {
    name: 'VS Code & Dev Environment',
    level: 'Hands-on',
    category: 'Developer Tools',
    description: 'Tailored development workflow with TypeScript tooling, debugging, and terminal integrations.',
    contextUsed: 'Daily coding and project construction.',
    usedInProjects: ['All Projects'],
    featured: false
  }
];
