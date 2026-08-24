export type SkillLevel = 'Hands-on' | 'Working Knowledge' | 'Project Experience' | 'Learning' | 'Exploring';

export type SkillCategory = 
  | 'Languages & Core'
  | 'Frontend Engineering'
  | 'Backend & APIs'
  | 'AI & Agentic Tech'
  | 'Databases & Infrastructure'
  | 'Developer Tools';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  description: string;
  contextUsed: string;
  usedInProjects: string[]; // Connected ecosystem mapping (e.g. ['FlowPilot AI', 'FastAPI'])
  iconName?: string;
  featured?: boolean;
}

export type ProjectStatus = 'Building' | 'Prototype' | 'Completed' | 'Experimental' | 'Academic';

export interface ProjectArchitectureNode {
  title: string;
  role: string;
  tech: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  category: 'AI & Agents' | 'Full-Stack & Systems' | 'Academic & Systems';
  shortDescription: string;
  problemStatement: string;
  approach: string;
  whatBuilt: string[];
  keyFeatures: string[];
  techStack: string[];
  role: string;
  architectureNodes?: ProjectArchitectureNode[];
  githubUrl?: string;
  liveDemoUrl?: string;
  verifiedNotes?: string;
  featured: boolean;
  tagline: string;
}

export interface AIWorkflowStep {
  stepNumber: number;
  title: string;
  agentRole: string;
  tooling: string;
  description: string;
  verifiedTech: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institutionNote: string;
  status: string;
  focusAreas: string[];
  coreCoursework: string[];
}

export interface LearningGoal {
  topic: string;
  state: 'EXPLORING' | 'BUILDING' | 'LEARNING';
  description: string;
  practicalTarget: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  tag: string;
  description: string;
  achievements: string[];
}

export type ThemePreset = 'obsidian' | 'paper' | 'aurora' | 'arctic' | 'midnight' | 'sunset';

export interface AppearanceSettings {
  preset: ThemePreset;
  customAccent: string;
  glassOpacity: number;
  spotlightEnabled: boolean;
  motionEnabled: boolean;
}
