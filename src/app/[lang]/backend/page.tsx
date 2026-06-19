import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default async function BackendPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);

  const backendProjects = projects.filter(p => 
    p.type.includes("laravel") || 
    p.type.includes("php") || 
    (p.backendScreenshots && p.backendScreenshots.length > 0) || 
    (p.dashboardScreenshots && p.dashboardScreenshots.length > 0)
  );

  return (
    <div className="container mx-auto px-4 py-20 space-y-12">
      <header className="max-w-2xl text-center mx-auto">
        <h1 className="text-4xl font-bold mb-4">{t.backend.title}</h1>
        <p className="text-xl text-[#94A3B8]">
          {t.backend.description}
        </p>
      </header>

      <section className="max-w-7xl mx-auto">
        {backendProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendProjects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/${locale}/backend/${project.slug}`}
                className="group flex flex-col bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-[#38BDF8]/30 transition-all hover:shadow-[0_10px_30px_rgba(56,189,248,0.05)] hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full bg-[#0B1020] overflow-hidden">
                  {project.screenshots.length > 0 ? (
                    <Image 
                      src={project.screenshots[0]} 
                      alt={locale === "ar" ? project.titleAr : project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#94A3B8] font-medium">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-[#38BDF8] mb-3 uppercase tracking-widest">{locale === "ar" && project.categoryAr ? project.categoryAr : project.category}</div>
                  <h3 className="text-2xl font-bold mb-3 leading-snug group-hover:text-[#38BDF8] transition-colors">{locale === "ar" ? project.titleAr : project.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-2 flex-1">
                    {locale === "ar" ? project.summaryAr : project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1.5 bg-[#1E293B] border border-white/5 rounded-md text-[#94A3B8]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-[#111827] rounded-xl border border-white/5 p-12 text-center">
            <div className="text-[#38BDF8] mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">{t.backend.empty}</h2>
          </div>
        )}
      </section>
    </div>
  );
}
