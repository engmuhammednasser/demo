import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import ScreenshotLightbox from "@/components/ui/ScreenshotLightbox";
import type { ProjectScreenshot } from "@/data/projects";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang === "ar") {
    return {
      title: "ايفنت جيفت — منصة هدايا متعددة الأسواق | محمد ناصر",
      description:
        "دراسة حالة لمنصة هدايا ومتاجر إلكترونية متعددة الأسواق تخدم الإمارات ومصر والسعودية، مبنية بـ WordPress و WooCommerce.",
    };
  }
  return {
    title: "EventGift — Multi-Market Gifting Platform Case Study | Muhammed Nasser",
    description:
      "A case study for a multi-market gifting and ecommerce platform serving UAE, Egypt, and Saudi Arabia, built with WordPress and WooCommerce.",
  };
}

// ─── Image paths (basePath /demo is applied by Next.js automatically for <img> src) ───
const BASE = "/demo/projects/eventgift";

// ─── Screenshot groups ────────────────────────────────────────────────────────

const homepageScreenshots: ProjectScreenshot[] = [
  {
    src: `${BASE}/uae-homepage-hero-desktop.png`,
    alt: { en: "EventGift UAE – Homepage Hero", ar: "ايفنت جيفت الإمارات – هيرو الصفحة الرئيسية" },
    caption: { en: "EventGift UAE — Homepage hero section featuring the main gifting proposition.", ar: "ايفنت جيفت الإمارات — قسم الهيرو الرئيسي مع عرض الهدايا." },
    type: "frontend",
    viewport: "desktop",
  },
  {
    src: `${BASE}/uae-homepage-full-desktop.png`,
    alt: { en: "EventGift UAE – Full Homepage Desktop", ar: "ايفنت جيفت الإمارات – الصفحة الرئيسية كاملة" },
    caption: { en: "EventGift UAE — Full homepage layout with product categories and featured gifts.", ar: "ايفنت جيفت الإمارات — الصفحة الرئيسية الكاملة مع التصنيفات والمنتجات المميزة." },
    type: "frontend",
    viewport: "desktop",
  },
  {
    src: `${BASE}/egypt-homepage-full-desktop.png`,
    alt: { en: "EventGift Egypt – Full Homepage Desktop", ar: "ايفنت جيفت مصر – الصفحة الرئيسية كاملة" },
    caption: { en: "EventGift Egypt — Market-specific homepage for the Egyptian storefront.", ar: "ايفنت جيفت مصر — الصفحة الرئيسية المخصصة للسوق المصري." },
    type: "frontend",
    viewport: "desktop",
  },
  {
    src: `${BASE}/saudi-homepage-full-desktop.png`,
    alt: { en: "EventGift Saudi Arabia – Full Homepage Desktop", ar: "ايفنت جيفت السعودية – الصفحة الرئيسية كاملة" },
    caption: { en: "EventGift Saudi Arabia — Market-specific homepage for the Saudi storefront.", ar: "ايفنت جيفت السعودية — الصفحة الرئيسية المخصصة للسوق السعودي." },
    type: "frontend",
    viewport: "desktop",
  },
];

const catalogScreenshots: ProjectScreenshot[] = [
  {
    src: `${BASE}/uae-catalog-navigation-desktop.png`,
    alt: { en: "EventGift UAE – Shop / Catalog Navigation", ar: "ايفنت جيفت الإمارات – تصفح الكتالوج" },
    caption: { en: "EventGift UAE — Shop page with structured category navigation and product browsing.", ar: "ايفنت جيفت الإمارات — صفحة المتجر مع تصفح منظم للتصنيفات والمنتجات." },
    type: "commerce",
    viewport: "desktop",
  },
  {
    src: `${BASE}/uae-product-grid-focused.png`,
    alt: { en: "EventGift UAE – Product Grid", ar: "ايفنت جيفت الإمارات – شبكة المنتجات" },
    caption: { en: "EventGift UAE — Gift product grid with clear visual presentation.", ar: "ايفنت جيفت الإمارات — عرض شبكي للمنتجات مع وضوح بصري احترافي." },
    type: "commerce",
    viewport: "desktop",
  },
  {
    src: `${BASE}/egypt-catalog-products-desktop.png`,
    alt: { en: "EventGift Egypt – Category / Products Page", ar: "ايفنت جيفت مصر – صفحة التصنيفات والمنتجات" },
    caption: { en: "EventGift Egypt — Gift category page showcasing products for the Egyptian market.", ar: "ايفنت جيفت مصر — صفحة تصنيف الهدايا للسوق المصري." },
    type: "commerce",
    viewport: "desktop",
  },
  {
    src: `${BASE}/saudi-catalog-products-desktop.png`,
    alt: { en: "EventGift Saudi Arabia – Category / Products Page", ar: "ايفنت جيفت السعودية – صفحة التصنيفات" },
    caption: { en: "EventGift Saudi Arabia — Team gifts category showcasing the Saudi product catalog.", ar: "ايفنت جيفت السعودية — تصنيف هدايا الفرق مع عرض الكتالوج السعودي." },
    type: "commerce",
    viewport: "desktop",
  },
];

