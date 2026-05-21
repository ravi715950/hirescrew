import Link from "next/link";
import Image from "next/image";
import { X, Mail, Phone } from "lucide-react";
import { footerNav } from "@/content/navigation";
import { specialties } from "@/content/specialties";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-bg-inverse text-text-on-inverse">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo/logo.svg"
                  alt="HiresCrew"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">HiresCrew</span>
            </Link>
            <p className="text-sm text-text-on-inverse/70 leading-relaxed mb-5">
              {site.positioningSentence}
            </p>
            <p className="text-xs font-medium text-brand mb-4">{site.tagline}</p>
            <div className="flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-brand transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-brand transition-colors"
                aria-label="X (Twitter)"
              >
                <X className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-on-inverse/70 hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Specialties
            </h3>
            <div className="flex flex-wrap gap-2">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-text-on-inverse/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-2 text-sm text-text-on-inverse/70 hover:text-brand transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-text-on-inverse/70 hover:text-brand transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-on-inverse/50">
          <p>&copy; {site.founded} HiresCrew. All rights reserved.</p>
          <p>Founded {site.founded} &middot; {site.type} &middot; {site.industry}</p>
        </div>
      </div>
    </footer>
  );
}
