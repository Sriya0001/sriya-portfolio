export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  architectureHighlights: string[];
  tech: string[];
  image: string;
  category: 'Full-Stack' | 'AI & ML' | 'Cloud & Systems';
  tag: string;
  github: string;
  live?: string;
  metrics: { label: string; value: string }[];
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'experience' | 'achievement' | 'leadership';
  badge?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  details: string;
  highlight?: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
  rank?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  grade?: string;
  badgeType: 'gold' | 'silver' | 'aws';
}
