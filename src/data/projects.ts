import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'flowpilot-ai',
    title: 'FlowPilot AI Command Center',
    subtitle: 'Autonomous Multi-Agent Workflow Orchestration',
    tagline: 'Multi-Agent Execution Engine with Human-in-the-Loop Safety',
    status: 'Personal Project',
    category: 'AI & Agents',
    shortDescription: 'An AI-powered command center demonstrating multi-agent task orchestration, supervisor-worker delegation, and human approval checkpoints for deterministic tool execution.',
    problemStatement: 'Autonomous AI agents executing multi-step tasks often lack execution visibility, token audit trails, and mandatory human checkpoints before invoking irreversible tools.',
    approach: 'Designed a supervisor-worker pattern in Python/FastAPI with WebSocket telemetry, structured task decomposition, and interactive approval gates in Next.js.',
    whatBuilt: [
      'Multi-agent execution engine with supervisor-worker task delegation',
      'Human-in-the-loop approval checkpoint mechanism for high-stakes tool execution',
      'Telemetry audit logger tracking token consumption, latency, and step transitions',
      'High-contrast dashboard UI built with Next.js, TypeScript, and Tailwind CSS',
      'FastAPI asynchronous backend microservice handling parallel worker tasks'
    ],
    keyFeatures: [
      'Multi-Agent Workflow Orchestration (Supervisor + Specialized Task Agents)',
      'Human Approval Gates with interactive approve/modify/abort actions',
      'Real-time Step Observability & State Timeline',
      'Next.js & Tailwind CSS high-performance Command Center Interface',
      'FastAPI backend with structured Pydantic schemas and error boundaries'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'Gemini API', 'Groq', 'PostgreSQL', 'Docker'],
    role: 'Full-Stack Architecture, Agent Design & UI/UX',
    architectureNodes: [
      { title: 'Command UI', role: 'Interactive Dashboard & Approval Gates', tech: 'Next.js + Tailwind CSS' },
      { title: 'Supervisor Agent', role: 'Task Decomposition & Delegation', tech: 'Python / Gemini / Groq' },
      { title: 'Specialized Workers', role: 'Tool Execution (Code, Search, Data)', tech: 'FastAPI Microservice' },
      { title: 'Audit & Telemetry', role: 'State Tracking & Token Usage', tech: 'PostgreSQL + Docker' }
    ],
    githubUrl: 'https://github.com/sejalpatel9875-del/Portfolio',
    liveDemoUrl: undefined,
    verifiedNotes: 'Built as a comprehensive demonstration of multi-agent orchestration and modern SaaS UI engineering.',
    featured: true
  },
  {
    id: 'jarvis-ai',
    title: 'Jarvis AI Voice Assistant',
    subtitle: 'Voice-Enabled Assistant & System Automation',
    tagline: 'Voice-First AI Runtime with Hybrid Local & Cloud LLM Routing',
    status: 'Experimental',
    category: 'AI & Agents',
    shortDescription: 'A voice-driven AI assistant pipeline integrating Whisper speech-to-text, dynamic LLM routing (Groq for cloud speed, Ollama for local privacy), and system automation.',
    problemStatement: 'Standard voice assistants require heavy cloud dependency and lack the ability to route sensitive queries to local offline models or execute custom terminal automations.',
    approach: 'Combined OpenAI Whisper for low-latency voice transcription with an intelligent router that dispatches queries to Groq or local Ollama instances based on network and privacy requirements.',
    whatBuilt: [
      'Speech-to-text pipeline using OpenAI Whisper for rapid voice transcription',
      'Hybrid LLM routing layer supporting ultra-fast cloud inference (Groq) and local offline inference (Ollama)',
      'System automation handlers for app launching, web search, and terminal scripts',
      'Text-to-speech audio feedback interaction loop',
      'Modular Python backend with structured tool-calling handlers'
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
    githubUrl: 'https://github.com/sejalpatel9875-del/Portfolio',
    liveDemoUrl: undefined,
    verifiedNotes: 'Experimental system prototype built to explore real-time voice AI and hybrid local/cloud LLM routing.',
    featured: true
  },
  {
    id: 'karya-pharmacy',
    title: 'Karya Pharmacy Portal',
    subtitle: 'EdTech Course Management & Study Hub',
    tagline: 'Full-Stack Digital Hub for Course Content & Student Progression',
    status: 'Prototype',
    category: 'Full-Stack & Systems',
    shortDescription: 'A full-stack educational portal prototype featuring student/instructor authentication, video lectures, downloadable study materials, and attendance tracking.',
    problemStatement: 'Educational institutes often struggle with fragmented tools for lecture replays, notes distribution, and attendance tracking.',
    approach: 'Built a clean role-based architecture with relational schemas in PostgreSQL, responsive React dashboards, and secure token authentication.',
    whatBuilt: [
      'Role-based authentication architecture for students and administrators',
      'Course content manager for video lectures, syllabi, and downloadable PDF notes',
      'Interactive student dashboard with attendance visualization and assignment tracking',
      'Admin control panel for student enrollment and content publication',
      'Relational PostgreSQL database schema design'
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
    githubUrl: 'https://github.com/sejalpatel9875-del/Portfolio',
    liveDemoUrl: undefined,
    verifiedNotes: 'Developed as a comprehensive full-stack prototype addressing educational workflows.',
    featured: true
  },
  {
    id: 'academic-systems-lab',
    title: 'Academic & Systems Lab',
    subtitle: 'CS Fundamentals & Data Structure Drills',
    tagline: 'Algorithmic Drills, Relational DB Normalization & OS Simulators',
    status: 'Academic',
    category: 'Academic & Systems',
    shortDescription: 'A curated collection of practical implementations from BCA coursework including Java OOP structures, relational DBMS schemas, and OS scheduling simulations.',
    problemStatement: 'Solid engineering starts with fundamental understanding of data structures, algorithm efficiency, and relational database normalization.',
    approach: 'Implemented foundational algorithms in Java and simulated CPU scheduling lifecycles in Python.',
    whatBuilt: [
      'Java OOP implementations of data structures (Trees, Linked Lists, Queues, Graphs)',
      'Relational database schemas with SQL joins, triggers, and 3NF normalization exercises',
      'Operating System CPU scheduling simulation algorithms (FCFS, SJF, Round Robin)',
      'Micro-web experiments testing responsive UX and DOM rendering'
    ],
    keyFeatures: [
      'Clean, documented algorithm implementations in Java and Python',
      'Relational schema design with normalized tables and relational integrity constraints',
      'Simulation of OS process lifecycle and memory allocation algorithms',
      'Benchmarking and algorithmic time/space complexity analysis'
    ],
    techStack: ['Java', 'Python', 'SQL', 'C/C++ Coursework', 'HTML/CSS/JS', 'Git'],
    role: 'Student Developer & Algorithmic Implementer',
    architectureNodes: [
      { title: 'Data Structures', role: 'Core OOP Implementations & Algorithms', tech: 'Java Standard Library' },
      { title: 'Database Models', role: 'Relational Schemas & Query Optimization', tech: 'SQL / PostgreSQL' },
      { title: 'System Simulators', role: 'OS Process & Memory Scheduling', tech: 'Python / Java' }
    ],
    githubUrl: 'https://github.com/sejalpatel9875-del/Portfolio',
    liveDemoUrl: undefined,
    verifiedNotes: 'Academic codebase highlighting core computer science principles and algorithmic problem solving.',
    featured: false
  }
];
