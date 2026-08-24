import type { LearningGoal } from '../types';

export const roadmapGoals: LearningGoal[] = [
  {
    topic: 'Advanced Multi-Agent Orchestration & Planning',
    state: 'BUILDING',
    description: 'Deepening my understanding of autonomous agent coordination, self-correcting execution loops, DAG workflow planners, and long-term memory retrieval.',
    practicalTarget: 'Refining complex autonomous workflows in FlowPilot AI with deterministic failover and tool rollback mechanisms.'
  },
  {
    topic: 'Production Deployment & Observability Pipelines',
    state: 'BUILDING',
    description: 'Mastering OpenTelemetry instrumentation, distributed tracing, structured log aggregation, and automated CI/CD deployment pipelines.',
    practicalTarget: 'Implementing end-to-end token tracing and latency tracking for multi-agent LLM systems.'
  },
  {
    topic: 'Distributed Systems & High-Concurrency Architecture',
    state: 'EXPLORING',
    description: 'Exploring message queues (RabbitMQ/Kafka concepts), Redis streaming, database connection pooling, and horizontal scaling strategies in Python/FastAPI.',
    practicalTarget: 'Scaling backend microservices to handle concurrent asynchronous agent task queues without bottlenecking.'
  },
  {
    topic: 'Modern Frontend Performance & Micro-Interactions',
    state: 'LEARNING',
    description: 'Refining animation fluidity, sub-pixel rendering, CSS GPU acceleration, and accessible keyboard navigation in complex SaaS applications.',
    practicalTarget: 'Crafting ultra-polished, fluid dashboard UIs inspired by Linear and Stripe design standards.'
  }
];
