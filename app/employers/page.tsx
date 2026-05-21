import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  UserX,
  TrendingDown,
  Search,
  Users,
  CheckCircle,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "For Employers — HiresCrew",
  description:
    "Find exceptional talent fast. HiresCrew provides specialist recruitment for executive, tech, product, and startup hiring.",
};

const painPoints = [
  {
    icon: Clock,
    title: "Slow time-to-hire",
    description:
      "A prolonged vacancy costs more than the recruiter's fee. We move quickly without cutting corners.",
  },
  {
    icon: UserX,
    title: "Poor-fit candidates",
    description:
      "Generic CVs from job boards waste everyone's time. We source and screen before you see a name.",
  },
  {
    icon: TrendingDown,
    title: "High turnover",
    description:
      "A hire that leaves in six months is a failure for everyone. Cultural fit is as important to us as skills.",
  },
];

const hiringProcess = [
  {
    icon: Search,
    step: "1",
    title: "Briefing",
    description:
      "We get under the skin of your company culture, team dynamics, and exactly who you need — not just the job spec.",
  },
  {
    icon: Users,
    step: "2",
    title: "Targeted search",
    description:
      "Using our specialist network, direct outreach, and market mapping, we find talent others can't reach.",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "Screened shortlist",
    description:
      "You only see candidates who pass our skills assessment and cultural fit evaluation. No noise.",
  },
  {
    icon: Handshake,
    step: "4",
    title: "Offer & onboarding",
    description:
      "We manage negotiations, references, and the transition — and check in post-placement to ensure it sticks.",
  },
];

const employerServices = services.filter(
  (s) => s.forAudience === "employers" || s.forAudience === "both"
);

export default function EmployersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bg-base py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-4">
              For Employers
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-6 leading-tight">
              Hire exceptional talent — without the noise
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              We partner with businesses of all sizes to fill critical roles faster
              and with greater precision than traditional recruitment. Our specialist
              focus means we understand your world from day one.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand text-brand-foreground font-semibold text-base hover:bg-brand-strong transition-colors"
            >
              Start Hiring <ArrowRight className="h-5 w-5" />
            </Link>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 bg-bg-subtle border-y border-border">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
              Common Challenges
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Hiring pain points we solve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="bg-bg-surface border border-border rounded-2xl p-8 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-brand-dim w-fit mb-5">
                  <p.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-2">{p.title}</h3>
                <p className="text-text-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="py-20 bg-bg-base">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Our hiring process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringProcess.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-brand-dim flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-brand" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand text-brand-foreground text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-semibold text-text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant services */}
      <section className="py-20 bg-bg-subtle border-y border-border">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
              Service Lines
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              How we can help
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {employerServices.map((service) => (
              <div
                key={service.slug}
                className="bg-bg-surface border border-border rounded-2xl p-6 shadow-sm hover:border-brand transition-colors"
              >
                <h3 className="font-bold text-text-primary text-lg mb-2">{service.name}</h3>
                <p className="text-text-muted leading-relaxed text-sm mb-4">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-medium text-brand hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-inverse text-center">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-on-inverse mb-4">
            Ready to find your next great hire?
          </h2>
          <p className="text-text-on-inverse/70 text-lg max-w-xl mx-auto mb-8">
            Submit an enquiry and we&apos;ll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-brand-foreground font-semibold text-lg hover:bg-brand-strong transition-colors"
          >
            Submit an Enquiry <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