const productDetailScreenshots: ProjectScreenshot[] = [
  {
    src: `${BASE}/uae-product-detail-desktop.png`,
    alt: { en: "EventGift UAE – Product Detail Page", ar: "ايفنت جيفت الإمارات – صفحة تفاصيل المنتج" },
    caption: { en: "EventGift UAE — Single product detail page with gifting options and add-to-cart flow.", ar: "ايفنت جيفت الإمارات — صفحة المنتج المفرد مع خيارات الإهداء وإضافة للسلة." },
    type: "commerce",
    viewport: "desktop",
  },
  {
    src: `${BASE}/egypt-product-detail-desktop.png`,
    alt: { en: "EventGift Egypt – Product Detail Page", ar: "ايفنت جيفت مصر – صفحة تفاصيل المنتج" },
    caption: { en: "EventGift Egypt — Product detail with clear product presentation and purchase CTA.", ar: "ايفنت جيفت مصر — صفحة تفاصيل المنتج مع عرض واضح ودعوة للشراء." },
    type: "commerce",
    viewport: "desktop",
  },
  {
    src: `${BASE}/saudi-product-detail-desktop.png`,
    alt: { en: "EventGift Saudi Arabia – Product Detail Page", ar: "ايفنت جيفت السعودية – صفحة تفاصيل المنتج" },
    caption: { en: "EventGift Saudi Arabia — Product detail page tailored for the Saudi storefront.", ar: "ايفنت جيفت السعودية — صفحة تفاصيل المنتج المخصصة للسوق السعودي." },
    type: "commerce",
    viewport: "desktop",
  },
];

const cartScreenshots: ProjectScreenshot[] = [
  {
    src: `${BASE}/uae-cart-action-flow.png`,
    alt: { en: "EventGift UAE – Cart / Order Flow", ar: "ايفنت جيفت الإمارات – سلة الشراء" },
    caption: { en: "EventGift UAE — Shopping cart with clear order summary and action flow.", ar: "ايفنت جيفت الإمارات — سلة الشراء مع ملخص واضح للطلب." },
    type: "commerce",
    viewport: "desktop",
  },
  {
    src: `${BASE}/egypt-cart-action-flow.png`,
    alt: { en: "EventGift Egypt – Cart", ar: "ايفنت جيفت مصر – السلة" },
    caption: { en: "EventGift Egypt — Cart page showing the order flow before checkout.", ar: "ايفنت جيفت مصر — صفحة السلة قبل إتمام الطلب." },
    type: "commerce",
    viewport: "desktop",
  },
  {
    src: `${BASE}/saudi-checkout-flow.png`,
    alt: { en: "EventGift Saudi Arabia – Checkout Flow", ar: "ايفنت جيفت السعودية – إتمام الطلب" },
    caption: { en: "EventGift Saudi Arabia — Checkout page with localized order completion flow.", ar: "ايفنت جيفت السعودية — صفحة إتمام الطلب المخصصة للسوق السعودي." },
    type: "commerce",
    viewport: "desktop",
  },
];

