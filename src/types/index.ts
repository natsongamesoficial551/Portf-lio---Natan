export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  development_time: string;
  type: string;
  link: string;
  technologies?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  image: string;
  description: string;
}

export type Theme = 'light' | 'dark';