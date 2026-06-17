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
            {lang === "ar" ? "المشاكل التي أساعدك في حلها" : "Problems I Solve"}
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {lang === "ar"
              ? "أساعد الشركات على تحسين وتخصيص وتوسيع منصات WordPress وWooCommerce بحلول عملية مبنية حول احتياجات العمل الفعلية."
              : "I help businesses improve, customize, and scale WordPress and WooCommerce platforms with practical solutions built around real workflows."}
          </p>
        </div>
        {(() => {
          const problemCards = lang === "ar" ? [
            {
              title: "بطء متاجر WooCommerce",
              desc: "أحسّن أداء المتاجر البطيئة التي تؤثر على تجربة المستخدم ومعدلات التحويل والمبيعات.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "مشاكل الدفع وإتمام الطلب",
              desc: "أخصص مسارات الدفع وإتمام الطلب، وأدمج وسائل الدفع المناسبة لطبيعة العمل.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
                </svg>
              )
            },
            {
              title: "قيود الإضافات الجاهزة",
              desc: "أطوّر إضافات WordPress مخصصة عندما لا تناسب الحلول الجاهزة سير العمل المطلوب.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1h3a1 1 0 011 1v3h1a2 2 0 010 4h-1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3H3a2 2 0 010-4h1V6a1 1 0 011-1h3V4z" />
                </svg>
              )
            },
            {
              title: "منطق عمل مخصص",
              desc: "أبني حلول WordPress وLaravel مخصصة للحجوزات، CRM، ERP، لوحات التحكم، والعمليات الداخلية.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )
            },
            {
              title: "واجهات عربية وRTL",
              desc: "أطوّر واجهات عربية وإنجليزية وثنائية اللغة بتجربة استخدام نظيفة ودعم صحيح لاتجاه RTL.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
              )
            },
            {
              title: "لوحات تحكم إدارية",
              desc: "أطوّر أنظمة خلفية ولوحات تحكم تساعد الفرق على إدارة العمليات اليومية بكفاءة.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              )
            }
          ] : [
            {
              title: "Slow WooCommerce Stores",
              desc: "I optimize slow stores that affect user experience, conversions, and sales.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "Checkout & Payment Issues",
              desc: "I customize checkout flows and integrate payment methods that match business needs.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
                </svg>
              )
            },
            {
              title: "Plugin Limitations",
              desc: "I build custom plugins when ready-made solutions don't fit your workflow.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1h3a1 1 0 011 1v3h1a2 2 0 010 4h-1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3H3a2 2 0 010-4h1V6a1 1 0 011-1h3V4z" />
                </svg>
              )
            },
            {
              title: "Custom Business Logic",
              desc: "I create custom WordPress and Laravel solutions for booking, CRM, ERP, dashboards, and internal operations.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )
            },
            {
              title: "Arabic & RTL Experiences",
              desc: "I build clean Arabic, English, and bilingual interfaces with proper RTL support.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
              )
            },
            {
              title: "Admin Dashboards",
              desc: "I develop backend systems and dashboards that help teams manage real business processes.",
              icon: (
                <svg className="w-6 h-6 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              )
            }
          ];
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {problemCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-[#0D1526] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#38BDF8]/25 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all"
                >
                  {card.icon}
                  <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">{card.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          );
        })()}
        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href={`/${lang}/work`}
            className="px-7 py-3 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] font-semibold text-base hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/60 transition-all"
          >
            {lang === "ar" ? "عرض الأعمال ذات الصلة" : "View Related Work"}
          </Link>
        </div>
      </section>


      {/* 3. What Do You Need Built? */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            {lang === "ar" ? "ما الذي تريد بناءه؟" : "What Do You Need Built?"}
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {lang === "ar"
              ? "اختر نوع المشروع الذي تحتاجه، وابدأ محادثة واتساب برسالة جاهزة."
              : "Choose the type of project you need, and start a WhatsApp conversation with a ready message."}
          </p>
        </div>
        {(() => {
          const WA = t.contact.number.replace(/\D/g, "");
          const cards = lang === "ar" ? [
            {
              type: "whatsapp" as const,
              title: "أحتاج إلى متجر WooCommerce",
              desc: "بناء أو تحسين متجر WooCommerce سريع ومهيأ للبيع، مع تخصيص المنتجات وسلة الشراء والدفع.",
              cta: "ابدأ عبر واتساب",
              message: "مرحبًا محمد، أحتاج إلى متجر WooCommerce. أود مناقشة تفاصيل المشروع، المميزات المطلوبة، المدة المتوقعة، والتكلفة التقديرية.",
            },
            {
              type: "whatsapp" as const,
              title: "أحتاج إلى إضافة WordPress مخصصة",
              desc: "تطوير وظائف مخصصة داخل WordPress عندما لا تناسب الإضافات الجاهزة طريقة عملك.",
              cta: "ابدأ عبر واتساب",
              message: "مرحبًا محمد، أحتاج إلى إضافة WordPress مخصصة. أود شرح سير العمل المطلوب ومعرفة أفضل طريقة لتنفيذها.",
            },
            {
              type: "whatsapp" as const,
              title: "أحتاج إلى قالب WordPress مخصص",
              desc: "تطوير قالب WordPress نظيف ومتجاوب وقابل للتوسع بما يناسب هوية علامتك ومحتواك واحتياجات عملك.",
              cta: "ابدأ عبر واتساب",
              message: "مرحبًا محمد، أحتاج إلى قالب WordPress مخصص. أود مناقشة التصميم، الصفحات، التجاوب، وطريقة التنفيذ.",
            },
            {
              type: "whatsapp" as const,
              title: "أحتاج إلى لوحة تحكم أو API بـ Laravel",
              desc: "بناء لوحات تحكم داخلية، أنظمة إدارة، APIs، وحلول خلفية لإدارة العمليات الفعلية.",
              cta: "ابدأ عبر واتساب",
              message: "مرحبًا محمد، أحتاج إلى لوحة تحكم أو API باستخدام Laravel. أود مناقشة سير العمل، الأقسام المطلوبة، ومتطلبات النظام الخلفي.",
            },
            {
              type: "whatsapp" as const,
              title: "أحتاج إلى تحسين الأداء",
              desc: "تحسين سرعة واستقرار وتجربة استخدام مواقع WordPress وWooCommerce، مع التركيز على الأداء وCore Web Vitals.",
              cta: "ابدأ عبر واتساب",
              message: "مرحبًا محمد، أحتاج إلى تحسين أداء موقع WordPress أو WooCommerce. أود طلب مراجعة للسرعة والأداء.",
            },
            {
              type: "internal" as const,
              title: "أريد مشاهدة أعمال مشابهة",
              desc: "تصفح دراسات حالة وأمثلة حقيقية قبل بدء المحادثة.",
              cta: "عرض دراسات الحالة",
              href: `/${lang}/work`,
            },
          ] : [
            {
              type: "whatsapp" as const,
              title: "I need a WooCommerce Store",
              desc: "Build or improve a fast, conversion-focused WooCommerce store with custom product, checkout, and payment flows.",
              cta: "Start on WhatsApp",
              message: "Hi Muhammed, I need a WooCommerce store. I\u2019d like to discuss the project details, features, timeline, and estimated cost.",
            },
            {
              type: "whatsapp" as const,
              title: "I need a Custom Plugin",
              desc: "Create custom WordPress plugin functionality when ready-made solutions do not match your business workflow.",
              cta: "Start on WhatsApp",
              message: "Hi Muhammed, I need a custom WordPress plugin. I\u2019d like to explain the workflow and see how it can be built.",
            },
            {
              type: "whatsapp" as const,
              title: "I need a Custom Theme",
              desc: "Develop a clean, responsive, and scalable WordPress theme tailored to your brand, content, and business needs.",
              cta: "Start on WhatsApp",
              message: "Hi Muhammed, I need a custom WordPress theme. I\u2019d like to discuss the design, pages, responsiveness, and implementation.",
            },
            {
              type: "whatsapp" as const,
              title: "I need a Laravel Dashboard or API",
              desc: "Build internal dashboards, admin panels, APIs, and backend systems for real business operations.",
              cta: "Start on WhatsApp",
              message: "Hi Muhammed, I need a Laravel dashboard or API. I\u2019d like to discuss the business workflow, modules, and backend requirements.",
            },
            {
              type: "whatsapp" as const,
              title: "I need Performance Optimization",
              desc: "Improve speed, stability, Core Web Vitals, and user experience for WordPress and WooCommerce websites.",
              cta: "Start on WhatsApp",
              message: "Hi Muhammed, I need help improving my WordPress or WooCommerce website performance. I\u2019d like to request a speed review.",
            },
            {
              type: "internal" as const,
              title: "I want to see similar work",
              desc: "Browse real case studies and examples before starting a conversation.",
              cta: "View Case Studies",
              href: `/${lang}/work`,
            },
          ];
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cards.map((card, i) => {
                const href =
                  card.type === "whatsapp"
                    ? `https://wa.me/${WA}?text=${encodeURIComponent(card.message)}`
                    : card.href;
                const isExternal = card.type === "whatsapp";
                return (
                  <div
                    key={i}
                    className="bg-[#111827] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#38BDF8]/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)] transition-all"
                  >
                    <h3 className="text-base font-bold text-[#F8FAFC] leading-snug">{card.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">{card.desc}</p>
                    <a
                      href={href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-2 mt-1 text-sm font-semibold text-[#38BDF8] hover:text-[#38BDF8]/80 transition-colors group"
                    >
                      {card.cta}
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })()}
      </section>


      {/* 4. Featured Case Studies */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 max-w-7xl mx-auto gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              {lang === "ar" ? "دراسات حالة مختارة" : "Featured Case Studies"}
            </h2>
            <p className="text-[#94A3B8] text-base max-w-2xl leading-relaxed">
              {lang === "ar"
                ? "مجموعة مختارة من متاجر WooCommerce، ومنصات WordPress، وأنظمة الأعمال المبنية حول احتياجات تشغيلية حقيقية."
                : "A curated selection of WooCommerce stores, WordPress platforms, and business systems built around real workflows."}
            </p>
          </div>
          <Link
            href={`/${lang}/work`}
            className="text-[#38BDF8] hover:text-[#38BDF8]/80 font-semibold group flex items-center gap-2 shrink-0"
          >
            {lang === "ar" ? "عرض كل المشاريع" : "View All Projects"}
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {(() => {
          // Curate exactly the 6 requested projects
          const curatedList = lang === "ar" ? [
            {
              slug: "eventgift",
              title: "منصة EventGift متعددة الأسواق",
              category: "WooCommerce / تجارة إلكترونية",
              desc: "منصة هدايا متعددة الأسواق تم تنفيذها للإمارات والسعودية ومصر، مع واجهات محلية، كتالوجات منتجات، ومسارات طلب مخصصة.",
              tags: ["WooCommerce", "متعدد الأسواق", "تجربة استخدام مخصصة"],
              markets: ["الإمارات", "السعودية", "مصر"],
              image: "/demo/projects/eventgift/cover.png",
              hasDetail: true,
            },
            {
              slug: "techmart",
              title: "تجربة Techmart لمتجر Apple Retail",
              category: "WooCommerce / تجارة إلكترونية",
              desc: "تجربة متجر إلكتروني موجهة لمنتجات Apple، مع تنظيم واضح للمنتجات والعروض وتجربة شراء نظيفة.",
              tags: ["WooCommerce", "Retail", "تجربة منتجات"],
              image: "/demo/projects/techmart/cover.png",
              hasDetail: true,
            },
            {
              slug: "ashhalan",
              title: "منصة Ashhalan Group للهوية المؤسسية",
              category: "موقع شركة / منصة أعمال",
              desc: "منصة مؤسسية لعرض محفظة أعمال متنوعة بهوية واضحة، محتوى منظم، وحضور احترافي على الويب.",
              tags: ["WordPress", "موقع مؤسسي", "Brand Platform"],
              image: "/demo/projects/ashhalan/cover.png",
              hasDetail: true,
            },
            {
              slug: "botella",
              title: "متجر Bottella للمنتجات المباشرة",
              category: "WooCommerce / تجارة إلكترونية",
              desc: "متجر منتجات مباشر للمستهلك مبني حول عرض المنتجات، تنظيم المجموعات، وتجربة تصفح سلسة.",
              tags: ["WooCommerce", "DTC", "متجر منتجات"],
              image: "/demo/projects/botella/cover.png",
              hasDetail: true,
            },
            {
              slug: "atour",
              title: "منصة Atour للسياحة السعودية",
              category: "سياحة / Marketplace",
              desc: "تجربة Marketplace للسياحة السعودية تساعد المستخدمين على اكتشاف العروض والتجارب والخدمات السياحية.",
              tags: ["Marketplace", "سياحة", "السعودية"],
              image: "/demo/projects/atour/frontend/01-homepage-hero-desktop.png",
              hasDetail: false,
            },
            {
              slug: "ozone-clinic",
              title: "منصة Ozone Clinic الطبية",
              category: "Healthcare",
              desc: "منصة ويب طبية لعرض خدمات العيادة، معلومات المرضى، وبناء حضور موثوق للعلامة الطبية.",
              tags: ["Healthcare", "WordPress", "موقع خدمات"],
              image: "/demo/projects/ozone-clinic/frontend/01-homepage-hero-desktop.png",
              hasDetail: false,
            },
          ] : [
            {
              slug: "eventgift",
              title: "EventGift Multi-Market Gifting Platform",
              category: "WooCommerce / eCommerce",
              desc: "A multi-market gifting platform built across the UAE, Saudi Arabia, and Egypt, with localized storefronts, product catalogs, and custom order flows.",
              tags: ["WooCommerce", "Multi-market", "Custom UX"],
              markets: ["UAE", "Saudi Arabia", "Egypt"],
              image: "/demo/projects/eventgift/cover.png",
              hasDetail: true,
            },
            {
              slug: "techmart",
              title: "Techmart Apple Retail eCommerce Experience",
              category: "WooCommerce / eCommerce",
              desc: "An Apple-focused retail eCommerce experience designed around structured product discovery, offers, and a clean shopping flow.",
              tags: ["WooCommerce", "Retail", "Product UX"],
              image: "/demo/projects/techmart/cover.png",
              hasDetail: true,
            },
            {
              slug: "ashhalan",
              title: "Ashhalan Group Corporate Brand Platform",
              category: "Corporate / Business Website",
              desc: "A corporate platform built to present a diversified business portfolio with clear brand positioning, structured content, and a professional web presence.",
              tags: ["WordPress", "Corporate", "Brand Platform"],
              image: "/demo/projects/ashhalan/cover.png",
              hasDetail: true,
            },
            {
              slug: "botella",
              title: "Bottella DTC Product Storefront",
              category: "WooCommerce / eCommerce",
              desc: "A direct-to-consumer product storefront built around product collections, visual presentation, and a smooth browsing experience.",
              tags: ["WooCommerce", "DTC", "Product Storefront"],
              image: "/demo/projects/botella/cover.png",
              hasDetail: true,
            },
            {
              slug: "atour",
              title: "Atour Saudi Tourism Marketplace",
              category: "Tourism / Marketplace",
              desc: "A Saudi tourism marketplace experience designed to help users discover travel, tourism, and experience-based offerings.",
              tags: ["Marketplace", "Tourism", "Saudi Arabia"],
              image: "/demo/projects/atour/frontend/01-homepage-hero-desktop.png",
              hasDetail: false,
            },
            {
              slug: "ozone-clinic",
              title: "Ozone Clinic Healthcare Platform",
              category: "Healthcare",
              desc: "A healthcare web platform for presenting clinic services, patient information, and a trustworthy medical brand experience.",
              tags: ["Healthcare", "WordPress", "Service Website"],
              image: "/demo/projects/ozone-clinic/frontend/01-homepage-hero-desktop.png",
              hasDetail: false,
            },
          ];

          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {curatedList.map((item) => {
                // Determine destination URL
                const destination = item.hasDetail
                  ? `/${lang}/work/${item.slug}`
                  : `/${lang}/work/`;

                return (
                  <Link
                    key={item.slug}
                    href={destination}
                    className="group flex flex-col bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-[#38BDF8]/30 transition-all hover:shadow-[0_10px_30px_rgba(56,189,248,0.05)] hover:-translate-y-1"
                  >
                    {/* Image / Placeholder */}
                    <div className="relative aspect-[4/3] w-full bg-[#0B1020] overflow-hidden flex items-center justify-center">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] flex flex-col items-center justify-center p-6 text-center">
                          <span className="text-[#38BDF8] text-base font-bold tracking-wide mb-2 uppercase px-4">
                            {item.title}
                          </span>
                          <span className="text-[10px] text-[#64748B] font-semibold uppercase tracking-widest">
                            {item.category}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />

                      {/* Markets Badge Overlay */}
                      {item.markets && item.markets.length > 0 && (
                        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                          {item.markets.map((market, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-[#38BDF8] shadow-sm uppercase backdrop-blur-md"
                            >
                              {market}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col font-sans">
                      <div className="text-xs font-bold text-[#38BDF8] mb-3 uppercase tracking-widest">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-[#38BDF8] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed flex-1 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Card Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#1F2937]/50 text-[#94A3B8] border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex items-center text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                        {lang === "ar" ? "قراءة دراسة الحالة" : "Read Case Study"}
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
                );
              })}
            </div>
          );
        })()}
      </section>

      {/* Why Work With Me Section */}
      <section className="container mx-auto px-4 py-24 border-t border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[#0B1020]/30 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-[#38BDF8]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="lg:w-5/12 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {lang === "ar" ? "أكثر من مجرد تنفيذ WordPress" : "More than a WordPress implementer"}
            </h2>
            <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">
              <p>
                {lang === "ar"
                  ? "أبني حلول WordPress وWooCommerce وLaravel مبنية على سير العمل الحقيقي للشركات — وليس مجرد صفحات أو قوالب جاهزة أو تركيب إضافات."
                  : "I build WordPress, WooCommerce, and Laravel solutions around real business workflows — not just pages, themes, or plugin installations."}
              </p>
              <p>
                {lang === "ar"
                  ? "من تخصيص مسارات الدفع ودمج وسائل الدفع إلى لوحات التحكم والمتاجر متعددة الأسواق، أركز على جعل المنصة مناسبة لطريقة عمل الشركة فعليًا."
                  : "From custom checkout logic and payment integrations to admin dashboards and multi-market stores, my focus is to make the platform fit how the business actually works."}
              </p>
            </div>
          </div>

          {/* Right Side: 2x2 Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#111827] border border-white/5 p-8 rounded-2xl hover:border-[#38BDF8]/30 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-[#38BDF8]/10 text-[#38BDF8] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {lang === "ar" ? "تطوير مبني على فهم العمل" : "Business-first development"}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {lang === "ar"
                  ? "أبدأ من سير العمل واحتياجات الشركة، وليس من قالب جاهز."
                  : "I start from the business workflow, not from a template."}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111827] border border-white/5 p-8 rounded-2xl hover:border-[#38BDF8]/30 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-[#38BDF8]/10 text-[#38BDF8] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {lang === "ar" ? "قدرة على تخصيص WordPress" : "Custom WordPress capability"}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {lang === "ar"
                  ? "قوالب، إضافات، مسارات WooCommerce، وتجارب إدارة مبنية حول احتياجات فعلية."
                  : "Themes, plugins, WooCommerce flows, and admin experiences built around real needs."}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111827] border border-white/5 p-8 rounded-2xl hover:border-[#38BDF8]/30 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-[#38BDF8]/10 text-[#38BDF8] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {lang === "ar" ? "تفكير يجمع بين WooCommerce والأنظمة الخلفية" : "WooCommerce + backend thinking"}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {lang === "ar"
                  ? "أربط المتاجر، لوحات التحكم، APIs، وسائل الدفع، والعمليات التشغيلية."
                  : "I connect storefronts, dashboards, APIs, payments, and operational processes."}
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#111827] border border-white/5 p-8 rounded-2xl hover:border-[#38BDF8]/30 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-[#38BDF8]/10 text-[#38BDF8] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {lang === "ar" ? "خبرة في العربية والإنجليزية وRTL" : "Arabic, English & RTL experience"}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {lang === "ar"
                  ? "أبني تجارب ثنائية اللغة وداعمة لاتجاه RTL للشركات في الخليج والشرق الأوسط."
                  : "I build bilingual and RTL-friendly experiences for MENA and GCC businesses."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Stack Behind the Solutions Section */}
      {(() => {
        const stackGroups = [
          {
            title: "WordPress",
            items: lang === "ar" 
              ? ["قوالب مخصصة", "إضافات", "Hooks", "CPT", "ACF", "REST API"]
              : ["Custom Themes", "Plugins", "Hooks", "CPT", "ACF", "REST API"]
          },
          {
            title: "WooCommerce",
            items: lang === "ar"
              ? ["مسارات الدفع", "بوابات الدفع", "منطق المنتجات", "تخصيص السلة", "تخصيص الطلبات"]
              : ["Checkout Flows", "Payment Gateways", "Product Logic", "Cart Customization", "Order Customization"]
          },
          {
            title: "Backend",
            items: lang === "ar"
              ? ["PHP", "Laravel", "MySQL", "APIs", "لوحات تحكم"]
              : ["PHP", "Laravel", "MySQL", "APIs", "Dashboards"]
          },
          {
            title: "Frontend",
            items: lang === "ar"
              ? ["HTML", "CSS", "JavaScript", "واجهات متجاوبة", "دعم RTL"]
              : ["HTML", "CSS", "JavaScript", "Responsive UI", "RTL Interfaces"]
          },
          {
            title: "Delivery",
            items: lang === "ar"
              ? ["GitHub", "الاستضافة", "النشر", "تحسين الأداء"]
              : ["GitHub", "Hosting", "Deployment", "Performance Optimization"]
          },
          {
            title: "Integrations",
            items: lang === "ar"
              ? ["APIs الدفع", "منطق الشحن", "ربط خدمات خارجية", "Webhooks", "مسارات CRM/ERP"]
              : ["Payment APIs", "Shipping Logic", "Third-party APIs", "Webhooks", "CRM/ERP Flows"]
          }
        ];

        return (
          <section className="container mx-auto px-4 py-24 border-t border-white/5 relative">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                {lang === "ar" ? "التقنيات وراء الحلول" : "The Stack Behind the Solutions"}
              </h2>
              <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
                {lang === "ar"
                  ? "مجموعة تقنيات عملية لبناء حلول WordPress وWooCommerce وLaravel مخصصة — من تجربة المتجر إلى سير العمل والأنظمة الخلفية."
                  : "A practical stack for building custom WordPress, WooCommerce, and Laravel systems — from storefront UX to backend workflows."}
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stackGroups.map((group, idx) => (
                <div key={idx} className="bg-[#111827]/50 border border-white/5 p-6 rounded-2xl flex flex-col items-start hover:border-[#38BDF8]/20 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] opacity-80"></span>
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-[#1E293B] border border-white/5 text-[#94A3B8] text-sm font-medium rounded-lg" dir="auto">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })()}
      {/* How I Work Section */}
      {(() => {
        const steps = [
          {
            num: "01",
            title: lang === "ar" ? "فهم المشروع" : "Discovery",
            desc: lang === "ar" 
              ? "أفهم أهدافك، المستخدمين، سير العمل، والاحتياجات التقنية."
              : "I understand your goals, users, business workflow, and technical needs."
          },
          {
            num: "02",
            title: lang === "ar" ? "التخطيط" : "Planning",
            desc: lang === "ar"
              ? "أحدد الهيكل، المميزات، التكاملات، الجدول الزمني، واتجاه المشروع."
              : "I define the structure, features, integrations, timeline, and project direction."
          },
          {
            num: "03",
            title: lang === "ar" ? "التطوير" : "Development",
            desc: lang === "ar"
              ? "أبني حلول WordPress أو WooCommerce أو الإضافات أو القوالب أو أنظمة Laravel بكود منظم وقابل للتوسع."
              : "I build the website, store, plugin, theme, or Laravel system with clean, scalable code."
          },
          {
            num: "04",
            title: lang === "ar" ? "الاختبار" : "Testing",
            desc: lang === "ar"
              ? "أختبر التجاوب، الأداء، النماذج، مسارات الدفع، التكاملات، ورحلة المستخدم الأساسية."
              : "I test responsiveness, performance, forms, checkout flows, integrations, and key user journeys."
          },
          {
            num: "05",
            title: lang === "ar" ? "الإطلاق والدعم" : "Launch & Support",
            desc: lang === "ar"
              ? "أساعد في النشر، الإصلاحات النهائية، التحسينات، والدعم المستقبلي."
              : "I help with deployment, final fixes, improvements, and future support."
          }
        ];

        return (
          <section className="container mx-auto px-4 py-24 border-t border-white/5 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-[#0B1020]/30 -z-10" />
            
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                {lang === "ar" ? "كيف أعمل؟" : "How I Work"}
              </h2>
              <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
                {lang === "ar"
                  ? "عملية واضحة لتحويل احتياجات العمل إلى حلول WordPress وWooCommerce وLaravel موثوقة."
                  : "A clear process for turning business needs into reliable WordPress, WooCommerce, and Laravel solutions."}
              </p>
            </div>

            <div className="max-w-7xl mx-auto relative px-4 sm:px-0">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              {/* Connecting Line (Mobile) */}
              <div className="block lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col relative group">
                    {/* Number Indicator */}
                    <div className="w-12 h-12 bg-[#0B1020] border-2 border-white/10 rounded-full flex items-center justify-center text-[#38BDF8] font-bold text-lg mb-6 z-10 group-hover:border-[#38BDF8]/50 group-hover:bg-[#38BDF8]/10 transition-all mx-auto lg:mx-0">
                      {step.num}
                    </div>
                    {/* Content */}
                    <div className="text-center lg:text-start lg:rtl:text-right">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-24 border-t border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1020]/80 -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-[#38BDF8]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center bg-[#111827]/80 backdrop-blur-sm border border-white/5 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 relative z-10">
            {lang === "ar"
              ? "جاهز لبناء حل WordPress أسرع وأكثر ذكاءً؟"
              : "Ready to build a faster, smarter WordPress solution?"}
          </h2>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 relative z-10">
            {lang === "ar"
              ? "سواء كنت تحتاج إلى متجر WooCommerce، إضافة مخصصة، قالب WordPress، أو نظام خلفي بـ Laravel، دعنا نحول سير عملك إلى منتج رقمي موثوق."
              : "Whether you need a WooCommerce store, custom plugin, WordPress theme, or Laravel backend system, let’s turn your workflow into a reliable digital product."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href={`/${lang}/contact/`}
              className="w-full sm:w-auto px-8 py-4 bg-[#38BDF8] hover:bg-[#0284C7] hover:scale-105 text-[#020617] font-bold rounded-xl transition-all text-center"
            >
              {lang === "ar" ? "ابدأ مشروعك" : "Start a Project"}
            </Link>
            <Link
              href={`/${lang}/work/`}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all text-center"
            >
              {lang === "ar" ? "عرض دراسات الحالة" : "View Case Studies"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
