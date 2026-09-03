import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";

export const FOOTER_DATA = {
  brand: {
    desc: "Premium software development company crafting world-class digital products for enterprises and startups worldwide.",
    links: ["About", "Careers", "Press", "Partners"],
  },
  services: {
    title: "Services",
    links: [
      "Web Development",
      "Mobile Apps",
      "AI & ML",
      "Cloud & DevOps",
      "UI/UX Design",
      "Cybersecurity",
    ],
  },
  resources: {
    title: "Resources",
    links: [
      "Blog",
      "Case Studies",
      "Documentation",
      "Open Source",
      "Changelog",
      "Status",
    ],
  },
  company: {
    title: "Legal",
    links: [
      "Careers",
      "Contact",
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR",
      "Security",
    ],
  },
};

export type SocialItem = {
  name: string;
  icon: IconType;
  url: string;
};

export const SOCIALS: SocialItem[] = [
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "LinkedIn", icon: FaLinkedin, url: "#" },
  { name: "GitHub", icon: FaGithub, url: "#" },
  { name: "YouTube", icon: FaYoutube, url: "#" },
];
