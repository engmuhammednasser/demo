# Portfolio Rebuild Agent Reference & Execution Prompt

> Project owner: Muhammed Nasser / محمد ناصر  
> Goal: Rebuild the existing portfolio into a bilingual Arabic/English Next.js portfolio that clearly presents 8+ years of WordPress/WooCommerce experience, custom plugins/themes work, and 2+ years of Laravel/PHP backend experience.

---

## 1. Main Mission

Build a premium, clear, bilingual, interactive portfolio that positions Muhammed Nasser as:

**English:**  
A WordPress & WooCommerce Developer with 8+ years of experience building custom websites, plugins, themes, and scalable business solutions, with 2+ years of Laravel/PHP backend experience.

**Arabic:**  
مطوّر WordPress وWooCommerce بخبرة 8+ سنوات، متخصص في بناء مواقع، متاجر، إضافات وثيمز مخصصة، مع خبرة 2+ سنوات في Laravel/PHP لبناء أنظمة Backend، داشبوردات، وواجهات APIs مخصصة.

The portfolio must not feel like a generic gallery. It should feel like a professional developer/product lab where visitors understand:
- What Muhammed builds.
- What problems he solves.
- What technologies he uses.
- What each project achieved.
- How to contact him for a similar project.

---

## 2. Existing Project & New Project Rules

There are two projects side by side:

1. **Live/current portfolio**  
   Use it as a reference for:
   - Existing content
   - Existing projects
   - Existing screenshots/assets
   - Existing links
   - Current visual strengths
   - Project archive data

2. **New Next.js project**  
   This is where the rebuild must happen.

### Hard Rules

- Do not modify the live/current project unless explicitly requested.
- Do not delete or overwrite existing assets unless the owner confirms.
- Do not remove existing projects from the archive.
- Do not invent fake clients, fake metrics, fake testimonials, or fake results.
- Do not use placeholder content in final output.
- Do not make Laravel appear equal to WordPress in experience level.
- Do not hide the WordPress/WooCommerce specialization.
- Do not build a design that looks like a generic template.
- Do not use overly flashy animations that reduce clarity or performance.
- Do not hardcode Arabic/English content inside components.
- Do not build pages without mobile-first review.
- Do not ship without checking RTL/LTR behavior.

---

## 3. Core Positioning

### Experience Hierarchy

The site must communicate this order:

1. WordPress Development — strongest area, 8+ years.
2. WooCommerce Development — strong specialization.
3. Custom Plugins & Themes — important differentiator.
4. PHP Development — foundational backend skill.
5. Laravel Backend Systems — 2+ years, used for dashboards, APIs, and custom systems.
6. Next.js — used for the portfolio frontend and modern presentation.

### Recommended Main Headline

**English:**  
WordPress & WooCommerce Developer building custom websites, plugins, themes, and backend systems.

**Arabic:**  
مطوّر WordPress وWooCommerce ببني مواقع، متاجر، إضافات، ثيمز، وأنظمة Backend مخصصة.

### Experience Line

**English:**  
8+ years of WordPress experience, 2+ years of Laravel/PHP backend development.

**Arabic:**  
8+ سنوات خبرة في WordPress وWooCommerce، و2+ سنوات في Laravel/PHP Backend Development.

---

## 4. Recommended Website Structure

Use this main navigation:

### English

- Home
- Work
- Developer Lab
- Backend Systems
- Services
- About
- Contact
- AR / EN

### Arabic

- الرئيسية
- الأعمال
- المعمل البرمجي
- أنظمة Backend
- الخدمات
- عنّي
- تواصل
- AR / EN

---

## 5. Next.js Technical Architecture

Use Next.js App Router.

Recommended structure:

