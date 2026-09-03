export type PortfolioItem = {
  img: string;
  cat: string;
  tag: string;
  title: string;
  desc: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    img: "GradCommerceAi-fintech",
    cat: "web enterprise",
    tag: "Web / Enterprise",
    title: "NovaPay Financial Platform",
    desc: "Real-time payment processing handling $2B+ in annual transactions.",
  },
  {
    img: "GradCommerceAi-health",
    cat: "mobile",
    tag: "Mobile",
    title: "MediTrack Health Companion",
    desc: "AI-powered health monitoring app with 500K+ downloads.",
  },
  {
    img: "GradCommerceAi-ai",
    cat: "ai web",
    tag: "AI / Web",
    title: "Vertex AI Analytics Engine",
    desc: "Predictive analytics reducing customer churn by 34%.",
  },
  {
    img: "GradCommerceAi-ecom",
    cat: "web",
    tag: "Web",
    title: "Stratos E-Commerce Suite",
    desc: "Headless commerce with 99.99% uptime and sub-200ms loads.",
  },
  {
    img: "GradCommerceAi-logistics",
    cat: "mobile ai",
    tag: "Mobile / AI",
    title: "FleetMind Logistics OS",
    desc: "AI route optimization reducing costs by 28% across 10K+ vehicles.",
  },
  {
    img: "GradCommerceAi-erp",
    cat: "enterprise",
    tag: "Enterprise",
    title: "Meridian ERP Modernization",
    desc: "Legacy to cloud-native migration serving 5,000+ users globally.",
  },
];

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
  { id: "enterprise", label: "Enterprise" },
];
