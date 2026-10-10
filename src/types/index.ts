export interface StatItem {
  value: string;
  label: string;
  subtext?: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  isFeatured?: boolean;
  features: string[];
  engineeringHighlights: string[];
  techStack: string[];
  deployment?: {
    backend?: string;
    frontend?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  previewType: 'smarthire' | 'codepulse' | 'bankease';
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreType: string;
  status?: string;
  level: 'college' | 'school';
  highlights?: string[];
}

export interface DeveloperStatsData {
  codeChefRating: string;
  contestsCount: string;
  description: string;
  dsaTopics: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  usernamePlaceholder?: string;
}
