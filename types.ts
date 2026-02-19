
export interface Project {
  id: string;
  title: string;
  description: string;
  detailedOverview?: string;
  tech: string[];
  github?: string;
  link?: string;
  image: string;
  videoUrls?: string[];
  category?: 'AI' | 'Fintech' | 'Full-Stack' | 'Mobile';
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