const marketScreenshots: ProjectScreenshot[] = [
  {
    src: `${BASE}/uae-landing-page-desktop.png`,
    alt: { en: "EventGift UAE – Landing Page Feature", ar: "ايفنت جيفت الإمارات – صفحة الهبوط" },
    caption: { en: "EventGift UAE — Dedicated landing page for gifting campaigns and promotions.", ar: "ايفنت جيفت الإمارات — صفحة هبوط مخصصة لحملات الهدايا والعروض." },
    type: "frontend",
    viewport: "desktop",
  },
  {
    src: `${BASE}/uae-catalog-feature-desktop.png`,
    alt: { en: "EventGift UAE – Catalog Feature / Get Catalog", ar: "ايفنت جيفت الإمارات – طلب الكتالوج" },
    caption: { en: "EventGift UAE — Get catalog feature enabling corporate clients to browse the full product catalog.", ar: "ايفنت جيفت الإمارات — ميزة طلب الكتالوج لعملاء الشركات." },
    type: "frontend",
    viewport: "desktop",
  },
  {
    src: `${BASE}/saudi-homepage-hero-desktop.png`,
    alt: { en: "EventGift Saudi Arabia – Homepage Hero", ar: "ايفنت جيفت السعودية – هيرو الصفحة الرئيسية" },
    caption: { en: "EventGift Saudi Arabia — Homepage hero section of the Saudi market storefront.", ar: "ايفنت جيفت السعودية — قسم الهيرو للمتجر السعودي." },
    type: "frontend",
    viewport: "desktop",
  },
  {
    src: `${BASE}/egypt-homepage-hero-desktop.png`,
    alt: { en: "EventGift Egypt – Homepage Hero", ar: "ايفنت جيفت مصر – هيرو الصفحة الرئيسية" },
    caption: { en: "EventGift Egypt — Homepage hero section of the Egyptian market storefront.", ar: "ايفنت جيفت مصر — قسم الهيرو للمتجر المصري." },
    type: "frontend",
    viewport: "desktop",
  },
];

// ─── Content ──────────────────────────────────────────────────────────────────