```txt
src/
  app/
    [lang]/
      layout.tsx
      page.tsx
      work/
        page.tsx
        [slug]/page.tsx
      lab/
        page.tsx
        plugins/
          [slug]/page.tsx
        themes/
          [slug]/page.tsx
      backend/
        page.tsx
        [slug]/page.tsx
      services/
        page.tsx
      about/
        page.tsx
      contact/
        page.tsx

  components/
    layout/
    sections/
    cards/
    filters/
    ui/

  data/
    projects.ts
    plugins.ts
    themes.ts
    backend-projects.ts
    services.ts

  dictionaries/
    ar.ts
    en.ts

  lib/
    i18n.ts
    utils.ts
    seo.ts

public/
  projects/
  plugins/
  themes/
  backend/
  og/
```

### Technical Constraints

- Use TypeScript.
- Use App Router, not Pages Router.
- Use Server Components by default.
- Use Client Components only for interactive UI such as filters, search, tabs, language switcher, menus, and accordions.
- Use `next/image` for project/plugin/theme screenshots.
- Use `next/link` for internal navigation.
- Use `generateMetadata` for SEO on all major pages.
- Use `generateStaticParams` for languages and project slugs.
- Use data-driven pages.
- Keep content in dictionaries/data files, not inside UI components.
- Use semantic HTML.
- Keep components small and reusable.
- Avoid unnecessary dependencies.
- Do not add a heavy animation library unless already installed or approved.
- Prefer CSS/Tailwind animations for simple transitions.
- Ensure builds pass with no TypeScript errors.

---

## 6. Language & RTL Rules

The site must support:

- English: `/en`
- Arabic: `/ar`

### Rules

- Arabic pages must use `lang="ar"` and `dir="rtl"`.
- English pages must use `lang="en"` and `dir="ltr"`.
- Layout, spacing, icons, arrows, and text alignment must respect direction.
- Do not mix Arabic and English awkwardly.
- Use clear Arabic copy, not literal translation.
- Use technical terms naturally:
  - Plugin / إضافة
  - Theme / ثيم
  - Backend / Backend
  - Dashboard / داشبورد
  - API / API
  - WooCommerce / WooCommerce

### Recommended Fonts

- English: Inter, Sora, or Geist.
- Arabic: Cairo, IBM Plex Sans Arabic, or Tajawal.

---

## 7. Visual Style Direction

Style name:

**Technical Premium + Clean Dark Interface**

### The site should feel:

- Professional
- Technical
- Modern
- Clear
- Premium
- Easy to navigate
- Arabic/English friendly

### Suggested Palette

```txt
Background: #05070D
Surface/Card: #0B1020
Surface Light: #111827
Border: rgba(255,255,255,0.08)
Primary: #38BDF8
Accent: #22C55E
Warning/Highlight: #EAB308
Text: #F8FAFC
Muted Text: #94A3B8
```

### UI Rules

- Use large clear typography.
- Use strong spacing.
- Do not overload sections.
- Cards should have soft borders and subtle hover states.
- Project screenshots should be large and useful.
- Code/plugin cards may use icons, code preview, or GitHub-like visual language.
- Avoid random gradients everywhere.
- Animations must be subtle and purposeful.
- Mobile experience must be excellent.

---

## 8. Home Page Plan

### Section 1: Hero

Must include:
- Main positioning.
- Experience line.
- Short personal description.
- Primary CTA: View Work / شوف الأعمال
- Secondary CTA: Start a Project / ابدأ مشروعك
- Optional CTA: Explore Developer Lab / تصفح المعمل البرمجي

Arabic hero copy:

```txt
أنا محمد ناصر، مطوّر WordPress وWooCommerce بخبرة 8+ سنوات.
ببني مواقع، متاجر، إضافات وثيمز مخصصة، وبستخدم Laravel/PHP لبناء داشبوردات وأنظمة Backend تساعد البيزنس يشتغل بشكل أسرع وأوضح.
```

English hero copy:

```txt
I’m Muhammed Nasser, a WordPress & WooCommerce Developer with 8+ years of experience building custom websites, plugins, themes, and Laravel-powered backend systems for real business needs.
```

---

### Section 2: Choose Your Path

Create clear visitor paths:

