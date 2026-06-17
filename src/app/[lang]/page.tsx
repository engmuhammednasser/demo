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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#E2E8F0] to-[#94A3B8] max-w-4xl mx-auto">
          {t.home.heroTitle}
        </h1>
        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
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

      {/* 2. Problems I Solve */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Problems I Solve
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I help businesses improve, customize, and scale WordPress and WooCommerce platforms with practical solutions built around real workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 — Speed */}
          <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#38BDF8]/25 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all">
            <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">Slow WooCommerce Stores</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">I optimize slow stores that affect user experience, conversions, and sales.</p>
          </div>
          {/* Card 2 — Payment */}
          <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#38BDF8]/25 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all">
            <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" /></svg>
            <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">Checkout &amp; Payment Issues</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">I customize checkout flows and integrate payment methods that match business needs.</p>
          </div>
          {/* Card 3 — Plugin */}
          <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#38BDF8]/25 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all">
            <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1h3a1 1 0 011 1v3h1a2 2 0 010 4h-1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3H3a2 2 0 010-4h1V6a1 1 0 011-1h3V4z" /></svg>
            <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">Plugin Limitations</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">I build custom plugins when ready-made solutions don&apos;t fit your workflow.</p>
          </div>
          {/* Card 4 — Business Logic */}
          <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#38BDF8]/25 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all">
            <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>
            <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">Custom Business Logic</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">I create custom WordPress and Laravel solutions for booking, CRM, ERP, dashboards, and internal operations.</p>
          </div>
          {/* Card 5 — RTL */}
          <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#38BDF8]/25 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all">
            <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
            <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">Arabic &amp; RTL Experiences</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">I build clean Arabic, English, and bilingual interfaces with proper RTL support.</p>
          </div>
          {/* Card 6 — Dashboard */}
          <div className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#38BDF8]/25 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all">
            <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
            <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">Admin Dashboards</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">I develop backend systems and dashboards that help teams manage real business processes.</p>
          </div>
        </div>
        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href={`/${lang}/work`}
            className="px-7 py-3 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] font-semibold text-base hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/60 transition-all"
          >
            View Related Work
          </Link>
        </div>
      </section>


      {/* 3. Choose Your Path */}
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
