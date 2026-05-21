import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="bg-bg-inverse py-20 md:py-24">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-4">
          Ready to start?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-on-inverse tracking-tight mb-6">
          Let's build your team.
        </h2>
        <p className="text-text-on-inverse/70 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Tell us about your hiring challenge and we'll get back to you within one
          business day.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-brand-foreground font-semibold text-lg hover:bg-brand-strong transition-colors"
        >
          Get in Touch <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

