# Production Release Checklist

Before pushing this project live, ensure each item in this checklist is verified.

## 1. Environment & Setup Checks
- [ ] **Local Dev Server Check:** Verify the site starts without warnings or errors via `npm run dev`.
- [ ] **Lint Check:** Run `npm run lint` and verify there are zero ESLint errors or warnings.
- [ ] **Build Check:** Run `npm run build` and ensure Next.js builds successfully and outputs all dynamic route static pages (79 files expected).

## 2. Route & Path Checks
- [ ] **Browser Route Check:** Manually verify that `/`, `/en`, `/ar`, `/en/work`, `/ar/work`, `/en/lab`, `/ar/lab`, `/en/backend`, `/ar/backend`, `/en/contact`, and `/ar/contact` open without 500 errors.
- [ ] **Image Check:** Verify that project cover images and screenshots do not throw 404s in the console (check `public/projects/<slug>/cover.png`).
- [ ] **Dynamic Param Check:** Verify clicking on a project card successfully routes to `/[lang]/work/[slug]`.

## 3. Localization & Layout Checks
- [ ] **Arabic RTL Check:** Verify that Arabic routes load with `dir="rtl"`, Cairo font, and correct right-aligned grid/flex structures.
- [ ] **English LTR Check:** Verify that English routes load with `dir="ltr"`, Inter font, and correct left-aligned grid/flex structures.
- [ ] **Mobile Responsive Check:** Emulate mobile screens (iPhone, Android) in browser devtools and check that header grids, work grids, and navigation collapse into readable single-column lists.
- [ ] **Language Switcher Check:** Verify that clicking the language switcher updates the path dynamically while preserving the current route context.

## 4. CTA & Link Checks
- [ ] **Contact Links Check:** Verify LinkedIn, GitHub, and email mailto links point to your exact profiles.
- [ ] **WhatsApp CTA Check:** Click the WhatsApp CTA buttons on both English and Arabic views, verifying they open a chat with the correct pre-filled text in the correct language.

## 5. Metadata & SEO Checks
- [ ] **SEO Metadata Check:** Check `<title>` tags and meta descriptions in layouts and pages to ensure clean SEO indexing.
- [ ] **Default Document Config:** Verify lang properties (`lang="en"` and `lang="ar"`) match their respective layouts.

## 6. Content & Launch Readiness
- [x] **Arabic Draft Cleanup Completed:** "مسودة عربية:" removed and natural titles/summaries drafted.
- [ ] **Arabic Manual Review Still Pending:** Muhammed to review polished Arabic drafts and toggle `needsReview: false`.
- [ ] **Final Visual Browser Review Still Pending:** Muhammed to perform final visual look and feel checks on the running dev server.
- [ ] **Final Content Review Check:** Ensure empty arrays (`plugins.ts`, `themes.ts`, `backend-projects.ts`) are populated with your real work.
- [ ] **Deployment Readiness Check:** Verify environment variables, production domains, and SSL settings on your host (e.g. Vercel/Netlify).
