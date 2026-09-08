
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
];

export const mobileNavLinks = [
  ...navLinks.map(({ label, to }) => ({ label, to })),
  { label: "Contact", to: "/#contact" },
];


