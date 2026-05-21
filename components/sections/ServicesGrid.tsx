import Link from "next/link";
import { Target, Code2, Users, Rocket, ArrowRight } from "lucide-react";
import { services } from "@/content/services";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Code2,
  Users,
  Rocket,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-24 bg-bg-base">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Our Service Lines
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Specialist recruitment across four core areas — tailored to your
            organization&apos;s stage and hiring challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Target;
            return (
              <div
                key={service.slug}
                className="group bg-bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-brand transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-brand-dim w-fit mb-5">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2 text-lg leading-snug">
                  {service.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand text-brand font-semibold text-sm hover:bg-brand-dim transition-colors"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