Arabic:
- عايز متجر WooCommerce
- عايز Plugin مخصص
- عايز Theme مخصص
- عايز Laravel Dashboard أو API
- عايز تحسين سرعة وأداء
- عايز أشوف مشاريع مشابهة

English:
- I need a WooCommerce Store
- I need a Custom Plugin
- I need a Custom Theme
- I need a Laravel Dashboard or API
- I need Performance Optimization
- I want to see similar work

Each path should either:
- Navigate to a section/page.
- Apply a relevant filter.
- Update the WhatsApp/contact CTA message.

---

### Section 3: Experience Snapshot

Show key stats without fake numbers.

Allowed:
- 8+ Years WordPress Experience
- 2+ Years Laravel/PHP
- Custom Plugins & Themes
- WooCommerce Workflows
- Arabic/GCC Market Experience
- WordPress + Backend Solutions

Do not invent:
- Revenue numbers
- Conversion increases
- Client count unless confirmed
- Performance scores unless measured

---

### Section 4: Featured Case Studies

Show 4–6 strong featured items only.

Must include a mix of:
- WooCommerce project
- WordPress corporate project
- Custom plugin
- Custom theme
- Laravel/backend system
- GCC/multi-market project if available

---

### Section 5: Developer Lab Preview

Purpose:
Show that Muhammed builds real developer-level solutions, not just WordPress pages.

Include:
- Plugins
- Themes
- WooCommerce extensions
- GitHub repositories
- Internal tools
- Experiments

---

### Section 6: Backend Systems Preview

Purpose:
Present Laravel/PHP work as backend systems.

Include:
- Dashboards
- APIs
- Booking systems
- Inventory systems
- CRM-like tools
- Reporting dashboards

---

### Section 7: Services

Services must be framed as solutions, not just technologies.

Include:
- Custom WordPress Development
- WooCommerce Development
- Custom Plugin Development
- Custom Theme Development
- Laravel Backend Development
- Performance Optimization
- Security & Maintenance
- Payment Gateway Integration

---

### Section 8: Process

Use a simple, confident process:

English:
1. Discover
2. Plan
3. Build
4. Test
5. Optimize
6. Launch
7. Support

Arabic:
1. فهم الهدف
2. التخطيط
3. بناء الحل
4. الاختبار
5. تحسين الأداء
6. الإطلاق
7. الدعم والمتابعة

---

### Section 9: Contact CTA

The contact section must feel like a mini project brief, not just a generic form.

Fields:
- Project type
- Current website link
- Main problem
- Required service
- Approximate budget
- Timeline
- Message

---

## 9. Work Page Rules

The Work page is for client projects and public work.

### Filters

Add filters by:

Type:
- WordPress
- WooCommerce
- Plugin
- Theme
- Laravel
- PHP
- Next.js

Goal:
- Sales
- Lead Generation
- Booking
- Performance
- Internal System
- Automation
- Checkout Optimization

Industry:
- Ecommerce
- Corporate
- Agency
- Education
- Travel
- Logistics
- Retail
- Services

Status:
- Live
- Archived
- Private
- GitHub
- Case Study Available

### Project Card Must Show

- Screenshot
- Project name
- Type
- Short summary
- Problem
- My role
- Stack tags
- Case study link
- Live/GitHub link if available

Do not show all projects with equal priority.

---

## 10. Project Detail Page Rules

Every project detail page must follow this structure:

1. Overview
2. The Problem
3. My Role
4. Tech Stack
5. What I Actually Built
6. Key Features
7. Challenges
8. Results / Business Value
9. Screenshots
10. Related Projects
11. CTA

### Important Block

Every project should include:

**What I Actually Built**

Examples:
- Custom WordPress theme
- WooCommerce checkout customization
- Payment gateway setup
- Admin settings panel
- Custom post types
- Product filtering
- Performance optimization
- Responsive frontend
- Laravel dashboard
- REST API endpoints
- Role-based access

### Results Rule

If exact metrics are unavailable, use business value language:

