@AGENTS.md

# CLAUDE.md — HiresCrew Website

> This is the single source of truth for building the HiresCrew marketing website.
> Read this file fully before writing any code or making architectural decisions.
> Update the **Progress Tracker** section after each meaningful change.

---

## 1. Project Overview

### What we are building

A fast, modern, fully responsive **marketing website** for **HiresCrew**, a specialist recruitment firm. The site's job is to build trust, communicate expertise, and convert two distinct audiences — **employers who want to hire** and **candidates looking for roles** — into qualified leads via contact/enquiry forms.

This is a **content / marketing site**, not a web app. There is no authentication, no dashboard, and no database in the initial scope. Keep it lean, accessible, SEO-strong, and effortless to extend later (blog, job board, ATS) without a rewrite.

### Brand identity (confirmed from logo)

- **Logo:** White circular emblem (three interlocking swirl segments, suggesting motion/teamwork) above a white "HiresCrew" wordmark, all on a solid green field. Files live in `public/logo/`.
- **Primary brand color:** **Green `#30A533`** (extracted from the logo).
- **Wordmark style:** Clean, rounded, geometric sans-serif (Geist Sans / Inter approximate this well).
- **Logo usage:** The supplied logo is white-on-green. Provide/derive two lockups: (1) the white logo for placement on green or dark backgrounds, (2) a green-on-white or green-on-transparent version for the light navbar and light surfaces. Always keep clear space around the emblem; never recolor the swirl to clashing hues.

### Company facts (use verbatim where copy is needed)

- **Name:** HiresCrew
- **Tagline:** Your Growth – Our Passion.
- **Secondary positioning line:** Your strategic hiring partner.
- **Positioning sentence:** HiresCrew is a recruitment firm — your strategic hiring partner. We provide tailored recruitment solutions to match your hiring needs with the right talent.
- **Mission:** With integrity, precision, and dedication, we build strong teams that drive success and innovation. Let's build exceptional teams that fuel your organization's growth.
- **Core service lines:** Executive Search, Software Product Hiring, RPO Solutions, Startup Recruitment.
- **Industry:** Staffing and Recruiting
- **Company size:** 2–10 employees
- **Type:** Self-Owned
- **Founded:** 2025
- **Specialties:** Tech Hiring, Fintech Hiring, Leadership Hiring, Executive Search, Product Hiring, Design Hiring, SaaS Hiring, B2B Hiring, B2C Hiring

### Goals

1. Communicate who HiresCrew is and what they specialize in within 5 seconds of landing.
2. Provide clear dual paths: **"Hire Talent"** (employers) and **"Find a Role"** (candidates).
3. Showcase service lines and specialties credibly.
4. Build trust through process transparency, mission, and (placeholder) social proof.
5. Capture leads through a reliable contact / enquiry form.
6. Rank well in search and load fast on mobile.

### Core user flows

**Employer flow:** Land on homepage → read positioning → click "Hire Talent" → review services & process → submit enquiry form → receive confirmation.

**Candidate flow:** Land on homepage → click "Find a Role" / "For Candidates" → understand specialties & how HiresCrew helps → submit details / contact → receive confirmation.

---

## 2. Scope

### In scope (v1)

- Home page (hero, value props, services, specialties, process, CTA)
- About page (mission, story, what makes HiresCrew different)
- Services page(s) — Executive Search, Product Hiring, RPO, Startup Recruitment
- For Employers page (the "hire talent" path)
- For Candidates page (the "find a role" path)
- Contact page with a working enquiry form
- Global navbar + footer
- Responsive, accessible, SEO-optimized markup
- Theming via design tokens (see UI Context)
- Reusable component library

### Out of scope (v1) — but design so it can be added later

- Live job board / ATS integration
- Authentication / candidate accounts
- Blog / resources CMS (leave a clean slot for it)
- Payments / billing
- Multi-language / i18n
- Server-side database (forms post to an API route + email/3rd-party service)

