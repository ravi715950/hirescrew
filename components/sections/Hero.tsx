import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-bg-base py-20 md:py-28 lg:py-32">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-5">
            Your Growth &ndash; Our Passion
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight mb-6">
            Build exceptional teams that{" "}
            <span className="text-brand">fuel your growth</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
            HiresCrew is your strategic hiring partner. We provide tailored
            recruitment solutions to match your hiring needs with the right
            talent &mdash; fast, precisely, and with integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/employers"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand text-brand-foreground font-semibold text-base hover:bg-brand-strong transition-colors"
            >
              Hire Talent
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/candidates"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-brand text-brand font-semibold text-base hover:bg-brand-dim transition-colors"
            >
              Find a Role
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
