import type { Locale } from "@/lib/i18n";
import Link from "next/link";

// ─── WhatsApp Config ────────────────────────────────────────────────────────
const WA_PHONE = "201065942956"; // no + prefix for wa.me

function waLink(message: string) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

// ─── Helper to wrap technical terms for correct Arabic RTL visual direction ──
function formatTechTerms(text: string) {
  if (!text) return "";
  // Match the specific technical terms to wrap them in dir="ltr" spans
  const regex = /\b(WordPress|WooCommerce|Laravel|API|Backend|CRM|ERP|RTL)\b/g;
  const parts = text.split(regex);
  if (parts.length === 1) return text;
  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <span key={index} dir="ltr" className="inline-block font-sans">
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}

// ─── Service Data ────────────────────────────────────────────────────────────
const services = [
  {
    id: "wordpress-website",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    en: {
      title: "WordPress Website Development",
      problem: "You need a professional website that looks good, loads fast, and is easy to manage.",
      build: "Custom WordPress websites for businesses, service providers, and brands.",
      examples: ["Business websites", "Corporate websites", "Landing pages", "Multilingual websites", "Custom content sections"],
      cta: "Discuss a WordPress Website",
      wa: "Hi Muhammed, I'm interested in your WordPress Website Development service. I'd like to discuss building or improving a professional website.",
    },
    ar: {
      title: "تطوير مواقع WordPress",
      problem: "تحتاج إلى موقع احترافي يعرض شركتك بوضوح، يعمل بسرعة، ويسهل إدارته.",
      build: "أبني مواقع WordPress مخصصة للشركات، مقدمي الخدمات، والعلامات التجارية.",
      examples: ["مواقع شركات", "مواقع تعريفية", "صفحات هبوط", "مواقع متعددة اللغات", "أقسام محتوى مخصصة"],
      cta: "ناقش موقع WordPress",
      wa: "مرحبًا محمد، أنا مهتم بخدمة تطوير مواقع WordPress وأرغب في مناقشة بناء أو تحسين موقع احترافي.",
    },
  },
  {
    id: "woocommerce-store",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    en: {
      title: "WooCommerce Store Development",
      problem: "You need an online store that is clear, fast, and built to convert visitors into customers.",
      build: "WooCommerce stores with custom product structures, checkout flows, payment setup, and responsive storefronts.",
      examples: ["Product stores", "DTC storefronts", "Multi-category shops", "Payment gateway setup", "Checkout optimization"],
      cta: "Discuss a WooCommerce Store",
      wa: "Hi Muhammed, I'm interested in your WooCommerce Store Development service. I'd like to discuss building or improving an online store.",
    },
    ar: {
      title: "تطوير متاجر WooCommerce",
      problem: "تحتاج إلى متجر إلكتروني واضح وسريع ومصمم لتحويل الزوار إلى عملاء.",
      build: "أبني متاجر WooCommerce بهياكل منتجات مخصصة، خطوات شراء واضحة، إعدادات دفع، وواجهة متجاوبة.",
      examples: ["متاجر منتجات", "متاجر DTC", "متاجر متعددة الأقسام", "إعداد بوابات الدفع", "تحسين تجربة الدفع"],
      cta: "ناقش متجر WooCommerce",
      wa: "مرحبًا محمد، أنا مهتم بخدمة تطوير متجر WooCommerce وأرغب في مناقشة بناء أو تحسين متجر إلكتروني.",
    },
  },
  {
    id: "custom-plugin",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    en: {
      title: "Custom Plugin Development",
      problem: "Existing plugins do not always fit your workflow or business rules.",
      build: "Custom WordPress plugins that add specific features, automate workflows, or connect systems.",
      examples: ["Custom forms", "Booking logic", "Admin tools", "Workflow automation", "API integrations"],
      cta: "Discuss a Custom Plugin",
      wa: "Hi Muhammed, I'm interested in your Custom Plugin Development service. I'd like to discuss building a custom WordPress plugin for a specific workflow or feature.",
    },
    ar: {
      title: "تطوير إضافات WordPress مخصصة",
      problem: "الإضافات الجاهزة لا تناسب دائمًا طريقة عملك أو قواعد مشروعك.",
      build: "أبني إضافات WordPress مخصصة لإضافة وظائف محددة، أتمتة خطوات العمل، أو ربط الأنظمة.",
      examples: ["نماذج مخصصة", "منطق حجز", "أدوات لوحة التحكم", "أتمتة العمليات", "ربط API"],
      cta: "ناقش إضافة مخصصة",
      wa: "مرحبًا محمد، أنا مهتم بخدمة تطوير إضافة WordPress مخصصة وأرغب في مناقشة بناء إضافة لوظيفة أو سير عمل معين.",
    },
  },
  {
    id: "custom-theme",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    en: {
      title: "Custom Theme Development",
      problem: "Ready-made themes can limit design, performance, and flexibility.",
      build: "Custom WordPress themes with clean layouts, responsive interfaces, and editable content sections.",
      examples: ["Custom design implementation", "ACF-powered sections", "Responsive layouts", "RTL interfaces", "Theme performance improvements"],
      cta: "Discuss a Custom Theme",
      wa: "Hi Muhammed, I'm interested in your Custom Theme Development service. I'd like to discuss building a custom WordPress theme.",
    },
    ar: {
      title: "تطوير قوالب WordPress مخصصة",
      problem: "القوالب الجاهزة قد تقيّد التصميم، الأداء، والمرونة.",
      build: "أبني قوالب WordPress مخصصة بتصميم نظيف، واجهات متجاوبة، وأقسام محتوى سهلة التعديل.",
      examples: ["تنفيذ تصميم مخصص", "أقسام مبنية بـ ACF", "واجهات متجاوبة", "دعم RTL", "تحسين أداء القالب"],
      cta: "ناقش قالب مخصص",
      wa: "مرحبًا محمد، أنا مهتم بخدمة تطوير قالب WordPress مخصص وأرغب في مناقشة بناء قالب يناسب تصميمي واحتياجاتي.",
    },
  },
  {
    id: "woocommerce-customization",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    en: {
      title: "WooCommerce Customization",
      problem: "Your store may need custom checkout behavior, product logic, shipping rules, or admin workflows.",
      build: "WooCommerce customizations that match your products, operations, and customer journey.",
      examples: ["Checkout customization", "Product logic", "Cart rules", "Shipping logic", "Order workflow improvements"],
      cta: "Discuss WooCommerce Customization",
      wa: "Hi Muhammed, I'm interested in your WooCommerce Customization service. I'd like to discuss customizing checkout, products, or order workflows in my store.",
    },
    ar: {
      title: "تخصيص WooCommerce",
      problem: "قد يحتاج متجرك إلى تخصيص تجربة الدفع، منطق المنتجات، قواعد الشحن، أو طريقة إدارة الطلبات.",
      build: "أنفذ تخصيصات WooCommerce تناسب منتجاتك، عملياتك، ورحلة العميل داخل المتجر.",
      examples: ["تخصيص Checkout", "منطق المنتجات", "قواعد السلة", "منطق الشحن", "تحسين إدارة الطلبات"],
      cta: "ناقش تخصيص WooCommerce",
      wa: "مرحبًا محمد، أنا مهتم بخدمة تخصيص WooCommerce وأرغب في مناقشة تخصيص تجربة الدفع أو المنتجات أو إدارة الطلبات.",
    },
  },
  {
    id: "performance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    en: {
      title: "Performance Optimization",
      problem: "Slow websites lose visitors, rankings, and sales.",
      build: "Performance improvements for WordPress and WooCommerce websites focused on speed, stability, and better user experience.",
      examples: ["Speed audits", "Core Web Vitals improvements", "Asset optimization", "Plugin cleanup", "Store performance fixes"],
      cta: "Discuss Performance Optimization",
      wa: "Hi Muhammed, I'm interested in your Performance Optimization service. I'd like to discuss improving the speed and performance of my WordPress or WooCommerce website.",
    },
    ar: {
      title: "تحسين الأداء والسرعة",
      problem: "المواقع البطيئة تخسر الزوار، الترتيب في محركات البحث، والمبيعات.",
      build: "أحسن أداء مواقع WordPress وWooCommerce للتركيز على السرعة، الاستقرار، وتجربة المستخدم.",
      examples: ["مراجعة سرعة الموقع", "تحسين Core Web Vitals", "تحسين ملفات CSS/JS", "تنظيف الإضافات", "حل مشاكل بطء المتجر"],
      cta: "ناقش تحسين الأداء",
      wa: "مرحبًا محمد، أنا مهتم بخدمة تحسين الأداء والسرعة وأرغب في مناقشة تسريع موقعي الحالي على WordPress أو WooCommerce.",
    },
  },
  {
    id: "laravel",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    en: {
      title: "Laravel Dashboard / API",
      problem: "Some business workflows need more than WordPress pages or plugins.",
      build: "Laravel dashboards, APIs, and backend systems for custom workflows, reporting, and integrations.",
      examples: ["Admin dashboards", "API backends", "CRM/ERP flows", "Reporting tools", "Internal business systems"],
      cta: "Discuss a Laravel System",
      wa: "Hi Muhammed, I'm interested in your Laravel Dashboard / API service. I'd like to discuss building a custom backend system, dashboard, or API.",
    },
    ar: {
      title: "لوحات Laravel وواجهات API",
      problem: "بعض احتياجات العمل تحتاج إلى أكثر من صفحات WordPress أو إضافات جاهزة.",
      build: "أبني لوحات Laravel وواجهات API وأنظمة خلفية مخصصة لسير العمل، التقارير، والربط بين الأنظمة.",
      examples: ["لوحات تحكم", "Backend API", "ربط CRM/ERP", "أدوات تقارير", "أنظمة داخلية للشركات"],
      cta: "ناقش نظام Laravel",
      wa: "مرحبًا محمد، أنا مهتم بخدمة لوحات Laravel وواجهات API وأرغب في مناقشة بناء نظام خلفي مخصص أو لوحة تحكم.",
    },
  },
  {
    id: "maintenance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    en: {
      title: "Website Maintenance & Support",
      problem: "Your website needs regular updates, fixes, monitoring, and improvements after launch.",
      build: "Ongoing WordPress and WooCommerce support to keep your website stable, secure, and improving.",
      examples: ["Bug fixes", "Plugin/theme updates", "Content updates", "Technical support", "Small improvements"],
      cta: "Discuss Maintenance Support",
      wa: "Hi Muhammed, I'm interested in your Website Maintenance & Support service. I'd like to discuss ongoing support for my WordPress or WooCommerce website.",
    },
    ar: {
      title: "صيانة ودعم المواقع",
      problem: "موقعك يحتاج إلى تحديثات، إصلاحات، متابعة، وتحسينات مستمرة بعد الإطلاق.",
      build: "أقدم دعمًا مستمرًا لمواقع WordPress وWooCommerce للحفاظ على الاستقرار، الأمان، والتحسين المستمر.",
      examples: ["إصلاح الأخطاء", "تحديث القوالب والإضافات", "تحديث المحتوى", "دعم فني", "تحسينات صغيرة مستمرة"],
      cta: "ناقش الصيانة والدعم",
      wa: "مرحبًا محمد، أنا مهتم بخدمة صيانة ودعم المواقع وأرغب في مناقشة الدعم المستمر لموقعي على WordPress أو WooCommerce.",
    },
  },
];

