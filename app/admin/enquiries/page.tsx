import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness, Mail, Search, UserRound } from "lucide-react";
import { listEnquiries, type EnquiryAudience } from "@/lib/enquiries";

export const metadata: Metadata = {
  title: "Admin Enquiries",
  description: "Review contact form submissions from employers and candidates.",
};

type AdminPageProps = {
  searchParams: Promise<{
    audience?: string;
    q?: string;
  }>;
};

const audienceOptions: Array<{
  label: string;
  value: "" | EnquiryAudience;
}> = [
  { label: "All enquiries", value: "" },
  { label: "Employers", value: "employer" },
  { label: "Candidates", value: "candidate" },
];

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminEnquiriesPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;
  const audience =
    params.audience === "employer" || params.audience === "candidate"
      ? params.audience
      : undefined;
  const search = params.q?.trim() ?? "";

  const enquiries = await listEnquiries({
    audience,
    search,
  });

  const employerCount = enquiries.filter((item) => item.audience === "employer").length;
  const candidateCount = enquiries.filter((item) => item.audience === "candidate").length;

  return (
    <main className="bg-bg-base pb-20 pt-16">
      <section className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand">
              Admin Dashboard
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Enquiries
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Review every contact form submission from the site and quickly filter
              between employer and candidate enquiries.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:border-brand hover:text-brand"
          >
            Back to contact page
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-bg-surface p-6 shadow-sm">
            <p className="text-sm font-medium text-text-muted">Showing</p>
            <p className="mt-3 text-3xl font-bold text-text-primary">{enquiries.length}</p>
            <p className="mt-2 text-sm text-text-secondary">Total results for this filter.</p>
          </div>
          <div className="rounded-3xl border border-border bg-bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-2 text-text-secondary">
              <BriefcaseBusiness className="h-4 w-4 text-brand" />
              <p className="text-sm font-medium">Employers</p>
            </div>
            <p className="mt-3 text-3xl font-bold text-text-primary">{employerCount}</p>
            <p className="mt-2 text-sm text-text-secondary">Hiring-related enquiries.</p>
          </div>
          <div className="rounded-3xl border border-border bg-bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-2 text-text-secondary">
              <UserRound className="h-4 w-4 text-brand" />
              <p className="text-sm font-medium">Candidates</p>
            </div>
            <p className="mt-3 text-3xl font-bold text-text-primary">{candidateCount}</p>
            <p className="mt-2 text-sm text-text-secondary">Job-seeker enquiries.</p>
          </div>
        </div>

        <form
          className="mt-8 rounded-3xl border border-border bg-bg-surface p-5 shadow-sm"
          method="get"
        >
          <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)_auto]">
            <div>
              <label
                htmlFor="audience"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Filter by audience
              </label>
              <select
                id="audience"
                name="audience"
                defaultValue={audience ?? ""}
                className="w-full rounded-xl border border-border bg-bg-base px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {audienceOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="q" className="mb-1.5 block text-sm font-medium text-text-secondary">
                Search
              </label>
              <div className="flex items-center rounded-xl border border-border bg-bg-base px-3">
                <Search className="h-4 w-4 text-text-faint" />
                <input
                  id="q"
                  name="q"
                  defaultValue={search}
                  placeholder="Search by name, email, company, or message"
                  className="w-full bg-transparent px-3 py-3 text-sm text-text-primary placeholder:text-text-faint focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-end gap-3">
              <button
                type="submit"
                className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-strong"
              >
                Apply Filters
              </button>
              <Link
                href="/admin/enquiries"
                className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-brand hover:text-brand"
              >
                Reset
              </Link>
            </div>
          </div>
        </form>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-sm">
          {enquiries.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-xl font-semibold text-text-primary">No enquiries found</p>
              <p className="mt-2 text-text-muted">
                Try changing the filters or submit a test enquiry from the contact form.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {enquiries.map((enquiry) => (
                <article key={enquiry._id.toString()} className="px-6 py-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-bold text-text-primary">{enquiry.name}</h2>
                        <span className="rounded-full bg-brand-dim px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                          {enquiry.audience === "employer" ? "Employer" : "Candidate"}
                        </span>
                        <span className="rounded-full bg-bg-subtle px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                          {enquiry.status}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-secondary">
                        <a
                          href={`mailto:${enquiry.email}`}
                          className="inline-flex items-center gap-2 transition-colors hover:text-brand"
                        >
                          <Mail className="h-4 w-4" />
                          {enquiry.email}
                        </a>
                        <span>{formatDate(enquiry.createdAt)}</span>
                        {enquiry.company ? <span>{enquiry.company}</span> : null}
                      </div>

                      <p className="mt-4 max-w-4xl whitespace-pre-wrap leading-relaxed text-text-secondary">
                        {enquiry.message}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