Allowed:
- Improved user journey
- Easier product management
- Cleaner checkout flow
- More scalable structure
- Faster browsing experience
- Easier maintenance

Not allowed:
- “Increased revenue by 300%”
- “10x performance”
- “Thousands of users”
- Any unverified claims

---

## 11. Developer Lab Rules

Developer Lab must contain:

- WordPress Plugins
- WooCommerce Extensions
- WordPress Themes
- Starter Themes
- GitHub Repositories
- Laravel Tools
- Experiments

### Plugin Card

Each plugin card should show:
- Plugin name
- Problem it solves
- Features
- Stack
- GitHub link if public
- Demo link if available
- Status

Plugin statuses:
- Public GitHub
- Private Client Plugin
- Internal Tool
- Experimental
- Production Ready

### Plugin Detail Page

Structure:
1. Plugin name
2. Short description
3. Problem it solves
4. Features
5. Technical details
6. Screenshots
7. GitHub/demo links
8. Status
9. Compatibility
10. CTA

### Theme Card

Each theme card should show:
- Theme name
- Purpose
- Pages included
- WordPress features
- WooCommerce support
- Performance notes
- Screenshots
- Demo/GitHub links

---

## 12. Backend Systems / Laravel Rules

Laravel must be presented as:

**Backend Systems**, not just “Laravel projects”.

### Backend Page Message

English:
Laravel is used when the project needs a custom backend, dashboard, API, or business workflow beyond a traditional WordPress setup.

Arabic:
بستخدم Laravel لما المشروع يحتاج نظام Backend مخصص، Dashboard، API، أو workflow خاص أكبر من موقع WordPress تقليدي.

### Backend Project Types

- Admin Dashboards
- REST APIs
- Booking Systems
- Inventory Systems
- CRM Tools
- Reporting Dashboards
- Authentication Systems
- Payment/Order Systems

### Laravel Project Detail Page

Structure:
1. Overview
2. Business Problem
3. System Modules
4. My Role
5. Backend Architecture Notes
6. Stack
7. Screenshots
8. Result / Business Value
9. CTA

### Backend Notes Can Include

- Relational database structure
- Role-based access
- RESTful API
- Server-side validation
- Dashboard CRUD operations
- Authentication
- Permissions
- Reports

Avoid exposing sensitive system details.

---

## 13. Data Model Requirements

Use typed data objects.

### Project Type

```ts
export type WorkType =
  | "wordpress"
  | "woocommerce"
  | "plugin"
  | "theme"
  | "laravel"
  | "php"
  | "nextjs";

export type Project = {
  slug: string;
  title: string;
  titleAr: string;
  type: WorkType[];
  category: string;
  industry: string;
  goal: string[];
  summary: string;
  summaryAr: string;
  problem: string;
  problemAr: string;
  solution: string;
  solutionAr: string;
  role: string[];
  stack: string[];
  features: string[];
  featuresAr: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  isPrivate: boolean;
  status: "live" | "archived" | "private" | "github" | "case-study";
};
```

### Plugin Type

```ts
export type PluginItem = {
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  problem: string;
  problemAr: string;
  features: string[];
  featuresAr: string[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  screenshots: string[];
  status:
    | "public-github"
    | "private-client"
    | "internal-tool"
    | "experimental"
    | "production-ready";
  compatibility?: string[];
};
```

### Theme Type

```ts
export type ThemeItem = {
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  purpose: string;
  purposeAr: string;
  pages: string[];
  features: string[];
  featuresAr: string[];
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  screenshots: string[];
  status: "public" | "private" | "starter" | "client";
};
```

### Backend Project Type

```ts
export type BackendProject = {
  slug: string;
  title: string;
  titleAr: string;
  type: "dashboard" | "api" | "booking" | "inventory" | "crm" | "reports" | "auth" | "payments";
  modules: string[];
  modulesAr: string[];
  problem: string;
  problemAr: string;
  solution: string;
  solutionAr: string;
  role: string[];
  stack: string[];
  databaseNotes?: string[];
  apiNotes?: string[];
  screenshots: string[];
  status: "live" | "private" | "demo" | "case-study";
};
```

