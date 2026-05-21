import Link from "next/link";
import { ArrowRight, Briefcase, UserSearch } from "lucide-react";

export default function DualPathBand() {
  return (
    <section className="py-20 md:py-24 bg-bg-subtle">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Employers */}
          <div className="rounded-3xl bg-brand p-10 flex flex-col justify-between min-h-64">
            <div>
              <div className="p-3 rounded-xl bg-white/20 w-fit mb-5">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Employers</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Find exceptional talent for your open roles. From C-suite searches
                to scaling engineering teams, we match you with the right people fast.
              </p>
            </div>
            <Link
              href="/employers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand font-semibold text-sm hover:bg-bg-subtle transition-colors w-fit"
            >
              Hire Talent <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Candidates */}
          <div
            className="rounded-3xl p-10 flex flex-col justify-between min-h-64"
            style={{ backgroundColor: "#0E7C66" }}
          >
            <div>
              <div className="p-3 rounded-xl bg-white/20 w-fit mb-5">
                <UserSearch className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Candidates</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Find your next opportunity with a firm that truly understands your
                sector. We advocate for you throughout the entire process.
              </p>
            </div>
            <Link
              href="/candidates"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white font-semibold text-sm hover:bg-bg-subtle transition-colors w-fit"
              style={{ color: "#0E7C66" }}
            >
              Find a Role <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

