export interface NavItem {
  label: string;
  href: string;
}

export interface NavItemWithChildren extends NavItem {
  children?: NavItem[];
}

export const mainNav: NavItemWithChildren[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "Product Hiring", href: "/services/software-product-hiring" },
      { label: "RPO Solutions", href: "/services/rpo-solutions" },
      { label: "Startup Recruitment", href: "/services/startup-recruitment" },
    ],
  },
  { label: "For Employers", href: "/employers" },
  { label: "For Candidates", href: "/candidates" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Employers", href: "/employers" },
  { label: "For Candidates", href: "/candidates" },
  { label: "Contact", href: "/contact" },
];
