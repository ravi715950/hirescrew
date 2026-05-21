export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  forAudience: "employers" | "both";
  outcomes: string[];
}

export const services: Service[] = [
  {
    slug: "executive-search",
    name: "Executive Search",
    shortDescription:
      "Identify and attract senior leaders who will shape your organization's future.",
    description:
      "We partner with you to understand your leadership culture and strategic goals, then conduct a rigorous, confidential search to surface the right executive — not just the available one.",
    icon: "Target",
    forAudience: "employers",
    outcomes: [
      "C-suite and VP-level placements",
      "Confidential candidate mapping",
      "Cultural alignment assessment",
      "Post-placement support",
    ],
  },
  {
    slug: "software-product-hiring",
    name: "Software Product Hiring",
    shortDescription:
      "Build engineering and product teams with the technical depth your roadmap demands.",
    description:
      "From Staff Engineers to CPOs, we source and evaluate technical talent for SaaS, fintech, and high-growth product companies — combining technical screening with cultural fit.",
    icon: "Code2",
    forAudience: "both",
    outcomes: [
      "Engineering leadership & ICs",
      "Product management talent",
      "Technical screening included",
      "Startup to enterprise scale",
    ],
  },
  {
    slug: "rpo-solutions",
    name: "RPO Solutions",
    shortDescription:
      "Embed our recruiters inside your team to scale hiring without scaling headcount.",
    description:
      "Recruitment Process Outsourcing lets you access specialist hiring capacity on demand. We integrate with your ATS, brand, and processes to become an extension of your team.",
    icon: "Users",
    forAudience: "employers",
    outcomes: [
      "Dedicated embedded recruiters",
      "Your brand, our expertise",
      "ATS and workflow integration",
      "Scalable — up or down",
    ],
  },
  {
    slug: "startup-recruitment",
    name: "Startup Recruitment",
    shortDescription:
      "Move fast without sacrificing quality — hiring built for the pace of early-stage.",
    description:
      "Early-stage companies need people who can operate in ambiguity and grow with the company. We find builders, not just candidates, and move at startup speed.",
    icon: "Rocket",
    forAudience: "both",
    outcomes: [
      "Seed to Series B specialists",
      "Generalist & founding hires",
      "Equity-comp-comfortable talent",
      "Speed without compromise",
    ],
  },
];
