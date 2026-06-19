import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import LiveButton from "@/components/ui/LiveButton";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <div className="container mx-auto px-4 py-20 space-y-16">
      <header className="max-w-3xl text-center mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">{t.nav.work}</h1>
        <p className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed">
          {locale === "ar" ? "تصفح أحدث مشاريع التخصيص والمتاجر التي قمت ببنائها." : "Explore the latest custom projects and stores I have built."}
        </p>
      </header>

      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight">{t.work.viewAll}</h2>
          {/* Filters can go here later in a client component */}
        </div>

        {projects.filter(p => !p.hidden && !p.type.includes("laravel") && !p.type.includes("php")).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.hidden && !p.type.includes("laravel") && !p.type.includes("php")).map((project) => (
              <Link 
                key={project.slug} 
                href={`/${locale}/work/${project.slug}`}
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
                  <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-2">{locale === "ar" ? project.summaryAr : project.summary}</p>
                  {project.liveUrl && (
                    <LiveButton
                      href={project.liveUrl}
                      labelAr="زيارة الموقع"
                      labelEn="Live Site"
                      locale={locale}
                      archiveHref={`/${locale}/work/${project.slug}`}
                    />
                  )}
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
          <div className="text-center py-20 bg-[#111827] rounded-xl border border-white/5">
            <p className="text-[#94A3B8]">{t.work.empty}</p>
          </div>
        )}
      </section>
    </div>
  );
}
