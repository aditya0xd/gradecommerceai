import { FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

export const FOOTER_DATA = {
  brand: {
    desc: "Premium software development company crafting world-class digital products, intelligent AI solutions, and cloud architectures for enterprises and high-growth startups.",
  },
  services: {
    title: "Services",
    links: [
      { label: "Web Development", to: "/services" },
      { label: "Mobile Apps", to: "/services" },
      { label: "AI & Machine Learning", to: "/services" },
      { label: "Cloud & DevOps", to: "/services" },
      { label: "UI/UX Design", to: "/services" },
      { label: "Cybersecurity", to: "/services" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Solutions", to: "/solutions" },
      { label: "Services", to: "/services" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Blog", to: "/blog" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/#contact" },
    ],
  },
  explore: {
    title: "Explore",
    links: [
      { label: "Why Grad Commerce", to: "/#why-us" },
      { label: "Our Process", to: "/#process" },
      { label: "Industries Served", to: "/#industries" },
      { label: "Client Testimonials", to: "/#testimonials" },
      { label: "Frequently Asked Questions", to: "/#faqs" },
    ],
  },
  contact: {
    title: "Headquarters",
    address: "Plot No. 682, 5th Floor, Babukhan Rasheed Plaza, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500008",
    email: "gradcommerceai@gmail.com",
    phone: "+91 9014392895",
    hours: "Mon - Fri, 9:00 AM - 6:00 PM IST",
  },
};

export type SocialItem = {
  name: string;
  icon: IconType;
  url: string;
};

export const SOCIALS: SocialItem[] = [
  { name: "LinkedIn", icon: FaLinkedin, url: "http://www.linkedin.com/in/gradcommerce-ai-269aa5434" },
];