---

## 14. SEO Requirements

Each major page must have:

- Unique title
- Unique description
- OpenGraph image
- Canonical URL if applicable
- Arabic/English alternate links if implemented
- Clean slug
- Semantic headings

### Page Title Examples

English:
- Muhammed Nasser | WordPress & WooCommerce Developer
- Work | Muhammed Nasser
- Developer Lab | Plugins, Themes & GitHub Work
- Backend Systems | Laravel & PHP Projects

Arabic:
- محمد ناصر | مطوّر WordPress وWooCommerce
- الأعمال | محمد ناصر
- المعمل البرمجي | إضافات وثيمز ومشاريع GitHub
- أنظمة Backend | مشاريع Laravel وPHP

---

## 15. Performance Requirements

- Optimize images.
- Use responsive image sizes.
- Avoid huge client bundles.
- Keep animations light.
- Lazy-load non-critical UI.
- Use server-rendered content where possible.
- Avoid rendering the entire project archive on the client unnecessarily.
- Use accessible buttons and links.
- Test mobile layout thoroughly.
- Do not introduce layout shift in project cards.

---

## 16. Accessibility Requirements

- Use semantic HTML.
- Maintain heading order.
- All images must have meaningful alt text.
- Buttons and links must be keyboard accessible.
- Filters must be usable by keyboard.
- Contrast must be readable.
- Do not rely on color only to convey meaning.
- Arabic and English content must be readable on mobile.

---

## 17. Interaction Requirements

Must include:

1. Language switcher.
2. Mobile menu.
3. Project filters.
4. Search in projects/lab if feasible.
5. Choose Your Path interaction.
6. Smart WhatsApp CTA.
7. Sticky contact CTA on mobile.
8. FAQ accordion.
9. Related projects.
10. Case study navigation.

### Smart WhatsApp Messages

If user chooses WooCommerce:
```txt
Hello Muhammed, I need help with a WooCommerce store.
```

If user chooses Plugin:
```txt
Hello Muhammed, I need a custom WordPress/WooCommerce plugin.
```

If user chooses Theme:
```txt
Hello Muhammed, I need a custom WordPress theme.
```

If user chooses Laravel:
```txt
Hello Muhammed, I need a Laravel backend/dashboard.
```

Arabic versions may be used when the visitor is on `/ar`.

---

## 18. Content Quality Rules

- Write clear, confident copy.
- Avoid exaggerated marketing language.
- Avoid weak phrases like “I make websites”.
- Focus on problems, solutions, and business value.
- Keep Arabic copy natural and professional.
- Keep English copy direct and polished.
- Use “I” for personal branding, not “we”, unless the owner specifically wants an agency tone.
- Keep name spelling consistent across the site.
- Keep contact links consistent.
- Validate all GitHub, LinkedIn, WhatsApp, and email links.

---

## 19. Implementation Phases

### Phase 1: Audit & Setup

- Review current live portfolio.
- List all existing projects.
- List all available assets/screenshots.
- Check contact links.
- Check name spelling consistency.
- Confirm required pages.
- Setup Next.js structure.
- Setup Tailwind/design system.
- Setup Arabic/English routing.

### Phase 2: Data & Content

- Create typed data files.
- Migrate current project data.
- Add plugin data.
- Add theme data.
- Add Laravel/PHP project data.
- Create dictionaries for Arabic/English.
- Prepare slugs.

### Phase 3: Core UI

- Header
- Footer
- Language switcher
- Hero
- Choose Your Path
- Experience snapshot
- Cards
- Filters
- CTA sections

### Phase 4: Pages

- Home
- Work archive
- Project details
- Developer Lab
- Plugin details
- Theme details
- Backend Systems
- Backend project details
- Services
- About
- Contact

### Phase 5: Interactions

- Filters
- Search
- Tabs
- Smart WhatsApp CTA
- FAQ accordion
- Related projects
- Mobile sticky CTA