### Success criteria

1. Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 on mobile.
2. Both audience paths reachable from the homepage in one click.
3. Contact form validates input and submits reliably with clear success/error states.
4. Fully responsive from 360px to 1920px with no layout breaks.
5. Adding a new page or service requires no refactor — just composition of existing primitives.

---

## 3. Tech Stack & Architecture

### Stack

- **Framework:** Next.js (App Router) + TypeScript (strict mode)
- **Styling:** Tailwind CSS with CSS custom-property design tokens
- **Components:** shadcn/ui on top of Tailwind, in `components/ui/`
- **Icons:** Lucide React (stroke-based only)
- **Fonts:** `next/font` — Geist Sans (UI) + Geist Mono (accents/code). Inter is an acceptable fallback sans matching the logo's rounded-geometric feel.
- **Forms:** React Hook Form + Zod for validation
- **Form delivery:** Next.js route handler that forwards to an email/notification service (e.g. Resend) or a form provider. No DB required in v1.
- **Animation:** Framer Motion, used sparingly for tasteful entrance/scroll reveals.
- **Deployment:** Vercel.

### Architecture principles

- **Default to Server Components.** Add `"use client"` only where browser interactivity is genuinely required (form, mobile menu toggle, motion).
- **Static-first.** Marketing pages should be statically rendered / pre-rendered. The form endpoint is the only dynamic part.
- **Single source of content.** Service descriptions, specialties, and nav items live in typed config files under `content/` or `lib/`, not hardcoded in JSX. This makes future CMS migration trivial.
- **Validate external input at the boundary.** The form route handler validates with Zod before doing anything else.
- **No premature backend.** Keep the form handler thin; push integration details into a shared `lib/` helper.

### File organization

```
app/
  layout.tsx              # root layout: fonts, metadata, navbar, footer
  page.tsx                # home
  about/page.tsx
  services/page.tsx
  services/[slug]/page.tsx  # optional per-service detail (data-driven)
  employers/page.tsx
  candidates/page.tsx
  contact/page.tsx
  api/contact/route.ts    # form handler (validate -> notify)
  sitemap.ts
  robots.ts
components/
  ui/                     # shadcn primitives (button, input, card...)
  layout/                 # navbar, footer, container
  sections/               # hero, service-grid, process, cta-band, etc.
  forms/                  # contact-form
content/
  services.ts             # typed service line definitions
  specialties.ts          # specialty tags
  navigation.ts           # nav + footer links
  site.ts                 # company facts, contact info, social links
lib/
  utils.ts                # cn(), helpers
  validation.ts           # Zod schemas
  email.ts                # notification helper
public/
  images/                 # optimized, license-safe imagery
  logo/                   # provided logo assets (white + green-on-light variants)
```

- Name files after the **responsibility** they hold, not the technology.
- `components/` is UI composition only — no business logic.
- Keep modules small and single-purpose; fix root causes, don't layer workarounds.

---

## 4. UI Context

### Theme & design language

**Light-first, professional, and trustworthy** with a clean, energetic green accent drawn straight from the brand. Recruitment is a relationship/trust business, so the design should feel premium, calm, and human — generous whitespace, strong typography, and confident use of the green brand color. Green signals growth, which ties directly to the tagline "Your Growth – Our Passion." Use a deep green or near-black green section / footer for contrast against the light primary surface.

All colors are CSS custom properties defined in `globals.css` and mapped to Tailwind tokens via `@theme inline`. **Components must use tokens — never hardcoded hex values or raw Tailwind color classes like `green-*` or `slate-*`.**

### Color tokens