const content = {
  en: {
    eyebrow: "Case Study",
    title: "EventGift",
    positioning:
      "A multi-market gifting and ecommerce platform built for product discovery, market-specific storefronts, and a professional shopping experience across UAE, Egypt, and Saudi Arabia.",
    badges: ["UAE", "Egypt", "Saudi Arabia"],
    cta1: "View Project Screenshots",
    cta2: "Need a Similar Project?",
    cta3: "View Live Site",
    sidebar: {
      role: "Role",
      platform: "Platform",
      services: "Services",
      stack: "Tech Stack",
      markets: "Markets",
      projectType: "Project Type",
    },
    roleVal: "WordPress / WooCommerce Developer",
    platformVal: "WordPress + WooCommerce",
    servicesVal: ["Ecommerce Development", "Frontend Implementation", "WooCommerce Setup", "Responsive UI", "Market-Specific Storefront Structure"],
    marketsVal: "UAE, Egypt, Saudi Arabia",
    projectTypeVal: "Multi-market ecommerce / gifting platform",
    challenge: {
      heading: "Business Challenge",
      body: "EventGift needed a professional gifting platform that could serve multiple regional markets while keeping the shopping experience clear, trustworthy, and easy to browse. The platform needed to support product discovery, gifting categories, market-specific storefronts, corporate gifting use cases, and a responsive ecommerce experience across desktop and mobile.",
    },
    solution: {
      heading: "Solution",
      body: "A WordPress / WooCommerce ecommerce platform was built with structured product browsing, clear product presentation, market-specific storefront experiences, responsive frontend implementation, and a scalable backend setup that supports different markets under the same brand.",
    },
    scope: {
      heading: "Platform Scope",
      items: [
        "Homepage experience",
        "Product catalog and categories",
        "Product detail pages",
        "Cart / order action flow",
        "Mobile responsive experience",
        "Multi-market storefront structure",
        "Visual consistency across markets",
        "Market-aware content and presentation",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        "Multi-market storefront experience",
        "UAE, Egypt, and Saudi Arabia market presence",
        "Product and category browsing",
        "Gift / product presentation",
        "WooCommerce product structure",
        "Responsive ecommerce UI",
        "Clear CTA and order flow",
        "Scalable WordPress backend",
        "Market-aware frontend structure",
        "Visual consistency across storefronts",
      ],
    },
    archive: {
      heading: "Visual Archive",
      badge: "Archived Visual Preview",
      note: "Screenshots are stored inside this portfolio as a visual archive of the delivered project.",
      groups: {
        homepage: "Homepage",
        catalog: "Browsing & Catalog",
        product: "Product Detail",
        cart: "Cart / Action Flow",
        market: "Market Variations",
      },
    },
    technical: {
      heading: "Technical Approach",
      body: "The platform was implemented using WordPress and WooCommerce with custom frontend styling, responsive layouts, structured product presentation, performance-conscious assets, and a maintainable setup suitable for ongoing content and product management.",
    },
    value: {
      heading: "Business Value",
      items: [
        "Clearer product discovery",
        "Stronger brand trust",
        "Reusable multi-market ecommerce structure",
        "Better mobile shopping experience",
        "Professional product presentation",
        "Long-term visual proof through archived screenshots",
        "Easier market-specific storefront management",
      ],
    },
    related: {
      heading: "Related Services",
      items: [
        { label: "WooCommerce Development", href: "/en/services/" },
        { label: "WordPress Development", href: "/en/services/" },
        { label: "Ecommerce Frontend", href: "/en/services/" },
      ],
    },
    finalCta: {
      heading: "Need a WooCommerce platform like EventGift?",
      body: "If you need a professional ecommerce platform, a multi-market storefront, or a WooCommerce website built for serious business use, let's discuss your project.",
      cta: "Discuss a Similar Project",
    },
    whatsappMsg: "Hi Mohamed, I'm interested in building a WooCommerce platform similar to EventGift.",
  },
  ar: {
    eyebrow: "دراسة حالة",
    title: "ايفنت جيفت",
    positioning:
      "منصة هدايا ومتاجر إلكترونية متعددة الأسواق، تم تنفيذها لتخدم الإمارات ومصر والسعودية من خلال تجربة تصفح واضحة، عرض احترافي للمنتجات، وتجربة شراء مناسبة للمستخدم على الديسكتوب والموبايل.",
    badges: ["الإمارات", "مصر", "السعودية"],
    cta1: "عرض صور المشروع",
    cta2: "أحتاج مشروع مشابه",
    cta3: "زيارة الموقع",
    sidebar: {
      role: "الدور",
      platform: "المنصة",
      services: "الخدمات",
      stack: "التقنيات",
      markets: "الأسواق",
      projectType: "نوع المشروع",
    },
    roleVal: "مطور WordPress / WooCommerce",
    platformVal: "WordPress + WooCommerce",
    servicesVal: ["تطوير متجر إلكتروني", "تنفيذ واجهة أمامية", "إعداد WooCommerce", "تجربة متجاوبة", "هيكلة واجهات متعددة الأسواق"],
    marketsVal: "الإمارات، مصر، السعودية",
    projectTypeVal: "منصة هدايا ومتاجر إلكترونية متعددة الأسواق",
    challenge: {
      heading: "التحدي",
      body: "احتاج مشروع ايفنت جيفت إلى منصة هدايا احترافية قادرة على خدمة أكثر من سوق إقليمي، مع الحفاظ على تجربة تصفح واضحة، موثوقة، وسهلة للمستخدم. كان المطلوب دعم تصفح المنتجات، تصنيفات الهدايا، واجهات مخصصة لكل سوق، استخدامات هدايا الشركات، وتجربة متجر إلكتروني متجاوبة على الديسكتوب والموبايل.",
    },
    solution: {
      heading: "الحل",
      body: "تم تنفيذ منصة تجارة إلكترونية باستخدام WordPress و WooCommerce، مع تنظيم واضح لتصفح المنتجات، عرض احترافي للهدايا، واجهات مناسبة لكل سوق، تنفيذ Frontend متجاوب، وهيكلة Backend قابلة للتوسع لدعم أكثر من سوق تحت نفس العلامة التجارية.",
    },
    scope: {
      heading: "نطاق المنصة",
      items: [
        "تجربة الصفحة الرئيسية",
        "كتالوج المنتجات والتصنيفات",
        "صفحات تفاصيل المنتجات",
        "سلة الشراء ومسار الطلب",
        "تجربة متجاوبة على الموبايل",
        "هيكلة واجهات متعددة الأسواق",
        "اتساق بصري بين الأسواق",
        "محتوى وعرض مناسب لكل سوق",
      ],
    },
    features: {
      heading: "المميزات الرئيسية",
      items: [
        "تجربة متاجر متعددة الأسواق",
        "حضور واضح لأسواق الإمارات ومصر والسعودية",
        "تصفح المنتجات والتصنيفات",
        "عرض احترافي للهدايا والمنتجات",
        "هيكلة منتجات WooCommerce",
        "واجهة متجر إلكتروني متجاوبة",
        "دعوات إجراء واضحة ومسار طلب مباشر",
        "Backend قابل للتوسع باستخدام WordPress",
        "واجهات أمامية مناسبة لكل سوق",
        "اتساق بصري بين المتاجر",
      ],
    },
    archive: {
      heading: "معاينة مرئية محفوظة من المشروع",
      badge: "معاينة محفوظة",
      note: "تم حفظ هذه الصور داخل البورتفوليو كمرجع بصري للمشروع، حتى إذا تغيّر الموقع الأصلي لاحقًا أو توقف الدومين أو تم استبدال التصميم.",
      groups: {
        homepage: "الصفحة الرئيسية",
        catalog: "التصفح والكتالوج",
        product: "تفاصيل المنتج",
        cart: "السلة ومسار الطلب",
        market: "متغيرات الأسواق",
      },
    },
    technical: {
      heading: "المنهجية التقنية",
      body: "تم تنفيذ المنصة باستخدام WordPress و WooCommerce، مع تخصيص الواجهة الأمامية، بناء Layouts متجاوبة، تنظيم واضح لعرض المنتجات، استخدام أصول مناسبة للأداء، وهيكلة قابلة للصيانة لتسهيل إدارة المحتوى والمنتجات بشكل مستمر.",
    },
    value: {
      heading: "القيمة للعمل",
      items: [
        "وضوح أكبر في اكتشاف المنتجات",
        "تعزيز ثقة العميل في العلامة التجارية",
        "هيكلة قابلة لإعادة الاستخدام لأكثر من سوق",
        "تجربة تسوق أفضل على الموبايل",
        "عرض احترافي للمنتجات والهدايا",
        "إثبات بصري طويل المدى من خلال الصور المحفوظة",
        "سهولة أكبر في إدارة واجهات كل سوق",
      ],
    },
    related: {
      heading: "خدمات ذات صلة",
      items: [
        { label: "تطوير WooCommerce", href: "/ar/services/" },
        { label: "تطوير WordPress", href: "/ar/services/" },
        { label: "تنفيذ واجهات المتاجر", href: "/ar/services/" },
      ],
    },
    finalCta: {
      heading: "هل تحتاج متجر WooCommerce احترافي مثل ايفنت جيفت؟",
      body: "إذا كنت تحتاج متجرًا إلكترونيًا احترافيًا، أو منصة متعددة الأسواق، أو تجربة WooCommerce مناسبة لعمل جاد، راسلني لمناقشة مشروعك.",
      cta: "راسلني لمناقشة المشروع",
    },
    whatsappMsg: "مرحبًا محمد، أريد تنفيذ متجر WooCommerce احترافي مشابه لمشروع ايفنت جيفت.",
  },
};

