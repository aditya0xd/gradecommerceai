export type FeaturedBlogItem = {
  featured: true;
  img: string;
  tags: string[];
  tagColors: string[];
  title: string;
  desc: string;
  author: string;
  date: string;
  authorImg: string;
};

export type RegularBlogItem = {
  featured?: false;
  img: string;
  tag: string;
  tagColor: string;
  title: string;
  date: string;
};

export type BlogItem = FeaturedBlogItem | RegularBlogItem;

export const BLOGS: BlogItem[] = [
  {
    featured: true,
    img: "GradCommerceAi-blog-main",
    tags: ["Engineering", "AI"],
    tagColors: ["var(--primary-l)", "var(--accent)"],
    title: "Building Production-Ready RAG Systems: Lessons from 50+ Deployments",
    desc: "A deep dive into architectural patterns, failure modes, and optimization strategies for RAG at scale.",
    author: "Alex Kim",
    date: "Dec 15, 2024",
    authorImg: "author1",
  },
  {
    img: "GradCommerceAi-blog2",
    tag: "Framework",
    tagColor: "var(--accent)",
    title: "Next.js 15 Server Actions: What Changed",
    date: "Dec 10, 2024",
  },
  {
    img: "GradCommerceAi-blog3",
    tag: "DevOps",
    tagColor: "#10B981",
    title: "Zero-Downtime Deployments with Kubernetes",
    date: "Dec 5, 2024",
  },
  {
    img: "GradCommerceAi-blog4",
    tag: "Design",
    tagColor: "#F59E0B",
    title: "Design Systems at Scale: 40+ Projects",
    date: "Nov 28, 2024",
  },
];
