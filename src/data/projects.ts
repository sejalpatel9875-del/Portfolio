import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'flowpilot-ai',
    title: 'FlowPilot AI',
    subtitle: 'AI Command Center & Multi-Agent Orchestration',
    tagline: 'Multi-Agent Execution Engine with Human-in-the-Loop Safety',
    status: 'Building',
    category: 'AI & Agents',
    shortDescription: 'A production-oriented multi-agent command center with human-in-the-loop approval gates, workflow planning, real-time telemetry, and adaptive UI.',
    problemStatement: 'Managing autonomous multi-step AI workflows often lacks observability, deterministic tool validation, and safe human oversight before critical operations execute.',
    approach: 'Engineered a supervisor-worker pattern with isolated sandboxes for specialized task agents, real-time websocket state synchronization, and deterministic human approval checkpoints.',
    whatBuilt: [
      'Multi-agent execution engine with supervisor-worker delegation architecture',
      'Human-in-the-loop approval checkpoint mechanism for high-stakes tool execution',
      'Telemetry and audit trail logger tracking token usage, latency, and step transitions',
      'Adaptive appearance system with customized dark/light theme tokens and glowing glassmorphism UI',
      'FastAPI backend microservice handling asynchronous agent tasks and LLM stream routing'
    ],
    keyFeatures: [
      'Multi-Agent Workflow Orchestration (Supervisor + Specialized Task Agents)',
      'Human Approval Gates with interactive approve/modify/abort actions',
      'Real-time Step Observability & State Timeline',
      'Next.js & Tailwind CSS high-performance Command Center Interface',
      'FastAPI backend with structured Pydantic schemas and error boundaries'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'Gemini API', 'Groq', 'PostgreSQL', 'Docker'],
    role: 'Full-Stack Architecture, AI Agent Design & UI/UX',
    architectureNodes: [
      { title: 'Command UI', role: 'Interactive Dashboard & Approval Gates', tech: 'Next.js + Tailwind CSS' },
      { title: 'Supervisor Agent', role: 'Task Decomposition & Delegation', tech: 'Python / Gemini / Groq' },
      { title: 'Specialized Workers', role: 'Tool Execution (Code, Search, Data)', tech: 'FastAPI Microservice' },
      { title: 'Audit & Telemetry', role: 'State Tracking & Token Usage', tech: 'PostgreSQL + Docker' }
    ],
    githubUrl: 'https://github.com/sejalpatel9875-del/flowpilot-ai',
    liveDemoUrl: undefined,
    verifiedNotes: 'Built as a comprehensive demonstration of multi-agent orchestration and modern SaaS UI engineering.',
    featured: true
  },
  {
    id: 'jarvis-ai',
    title: 'Jarvis AI Assistant',
    subtitle: 'Voice-Enabled AI Assistant & System Automation',
    tagline: 'Voice-First AI Runtime with Hybrid Local & Cloud LLM Routing',
    status: 'Experimental',
    category: 'AI & Agents',
    shortDescription: 'An interactive voice-enabled AI assistant integrating speech-to-text, multi-model LLM routing (Groq, Gemini, Ollama local fallback), and terminal automation.',
    problemStatement: 'Bridging voice interactions with local system commands requires low-latency speech processing, flexible model switching, and reliable tool calling without high cloud dependency.',
    approach: 'Combined OpenAI Whisper for low-latency voice transcription with a dynamic routing layer that leverages Groq for cloud speed and Ollama for offline privacy-first execution.',
    whatBuilt: [
      'Speech-to-text pipeline using OpenAI Whisper for rapid voice transcription',
      'Hybrid LLM routing layer supporting ultra-fast cloud inference (Groq) and local offline inference (Ollama)',
      'System automation scripts for YouTube navigation, application launching, and terminal task execution',
      'Text-to-speech feedback loop delivering real-time audible responses',
      'Python backend structuring intent recognition and tool execution handlers'
    ],
    keyFeatures: [
      'Wake-word concept and voice command recognition via Whisper',
      'Dual-mode LLM execution (Cloud via Groq/Gemini + Local via Ollama)',
      'System-level automation (Terminal, App launcher, Media search)',
      'Low-latency audio streaming & synthesized voice feedback',
      'Modular Python codebase with extensible tool-calling plugin structure'
    ],
    techStack: ['Python', 'Whisper', 'Groq API', 'Gemini API', 'Ollama', 'TTS Engines', 'FastAPI', 'Automation Scripts'],
    role: 'AI System Architecture, Voice Pipeline & Automation Scripting',
    architectureNodes: [
      { title: 'Audio Input', role: 'Voice Capture & Wake-Word Listening', tech: 'PyAudio + SpeechRecognition' },
      { title: 'Transcription', role: 'High-Accuracy Speech-to-Text', tech: 'OpenAI Whisper' },
      { title: 'Inference Engine', role: 'Intent & Command Reasoning', tech: 'Groq / Gemini / Ollama' },
      { title: 'System Controller', role: 'OS Action & Web Automation', tech: 'Python OS / Subprocess' }
    ],
    githubUrl: 'https://github.com/sejalpatel9875-del/jarvis-ai',
    liveDemoUrl: undefined,
    verifiedNotes: 'Experimental system prototype built to explore real-time voice AI and hybrid local/cloud LLM routing.',
    featured: true
  },
  {
    id: 'karya-pharmacy',
    title: 'Karya Pharmacy Portal',
    subtitle: 'Academic & EdTech Management Web Platform',
    tagline: 'Full-Stack Digital Hub for Course Content & Student Progression',
    status: 'Prototype',
    category: 'Full-Stack & Systems',
    shortDescription: 'A full-stack educational and administrative platform concept supporting student authentication, video lectures, notes repository, attendance tracking, and admin dashboard.',
    problemStatement: 'Pharmacy students and instructors need a unified digital hub to organize structured study material, lecture replays, attendance records, and course progression.',
    approach: 'Built a clean role-based architecture with relational database schemas in PostgreSQL, responsive React dashboards, and secure token authentication.',
    whatBuilt: [
      'Role-based authentication architecture for students and instructors/administrators',
      'Course content manager for organizing video lectures, syllabi, and downloadable PDF notes',
      'Interactive student dashboard with attendance visualization and assignment tracking',
      'Admin control panel for student enrollment and course publication',
      'Payment integration blueprint and checkout flow architecture'
    ],
    keyFeatures: [
      'Secure Student/Admin Authentication & Role-Based Access Control',
      'Curated Video Lecture & PDF Notes Library',
      'Attendance & Course Assignment Tracking System',
      'Comprehensive Admin Panel for Content & Student Records',
      'Responsive Web UI optimized for desktop and mobile study sessions'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'SQL / PostgreSQL', 'Tailwind CSS', 'JWT Auth'],
    role: 'Full-Stack Developer & UI Designer',
    architectureNodes: [
      { title: 'Client Interface', role: 'Responsive Student & Admin UI', tech: 'React + Tailwind CSS' },
      { title: 'Auth & REST API', role: 'Role-Based Access & Data Endpoints', tech: 'FastAPI / Node.js + JWT' },
      { title: 'Content Store', role: 'PDF Notes, Video Metadata & Profiles', tech: 'PostgreSQL Relational DB' }
    ],
    githubUrl: 'https://github.com/sejalpatel9875-del/karya-pharmacy',
    liveDemoUrl: undefined,
    verifiedNotes: 'Developed as a comprehensive full-stack prototype addressing educational workflows.',
    featured: true
  },
  {
    id: 'academic-systems-lab',
    title: 'Academic & Systems Lab',
    subtitle: 'Coursework Implementations & CS Fundamentals',
    tagline: 'Algorithmic Drills, Relational DB Normalization & OS Simulators',
    status: 'Academic',
    category: 'Academic & Systems',
    shortDescription: 'A curated collection of practical implementations from BCA coursework including Java OOP structures, relational DBMS schemas, OS scheduling simulations, and web experiments.',
    problemStatement: 'Understanding computer science fundamentals requires writing foundational algorithms, normalizing databases, and simulating low-level system concepts from the ground up.',
    approach: 'Implemented standard algorithms and data structures in Java, simulated CPU scheduling in Python, and executed 3NF schema normalization on PostgreSQL.',
    whatBuilt: [
      'Java OOP implementations of data structures (Trees, Linked Lists, Queues, Graphs)',
      'Relational database schemas with SQL joins, triggers, and 3NF normalization exercises',
      'Operating System CPU scheduling simulation algorithms (FCFS, SJF, Round Robin)',
      'Micro-web experiments testing CSS layout algorithms, DOM manipulation, and responsive UX'
    ],
    keyFeatures: [
      'Clean, documented algorithm implementations in Java and Python',
      'Relational schema design with normalized tables and relational integrity constraints',
      'Simulation of OS process lifecycle and memory allocation algorithms',
      'Benchmarking and algorithmic time/space complexity analysis'
    ],
    techStack: ['Java', 'Python', 'SQL', 'C/C++ Coursework', 'HTML/CSS/JS', 'Git'],
    role: 'Student Researcher & Algorithmic Developer',
    architectureNodes: [
      { title: 'Data Structures', role: 'Core OOP Implementations & Algorithms', tech: 'Java Standard Library' },
      { title: 'Database Models', role: 'Relational Schemas & Query Optimization', tech: 'SQL / PostgreSQL' },
      { title: 'System Simulators', role: 'OS Process & Memory Scheduling', tech: 'Python / Java' }
    ],
    githubUrl: 'https://github.com/sejalpatel9875-del/academic-experiments',
    liveDemoUrl: undefined,
    verifiedNotes: 'Academic codebase highlighting core computer science principles and algorithmic problem solving.',
    featured: false
  }
];
