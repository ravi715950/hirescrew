"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/content/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="border-b border-border bg-bg-base">
      <div className="mx-auto max-w-300 px-3 sm:px-4">
        <nav
          className={`flex min-h-20 items-center justify-between px-4 py-3 transition-all duration-300 md:px-6 ${
            scrolled
              ? "bg-bg-base/95"
              : "bg-transparent"
          }`}
        >
          <Link href="/" onClick={closeMenus} className="flex shrink-0 items-center gap-3 pr-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-brand shadow-[0_14px_32px_rgba(48,165,51,0.28)] sm:h-16 sm:w-16">
              <Image
                src="/logo/logo.svg"
                alt="HiresCrew logo"
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <span className="block text-xl font-black tracking-[-0.03em] text-text-primary sm:text-2xl">
                Hires<span className="text-brand">Crew</span>
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted sm:block">
                Strategic Hiring Partner
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-bg-surface px-2 py-2 shadow-sm md:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((open) => !open)}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      isActive(item.href) || servicesOpen
                        ? "bg-brand-dim text-brand"
                        : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-3xl border border-border bg-bg-surface p-2 shadow-[0_24px_50px_rgba(14,27,17,0.14)]">

                      <div className="mt-2 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenus}
                            className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                              isActive(child.href)
                                ? "bg-brand-dim text-brand"
                                : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    isActive(item.href)
                      ? "bg-brand-dim text-brand"
                      : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-[0_16px_34px_rgba(48,165,51,0.28)] transition-colors hover:bg-brand-strong"
            >
              Hire Talent
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-2xl border border-border p-3 text-text-secondary transition-colors hover:bg-bg-subtle hover:text-brand md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-border bg-bg-surface p-3 md:hidden">
            <div className="mb-3 rounded-2xl bg-bg-subtle px-4 py-3">
              <p className="text-sm font-semibold text-text-primary">
                Build stronger teams with focused recruitment support.
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-muted">
                HiresCrew
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {mainNav.map((item) =>
                item.children ? (
                  <div key={item.label} className="rounded-2xl border border-border/80">
                    <button
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        isActive(item.href)
                          ? "text-brand"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="border-t border-border px-2 pb-2 pt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenus}
                            className={`block rounded-xl px-3 py-2.5 text-sm transition-colors ${
                              isActive(child.href)
                                ? "bg-brand-dim font-semibold text-brand"
                                : "text-text-muted hover:bg-bg-subtle hover:text-text-primary"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive(item.href)
                        ? "bg-brand-dim text-brand"
                        : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <Link
              href="/contact"
              onClick={closeMenus}
              className="mt-4 block rounded-2xl bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground shadow-[0_16px_34px_rgba(48,165,51,0.24)] transition-colors hover:bg-brand-strong"
            >
              Hire Talent
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
