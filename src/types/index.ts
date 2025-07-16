export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone?: string;
    location: string;
    avatar: string;
    resume?: string;
  };
  social: SocialLink[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  theme: {
    primaryColor: string;
    accentColor: string;
  };
}