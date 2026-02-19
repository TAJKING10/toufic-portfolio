
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
  videoUrl?: string;
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
