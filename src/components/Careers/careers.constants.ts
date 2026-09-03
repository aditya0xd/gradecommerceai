import { Globe, GraduationCap, Heart, Calendar, type LucideIcon } from "lucide-react";

export type BenefitItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type JobItem = {
  id: number;
  title: string;
  dept: string;
  type: string;
  loc: string;
  desc: string;
};

export const BENEFITS: BenefitItem[] = [
  {
    icon: Globe,
    title: "100% Remote-First",
    desc: "Work from anywhere in the world. We offer flexible hours and a home office stipend.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    desc: "Annual learning budget for courses, books, and conferences to help you master your craft.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health, dental, and vision coverage for you and your dependents.",
  },
  {
    icon: Calendar,
    title: "Flexible Time Off",
    desc: "Generous PTO, paid parental leave, and company-wide wellness days off.",
  },
];

export const JOBS: JobItem[] = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    dept: "engineering",
    type: "Full-time",
    loc: "Remote (Hyderabad)",
    desc: "Architect and build highly interactive, responsive web applications using React, Next.js, and TypeScript.",
  },
  {
    id: 2,
    title: "AI Research Scientist",
    dept: "ai",
    type: "Full-time",
    loc: "Hybrid (Hyderabad)",
    desc: "Develop, fine-tune, and deploy advanced machine learning models and LLM solutions for enterprise applications.",
  },
  {
    id: 3,
    title: "Senior Product Designer",
    dept: "design",
    type: "Full-time",
    loc: "Remote (Hyderabad)",
    desc: "Create user flows, wireframes, high-fidelity prototypes, and maintain our premium design systems.",
  },
  {
    id: 4,
    title: "DevOps & Infrastructure Lead",
    dept: "engineering",
    type: "Full-time",
    loc: "Remote (Hyderabad)",
    desc: "Scale our cloud infrastructure on AWS and Kubernetes. Optimize CI/CD pipelines.",
  },
];

export const JOB_DEPARTMENTS = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Engineering" },
  { id: "ai", label: "AI" },
  { id: "design", label: "Design" },
];