// ─── Page Component ───────────────────────────────────────────────────────────

export default async function EventGiftPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const isAr = locale === "ar";
  const c = isAr ? content.ar : content.en;
  const contactPath = isAr ? "/ar/contact/" : "/en/contact/";
  const whatsappUrl = `https://wa.me/201025811613?text=${encodeURIComponent(c.whatsappMsg)}`;
  const liveUAE = "https://eventgift.net";

  return (
    <div className="min-h-screen" dir={isAr ? "rtl" : "ltr"}>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#0B1020] to-[#0d1526] pt-20 pb-24 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest">
              {c.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
            {c.title}
          </h1>

          {/* Market Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {c.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E293B] border border-white/10 text-[#F8FAFC] text-sm font-semibold rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] inline-block" />
                {badge}
              </span>
            ))}
          </div>

          {/* Positioning */}
          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            {c.positioning}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#visual-archive"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#38BDF8] text-[#0B1020] font-bold text-lg rounded-lg hover:bg-[#38BDF8]/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {c.cta1}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg hover:border-[#22C55E]/60 hover:text-[#22C55E] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              {c.cta2}
            </a>
            <a
              href={liveUAE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 text-[#94A3B8] font-medium text-base rounded-lg hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {c.cta3}
            </a>
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Main content */}
        <div className="lg:col-span-2 space-y-20">
          {/* Business Challenge */}
          <section>
            <div className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest mb-4">{c.challenge.heading}</div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-white">{c.challenge.heading}</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">{c.challenge.body}</p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-white">{c.solution.heading}</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">{c.solution.body}</p>
          </section>

          {/* Platform Scope */}
          <section>
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-white">{c.scope.heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.scope.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#111827] rounded-xl border border-white/5">
                  <svg className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[#CBD5E1] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-white">{c.features.heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.features.items.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#94A3B8]">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-8 h-fit lg:sticky lg:top-24">
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 space-y-8 shadow-lg">
            {/* Role */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">{c.sidebar.role}</div>
              <p className="text-[#F8FAFC] font-semibold text-lg">{c.roleVal}</p>
            </div>

            {/* Platform */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">{c.sidebar.platform}</div>
              <p className="text-[#F8FAFC] font-semibold">{c.platformVal}</p>
            </div>

            {/* Markets */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">{c.sidebar.markets}</div>
              <p className="text-[#F8FAFC] font-medium">{c.marketsVal}</p>
            </div>

            {/* Project Type */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">{c.sidebar.projectType}</div>
              <p className="text-[#F8FAFC] font-medium">{c.projectTypeVal}</p>
            </div>

            {/* Services */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">{c.sidebar.services}</div>
              <ul className="space-y-1.5">
                {c.servicesVal.map((s, i) => (
                  <li key={i} className="text-[#CBD5E1] text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#38BDF8] inline-block flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">{c.sidebar.stack}</div>
              <div className="flex flex-wrap gap-2">
                {["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-[#1E293B] text-xs font-semibold rounded-md border border-white/5 text-[#94A3B8]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Links */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mb-3">
                {isAr ? "روابط المتاجر" : "Live Storefronts"}
              </div>
              {[
                { label: isAr ? "الإمارات" : "UAE", url: "https://eventgift.net" },
                { label: isAr ? "مصر" : "Egypt", url: "https://eg.eventgift.net" },
                { label: isAr ? "السعودية" : "Saudi Arabia", url: "https://sa.eventgift.net" },
              ].map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-2.5 bg-[#0B1020] border border-white/10 rounded-lg text-sm text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/30 transition-all group"
                >
                  <span className="font-medium">{link.label}</span>
                  <svg className="w-4 h-4 opacity-50 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-[#38BDF8] text-[#0B1020] font-bold text-lg rounded-lg hover:bg-[#38BDF8]/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              {c.cta2}
            </a>
          </div>
        </aside>
      </div>

      {/* ── Visual Archive ───────────────────────────────────────────── */}
      <section id="visual-archive" className="border-t border-white/5 bg-[#080e1c] py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Archive Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full">
              <svg className="w-4 h-4 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider">{c.archive.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{c.archive.heading}</h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">{c.archive.note}</p>
          </div>

          {/* Group: Homepage */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-white">{c.archive.groups.homepage}</h3>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <ScreenshotLightbox screenshots={homepageScreenshots} lang={locale} title={c.title} />
          </div>

          {/* Group: Browsing & Catalog */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-white">{c.archive.groups.catalog}</h3>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <ScreenshotLightbox screenshots={catalogScreenshots} lang={locale} title={c.title} />
          </div>

          {/* Group: Product Detail */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-white">{c.archive.groups.product}</h3>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <ScreenshotLightbox screenshots={productDetailScreenshots} lang={locale} title={c.title} />
          </div>

          {/* Group: Cart / Action Flow */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-white">{c.archive.groups.cart}</h3>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <ScreenshotLightbox screenshots={cartScreenshots} lang={locale} title={c.title} />
          </div>

          {/* Group: Market Variations */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-white">{c.archive.groups.market}</h3>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <ScreenshotLightbox screenshots={marketScreenshots} lang={locale} title={c.title} />
          </div>
        </div>
      </section>

      {/* ── Technical Approach + Business Value ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Technical Approach */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">{c.technical.heading}</h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed">{c.technical.body}</p>
        </section>

        {/* Business Value */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">{c.value.heading}</h2>
          <ul className="space-y-3">
            {c.value.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[#94A3B8]">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ── Related Services ─────────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-[#0B1020] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-8">{c.related.heading}</h2>
          <div className="flex flex-wrap gap-3">
            {c.related.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#111827] border border-white/10 rounded-lg text-[#94A3B8] text-sm font-medium hover:border-[#38BDF8]/30 hover:text-[#38BDF8] transition-all"
              >
                {item.label}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isAr ? "M19 12H5m7-7-7 7 7 7" : "M5 12h14m-7-7 7 7-7 7"} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-gradient-to-b from-[#0B1020] to-[#060b18]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {c.finalCta.heading}
          </h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            {c.finalCta.body}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#38BDF8] text-[#0B1020] font-bold text-xl rounded-xl hover:bg-[#38BDF8]/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(56,189,248,0.25)] w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              {c.finalCta.cta}
            </a>
            <a
              href={contactPath}
              className="inline-flex items-center gap-2 px-8 py-5 border border-white/20 text-white font-semibold text-lg rounded-xl hover:border-[#38BDF8]/40 hover:text-[#38BDF8] transition-all w-full sm:w-auto justify-center"
            >
              {isAr ? "تصفح الخدمات" : "Explore Services"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
