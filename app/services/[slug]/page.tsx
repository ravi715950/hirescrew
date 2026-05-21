import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Target, Code2, Users, Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/content/services";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Code2,
  Users,
  Rocket,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} — HiresCrew`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Target;

  return (
    <main>
      {/* Hero */}
      <section className="bg-bg-base py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="text-sm text-text-muted hover:text-brand transition-colors mb-6 inline-block"
          >
            ← All Services
          </Link>
          <div className="p-3 rounded-xl bg-brand-dim w-fit mb-5">
            <Icon className="h-8 w-8 text-brand" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-6">
            {service.name}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-bg-subtle border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8">What's included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3 bg-bg-surface border border-border rounded-2xl p-5"
              >
                <CheckCircle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span className="text-text-secondary font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-inverse text-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-on-inverse mb-4">
            Ready to get started?
          </h2>
          <p className="text-text-on-inverse/70 text-lg max-w-xl mx-auto mb-8">
            Contact us and we'll be in touch within one business day.
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
