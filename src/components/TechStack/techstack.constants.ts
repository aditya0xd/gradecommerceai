import {
  Atom, Triangle, FileCode2, Wind, Smartphone,
  Hexagon, Code2, Coffee, Database,
  Cloud, Container, Network, Brain, CloudCog,
  type LucideIcon
} from "lucide-react";

export type TechItem = {
  n: string;
  icon: LucideIcon;
  c: string;
};

export const TECH: Record<string, TechItem[]> = {
  Frontend: [
    { n: 'React', icon: Atom, c: '#61DAFB' },
    { n: 'Next.js', icon: Triangle, c: '#fff' },
    { n: 'TypeScript', icon: FileCode2, c: '#3178C6' },
    { n: 'Tailwind CSS', icon: Wind, c: '#06B6D4' },
    { n: 'Flutter', icon: Smartphone, c: '#02569B' }
  ],
  Backend: [
    { n: 'Node.js', icon: Hexagon, c: '#68A063' },
    { n: 'Python', icon: Code2, c: '#3776AB' },
    { n: 'Java', icon: Coffee, c: '#ED8B00' },
    { n: 'MongoDB', icon: Database, c: '#47A248' },
    { n: 'PostgreSQL', icon: Database, c: '#336791' }
  ],
  'Cloud & AI': [
    { n: 'AWS', icon: Cloud, c: '#FF9900' },
    { n: 'Docker', icon: Container, c: '#2496ED' },
    { n: 'Kubernetes', icon: Network, c: '#326CE5' },
    { n: 'OpenAI', icon: Brain, c: '#10A37F' },
    { n: 'Azure', icon: CloudCog, c: '#0078D4' }
  ]
};