// ─── WhatsApp Messages (general) ─────────────────────────────────────────────
const WA_GENERAL_EN = "Hi Muhammed, I'm interested in your WordPress, WooCommerce & Laravel development services. I'd like to discuss a project.";
const WA_GENERAL_AR = "مرحبًا محمد، أنا مهتم بخدمات تطوير WordPress وWooCommerce وLaravel. أرغب في مناقشة مشروع.";
const WA_CHOOSE_EN = "Hi Muhammed, I'm not sure which service I need. Can you help me figure out the right solution for my project?";
const WA_CHOOSE_AR = "مرحبًا محمد، لست متأكدًا من الخدمة المناسبة لي. هل يمكنك مساعدتي في تحديد الحل الأنسب لمشروعي؟";

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const workHref = `/${lang}/work/`;

  return (
    <div dir={dir} className="min-h-screen overflow-x-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#38BDF8]/5 via-transparent to-transparent -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 pt-24 pb-20 max-w-5xl text-center">
          <p className="text-[#38BDF8] text-sm font-bold uppercase tracking-widest mb-4">
            {isAr ? "الخدمات" : "Services"}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {isAr
              ? formatTechTerms("خدمات WordPress وWooCommerce وLaravel مبنية على سير العمل الحقيقي للشركات.")
              : "WordPress, WooCommerce & Laravel services built around real business workflows."}
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            {isAr
              ? formatTechTerms("من مواقع WordPress المخصصة ومتاجر WooCommerce إلى الإضافات، تحسين الأداء، ولوحات Laravel — أساعد الشركات على بناء حلول رقمية موثوقة تناسب طريقة عملها الفعلية.")
              : "From custom WordPress websites and WooCommerce stores to plugins, performance improvements, and Laravel dashboards — I help businesses build reliable digital solutions that fit how they actually work."}
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

      {/* ── 2. SERVICES GRID ────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            {isAr ? "ما الذي يمكنني بناؤه لك؟" : "What can I build for you?"}
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            {isAr
              ? "8 خدمات متخصصة — كل منها يحل مشكلة محددة ويخدم احتياجًا حقيقيًا."
              : "8 focused services — each solving a specific problem and serving a real business need."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const s = isAr ? service.ar : service.en;
            return (
              <div
                key={service.id}
                className="bg-[#111827] border border-white/5 rounded-2xl p-6 flex flex-col hover:border-[#38BDF8]/20 hover:-translate-y-1 transition-all"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#38BDF8]/10 text-[#38BDF8] rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {formatTechTerms(s.title)}
                </h3>

                {/* Problem */}
                <p className={`text-[#64748B] text-[15px] leading-relaxed mb-4 border-s-2 border-[#38BDF8]/30 ps-3 ${isAr ? "" : "italic"}`}>
                  {formatTechTerms(s.problem)}
                </p>

                {/* What I build */}
                <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-4">
                  {formatTechTerms(s.build)}
                </p>

                {/* Examples */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {s.examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                      <span className="text-[#38BDF8] mt-0.5 flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span dir="auto">{formatTechTerms(ex)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={waLink(s.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full px-4 py-3 bg-[#1E293B] hover:bg-[#38BDF8]/10 border border-white/5 hover:border-[#38BDF8]/30 text-[#38BDF8] text-sm font-bold rounded-xl transition-all text-center"
                >
                  {formatTechTerms(s.cta)} →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. HOW TO CHOOSE ────────────────────────────────────────────── */}
      <section className="border-t border-white/5">
        <div className="container mx-auto px-4 py-24 max-w-5xl">
          <div className="bg-[#111827]/80 border border-white/5 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 end-0 w-64 h-64 bg-[#38BDF8]/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="mb-10 relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                {isAr ? "لست متأكدًا من الخدمة المناسبة؟" : "Not sure which service you need?"}
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl">
                {isAr
                  ? formatTechTerms("إذا لم تكن متأكدًا هل مشروعك يحتاج إلى موقع، متجر، إضافة، تخصيص، أو نظام Laravel، ابدأ برسالة قصيرة. سأساعدك في تحديد الاتجاه الأنسب بناءً على طريقة عملك وأهدافك.")
                  : "If you are not sure whether your project needs a website, store, plugin, customization, or Laravel system, start with a short message. I'll help you identify the right direction based on your workflow and goals."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 relative z-10">
              {(isAr ? [
                { q: "تريد بيع منتجات؟", a: "تطوير متجر WooCommerce" },
                { q: "تحتاج وظيفة غير موجودة افتراضيًا في WordPress؟", a: "تطوير إضافة مخصصة" },
                { q: "لديك سير عمل خاص داخل شركتك؟", a: "لوحة Laravel أو API" },
                { q: "لديك موقع حالي بطيء؟", a: "تحسين الأداء" },
              ] : [
                { q: "Need to sell products?", a: "WooCommerce Store Development" },
                { q: "Need a feature WordPress cannot do by default?", a: "Custom Plugin Development" },
                { q: "Need a custom business workflow?", a: "Laravel Dashboard / API" },
                { q: "Need a faster existing website?", a: "Performance Optimization" },
              ]).map((item, i) => (
                <div key={i} className="bg-[#0B1020] border border-white/5 rounded-xl p-5">
                  <p className="text-[#94A3B8] text-sm mb-2">{formatTechTerms(item.q)}</p>
                  <p className="text-[#38BDF8] text-sm font-bold">→ {formatTechTerms(item.a)}</p>
                </div>
              ))}
            </div>

            <a
              href={waLink(isAr ? WA_CHOOSE_AR : WA_CHOOSE_EN)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-block px-8 py-4 bg-[#38BDF8] hover:bg-[#0284C7] hover:scale-105 text-[#020617] font-bold rounded-xl transition-all"
            >
              {isAr ? "ساعدني في اختيار الخدمة" : "Help Me Choose"}
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. WORK PROCESS ─────────────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-[#080B15]/40 py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              {isAr ? "كيف تتم عملية تنفيذ الخدمة؟" : "How the service process works"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(isAr ? [
              { num: "01", label: "فهم المتطلبات" },
              { num: "02", label: "تحديد الحل المناسب" },
              { num: "03", label: "التنفيذ والاختبار" },
              { num: "04", label: "الإطلاق والدعم" },
            ] : [
              { num: "01", label: "Understand the requirement" },
              { num: "02", label: "Define the right solution" },
              { num: "03", label: "Build and test" },
              { num: "04", label: "Launch and support" },
            ]).map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-[#0B1020] border-2 border-white/10 rounded-full flex items-center justify-center text-[#38BDF8] font-bold text-xl mb-4 group-hover:border-[#38BDF8]/50 group-hover:bg-[#38BDF8]/10 transition-all">
                  {step.num}
                </div>
                <p className="text-white font-bold text-base leading-relaxed">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-white/5">
        <div className="container mx-auto px-4 py-24 max-w-4xl">
          <div className="text-center bg-[#111827]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 end-0 w-64 h-64 bg-[#38BDF8]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 start-0 w-48 h-48 bg-[#38BDF8]/5 blur-[60px] rounded-full pointer-events-none" />

            <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              {isAr
                ? formatTechTerms("لديك مشروع WordPress أو WooCommerce أو Laravel؟")
                : "Have a WordPress, WooCommerce, or Laravel project in mind?"}
            </h2>
            <p className="relative z-10 text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              {isAr
                ? formatTechTerms("أرسل رسالة قصيرة عن ما تحتاج إلى بنائه، تخصيصه، تحسينه، أو ربطه — ودعنا نناقش الحل المناسب.")
                : "Send a short message about what you need built, customized, improved, or connected — and let's discuss the right solution."}
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
                href={workHref}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all text-center"
              >
                {isAr ? "عرض دراسات الحالة" : "View Case Studies"}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
