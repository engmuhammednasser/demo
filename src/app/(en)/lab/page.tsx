import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";
import { plugins } from "@/data/plugins";
import Link from "@/components/ui/AppLink";

export default async function LabPage() {
  const lang = "en" as string;
  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <div className="container mx-auto px-4 py-20 space-y-12">
      <header className="max-w-2xl text-center mx-auto">
        <h1 className="text-4xl font-bold mb-4">{t.lab.title}</h1>
        <p className="text-xl text-[#94A3B8]">{t.lab.description}</p>
      </header>

      {plugins.length === 0 ? (
        <section className="max-w-4xl mx-auto bg-[#111827] rounded-xl border border-white/5 p-12 text-center">
          <div className="text-[#38BDF8] mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">{t.lab.empty}</h2>
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plugins.map((plugin) => (
            <Link
              key={plugin.slug}
              href={`/${locale}/lab/plugins/${plugin.slug}`}
              className="group flex flex-col bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-[#38BDF8]/30 transition-all hover:shadow-[0_10px_30px_rgba(56,189,248,0.05)] hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full bg-[#0B1020] overflow-hidden">
                {plugin.screenshots && plugin.screenshots.length > 0 ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={plugin.screenshots[0]}
                      alt={locale === "ar" ? plugin.nameAr : plugin.name}
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-[#38BDF8] mb-3 uppercase tracking-widest flex items-center gap-2">
                  <span>{locale === "ar" ? plugin.categoryAr : plugin.category}</span>
                  {plugin.version && <span className="bg-white/10 px-2 py-0.5 rounded text-white/70">{plugin.version}</span>}
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-snug group-hover:text-[#38BDF8] transition-colors">
                  {locale === "ar" ? plugin.nameAr : plugin.name}
                </h3>
                <p className="text-[#94A3B8] line-clamp-2 leading-relaxed flex-1">
                  {locale === "ar" ? plugin.descriptionAr : plugin.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                  {locale === "ar" ? "عرض التفاصيل" : "View Details"}
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform rtl:mr-2 rtl:ml-0 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
