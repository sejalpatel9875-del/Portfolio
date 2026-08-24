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
  usedInProjects: string[];
  featured?: boolean;
}

export type ProjectStatus = 'Personal Project' | 'Prototype' | 'Experimental' | 'Academic' | 'Building';

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

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  clientOutcome: string;
  typicalScope: string[];
  icon: string;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
  honeypot?: string;
  turnstileToken?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  unconfigured?: boolean;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  tag: string;
  description: string;
  achievements: string[];
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
  state: 'BUILDING' | 'EXPLORING' | 'LEARNING';
  description: string;
  practicalTarget: string;
}

export type ThemePreset = 'obsidian' | 'paper' | 'aurora' | 'arctic' | 'midnight' | 'sunset';

export interface AppearanceSettings {
  preset: ThemePreset;
  customAccent: string;
  glassOpacity: number;
  spotlightEnabled: boolean;
  motionEnabled: boolean;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
        }
      ) => void;
    };
  }
}
