import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, Search, Award, ThumbsUp } from "lucide-react";
import { specialties } from "@/content/specialties";

export const metadata: Metadata = {
  title: "For Candidates — HiresCrew",
  description:
    "Looking for your next role? HiresCrew works with exceptional tech, fintech, and leadership candidates to find the right opportunity.",
};

const howWeHelp = [
  {
    icon: Search,
    title: "Access hidden opportunities",
    description:
      "Many of our best roles are never advertised. As a candidate in our network, you get first sight of exclusive positions.",
  },
  {
    icon: MessageSquare,
    title: "Honest market intelligence",
    description:
      "We tell you what the market actually pays, who is hiring, and where the real opportunities are — not just what you want to hear.",
  },
  {
    icon: Award,
    title: "Expert representation",
    description:
      "We advocate for you throughout the process — negotiating offers, managing timelines, and ensuring you're treated with respect.",
  },
  {
    icon: ThumbsUp,
    title: "Long-term relationships",
    description:
      "Even if the timing isn't right today, we stay in touch. Our best placements come from candidates we've known for years.",
  },
];

const whatToExpect = [
  "An initial conversation to understand your goals, skills, and preferences",
  "Honest feedback on your CV and market positioning",
  "Introductions only to roles that match your criteria — no spam",
  "Full interview preparation and debrief support",
  "Offer negotiation and smooth transition into your new role",
  "A check-in after your first month to make sure everything is going well",
];

export default function CandidatesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0E2A12" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-semibold text-sm tracking-widest uppercase mb-4"
            style={{ color: "#0E7C66" }}
          >
            For Candidates
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-on-inverse tracking-tight mb-6 leading-tight">
            Find your next great role — with people who get your sector
          </h1>
          <p className="text-lg text-text-on-inverse/75 leading-relaxed mb-8">
            We work exclusively in tech, fintech, leadership, and product — which
            means we understand your skills, your market value, and what makes a
            role genuinely worth moving for.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#0E7C66" }}
          >
            Get in Touch <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-bg-base">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: "#0E7C66" }}>
              How We Help
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              What working with HiresCrew means for you
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {howWeHelp.map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="p-3 rounded-xl h-fit shrink-0" style={{ backgroundColor: "rgba(14,124,102,0.10)" }}>
                  <item.icon className="h-6 w-6" style={{ color: "#0E7C66" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-lg mb-2">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-bg-subtle border-y border-border">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: "#0E7C66" }}>
            Sectors We Cover
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Our specialties
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We focus on a defined set of sectors, which means we have genuine
            depth — not just breadth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((s) => (
              <span
                key={s}
                className="px-5 py-2.5 rounded-2xl text-sm font-semibold"
                style={{
                  backgroundColor: "rgba(14,124,102,0.10)",
                  color: "#0E7C66",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 bg-bg-base">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-semibold text-sm tracking-widest uppercase mb-3" style={{ color: "#0E7C66" }}>
                The Process
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
                What to expect
              </h2>
            </div>
            <ul className="space-y-4">
              {whatToExpect.map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-bg-surface border border-border rounded-2xl p-5">
                  <span
                    className="w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#0E7C66" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-text-secondary leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#0E2A12" }}>
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-on-inverse mb-4">
            Ready for your next move?
          </h2>
          <p className="text-text-on-inverse/70 text-lg max-w-xl mx-auto mb-8">
            Send us your details and let&apos;s find you the role you actually want.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#0E7C66" }}
          >
            Get in Touch <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
