import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Target, Heart, ArrowRight, Star } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About — HiresCrew",
  description:
    "Learn about HiresCrew — a specialist recruitment firm founded in 2025 with integrity, precision, and dedication at its core.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We are honest with clients and candidates alike — even when it's not what they want to hear. Trust is the foundation of every lasting placement.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "We don't fill seats — we match people. Every search is thorough, every shortlist purposeful, and every introduction meaningful.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description:
      "We are partners, not vendors. We stay engaged through the process and beyond, ensuring every hire lands well.",
  },
];

const differentiators = [
  {
    title: "Specialist, not generalist",
    description:
      "We focus exclusively on tech, fintech, leadership, and product hiring — which means we understand the roles, the market, and the talent deeply.",
  },
  {
    title: "Tailored, not templated",
    description:
      "Every engagement is bespoke. We invest time to understand your unique culture and context before a single search begins.",
  },
  {
    title: "Partnership, not transaction",
    description:
      "We build long-term relationships with both clients and candidates — so our network grows richer and our results improve over time.",
  },
  {
    title: "Quality over volume",
    description:
      "We would rather present three excellent candidates than ten mediocre ones. Our shortlists are curated, not copied from LinkedIn.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bg-base py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-4">
              About HiresCrew
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-6 leading-tight">
              Your strategic hiring partner — built for the way talent works today
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {site.positioningSentence}
            </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-bg-subtle border-y border-border">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-5">
                Building teams that drive success
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {site.mission}
              </p>
            </div>
            <div className="bg-bg-inverse rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-6 w-6 text-brand" />
                <span className="text-white font-semibold text-lg">Founded {site.founded}</span>
              </div>
              <p className="text-text-on-inverse/80 leading-relaxed mb-8">
                HiresCrew was founded with a clear conviction: that specialist
                recruitment firms produce better outcomes than generalist agencies.
                By focusing deeply on a defined set of sectors, we bring market
                intelligence and a quality network that broad-based firms simply
                cannot match.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-text-on-inverse/50 mb-1">Industry</p>
                  <p className="text-white font-medium">{site.industry}</p>
                </div>
                <div>
                  <p className="text-text-on-inverse/50 mb-1">Team size</p>
                  <p className="text-white font-medium">{site.size}</p>
                </div>
                <div>
                  <p className="text-text-on-inverse/50 mb-1">Type</p>
                  <p className="text-white font-medium">{site.type}</p>
                </div>
                <div>
                  <p className="text-text-on-inverse/50 mb-1">Founded</p>
                  <p className="text-white font-medium">{site.founded}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-base">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
              What Guides Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-bg-surface border border-border rounded-2xl p-8 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-brand-dim w-fit mb-5">
                  <v.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="font-bold text-text-primary text-xl mb-3">{v.title}</h3>
                <p className="text-text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-20 bg-bg-subtle border-y border-border">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
              The HiresCrew Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Why clients choose us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((d, i) => (
              <div key={d.title} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-lg mb-2">{d.title}</h3>
                  <p className="text-text-muted leading-relaxed">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-inverse text-center">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-on-inverse mb-4">
            Ready to work together?
          </h2>
          <p className="text-text-on-inverse/70 text-lg max-w-xl mx-auto mb-8">
            Whether you&apos;re hiring or looking for your next role, we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-brand-foreground font-semibold text-lg hover:bg-brand-strong transition-colors"
          >
            Get in Touch <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