| Role                  | CSS Variable             | Value                    |
| --------------------- | ------------------------ | ------------------------ |
| Page background       | `--bg-base`              | `#FFFFFF`                |
| Subtle background     | `--bg-subtle`            | `#F4F8F4`                |
| Surface (cards)       | `--bg-surface`           | `#FFFFFF`                |
| Elevated surface      | `--bg-elevated`          | `#FBFDFB`                |
| Dark/green section bg | `--bg-inverse`           | `#0E2A12`                |
| Primary text          | `--text-primary`         | `#0E1B11`                |
| Secondary text        | `--text-secondary`       | `#39463C`                |
| Muted text            | `--text-muted`           | `#6B776E`                |
| Faint text            | `--text-faint`           | `#9AA69E`                |
| Text on dark/green    | `--text-on-inverse`      | `#F1F8F1`                |
| Brand accent          | `--brand`                | `#30A533`  (logo green)  |
| Brand strong (hover)  | `--brand-strong`         | `#268A29`                |
| Brand deep            | `--brand-deep`           | `#19661C`                |
| Brand dim (tint)      | `--brand-dim`            | `rgba(48,165,51,0.10)`   |
| Brand contrast text   | `--brand-foreground`     | `#FFFFFF`                |
| Secondary accent      | `--accent-secondary`     | `#0E7C66`  (deep teal)   |
| Border                | `--border`               | `#E4ECE5`                |
| Border strong         | `--border-strong`        | `#CBD8CD`                |
| Ring / focus          | `--ring`                 | `#30A533`                |
| Success               | `--state-success`        | `#16A34A`                |
| Error                 | `--state-error`          | `#DC2626`                |
| Warning               | `--state-warning`        | `#D97706`                |

> **Color rules:** `--brand` (logo green) is the primary action color — CTAs, links, active states, icon highlights. White text sits on the green (`--brand-foreground`). `--brand-strong` is the hover/pressed state; `--brand-deep` and `--bg-inverse` are for dark green sections and the footer. Use `--accent-secondary` (deep teal) sparingly to differentiate the candidate path from the employer path without clashing with the green. Never place green text on the green brand fill, and verify all combinations meet WCAG AA contrast.

### Typography

| Role            | Font       | Variable      |
| --------------- | ---------- | ------------- |
| Headings & UI   | Geist Sans | `--font-sans` |
| Mono / accents  | Geist Mono | `--font-mono` |

- Match the logo's clean, rounded geometric character. Geist Sans (or Inter) is a close, professional fit.
- Type scale: hero `text-5xl`/`text-6xl`, section headings `text-3xl`/`text-4xl`, body `text-base`/`text-lg`.
- Headings tight tracking, body comfortable line-height (`leading-relaxed`).

### Border radius

| Context             | Class           |
| ------------------- | --------------- |
| Inline / small UI   | `rounded-lg`    |
| Buttons / inputs    | `rounded-xl`    |
| Cards / panels      | `rounded-2xl`   |
| Modals / hero media | `rounded-3xl`   |

> The logo emblem is fully circular, so a soft, rounded radius scale reinforces the brand feel. Lean rounded, not sharp.

### Spacing & layout

- Container max-width ~`1200px`, centered, with responsive horizontal padding.
- Vertical section rhythm: generous (`py-20` / `py-24` desktop, less on mobile).
- Grid: services and specialties in responsive card grids (1 col mobile → 2 → 3/4).
- Sticky navbar with subtle bottom border that gains a shadow on scroll.

### Component conventions

- shadcn/ui primitives in `components/ui/`. Add via CLI rather than hand-writing.
- Buttons: primary (green fill, white text), secondary (green outline), and ghost variant.
- Cards for services/specialties: surface bg, border, soft shadow, hover lift with a faint green tint border.
- Forms: labeled inputs, inline validation messages, visible green focus rings (`--ring`), clear loading + success states.

### Icons

Lucide React, stroke-based only. `h-4 w-4` inline, `h-5 w-5` in buttons, larger for feature/service icons. Tint key icons with `--brand`.

### Imagery (copyright-safe)

**Use only license-safe images.** Recommended free sources with clear licenses:

