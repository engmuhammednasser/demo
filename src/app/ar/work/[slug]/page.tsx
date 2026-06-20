import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScreenshotLightbox from "@/components/ui/ScreenshotLightbox";
import type { Metadata } from "next";

import FullPageScreenshotPreview from "@/components/ui/FullPageScreenshotPreview";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lang = "ar";
  const locale = lang as Locale;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  let title = locale === "ar" ? project.titleAr : project.title;
  let description = locale === "ar" ? project.summaryAr : project.summary;
  
  if (slug === "atour") {
    title = locale === "ar" ? "جولة Atour - منصة سياحية سعودية | محمد ناصر" : "Atour - Saudi Tourism Marketplace | Muhammed Nasser";
    description = locale === "ar" 
      ? "دراسة حالة لمنصة سياحية سعودية مبنية بـ Laravel، تشمل واجهات عربية RTL، صفحات جولات ديناميكية، تجربة حجز واضحة، صفحات دعم، وتجربة مناسبة للموبايل."
      : "A Laravel-based Saudi tourism marketplace case study featuring RTL public interfaces, dynamic tour pages, booking-focused UX, support pages, and mobile-friendly presentation.";
  }

  return {
    title,
    description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang = "ar";
  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  const title = locale === "ar" ? project.titleAr : project.title;
  const summary = locale === "ar" ? project.summaryAr : project.summary;
  const problem = locale === "ar" ? project.problemAr : project.problem;
  const solution = locale === "ar" ? project.solutionAr : project.solution;
  const features = locale === "ar" ? project.featuresAr : project.features;
  const role = locale === "ar" && project.roleAr ? project.roleAr : project.role;
  const built = locale === "ar" && project.builtAr ? project.builtAr : project.built;
  const businessValue = locale === "ar" && project.businessValueAr ? project.businessValueAr : project.businessValue;

  // Determine if the live site is available
  const isLiveAvailable = !!project.liveUrl;
  const isArchived = project.status === "archived" || project.status === "private";

  // Check if project uses the new enriched screenshot system
  const isEnriched =
    project.frontendScreenshots ||
    project.bookingScreenshots ||
    project.supportScreenshots ||

    project.backendScreenshots ||
    project.dashboardScreenshots ||
    project.academicScreenshots ||
    project.operationsScreenshots ||
    project.communicationScreenshots;

  // Legacy screenshots
  const allScreenshots = project.screenshots.filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-20 space-y-20">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="text-sm font-bold text-[#38BDF8] uppercase tracking-widest">{locale === "ar" && project.categoryAr ? project.categoryAr : project.category}</div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap">{summary}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {isLiveAvailable && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#22C55E] text-white font-bold text-lg rounded-lg hover:bg-[#22C55E]/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t.work.project.live}
            </a>
          )}
          {(isArchived || !isLiveAvailable) && !project.liveUrl && (
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E293B] border border-white/10 text-[#94A3B8] font-semibold text-base rounded-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              {t.work.project.archivedPreview}
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all"
            >
              {t.work.project.github}
            </a>
          )}
        </div>
      </header>

      {/* Main Cover Image (Legacy only) */}
      {!isEnriched && allScreenshots.length > 0 && (
        <div className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src={allScreenshots[0]}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      )}

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        <div className="md:col-span-2 space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">{t.work.project.problem}</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed whitespace-pre-wrap">{problem}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">{locale === "ar" ? "الحل" : "The Solution"}</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed whitespace-pre-wrap">{solution}</p>
          </section>

          {built && built.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">{t.work.project.built}</h2>
              <ul className="grid grid-cols-1 gap-4 text-[#94A3B8] text-lg">
                {built.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">{t.work.project.features}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#94A3B8] text-lg">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#38BDF8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {businessValue && businessValue.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">{t.work.project.results}</h2>
              <ul className="grid grid-cols-1 gap-4 text-[#94A3B8] text-lg">
                {businessValue.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-10 bg-[#111827] p-8 rounded-2xl border border-white/5 h-fit shadow-lg sticky top-24">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-4">{t.work.project.role}</h3>
            <ul className="space-y-2">
              {role.map((r, i) => (
                <li key={i} className="font-semibold text-lg text-[#F8FAFC]">{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-4">{t.work.project.stack}</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-[#1E293B] text-sm font-semibold rounded-md border border-white/5 text-[#94A3B8]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.relatedProjects && project.relatedProjects.length > 0 && (
            <div className="pt-6 border-t border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-4">
                {locale === "ar" ? "مشاريع ذات صلة" : "Related Projects"}
              </h3>
              <ul className="space-y-3">
                {project.relatedProjects.map((slug, i) => {
                  const relatedProject = projects.find((p) => p.slug === slug);
                  if (!relatedProject) return null;
                  return (
                    <li key={i}>
                      <a
                        href={`/${locale}/work/${slug}`}
                        className="block px-4 py-3 bg-[#1E293B] rounded-lg border border-white/5 text-[#38BDF8] font-semibold text-sm hover:bg-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-all"
                      >
                        {locale === "ar" ? relatedProject.titleAr : relatedProject.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <div className="pt-6 border-t border-white/5">
            <a
              href={`https://wa.me/201025811613?text=${encodeURIComponent(locale === "ar" ? "أهلاً محمد، شاهدت مشروع " + title + " وأحتاج لمشروع مشابه." : "Hello Muhammed, I saw the " + title + " project and I need a similar project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-[#38BDF8] text-[#0B1020] font-bold text-lg rounded-lg hover:bg-[#38BDF8]/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              {t.work.project.cta}
            </a>
          </div>
        </aside>
      </div>

      {/* Legacy Full Screenshot Gallery */}
      {!isEnriched && allScreenshots.length > 1 && (
        <section className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">{t.work.project.gallery}</h2>
          <FullPageScreenshotPreview
            lang={lang as "en" | "ar"}
            screenshots={allScreenshots.slice(1).map((src) => {
              // Automatically apply full-page pan for long screenshots in eventgift, botella, and techmart
              const isFullPage = ((slug.startsWith("eventgift-") || slug === "botella" || slug === "techmart") && !src.includes("header")) || (slug === "ashhalan" && src.includes("home-page"));
              
              let customTitleEn = "Project Screenshot";
              let customTitleAr = "لقطة من المشروع";
              
              if (slug === "botella") {
                const filename = src.split("/").pop()?.replace(".webp", "") || "";
                let cleanName = filename.replace(/^\d+-/, "").replace(/-en$/, "").replace(/-ar$/, "").replace(/-/g, " ");
                cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
                
                if (src.includes("-ar.webp")) {
                  customTitleAr = cleanName;
                  customTitleEn = "Screenshot";
                } else {
                  customTitleEn = cleanName;
                  customTitleAr = cleanName; // Show english name in arabic too if it's the english pic
                }
              }

              return {
                src,
                alt: { en: `${title} screenshot`, ar: `لقطة من مشروع ${title}` },
                title: { en: customTitleEn, ar: customTitleAr },
                isFullPage,
              };
            })}
          />
        </section>
      )}

      {/* Enriched Screenshots Sections */}
      {isEnriched && (
        <div className="max-w-6xl mx-auto space-y-24">
          {project.frontendScreenshots && project.frontendScreenshots.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">{locale === "ar" ? "صور واجهات الموقع العامة" : "Frontend Website Screenshots"}</h2>
              <ScreenshotLightbox screenshots={project.frontendScreenshots} lang={locale} title={title} />
            </section>
          )}

          {project.bookingScreenshots && project.bookingScreenshots.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">{locale === "ar" ? "تجربة الحجز والتحويل" : "Booking & Conversion UX"}</h2>
              <ScreenshotLightbox screenshots={project.bookingScreenshots} lang={locale} title={title} />
            </section>
          )}

          {project.supportScreenshots && project.supportScreenshots.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">{locale === "ar" ? "الدعم والثقة" : "Support & Trust"}</h2>
              <ScreenshotLightbox screenshots={project.supportScreenshots} lang={locale} title={title} />
            </section>
          )}



          {/* New specific backend groups for EduSmart / Teachers Portal */}
          {project.dashboardScreenshots && project.dashboardScreenshots.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">{locale === "ar" ? "نظرة عامة على لوحة التحكم" : "Dashboard Overview"}</h2>
              <ScreenshotLightbox screenshots={project.dashboardScreenshots} lang={locale} title={title} />
            </section>
          )}

          {project.academicScreenshots && project.academicScreenshots.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">{locale === "ar" ? "إدارة العملية التعليمية" : "Academic Management"}</h2>
              <ScreenshotLightbox screenshots={project.academicScreenshots} lang={locale} title={title} />
            </section>
          )}

          {project.operationsScreenshots && project.operationsScreenshots.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">{locale === "ar" ? "العمليات والتقارير" : "Operations & Reports"}</h2>
              <ScreenshotLightbox screenshots={project.operationsScreenshots} lang={locale} title={title} />
            </section>
          )}

          {project.communicationScreenshots && project.communicationScreenshots.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">{locale === "ar" ? "التواصل والإعلانات" : "Communication & Announcements"}</h2>
              <ScreenshotLightbox screenshots={project.communicationScreenshots} lang={locale} title={title} />
            </section>
          )}

          {/* Backend / Dashboard Placeholder (For Atour) */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight flex items-center gap-4">
              {locale === "ar" ? "صور الداشبورد وأنظمة Backend" : "Backend / Dashboard Screenshots"}
              {(!project.backendScreenshots || project.backendScreenshots.length === 0) && (
                <span className="text-sm font-bold bg-[#F59E0B]/20 text-[#F59E0B] px-3 py-1 rounded-full uppercase tracking-wider">
                  {locale === "ar" ? "سيتم إضافتها لاحقًا" : "Coming Later"}
                </span>
              )}
            </h2>
            
            {project.backendScreenshots && project.backendScreenshots.length > 0 ? (
              <ScreenshotLightbox screenshots={project.backendScreenshots} lang={locale} title={title} />
            ) : (
              <div className="w-full bg-[#111827] border border-white/5 border-dashed rounded-2xl p-12 text-center space-y-4">
                <svg className="w-16 h-16 text-[#94A3B8] mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <p className="text-[#94A3B8] text-lg font-medium">
                  {locale === "ar" 
                    ? "سيتم إضافة صور الداشبورد هنا بعد تجهيز لقطات لوحة التحكم / مقدم الخدمة."
                    : "Dashboard screenshots will be added here after the backend/provider panel visuals are finalized."}
                </p>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}


export async function generateStaticParams() { const { projects } = await import("@/data/projects"); return projects.map(p => ({ slug: p.slug })); }