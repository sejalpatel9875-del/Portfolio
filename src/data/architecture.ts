export interface ArchitectureLayer {
  name: string;
  badge: string;
  technologies: string[];
  description: string;
  principles: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    name: 'Presentation & Interface Layer',
    badge: 'Frontend',
    technologies: ['Next.js (App Router)', 'React 18', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    description: 'Component-driven, responsive UI built with strict visual hierarchy, accessible contrast ratios, and micro-interactions.',
    principles: [
      'Type-safe props and state flow',
      'Client-side optimistic UI updates and skeleton loading states',
      'Adaptive dark/light theme switching with CSS variables',
      'Zero layout shifts with fluid responsive grids'
    ]
  },
  {
    name: 'Application & API Routing Layer',
    badge: 'Backend Microservices',
    technologies: ['FastAPI (Python)', 'Node.js / Express', 'Pydantic V2', 'RESTful Standard'],
    description: 'High-throughput asynchronous endpoints delivering predictable JSON responses, strict validation, and error boundaries.',
    principles: [
      'Async event loop handling for non-blocking I/O and streaming',
      'Strict schema validation using Pydantic models',
      'JWT-based authentication headers and role authorization',
      'Structured logging with correlation IDs'
    ]
  },
  {
    name: 'AI Orchestration & Agent Kernel',
    badge: 'Intelligence Layer',
    technologies: ['Gemini API', 'Groq', 'Ollama (Local)', 'Whisper STT', 'Custom Agent Loop'],
    description: 'Multi-agent coordination engine executing dynamic tool calling, prompt templates, and safety gates.',
    principles: [
      'Supervisor-Worker agent decomposition',
      'Human-in-the-loop validation checkpoints',
      'Hybrid model routing (Cloud vs Local execution)',
      'Deterministic fallback on API rate limits'
    ]
  },
  {
    name: 'Data Persistence & Caching Layer',
    badge: 'Data & Storage',
    technologies: ['PostgreSQL', 'Redis', 'SQL Alchemy / Prisma Patterns', 'File Storage'],
    description: 'Relational data integrity with normalized tables, foreign key constraints, and fast in-memory caching.',
    principles: [
      'Normalized relational schemas (3NF)',
      'ACID transactional safety for critical records',
      'TTL-based caching for agent session states',
      'Audit trail logging for all sensitive user actions'
    ]
  },
  {
    name: 'Deployment & Infrastructure Layer',
    badge: 'DevOps & Hosting',
    technologies: ['Docker Containers', 'Vercel (Frontend)', 'Railway (Backend & DB)', 'GitHub CI/CD'],
    description: 'Containerized reproducible microservices deployed seamlessly with environment variable segregation.',
    principles: [
      'Multi-stage Docker builds for minimal container sizes',
      'Automated preview deployments via Vercel and Railway',
      'Strict environment variable isolation (.env)',
      'Clean Git commit conventions and semantic versioning'
    ]
  }
];
