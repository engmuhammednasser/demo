import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { plugins } from "@/data/plugins";
import { notFound } from "next/navigation";


export default async function PluginDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang = "en";
  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const plugin = plugins.find(p => p.slug === slug);

  if (!plugin) {
    notFound();
  }

  const title = locale === "ar" ? plugin.nameAr : plugin.name;
  const category = locale === "ar" ? plugin.categoryAr : plugin.category;
  const summary = locale === "ar" ? plugin.descriptionAr : plugin.description;
  const problem = locale === "ar" ? plugin.problemAr : plugin.problem;
  const solution = locale === "ar" ? plugin.solutionAr : plugin.solution;
  const features = locale === "ar" ? plugin.featuresAr : plugin.features;
  const built = locale === "ar" ? plugin.builtAr : plugin.built;
  const learningNote = locale === "ar" ? plugin.learningNoteAr : plugin.learningNote;
  const securityNote = locale === "ar" ? plugin.securityNoteAr : plugin.securityNote;

  // All screenshots available (cover first, then previews)
  const allScreenshots = plugin.screenshots.filter(Boolean);

  return (
    <div className="container mx-auto px-4 py-20 space-y-20">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="text-sm font-bold text-[#38BDF8] uppercase tracking-widest">{category}</div>
          {plugin.version && (
            <span className="bg-white/10 px-2 py-0.5 rounded text-white/70 text-sm font-bold">{plugin.version}</span>
          )}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap">{summary}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {plugin.githubUrl && (
            <a
              href={plugin.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#22C55E] text-white font-bold text-lg rounded-lg hover:bg-[#22C55E]/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {locale === "ar" ? "رابط GitHub" : "GitHub Repository"}
            </a>
          )}
          {plugin.demoUrl && (
            <a
              href={plugin.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all"
            >
              {locale === "ar" ? "معاينة حية" : "Live Demo"}
            </a>
          )}
        </div>
      </header>

      {/* Main Cover Image */}
      {allScreenshots.length > 0 && (
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={allScreenshots[0]}
            alt={`${title} screenshot`}
            className="w-full h-auto object-cover object-top block"
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

          <section>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">{locale === "ar" ? "ما تم بناؤه" : "What I actually built"}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#94A3B8] text-lg">
              {built.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {learningNote && (
            <section className="bg-[#1E293B] p-8 rounded-xl border border-white/5">
              <h2 className="text-2xl font-bold mb-4 tracking-tight flex items-center gap-3 text-[#38BDF8]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {locale === "ar" ? "ملاحظة / تجربة" : "Learning / Note"}
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">{learningNote}</p>
            </section>
          )}

          {securityNote && (
            <section className="bg-red-900/20 p-8 rounded-xl border border-red-500/20">
              <h2 className="text-2xl font-bold mb-4 tracking-tight flex items-center gap-3 text-red-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                {locale === "ar" ? "ملاحظات أمنية" : "Security Notes"}
              </h2>
              <p className="text-[#FCA5A5] text-lg leading-relaxed">{securityNote}</p>
            </section>
          )}
        </div>

        <aside className="space-y-10 bg-[#111827] p-8 rounded-2xl border border-white/5 h-fit shadow-lg sticky top-24">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-4">{t.work.project.stack}</h3>
            <div className="flex flex-wrap gap-2">
              {plugin.stack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-[#1E293B] text-sm font-semibold rounded-md border border-white/5 text-[#94A3B8]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-6 border-t border-white/5">
            <a
              href={`https://wa.me/201025811613?text=${encodeURIComponent(locale === "ar" ? "أهلاً محمد، شاهدت إضافة " + title + " وأحتاج لمشروع مشابه." : "Hello Muhammed, I saw the " + title + " plugin and I need a similar project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-[#38BDF8] text-[#0B1020] font-bold text-lg rounded-lg hover:bg-[#38BDF8]/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              {t.work.project.cta}
            </a>
          </div>
        </aside>
      </div>

      {/* Full Screenshot Gallery */}
      {allScreenshots.length > 1 && (
        <section className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">{t.work.project.gallery}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {allScreenshots.slice(1).map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#111827] hover:border-[#38BDF8]/30 transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={locale === "ar"
                    ? `لقطة من إضافة ${title}`
                    : `${title} screenshot`}
                  className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-500 block"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}


export async function generateStaticParams() { const { plugins } = await import("@/data/plugins"); return plugins.map(p => ({ slug: p.slug })); }