### Phase 6: SEO & Performance

- Metadata
- OpenGraph
- Sitemap
- Robots
- Image optimization
- Accessibility pass
- Mobile testing
- Build check

### Phase 7: Final Review

- Review Arabic layout.
- Review English layout.
- Test all links.
- Test all project routes.
- Test mobile.
- Remove placeholders.
- Remove unused code.
- Ensure final build succeeds.

---

## 20. Final Output Criteria

The work is complete only when:

- The site is fully bilingual.
- WordPress/WooCommerce experience is clearly dominant.
- Laravel/PHP is shown as backend systems experience.
- Plugins and themes have their own clear area.
- Projects are shown as case studies, not just screenshots.
- Current project archive is preserved.
- UI is premium, clear, and fast.
- Mobile experience is excellent.
- No fake data is added.
- No placeholder content remains.
- SEO metadata exists for key pages.
- Build passes successfully.

---

# Master Prompt for the Agent

Use this prompt when starting the implementation:

```txt
You are working on a new Next.js portfolio project for Muhammed Nasser.

Muhammed is a WordPress & WooCommerce Developer with 8+ years of experience. He also has 2+ years of Laravel/PHP backend experience. The goal is to rebuild his existing portfolio into a premium bilingual Arabic/English website using Next.js.

There are two projects side by side:
1. The existing live portfolio, which should be used only as a reference for current content, projects, assets, links, and visual strengths.
2. The new Next.js project, where all implementation should happen.

Do not modify the live project unless explicitly instructed.

Build the new portfolio as a professional developer portfolio and product lab, not a generic gallery. The site must clearly show:
- WordPress/WooCommerce client work
- Custom plugins
- Custom themes
- GitHub/open-source style work
- Laravel/PHP backend systems
- Services
- Case studies
- Contact path

Use Next.js App Router, TypeScript, Tailwind CSS, and a data-driven structure. Use Arabic and English routes such as /ar and /en. Arabic must use RTL layout and natural Arabic copy. English must use LTR layout and polished developer-focused copy.

The experience hierarchy must be:
1. WordPress/WooCommerce: 8+ years and the primary specialization.
2. Custom plugins and themes: key differentiator.
3. Laravel/PHP backend systems: 2+ years, used for dashboards, APIs, and custom business systems.
4. Next.js: used as the modern portfolio frontend.

Required pages:
- Home
- Work
- Project detail
- Developer Lab
- Plugin detail
- Theme detail
- Backend Systems
- Backend project detail
- Services
- About
- Contact

Required interactions:
- Language switcher
- Mobile menu
- Project filters
- Search if feasible
- Choose Your Path cards
- Smart WhatsApp CTA
- FAQ accordion
- Related projects
- Sticky mobile CTA

Do not hardcode content inside components. Use typed data files and dictionaries. Do not invent fake metrics, fake clients, fake testimonials, or fake results. If exact results are unavailable, describe business value honestly.

Design direction:
Technical Premium + Clean Dark Interface.
Use dark background, clean cards, soft borders, strong typography, subtle motion, and excellent mobile responsiveness. Avoid flashy template-like visuals.

Every project detail page must include:
- Overview
- Problem
- My Role
- Tech Stack
- What I Actually Built
- Key Features
- Challenges
- Results / Business Value
- Screenshots
- Related Projects
- CTA

Developer Lab must include:
- WordPress plugins
- WooCommerce extensions
- WordPress themes
- Starter themes
- GitHub repositories
- Internal tools or experiments

Backend Systems must show Laravel/PHP as custom dashboards, APIs, booking systems, inventory systems, CRM-like tools, reports, auth systems, and payment/order systems.

Before making big changes:
1. Audit the current project and available assets.
2. Review the new Next.js structure.
3. Create a clear implementation plan.
4. Then implement in phases.

Quality bar:
- Bilingual
- RTL/LTR correct
- Mobile-first
- Accessible
- SEO-ready
- Fast
- Data-driven
- No placeholders
- No fake claims
- Build passes
```
