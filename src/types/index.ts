export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  codeUrl: string;
  featured: boolean;
}

export interface ProjectLink {
  type: "github" | "demo" | "external";
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Accomplishment {
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  icon: string;
}

export interface Hobby {
  name: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string[];
  type: "work" | "education";
}
