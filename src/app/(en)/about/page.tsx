import type { Locale } from "@/lib/i18n";
import Link from "@/components/ui/AppLink";

// ─── WhatsApp Config ────────────────────────────────────────────────────────
const WA_PHONE = "201025811613";

function waLink(message: string) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

// ─── Helper to wrap technical terms for correct Arabic RTL visual direction ──
function formatTechTerms(text: string) {
  if (!text) return "";
  const regex = /\b(WordPress|WooCommerce|Laravel|API|Backend|CRM|ERP|RTL)\b/g;
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

// ─── About Page Component ───────────────────────────────────────────────────
export default async function AboutPage() {
  const lang = "en" as string;
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  // Reusable WhatsApp Messages
  const WA_GENERAL_EN = "Hi Muhammed, I saw your About page and I'd like to discuss a custom WordPress, WooCommerce or Laravel project.";
  const WA_GENERAL_AR = "مرحبًا محمد، شاهدت صفحة التعريف الشخصية وأرغب في مناقشة مشروع وردبريس أو ووكومرس أو لارافيل مخصص.";

  const workHref = `/${lang}/work/`;
  const servicesHref = `/${lang}/services/`;

  return (
    <div dir={dir} className="min-h-screen overflow-x-hidden">

      {/* ── 1. HERO SECTION ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 via-transparent to-transparent -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="text-[#38BDF8] text-sm font-bold uppercase tracking-widest mb-4 inline-block">
            {isAr ? "نبذة عني" : "About Muhammed"}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8">
            {isAr
              ? formatTechTerms("مطور وردبريس وووكومرس ولارافيل يركز على بناء حلول ويب جاهزة لاحتياجات العمل.")
              : "WordPress, WooCommerce & Laravel Developer focused on business-ready web solutions."}
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            {isAr
              ? formatTechTerms("أنا محمد ناصر، مطور بخبرة أكثر من 8 سنوات في بناء مواقع وردبريس مخصصة، متاجر ووكومرس، إضافات، قوالب، وأنظمة لارافيل مبنية على احتياجات عمل حقيقية.")
              : "I’m Muhammed Nasser, a developer with 8+ years of experience building custom WordPress websites, WooCommerce stores, plugins, themes, and Laravel-powered systems for real business needs."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={waLink(isAr ? WA_GENERAL_AR : WA_GENERAL_EN)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#38BDF8] hover:bg-[#0284C7] hover:scale-105 text-[#020617] font-bold rounded-xl transition-all text-center"
            >
              {isAr ? "ابدأ مشروعك" : "Start a Project"}
            </a>
            <Link
              href={workHref}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all text-center"
            >
              {isAr ? "عرض دراسات الحالة" : "View Case Studies"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. PERSONAL INTRO SECTION ────────────────────────────────────── */}
      <section className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#111827]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/profile.png"
                alt={isAr ? "محمد ناصر" : "Muhammed Nasser"}
                className="object-cover w-full h-full object-[50%_8%] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {isAr ? formatTechTerms("أكثر من مجرد تنفيذ وردبريس") : "More than a WordPress implementer"}
            </h2>
            <div className="text-[#94A3B8] text-[16px] leading-relaxed space-y-4">
              <p>
                {isAr
                  ? formatTechTerms("لا أعمل فقط على تركيب قوالب أو إعداد إضافات جاهزة. أساعد الشركات على تحويل سير العمل، الخدمات، المنتجات، والاحتياجات التشغيلية إلى منصات رقمية موثوقة.")
                  : "I don’t just install themes or configure plugins. I help businesses turn their workflows, services, products, and operational needs into reliable digital platforms."}
              </p>
              <p>
                {isAr
                  ? formatTechTerms("أجمع بين مرونة وردبريس، منطق التجارة في ووكومرس، والتفكير الخلفي باستخدام لارافيل لبناء مواقع وأنظمة عملية، قابلة للتوسع، وسهلة الإدارة.")
                  : "My work combines WordPress flexibility, WooCommerce commerce logic, and Laravel backend thinking to build websites and systems that are practical, scalable, and easy to manage."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT I ACTUALLY DO ────────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-[#080B15]/40 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {isAr ? "ما الذي أساعدك في تنفيذه فعليًا؟" : "What I actually help with"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {([
              {
                titleEn: "Custom WordPress websites",
                titleAr: "مواقع وردبريس مخصصة",
                descEn: "I build websites that are clear, fast, editable, and structured around your content and business goals.",
                descAr: "أبني مواقع واضحة، سريعة، سهلة التعديل، ومبنية حول محتواك وأهداف عملك.",
              },
              {
                titleEn: "WooCommerce stores",
                titleAr: "متاجر ووكومرس",
                descEn: "I create online stores with product logic, checkout flows, payment setup, and a better buying experience.",
                descAr: "أنفذ متاجر إلكترونية بمنطق منتجات واضح، تجربة دفع مناسبة، إعدادات دفع، وتجربة شراء أفضل.",
              },
              {
                titleEn: "Custom plugins and features",
                titleAr: "إضافات ووظائف مخصصة",
                descEn: "I build custom WordPress functionality when existing plugins are too limited or too heavy.",
                descAr: "أبني وظائف مخصصة داخل وردبريس عندما تكون الإضافات الجاهزة محدودة أو ثقيلة.",
              },
              {
                titleEn: "Laravel dashboards and APIs",
                titleAr: "لوحات لارافيل وواجهات API",
                descEn: "I build backend systems, dashboards, and APIs for workflows that need more than a standard website.",
                descAr: "أبني أنظمة خلفية، لوحات تحكم، وواجهات API لسير العمل الذي يحتاج إلى أكثر من موقع تقليدي.",
              },
            ]).map((item, i) => (
              <div key={i} className="bg-[#111827] border border-white/5 p-8 rounded-2xl space-y-4 hover:border-[#38BDF8]/20 transition-all">
                <h3 className="text-xl font-bold text-white">
                  {isAr ? formatTechTerms(item.titleAr) : item.titleEn}
                </h3>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed">
                  {isAr ? formatTechTerms(item.descAr) : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CLIENTS WORK WITH ME ──────────────────────────────────── */}
      <section className="border-t border-white/5 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {isAr ? "لماذا يختار العملاء العمل معي؟" : "Why clients work with me"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              {
                titleEn: "Business-first thinking",
                titleAr: "تفكير يبدأ من احتياج العمل",
                descEn: "I start from the workflow and business goal, not from the theme or plugin.",
                descAr: "أبدأ من سير العمل والهدف التجاري، وليس من القالب أو الإضافة.",
              },
              {
                titleEn: "Custom development capability",
                titleAr: "قدرة على التطوير المخصص",
                descEn: "I can extend WordPress and WooCommerce beyond ready-made limitations.",
                descAr: "أستطيع توسيع وردبريس وووكومرس بما يتجاوز حدود الحلول الجاهزة.",
              },
              {
                titleEn: "Arabic, English & RTL experience",
                titleAr: "خبرة عربية وإنجليزية وRTL",
                descEn: "I understand bilingual websites, Arabic interfaces, and RTL layout requirements.",
                descAr: "أتعامل مع المواقع متعددة اللغات، الواجهات العربية، ومتطلبات RTL بشكل عملي.",
              },
              {
                titleEn: "Practical delivery",
                titleAr: "تنفيذ عملي ومستقر",
                descEn: "I focus on clean implementation, stable features, testing, and maintainable solutions.",
                descAr: "أركز على تنفيذ نظيف، خصائص مستقرة، اختبار جيد، وحلول قابلة للصيانة.",
              },
            ]).map((item, i) => (
              <div key={i} className="bg-[#111827]/40 border border-white/5 p-6 rounded-2xl space-y-3">
                <div className="text-[#38BDF8] font-bold text-lg">0{i + 1}</div>
                <h3 className="text-lg font-bold text-white">
                  {isAr ? formatTechTerms(item.titleAr) : item.titleEn}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {isAr ? formatTechTerms(item.descAr) : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. EXPERIENCE & FOCUS AREAS ──────────────────────────────────── */}
      <section className="border-t border-white/5 bg-[#080B15]/40 py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                {isAr ? formatTechTerms("خبرة مركزة على بناء أنظمة ويب عملية") : "Experience focused on practical web systems"}
              </h2>
              <div className="w-16 h-1 bg-[#38BDF8] rounded-full" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {([
                { en: "8+ years WordPress experience", ar: "أكثر من 8 سنوات خبرة في وردبريس" },
                { en: "WooCommerce store development", ar: "تطوير متاجر ووكومرس" },
                { en: "Custom plugins and themes", ar: "إضافات وقوالب مخصصة" },
                { en: "Laravel dashboards and APIs", ar: "لوحات لارافيل وواجهات API" },
                { en: "Arabic / English / RTL websites", ar: "مواقع عربية / إنجليزية / RTL" },
                { en: "Business workflow integrations", ar: "ربط سير العمل والأنظمة" },
              ]).map((stat, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#111827] p-4 rounded-xl border border-white/5">
                  <svg className="w-5 h-5 text-[#38BDF8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-medium">
                    {isAr ? formatTechTerms(stat.ar) : stat.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. MY APPROACH ───────────────────────────────────────────────── */}
      <section className="border-t border-white/5 py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {isAr ? "كيف أفكر في المشاريع؟" : "How I think about projects"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {([
              { num: "01", en: "Understand the business need", ar: "فهم احتياج العمل" },
              { num: "02", en: "Map the user and admin workflow", ar: "رسم رحلة المستخدم ولوحة الإدارة" },
              { num: "03", en: "Choose the right technical direction", ar: "اختيار الاتجاه التقني المناسب" },
              { num: "04", en: "Build clean and scalable functionality", ar: "بناء وظائف نظيفة وقابلة للتوسع" },
              { num: "05", en: "Test, launch, and improve", ar: "الاختبار، الإطلاق، والتحسين" },
            ]).map((step) => (
              <div key={step.num} className="bg-[#111827] border border-white/5 rounded-2xl p-6 text-center space-y-4 hover:border-[#38BDF8]/20 transition-all">
                <div className="w-10 h-10 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full flex items-center justify-center font-bold mx-auto">
                  {step.num}
                </div>
                <p className="text-white text-sm font-semibold leading-relaxed">
                  {isAr ? formatTechTerms(step.ar) : step.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TECH & BUSINESS MINDSET ───────────────────────────────────── */}
      <section className="border-t border-white/5 py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight">
            {isAr
              ? formatTechTerms("التقنية قيمتها الحقيقية في حل مشكلة فعلية")
              : "Technology is only useful when it solves a real problem"}
          </h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? formatTechTerms("وردبريس وووكومرس ولارافيل مجرد أدوات. القيمة الحقيقية تظهر عندما تُستخدم لتبسيط العمليات، تحسين تجربة المستخدم، دعم المبيعات، أتمتة سير العمل، وتسهيل الإدارة.")
              : "WordPress, WooCommerce, and Laravel are tools. The real value comes from using them to simplify operations, improve user experience, support sales, automate workflows, and make management easier."}
          </p>
        </div>
      </section>

      {/* ── 8. FINAL CTA SECTION ─────────────────────────────────────────── */}
      <section className="border-t border-white/5 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center bg-[#111827]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 end-0 w-64 h-64 bg-[#38BDF8]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 start-0 w-48 h-48 bg-[#38BDF8]/5 blur-[60px] rounded-full pointer-events-none" />

            <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {isAr
                ? formatTechTerms("تحتاج إلى مطور يفهم الكود وسير العمل التجاري؟")
                : "Need a developer who understands both code and business workflows?"}
            </h2>
            <p className="relative z-10 text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              {isAr
                ? formatTechTerms("أرسل رسالة قصيرة عن مشروعك، ودعنا نناقش الحل المناسب باستخدام وردبريس أو ووكومرس أو لارافيل.")
                : "Send a short message about your project, and let’s discuss the right WordPress, WooCommerce, or Laravel solution."}
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waLink(isAr ? WA_GENERAL_AR : WA_GENERAL_EN)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#38BDF8] hover:bg-[#0284C7] hover:scale-105 text-[#020617] font-bold rounded-xl transition-all text-center"
              >
                {isAr ? "ابدأ مشروعك" : "Start a Project"}
              </a>
              <Link
                href={servicesHref}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all text-center"
              >
                {isAr ? "عرض الخدمات" : "View Services"}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
