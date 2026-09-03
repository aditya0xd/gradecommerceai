import {
  Brain,
  Cloud,
  Container,
  Globe,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services", hasMegaMenu: true },
  { label: "Solutions", to: "/solutions" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
];

export const mobileNavLinks = [
  ...navLinks.map(({ label, to }) => ({ label, to })),
  { label: "Contact", to: "/contact" },
];

export const serviceLinks: Array<{
  icon: LucideIcon;
  title: string;
  desc: string;
}> = [
  { icon: Globe, title: "Web Development", desc: "Scalable web apps" },
  { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android" },
  { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Azure, GCP" },
  { icon: Brain, title: "AI & ML", desc: "Intelligent systems" },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered" },
  { icon: Container, title: "DevOps", desc: "CI/CD pipeline" },
];
