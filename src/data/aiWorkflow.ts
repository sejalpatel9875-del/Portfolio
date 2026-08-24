export interface MultiAgentPhase {
  id: string;
  name: string;
  role: string;
  badge: string;
  description: string;
  technologies: string[];
  inputOutput: { input: string; output: string };
}

export const aiWorkflowPhases: MultiAgentPhase[] = [
  {
    id: 'user-intent',
    name: '1. Intent Capture & Voice/Text Input',
    role: 'Input Preprocessing & Transcription',
    badge: 'Input Layer',
    description: 'Incoming user requests are received via Next.js interface or Whisper speech-to-text pipeline, tokenized and formatted with session context.',
    technologies: ['Whisper STT', 'Next.js UI', 'Audio Streaming', 'FastAPI'],
    inputOutput: {
      input: '"Analyze recent metrics, draft a summary report, and request approval before publishing."',
      output: 'Normalized JSON payload with user intent, parameters, and security tokens.'
    }
  },
  {
    id: 'supervisor-orchestrator',
    name: '2. Supervisor Agent & Workflow Planning',
    role: 'Decomposition & Tool Assignment',
    badge: 'Orchestration',
    description: 'The Supervisor Agent breaks the high-level objective into atomic sub-tasks and assigns them to specialized worker agents with dependency graphs.',
    technologies: ['Gemini 1.5/2.0 API', 'Groq Llama-3', 'Pydantic Schemas'],
    inputOutput: {
      input: 'Parsed user intent and available agent capability registry.',
      output: 'Directed Acyclic Graph (DAG) of sub-tasks with required tool permissions.'
    }
  },
  {
    id: 'worker-agents',
    name: '3. Specialized Worker Agents & Execution',
    role: 'Parallel Tool Execution & Reasoning',
    badge: 'Worker Agents',
    description: 'Specialized worker agents (Data Extractor, Code Generator, File Parser) execute tools asynchronously within isolated execution sandboxes.',
    technologies: ['FastAPI microservices', 'Ollama (Local)', 'NVIDIA NIM', 'Python Subprocess'],
    inputOutput: {
      input: 'Specific sub-task with targeted API tools and system parameters.',
      output: 'Intermediate data outputs, structured draft artifacts, and telemetry logs.'
    }
  },
  {
    id: 'human-approval-gate',
    name: '4. Human-in-the-Loop Approval Gate',
    role: 'Safety & Action Verification',
    badge: 'Safety Checkpoint',
    description: 'Before committing irreversible state modifications or external API calls, the system halts and presents the exact proposed diff for human sign-off.',
    technologies: ['Interactive Modal UI', 'WebSocket Events', 'Audit Trail Logger'],
    inputOutput: {
      input: 'Proposed action payload: { action: "publish_report", target: "database" }',
      output: 'User Decision: [APPROVED / REJECTED / MODIFIED] with audit timestamp.'
    }
  },
  {
    id: 'telemetry-feedback',
    name: '5. Telemetry, State Persistence & Feedback',
    role: 'Observability & Output Delivery',
    badge: 'Persistence',
    description: 'State transitions, token usage, execution latency, and agent responses are stored in PostgreSQL and delivered to the user interface.',
    technologies: ['PostgreSQL', 'Redis Cache', 'Tailwind UI', 'TTS Audio Feedback'],
    inputOutput: {
      input: 'Completed execution context and metrics telemetry.',
      output: 'Final user-facing artifact + updated audit history table.'
    }
  }
];

export const supportedAIProviders = [
  {
    name: 'Google Gemini',
    type: 'Cloud Multimodal LLM',
    useCase: 'Workflow planning, large context reasoning, structured JSON schemas.',
    tier: 'Hands-on Integration'
  },
  {
    name: 'Groq Cloud',
    type: 'Ultra-Low Latency Inference',
    useCase: 'Instantaneous conversational turns, quick tool-calling routing, sub-second latency.',
    tier: 'Hands-on Integration'
  },
  {
    name: 'Ollama',
    type: 'Local On-Device Execution',
    useCase: 'Offline execution of Llama/Mistral models, zero data egress for private tasks.',
    tier: 'Hands-on Integration'
  },
  {
    name: 'OpenAI Whisper',
    type: 'Speech Recognition',
    useCase: 'Voice assistant audio capture, wake-word transcription, multi-lingual audio decoding.',
    tier: 'Hands-on Integration'
  },
  {
    name: 'NVIDIA NIM',
    type: 'Optimized Inference Containers',
    useCase: 'High-throughput enterprise containerized AI inference exploration.',
    tier: 'Exploring & Benchmarking'
  }
];
