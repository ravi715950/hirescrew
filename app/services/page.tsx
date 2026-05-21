import type { Metadata } from "next";
import Link from "next/link";
import { Target, Code2, Users, Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services — HiresCrew",
  description:
    "Specialist recruitment services: Executive Search, Software Product Hiring, RPO Solutions, and Startup Recruitment.",
};

const iconMap: Record<string, React.ElementType> = {
  Target,
  Code2,
  Users,
  Rocket,
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bg-base py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-6">
              Specialist recruitment across four core service lines
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Each engagement is tailored to your specific context — your industry,
              your culture, your timeline. We don&apos;t do copy-paste recruitment.
            </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-6 pb-24">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Target;
            const isEven = i % 2 === 1;
            return (
              <div
                key={service.slug}
                className={`bg-bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="p-3 rounded-xl bg-brand-dim w-fit mb-5">
                    <Icon className="h-7 w-7 text-brand" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                    {service.name}
                  </h2>
                  <p className="text-text-secondary leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-brand-foreground font-semibold text-sm hover:bg-brand-strong transition-colors"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-72 shrink-0">
                  <h3 className="font-semibold text-text-primary mb-4">What&apos;s included</h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-inverse text-center">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-on-inverse mb-4">
            Not sure which service fits?
          </h2>
          <p className="text-text-on-inverse/70 text-lg max-w-xl mx-auto mb-8">
            Tell us your challenge and we&apos;ll recommend the right approach.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-brand-foreground font-semibold text-lg hover:bg-brand-strong transition-colors"
          >
            Talk to Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
