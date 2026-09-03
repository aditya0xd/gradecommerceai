import { Globe, Smartphone, Brain, Cloud, Palette, ShieldCheck, type LucideIcon } from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  color: string;
  bg: string;
  title: string;
  desc: string;
};

export const SERVICES: ServiceItem[] = [
  {
    icon: Globe,
    color: "var(--primary-l)",
    bg: "rgba(79,70,229,.1)",
    title: "Web Application Development",
    desc: "High-performance web applications built with modern frameworks, optimized for speed, scalability, and exceptional user experience.",
  },
  {
    icon: Smartphone,
    color: "var(--accent)",
    bg: "rgba(6,182,212,.1)",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android that deliver seamless experiences and drive engagement.",
  },
  {
    icon: Brain,
    color: "#A78BFA",
    bg: "rgba(124,58,237,.1)",
    title: "AI & Machine Learning",
    desc: "Intelligent systems powered by ML models, NLP, computer vision, and generative AI to automate and optimize operations.",
  },
  {
    icon: Cloud,
    color: "#10B981",
    bg: "rgba(16,185,129,.1)",
    title: "Cloud & DevOps",
    desc: "Cloud architecture, migration, and DevOps automation on AWS, Azure, and GCP with CI/CD and infrastructure as code.",
  },
  {
    icon: Palette,
    color: "#F59E0B",
    bg: "rgba(245,158,11,.1)",
    title: "UI/UX Design",
    desc: "Research-driven design that converts. Intuitive interfaces, design systems, and prototyped experiences users love.",
  },
  {
    icon: ShieldCheck,
    color: "#EF4444",
    bg: "rgba(239,68,68,.1)",
    title: "Cybersecurity & QA",
    desc: "Security audits, penetration testing, and automated QA to ensure your product is robust, reliable, and compliant.",
  },
];