- **Unsplash** (unsplash.com) — free for commercial use, no attribution required.
- **Pexels** (pexels.com) — free, commercial use allowed.
- **Pixabay** (pixabay.com) — free, commercial use.
- For abstract/illustration: **unDraw** (undraw.co — open-license, and its illustration accent color can be set to the brand green `#30A533` for on-brand visuals).

Guidance: prefer authentic professional/team/office imagery (people collaborating, interviews, modern workspaces) over generic clip-art. Always optimize with `next/image`. **Do not use stock images of identifiable brands, logos, or anything implying a real client/testimonial that doesn't exist.** Keep an `IMAGE_CREDITS.md` listing each image's source URL and license for safety, even when attribution isn't required.

---

## 5. Page & Content Specification

> Content below is derived from common best-practice patterns for specialist recruitment firms (dual-audience navigation, specialization-led messaging, trust/process sections). Use it as ready-to-ship placeholder copy; refine with the client's real voice. Avoid inventing fake clients, numbers, or testimonials — mark those as clearly editable placeholders.

### Global navigation

- Logo (links home) — use the green-on-light logo variant on the light navbar.
- About
- Services (dropdown: Executive Search, Product Hiring, RPO Solutions, Startup Recruitment)
- For Employers
- For Candidates
- Contact
- Primary CTA button: **"Hire Talent"** (green fill).

### Footer

Dark green (`--bg-inverse`) footer using the white logo variant + tagline "Your Growth – Our Passion." Includes: company blurb · quick links (mirroring nav) · specialties list · contact details + social icons · founded 2025 · copyright line.

### Home page sections (in order)

1. **Hero** — Headline ("Build exceptional teams that fuel your growth") + subline (positioning sentence) + dual CTAs: **Hire Talent** (green fill) and **Find a Role** (outline/secondary). Supporting professional image or on-brand green abstract graphic. Tagline "Your Growth – Our Passion" can sit as an eyebrow above the headline.
2. **Trust strip** — short value statements: Integrity · Precision · Dedication (placeholder for client logos later).
3. **Services overview** — 4 cards (Executive Search, Software Product Hiring, RPO Solutions, Startup Recruitment) each with icon, one-line description, link.
4. **Specialties** — tag/pill grid of the 9 specialties, pills using `--brand-dim` background with `--brand-deep` text.
5. **Why HiresCrew / process** — 3–4 step process (Understand → Source → Match → Deliver) communicating method and rigor.
6. **Dual-path band** — two clear blocks: "For Employers" (green) and "For Candidates" (teal `--accent-secondary`) with their own CTAs.
7. **CTA band** — full-width green section: "Let's build your team." → Contact.

### About page

Mission statement, founding story (Founded 2025, self-owned, specialist focus), values (integrity/precision/dedication), what differentiates HiresCrew (specialization + tailored approach + partnership model). Optional founder/team placeholder.

### Services page(s)

Overview of all four service lines; optionally a data-driven `[slug]` detail page per service describing the approach, who it's for, and outcomes. Pull definitions from `content/services.ts`.

### For Employers

Pain points addressed, the HiresCrew hiring process, service lines relevant to hiring, and a strong enquiry CTA.

### For Candidates

How HiresCrew helps candidates, specialties/sectors covered, what to expect, and a "submit your details / get in touch" CTA. Use the teal secondary accent to visually distinguish this path.

### Contact page

Enquiry form (name, email, company [optional], audience type [employer/candidate], message) with Zod validation, plus direct contact details and social links. Posts to `/api/contact`.

---

## 6. Code Standards

### General

- Keep modules small and single-purpose.
- Fix root causes; do not layer workarounds.
- Don't mix unrelated concerns in one component or route.
- Respect the boundaries defined in this file's Architecture section.

### TypeScript

- Strict mode required throughout.
- Avoid `any` — use explicit `interface`s or narrowly scoped types.
- Validate unknown external input (form payloads) at boundaries before trusting it.
- Use `interface` for object contracts; type content config files explicitly.

### Next.js

