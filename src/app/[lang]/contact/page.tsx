import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n";

// ─── WhatsApp Config ────────────────────────────────────────────────────────
const WA_PHONE = "201025811613";

function waLink(message: string) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

// ─── Helper to wrap technical terms for correct Arabic RTL visual direction ──
function formatTechTerms(text: string) {
  if (!text) return "";
  const regex = /\b(WordPress|WooCommerce|Laravel|API|GitHub|LinkedIn|RTL)\b/g;
  const parts = text.split(regex);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <bdi key={index} className="mx-0.5">
              {part}
            </bdi>
          );
        }
        return part;
      })}
    </>
  );
}

// ─── Contact Page Component ──────────────────────────────────────────────────
export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  // Prefilled WhatsApp messages
  const GENERAL_WA_EN = "Hi Muhammed, I'd like to start a project with you.";
  const GENERAL_WA_AR = "مرحبًا محمد، أرغب في بدء مشروع معك.";

  // Choices config
  const choices = [
    {
      titleEn: "WooCommerce Store",
      titleAr: "متجر ووكومرس",
      descEn: "Discuss building or improving an online store.",
      descAr: "ناقش بناء أو تحسين متجر إلكتروني لمشروعك.",
      ctaEn: "Discuss a WooCommerce Store",
      ctaAr: "ناقش متجر ووكومرس",
      waEn: "Hi Muhammed, I’d like to discuss building or improving a WooCommerce store for my business.",
      waAr: "مرحبًا محمد، أرغب في مناقشة بناء أو تحسين متجر ووكومرس لمشروعي.",
    },
    {
      titleEn: "WordPress Website",
      titleAr: "موقع وردبريس",
      descEn: "Discuss building a custom corporate or content site.",
      descAr: "ناقش بناء موقع وردبريس مخصص لعملك.",
      ctaEn: "Discuss a WordPress Website",
      ctaAr: "ناقش موقع وردبريس",
      waEn: "Hi Muhammed, I’d like to discuss building a custom WordPress website for my business.",
      waAr: "مرحبًا محمد، أرغب في مناقشة بناء موقع وردبريس مخصص لعملي.",
    },
    {
      titleEn: "Custom Plugin or Feature",
      titleAr: "إضافة أو وظيفة مخصصة",
      descEn: "Discuss building custom functionality or plugins.",
      descAr: "ناقش بناء إضافة مخصصة أو وظيفة خاصة لموقعك.",
      ctaEn: "Discuss a Custom Plugin",
      ctaAr: "ناقش إضافة مخصصة",
      waEn: "Hi Muhammed, I need a custom WordPress plugin or feature and would like to discuss the requirements.",
      waAr: "مرحبًا محمد، أحتاج إلى إضافة وردبريس مخصصة أو وظيفة خاصة وأرغب في مناقشة المتطلبات.",
    },
    {
      titleEn: "Laravel Dashboard / API",
      titleAr: "لوحة لارافيل أو API",
      descEn: "Discuss a backend system or custom business workflow.",
      descAr: "ناقش بناء لوحة أو نظام خلفي لسير العمل في مشروعك.",
      ctaEn: "Discuss a Laravel System",
      ctaAr: "ناقش نظام لارافيل",
      waEn: "Hi Muhammed, I’d like to discuss a Laravel dashboard, API, or backend system for my business workflow.",
      waAr: "مرحبًا محمد، أرغب في مناقشة لوحة لارافيل أو API أو نظام خلفي مناسب لسير العمل في مشروعي.",
    },
    {
      titleEn: "Performance Optimization",
      titleAr: "تحسين الأداء",
      descEn: "Discuss improving speed, stability, and Core Web Vitals.",
      descAr: "ناقش تحسين سرعة وأداء موقعك الحالي.",
      ctaEn: "Discuss Performance",
      ctaAr: "ناقش تحسين الأداء",
      waEn: "Hi Muhammed, I need help improving the speed and performance of my WordPress or WooCommerce website.",
      waAr: "مرحبًا محمد، أحتاج إلى تحسين سرعة وأداء موقع وردبريس أو متجر ووكومرس.",
    },
    {
      titleEn: "Not Sure Yet",
      titleAr: "لست متأكدًا بعد",
      descEn: "Explain your project idea and get a recommendation.",
      descAr: "اشرح فكرة مشروعك واحصل على الاتجاه التقني الأنسب.",
      ctaEn: "Help Me Choose",
      ctaAr: "ساعدني في الاختيار",
      waEn: "Hi Muhammed, I’m not sure which solution I need yet. I’d like to explain my project and get your recommendation.",
      waAr: "مرحبًا محمد، لست متأكدًا من الحل المناسب بعد. أرغب في شرح فكرة المشروع والحصول على توصيتك.",
    },
  ];

  return (
    <div dir={dir} className="min-h-screen overflow-x-hidden">

      {/* ── 1. CONTACT HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 via-transparent to-transparent -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-[#38BDF8] text-sm font-bold uppercase tracking-widest mb-4 inline-block">
            {isAr ? "تواصل معي" : "Contact"}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white">
            {isAr
              ? formatTechTerms("ابدأ مشروع وردبريس أو ووكومرس أو لارافيل.")
              : "Start a WordPress, WooCommerce, or Laravel project."}
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {isAr
              ? formatTechTerms("أخبرني بما تحتاج إلى بنائه، تحسينه، تخصيصه، أو ربطه — وسأساعدك في اختيار الاتجاه التقني المناسب.")
              : "Tell me what you need built, improved, customized, or connected — and I’ll help you choose the right technical direction."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={waLink(isAr ? GENERAL_WA_AR : GENERAL_WA_EN)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#38BDF8] hover:bg-[#0284C7] hover:scale-105 text-[#020617] font-bold rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {isAr ? "راسلني على واتساب" : "Message Me on WhatsApp"}
            </a>
            <a
              href={`mailto:${t.contact.emailAddress}`}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {isAr ? "أرسل بريدًا إلكترونيًا" : "Send an Email"}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. CHOOSE WHAT YOU NEED ──────────────────────────────────────── */}
      <section className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">
            {isAr ? "ما الذي تحتاج إلى المساعدة فيه؟" : "What do you need help with?"}
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            {isAr
              ? "اختر الأقرب لاحتياجك وابدأ محادثة واتساب برسالة جاهزة."
              : "Choose the closest option and start a WhatsApp conversation with a ready message."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {choices.map((choice, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-white/5 p-8 rounded-2xl flex flex-col hover:border-[#38BDF8]/20 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {isAr ? formatTechTerms(choice.titleAr) : choice.titleEn}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-1">
                {isAr ? formatTechTerms(choice.descAr) : choice.descEn}
              </p>
              <a
                href={waLink(isAr ? choice.waAr : choice.waEn)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full px-4 py-3 bg-[#1E293B] hover:bg-[#38BDF8]/10 border border-white/5 hover:border-[#38BDF8]/30 text-[#38BDF8] text-sm font-bold rounded-xl transition-all text-center flex items-center justify-center gap-2"
              >
                {isAr ? formatTechTerms(choice.ctaAr) : choice.ctaEn} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. DIRECT CONTACT OPTIONS ────────────────────────────────────── */}
      <section className="border-t border-white/5 py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white">
              {isAr ? "طرق التواصل المباشر" : "Direct contact"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <div className="bg-[#111827] border border-white/5 p-8 rounded-2xl space-y-4 hover:border-[#38BDF8]/20 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#22C55E]/10 text-[#22C55E] rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isAr ? "واتساب" : "WhatsApp"}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {isAr
                    ? "أسرع طريقة لمناقشة مشروع أو السؤال عن التوفر."
                    : "The fastest way to discuss a project or ask about availability."}
                </p>
              </div>
              <a
                href={waLink(isAr ? GENERAL_WA_AR : GENERAL_WA_EN)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl transition-all text-center block"
              >
                {isAr ? "افتح واتساب" : "Open WhatsApp"}
              </a>
            </div>

            {/* Email */}
            <div className="bg-[#111827] border border-white/5 p-8 rounded-2xl space-y-4 hover:border-[#38BDF8]/20 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#38BDF8]/10 text-[#38BDF8] rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isAr ? "البريد الإلكتروني" : "Email"}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {isAr
                    ? "مناسب لإرسال تفاصيل المشروع، الملفات، نطاق العمل، أو التواصل الرسمي."
                    : "Best for detailed briefs, files, project scopes, or formal communication."}
                </p>
              </div>
              <a
                href={`mailto:${t.contact.emailAddress}`}
                className="w-full py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all text-center block"
              >
                {isAr ? "أرسل بريدًا إلكترونيًا" : "Send Email"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT TO INCLUDE IN YOUR MESSAGE ─────────────────────────────── */}
      <section className="border-t border-white/5 bg-[#080B15]/40 py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 text-center">
            {isAr ? "ما الذي يفضل إرساله؟" : "What should you send?"}
          </h2>
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 md:p-10">
            <ul className="space-y-4">
              {([
                { en: "What you need built or improved", ar: "ما الذي تحتاج إلى بنائه أو تحسينه" },
                { en: "Your current website link, if available", ar: "رابط موقعك الحالي إن وجد" },
                { en: "The main problem you want to solve", ar: "المشكلة الأساسية التي تريد حلها" },
                { en: "Any examples or references you like", ar: "أمثلة أو مراجع قريبة مما تريده" },
                { en: "Your expected timeline", ar: "التوقيت المتوقع للتنفيذ" },
              ]).map((bullet, i) => (
                <li key={i} className="flex items-start gap-4 text-lg text-[#94A3B8]">
                  <span className="text-[#38BDF8] mt-1.5 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{bullet[isAr ? "ar" : "en"]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. SOCIAL / PROFESSIONAL LINKS ───────────────────────────────── */}
      <section className="border-t border-white/5 py-16">
        <div className="container mx-auto px-4 max-w-md text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-6">
            {isAr ? "روابط مهنية" : "Professional links"}
          </h2>
          <div className="flex justify-center items-center gap-8">
            <a
              href="https://www.linkedin.com/in/engmuhhammednasser/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#38BDF8] transition-colors font-bold text-base"
            >
              <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              {isAr ? formatTechTerms("LinkedIn") : "LinkedIn"}
            </a>
            <a
              href="https://github.com/engmuhammednasser"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors font-bold text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {isAr ? formatTechTerms("GitHub") : "GitHub"}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
