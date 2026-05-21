import type { Metadata } from "next";
import { Mail, Phone, X } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact â€” HiresCrew",
  description:
    "Get in touch with HiresCrew. Whether you're hiring or looking for your next role, we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bg-base py-20 md:py-24">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-4">
            <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-4">
              Let's talk hiring
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Whether you're a business looking to hire or a candidate exploring
              your next move â€” we'd love to hear from you. We typically respond
              within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + contact details */}
      <section className="pb-24 bg-bg-base">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 bg-bg-surface border border-border rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-text-primary mb-6">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-bg-subtle border border-border rounded-3xl p-8">
                <h2 className="text-lg font-bold text-text-primary mb-6">Direct contact</h2>
                <div className="space-y-5">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-brand-dim group-hover:bg-brand transition-colors">
                      <Mail className="h-5 w-5 text-brand group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">Email</p>
                      <p className="text-sm font-medium text-text-primary group-hover:text-brand transition-colors">
                        {site.contact.email}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="p-2.5 rounded-xl bg-brand-dim group-hover:bg-brand transition-colors">
                      <Phone className="h-5 w-5 text-brand group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">Phone</p>
                      <p className="text-sm font-medium text-text-primary group-hover:text-brand transition-colors">
                        {site.contact.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-bg-subtle border border-border rounded-3xl p-8">
                <h2 className="text-lg font-bold text-text-primary mb-4">Find us online</h2>
                <div className="flex gap-3">
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-surface border border-border hover:border-brand hover:text-brand text-text-secondary text-sm font-medium transition-colors"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={site.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-surface border border-border hover:border-brand hover:text-brand text-text-secondary text-sm font-medium transition-colors"
                  >
                    <X className="h-4 w-4" /> X (Twitter)
                  </a>
                </div>
              </div>

              <div className="bg-brand rounded-3xl p-8">
                <h3 className="text-white font-bold text-lg mb-2">Response time</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We respond to all enquiries within one business day. For urgent
                  needs, call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