- Default to Server Components.
- Add `"use client"` only when browser interactivity requires it (form, menu, motion).
- Keep route handlers focused on a single responsibility.
- Use `next/font`, `next/image`, and `next/link` — never raw `<img>` or `<a>` for internal nav.
- Set per-page `metadata` (title, description, OpenGraph) for SEO. Use the brand green as `themeColor`.

### Styling

- Use CSS custom-property tokens defined in `globals.css` — no raw Tailwind color classes (`green-*`, `slate-*`) or hardcoded hex values.
- Reference tokens through Tailwind utility names: `bg-base`, `text-primary`, `border-default`, `text-brand`, `bg-brand`, etc.
- Maintain the border-radius scale: `rounded-xl` small, `rounded-2xl` cards, `rounded-3xl` modals/hero.
- Mobile-first responsive utilities; verify every breakpoint.

### Content & data

- Service lines, specialties, nav, and company facts live in typed files under `content/` — never hardcoded inline. This is the seam for a future CMS.
- Keep copy editable and clearly placeholder where it's not client-confirmed.

### API routes

- Validate and parse request input (Zod) before any logic runs.
- Return consistent, predictable response shapes (`{ ok: boolean, error?: string }`).
- Keep handlers thin — push integration logic into `lib/`.
- Never expose secrets to the client; use server-side env vars.

### Accessibility & SEO

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), one `<h1>` per page.
- All images need meaningful `alt` text; decorative images `alt=""`.
- Keyboard-navigable; visible green focus states via `--ring`.
- Color contrast meets WCAG AA — verify white text on `--brand` green and all text on tinted backgrounds.
- Generate `sitemap.ts` and `robots.ts`; add JSON-LD `Organization` schema in the root layout (name, logo, foundingDate 2025, description).

---

## 7. Development Workflow

1. Read this file fully before starting.
2. Scaffold tokens in `globals.css` + Tailwind theme first, then layout primitives (container, navbar, footer), then sections, then pages.
3. Build content config files (`content/*.ts`) early so pages compose from data.
4. Implement the contact form + API route last among features; test validation and both success/error states.
5. Run Lighthouse and fix any score below target before considering a page done.
6. Update the Progress Tracker below after each meaningful change.
7. If an implementation decision changes the architecture, scope, or standards above, **update this file first**, then continue.

---

## 8. Progress Tracker

> Keep this current. Each entry: what changed, why, and what's next.

### Current phase
v1 complete — all pages built, clean build, dev server ready.

### Completed
- [x] Brand color extracted and locked from logo (#30A533)
- [x] Project scaffolding (Next.js 16 + TS + Tailwind v4)
- [x] Design tokens in `globals.css` (full color palette via `@theme`)
- [x] Logo SVG variants prepared (white-on-green + green-on-light) in `public/logo/`
- [x] Layout primitives (Navbar with dropdown, Footer with social links)
- [x] Content config files (`content/services.ts`, `specialties.ts`, `navigation.ts`, `site.ts`)
- [x] Home page (Hero, TrustStrip, ServicesGrid, Specialties, Process, DualPath, CtaBand)
- [x] About page (mission, values, differentiators, story)
- [x] Services page + per-service detail pages (`/services/[slug]`)
- [x] Employers page (pain points, process, services)
- [x] Candidates page (teal accent theme, how we help, specialties, what to expect)
- [x] Contact page + API route (`/api/contact` with Zod validation)
- [x] SEO (per-page metadata, sitemap.ts, robots.ts, JSON-LD Organization schema)
- [ ] Accessibility + Lighthouse pass (pending real deployment)

### Open questions / waiting on client
- Logo asset files in SVG (preferred) + a green-on-transparent/light variant for the navbar.
- Real contact email / phone / social links for `content/site.ts`.
- Form delivery method (Resend vs. form provider) + API keys.
- Any real testimonials, client logos, or placement stats to replace placeholders.

### Next steps
- Scaffold the project, wire up the green token palette, then build layout primitives.
