import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const featuredProjects = projects.filter(p => p.isFeatured);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero */}
      <section className="container mx-auto px-4 pt-16 pb-16 text-center max-w-5xl space-y-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#38BDF8]/8 blur-[140px] rounded-full pointer-events-none -z-10" />
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-semibold tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          {t.home.heroExperience}
        </div>
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#E2E8F0] to-[#94A3B8]">
          {t.home.heroTitle}
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          {t.home.heroCopy}
        </p>
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 pt-6">
          {/* Primary */}
          <Link
            href={`/${lang}/work`}
            className="px-8 py-4 rounded-xl bg-[#38BDF8] text-[#0B1020] font-bold text-lg hover:bg-[#38BDF8]/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(56,189,248,0.35)] w-full sm:w-auto"
          >
            {t.home.viewWork}
          </Link>
          {/* Secondary */}
          <Link
            href={`/${lang}/contact`}
            className="px-8 py-4 rounded-xl bg-[#22C55E] text-white font-bold text-lg hover:bg-[#22C55E]/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,197,94,0.25)] w-full sm:w-auto"
          >
            {t.home.startProject}
          </Link>
          {/* Tertiary / outline */}
          <Link
            href={`/${lang}/lab`}
            className="px-8 py-4 rounded-xl border border-[#38BDF8]/30 text-[#38BDF8] font-semibold text-lg hover:bg-[#38BDF8]/10 hover:border-[#38BDF8]/60 transition-all w-full sm:w-auto"
          >
            {t.home.exploreLab}
          </Link>
        </div>
      </section>


      {/* 2. Choose Your Path */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 tracking-tight">{t.home.choosePath}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { label: t.home.pathWoo, href: `https://wa.me/201025811613?text=${encodeURIComponent(t.contact.wooMessage)}` },
            { label: t.home.pathPlugin, href: `https://wa.me/201025811613?text=${encodeURIComponent(t.contact.pluginMessage)}` },
            { label: t.home.pathTheme, href: `https://wa.me/201025811613?text=${encodeURIComponent(t.contact.themeMessage)}` },
            { label: t.home.pathLaravel, href: `https://wa.me/201025811613?text=${encodeURIComponent(t.contact.laravelMessage)}` },
            { label: t.home.pathPerformance, href: `/${lang}/contact` },
            { label: t.home.pathSimilar, href: `/${lang}/work` },
          ].map((path, i) => (
            <Link 
              key={i}
              href={path.href}
              className="bg-[#111827] border border-white/5 p-8 rounded-2xl hover:border-[#38BDF8]/50 hover:bg-[#111827]/80 hover:-translate-y-1 transition-all flex items-center justify-between group shadow-lg"
            >
              <span className="font-semibold text-lg md:text-xl text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">{path.label}</span>
              <svg className="w-6 h-6 text-[#38BDF8] opacity-50 transform group-hover:opacity-100 group-hover:translate-x-2 transition-all rtl:rotate-180 rtl:group-hover:-translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Case Studies */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 max-w-7xl mx-auto gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t.work.featured}</h2>
          <Link href={`/${lang}/work`} className="text-[#38BDF8] hover:text-[#38BDF8]/80 font-semibold group flex items-center gap-2">
            {t.work.viewAll}
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredProjects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/${lang}/work/${project.slug}`}
              className="group flex flex-col bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-[#38BDF8]/30 transition-all hover:shadow-[0_10px_30px_rgba(56,189,248,0.05)] hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full bg-[#0B1020] overflow-hidden">
                {project.screenshots.length > 0 ? (
                  <Image 
                    src={project.screenshots[0]} 
                    alt={lang === "ar" ? project.titleAr : project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#94A3B8] font-medium">No Image</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-[#38BDF8] mb-3 uppercase tracking-widest">{project.category}</div>
                <h3 className="text-2xl font-bold mb-3 leading-snug group-hover:text-[#38BDF8] transition-colors">{lang === "ar" ? project.titleAr : project.title}</h3>
                <p className="text-[#94A3B8] line-clamp-2 leading-relaxed flex-1">
                  {lang === "ar" ? project.summaryAr : project.summary}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                  {lang === "ar" ? "قراءة التفاصيل" : "Read Case Study"}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform rtl:mr-2 rtl:ml-0 rtl:rotate-180 rtl:group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
