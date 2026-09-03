import {
  Building2,
  Rocket,
  Repeat,
  Store,
  Wrench,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export type SolutionItem = {
  icon: LucideIcon;
  color: string;
  bg: string;
  title: string;
  desc: string;
};

export type SolutionsData = {
  all: SolutionItem[];
  enterprise: SolutionItem[];
  startup: SolutionItem[];
  saas: SolutionItem[];
  ai: SolutionItem[];
};

export const tabNames = {
  all: "All Solutions",
  enterprise: "Enterprise",
  startup: "Startups",
  saas: "SaaS",
  ai: "AI Solutions",
};

export const SOLUTIONS: SolutionsData = {
  all: [
    {
      icon: Building2,
      color: "var(--primary-l)",
      bg: "rgba(79,70,229,.1)",
      title: "Enterprise Solutions",
      desc: "Large-scale systems with microservices, legacy modernization, and enterprise integration.",
    },
    {
      icon: Rocket,
      color: "var(--accent)",
      bg: "rgba(6,182,212,.1)",
      title: "Startup MVPs",
      desc: "Rapid prototyping and MVP development to validate ideas and launch fast.",
    },
    {
      icon: Repeat,
      color: "#A78BFA",
      bg: "rgba(124,58,237,.1)",
      title: "SaaS Development",
      desc: "Multi-tenant SaaS with subscription management, analytics, and scalable infra.",
    },
    {
      icon: Store,
      color: "#10B981",
      bg: "rgba(16,185,129,.1)",
      title: "Small Business",
      desc: "Affordable, polished digital solutions that help small businesses compete online.",
    },
    {
      icon: Wrench,
      color: "#F59E0B",
      bg: "rgba(245,158,11,.1)",
      title: "Custom Software",
      desc: "Bespoke software tailored to your unique workflows and requirements.",
    },
    {
      icon: BrainCircuit,
      color: "#EF4444",
      bg: "rgba(239,68,68,.1)",
      title: "AI Solutions",
      desc: "Custom AI models, chatbots, recommendation engines, and intelligent automation.",
    },
  ],
  enterprise: [
    {
      icon: Building2,
      color: "var(--primary-l)",
      bg: "rgba(79,70,229,.1)",
      title: "Enterprise Digital Transformation",
      desc: "Modernize legacy systems, build microservices architectures, and implement cloud-native solutions with SOC 2 compliance and dedicated account management.",
    },
  ],
  startup: [
    {
      icon: Rocket,
      color: "var(--accent)",
      bg: "rgba(6,182,212,.1)",
      title: "Startup Launch Program",
      desc: "From ideation to product-market fit in weeks. Flexible engagement models, founder-friendly contracts, and startup pricing to help you move fast and raise capital.",
    },
  ],
  saas: [
    {
      icon: Repeat,
      color: "#A78BFA",
      bg: "rgba(124,58,237,.1)",
      title: "SaaS Platform Engineering",
      desc: "Full-stack SaaS with multi-tenancy, Stripe billing, RBAC, real-time analytics, and automated onboarding. Built to scale from 100 to 1M users.",
    },
  ],
  ai: [
    {
      icon: BrainCircuit,
      color: "#EF4444",
      bg: "rgba(239,68,68,.1)",
      title: "AI-Powered Product Suite",
      desc: "Custom LLM integrations, RAG systems, computer vision pipelines, predictive analytics, and intelligent automation that delivers real ROI.",
    },
  ],
};
