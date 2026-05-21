import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Specialties from "@/components/sections/Specialties";
import Process from "@/components/sections/Process";
import DualPathBand from "@/components/sections/DualPathBand";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "HiresCrew — Your Strategic Hiring Partner",
  description:
    "HiresCrew is a specialist recruitment firm providing tailored solutions for Executive Search, Software Product Hiring, RPO, and Startup Recruitment.",
  openGraph: {
    title: "HiresCrew — Your Strategic Hiring Partner",
    description:
      "Build exceptional teams that fuel your growth. Specialist recruitment across tech, fintech, leadership, and more.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <Specialties />
      <Process />
      <DualPathBand />
      <CtaBand />
    </main>
  );
}
