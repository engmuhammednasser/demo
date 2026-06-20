
export type WorkType =
  | "wordpress"
  | "woocommerce"
  | "plugin"
  | "theme"
  | "laravel"
  | "php"
  | "nextjs";

export type ProjectScreenshot = {
  src: string;
  alt: { en: string; ar: string };
  caption: { en: string; ar: string };
  type: "frontend" | "booking" | "support" | "mobile" | "backend" | "commerce" | "auth" | "dashboard" | "students" | "attendance" | "grades" | "assignments" | "schedule" | "reports" | "communication" | "calendar" | "settings" | "services" | "doctors" | "blog" | "branches";
  viewport?: "desktop" | "mobile" | "tablet" | "crop";
};

export type Project = {
  slug: string;
  title: string;
  titleAr: string;
  type: WorkType[];
  category: string;
  categoryAr?: string;
  industry: string;
  goal: string[];
  summary: string;
  summaryAr: string;
  problem: string;
  problemAr: string;
  solution: string;
  solutionAr: string;
  role: string[];
  roleAr?: string[];
  stack: string[];
  features: string[];
  featuresAr: string[];
  built?: string[];
  builtAr?: string[];
  businessValue?: string[];
  businessValueAr?: string[];
  screenshots: string[];
  // Enriched grouped screenshots (optional — only used for detailed case studies)
  frontendScreenshots?: ProjectScreenshot[];
  bookingScreenshots?: ProjectScreenshot[];
  supportScreenshots?: ProjectScreenshot[];
  mobileScreenshots?: ProjectScreenshot[];
  backendScreenshots?: ProjectScreenshot[];
  dashboardScreenshots?: ProjectScreenshot[];
  academicScreenshots?: ProjectScreenshot[];
  operationsScreenshots?: ProjectScreenshot[];
  communicationScreenshots?: ProjectScreenshot[];
  // Gold Mine ERP specific sections
  authScreenshots?: ProjectScreenshot[];
  adminScreenshots?: ProjectScreenshot[];
  mineScreenshots?: ProjectScreenshot[];
  factoryScreenshots?: ProjectScreenshot[];
  warehouseScreenshots?: ProjectScreenshot[];
  accountingScreenshots?: ProjectScreenshot[];
  // CRM specific sections
  authThemeScreenshots?: ProjectScreenshot[];
  ordersScreenshots?: ProjectScreenshot[];
  customersScreenshots?: ProjectScreenshot[];
  woocommerceScreenshots?: ProjectScreenshot[];
  lookupTablesScreenshots?: ProjectScreenshot[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  isPrivate: boolean;
  status: "live" | "archived" | "private" | "github" | "case-study";
  needsReview?: boolean;
  hidden?: boolean;
  relatedProjects?: string[];
};

export const projects: Project[] = [
  {
    slug: "eventgift-uae",
    title: "EventGift UAE — Storefront Case Study",
    titleAr: "ايفنت جيفت الإمارات — واجهة المتجر",
    type: ["woocommerce", "wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "E-COMMERCE · CORPORATE GIFTING",
    goal: ["Market Expansion", "Sales"],
    summary: "The dedicated UAE storefront for the EventGift platform, featuring localized product discovery, specific category structures, and B2B catalog request features.",
    summaryAr: "الواجهة المخصصة لسوق الإمارات لمنصة ايفنت جيفت، مع ميزات تصفح منتجات محلية وهيكلة تصنيفات مخصصة وطلب كتالوج لعملاء الشركات.",
    problem: "EventGift needed a dedicated storefront for the UAE market to serve both retail consumers and corporate clients with tailored catalogs.",
    problemAr: "احتاج ايفنت جيفت لواجهة مخصصة لسوق الإمارات لخدمة المستهلكين الأفراد والشركات بكتالوجات مخصصة.",
    solution: "A localized storefront within the unified platform was set up, offering customized navigation, unique landing pages, and a tailored checkout experience.",
    solutionAr: "تم تجهيز واجهة محلية داخل المنصة الموحدة مع تصفح مخصص وصفحات هبوط وتجربة شراء معدلة للسوق.",
    role: ["WordPress / WooCommerce Developer"],
    roleAr: ["مطور WordPress / WooCommerce"],
    stack: ["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript"],
    features: ["Localized UAE catalog", "Corporate catalog requests", "Reseller program portals", "Market-specific navigation"],
    featuresAr: ["كتالوج مخصص للإمارات", "طلبات كتالوج للشركات", "بوابات لبرنامج الموزعين", "تصفح مخصص للسوق"],
    businessValue: ["Increased UAE market share", "Better corporate lead generation", "Targeted storefront presentation"],
    businessValueAr: ["زيادة حصة السوق في الإمارات", "جلب عملاء شركات أفضل", "تقديم واجهة موجهة بفعالية"],
    relatedProjects: ["eventgift-egypt"],
    screenshots: [
      "/demo/projects/eventgift-uae/home.webp",
      "/demo/projects/eventgift-uae/home.webp",
      "/demo/projects/eventgift-uae/landing-page.webp",
      "/demo/projects/eventgift-uae/header.webp",
      "/demo/projects/eventgift-uae/header2.webp",
      "/demo/projects/eventgift-uae/header3.webp",
      "/demo/projects/eventgift-uae/about-us.webp",
      "/demo/projects/eventgift-uae/shop.webp",
      "/demo/projects/eventgift-uae/gift-items.webp",
      "/demo/projects/eventgift-uae/singrl-prodcut-page.webp",
      "/demo/projects/eventgift-uae/cart.webp",
      "/demo/projects/eventgift-uae/checkout.webp",
      "/demo/projects/eventgift-uae/get-catalog.webp",
      "/demo/projects/eventgift-uae/reseller-program.webp",
    ],
    liveUrl: "https://eventgift.net",
    isFeatured: false,
    isPrivate: false,
    status: "case-study",
  },
  {
    slug: "eventgift-egypt",
    title: "EventGift Egypt — Storefront Case Study",
    titleAr: "ايفنت جيفت مصر — واجهة المتجر",
    type: ["woocommerce", "wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "E-COMMERCE · CORPORATE GIFTING",
    goal: ["Localization", "Sales"],
    summary: "The specialized Egyptian storefront for EventGift, featuring distinct categories, robust B2B portal options, and a complete localized checkout flow.",
    summaryAr: "الواجهة المخصصة لسوق مصر لمنصة ايفنت جيفت، مع تصنيفات فريدة وخيارات قوية لبوابة الشركات وتجربة دفع وإتمام طلب محلية بالكامل.",
    problem: "The Egyptian market required a distinct product offering, custom account areas, and sustainable gifting collections.",
    problemAr: "تطلب السوق المصري عرض منتجات مميز ومناطق حسابات مخصصة ومجموعات هدايا مستدامة.",
    solution: "We deployed a dedicated Egyptian branch on the platform with comprehensive tracking, tailored accounts, and a unique product lineup.",
    solutionAr: "أطلقنا فرعًا مخصصًا لمصر على المنصة مع تتبع شامل وحسابات مخصصة ومجموعة منتجات فريدة.",
    role: ["WordPress / WooCommerce Developer"],
    roleAr: ["مطور WordPress / WooCommerce"],
    stack: ["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript"],
    features: ["Localized Egypt catalog", "Order tracking & sales centers", "Wishlist and product comparison", "Sustainable gifting category"],
    featuresAr: ["كتالوج مخصص لمصر", "تتبع الطلبات ومراكز مبيعات", "قائمة أمنيات ومقارنة منتجات", "تصنيف هدايا مستدامة"],
    businessValue: ["Stronger local brand presence", "Streamlined local order flow", "Effective B2B integration"],
    businessValueAr: ["حضور أقوى للعلامة التجارية محليًا", "تسلسل طلبات محلي أكثر سلاسة", "ربط فعال مع حسابات الشركات"],
    relatedProjects: ["eventgift-uae"],
    screenshots: [
      "/demo/projects/eventgift-egypt/homepage-full.webp",
      "/demo/projects/eventgift-egypt/homepage-full.webp",
      "/demo/projects/eventgift-egypt/header.webp",
      "/demo/projects/eventgift-egypt/01-category-gift-category-gifts-for-events-full.webp",
      "/demo/projects/eventgift-egypt/14-unknown-sustainable-gifts-full.webp",
      "/demo/projects/eventgift-egypt/15-unknown-business-office-full.webp",
      "/demo/projects/eventgift-egypt/shop-01-product-before-add-full.webp",
      "/demo/projects/eventgift-egypt/02-product-product-ele-cardy-full.webp",
      "/demo/projects/eventgift-egypt/03-product-product-bamfelt-full.webp",
      "/demo/projects/eventgift-egypt/04-product-product-ring-power-full.webp",
      "/demo/projects/eventgift-egypt/12-unknown-compare-full.webp",
      "/demo/projects/eventgift-egypt/13-unknown-my-wishlist-full.webp",
      "/demo/projects/eventgift-egypt/shop-04-cart-full.webp",
      "/demo/projects/eventgift-egypt/shop-05-checkout-full.webp",
      "/demo/projects/eventgift-egypt/07-unknown-order-tracking-full.webp",
      "/demo/projects/eventgift-egypt/11-unknown-my-account-full.webp",
      "/demo/projects/eventgift-egypt/09-unknown-sales-center-full.webp",
      "/demo/projects/eventgift-egypt/08-unknown-online-meeting-full.webp",
      "/demo/projects/eventgift-egypt/10-unknown-guidelines-how-to-use-our-b2b-portal-full.webp",
      "/demo/projects/eventgift-egypt/05-other-blog-full.webp",
    ],
    liveUrl: "https://eg.eventgift.net",
    isFeatured: false,
    isPrivate: false,
    status: "case-study",
  },

  {
    slug: "eventgift-saudi",
    title: "EventGift Saudi Arabia — Storefront Case Study",
    titleAr: "ايفنت جيفت السعودية — واجهة المتجر",
    type: ["woocommerce", "wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "E-COMMERCE · CORPORATE GIFTING",
    goal: ["Localization", "Sales"],
    summary: "The tailored Saudi Arabian storefront for EventGift, bringing team gifts, sustainable options, and dedicated account management features to the Saudi market.",
    summaryAr: "الواجهة المخصصة لسوق السعودية لمنصة ايفنت جيفت، توفر هدايا للفرق وخيارات هدايا مستدامة وميزات مخصصة لإدارة الحسابات في السوق السعودي.",
    problem: "The Saudi market demanded specific corporate gifting experiences, including dedicated landing pages and unique category focuses like 'Gifts for Team'.",
    problemAr: "تطلب السوق السعودي تجارب مخصصة لهدايا الشركات، بما فيها صفحات هبوط وتصنيفات مخصصة مثل 'هدايا لفريق العمل'.",
    solution: "A highly customized storefront was developed offering tailored checkout, dedicated portals for account tracking, and localized pages.",
    solutionAr: "تم تطوير واجهة متجر مخصصة جداً توفر إتمام طلب محلي وبوابات متخصصة لتتبع الحسابات وصفحات متناسبة مع السوق.",
    role: ["WordPress / WooCommerce Developer"],
    roleAr: ["مطور WordPress / WooCommerce"],
    stack: ["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript"],
    features: ["Localized Saudi catalog", "Team gifts category", "Order tracking portals", "Dedicated landing pages"],
    featuresAr: ["كتالوج مخصص للسعودية", "تصنيف هدايا الفريق", "بوابات تتبع الطلبات", "صفحات هبوط مخصصة"],
    businessValue: ["Enhanced regional engagement", "Optimized B2B conversion", "Better corporate tracking"],
    businessValueAr: ["تعزيز التفاعل في المنطقة", "تحسين تحويل المبيعات للشركات", "تتبع أفضل لطلبات الشركات"],
    relatedProjects: ["eventgift-uae", "eventgift-egypt"],
    screenshots: [
      "/demo/projects/eventgift-saudi/homepage-full.webp",
      "/demo/projects/eventgift-saudi/homepage-full.webp",
      "/demo/projects/eventgift-saudi/landing-page.webp",
      "/demo/projects/eventgift-saudi/hedaer1.webp",
      "/demo/projects/eventgift-saudi/hedaer2.webp",
      "/demo/projects/eventgift-saudi/01-category-gift-category-gifts-for-team-full.webp",
      "/demo/projects/eventgift-saudi/15-unknown-gift-category-sustainable-gifts-full.webp",
      "/demo/projects/eventgift-saudi/single-page.webp",
      "/demo/projects/eventgift-saudi/add-to-caart.webp",
      "/demo/projects/eventgift-saudi/checkout.webp",
      "/demo/projects/eventgift-saudi/10-unknown-order-tracking-full.webp",
      "/demo/projects/eventgift-saudi/14-unknown-my-account-full.webp",
      "/demo/projects/eventgift-saudi/11-unknown-sales-center-full.webp",
      "/demo/projects/eventgift-saudi/13-unknown-guidelines-how-to-use-our-b2b-portal-full.webp",
      "/demo/projects/eventgift-saudi/12-unknown-online-meeting-full.webp",
      "/demo/projects/eventgift-saudi/06-other-more-about-us-full.webp",
      "/demo/projects/eventgift-saudi/08-other-blog-full.webp",
      "/demo/projects/eventgift-saudi/09-other-privacy-full.webp",
      "/demo/projects/eventgift-saudi/log-out.webp"
    ],
    liveUrl: "https://sa.eventgift.net",
    isFeatured: false,
    isPrivate: false,
    status: "case-study"
  },

  {
    slug: "botella",
    title: "Botella Water Bottles Store",
    titleAr: "متجر زجاجات المياه بوتيلا Botella",
    type: ["woocommerce","wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "DTC E-COMMERCE · DRINKWARE",
    goal: ["Performance", "Sales"],
    summary: "A brand-led drinkware storefront built around product collections, variant-rich shopping, and a cleaner direct-to-consumer browsing experience.",
    summaryAr: "متجر تسوق مباشر للمستهلكين (DTC) يتميز بتصميمه العصري لتقديم منتجات زجاجات المياه الرياضية الأنيقة وحلول الشراء السريعة.",
    problem: "The project needed a clearer storefront experience that helped users browse products, discover key categories, and move through the purchase journey with less friction.",
    problemAr: "كان المشروع يحتاج إلى تجربة متجر أوضح تساعد المستخدم على تصفح المنتجات بسهولة، الوصول للأقسام المهمة بسرعة، وتحسين رحلة الشراء بدون تعقيد.",
    solution: "Botella is a Direct-to-Consumer (DTC) storefront that bridges lifestyle branding with efficient commerce loops. The experience focuses on product variant browsing and seamless collections, enabling customers to discover the perfect drinkware product through a high-performance, mobile-first interface.",
    solutionAr: "بناء متجر إلكتروني متوافق مع الهواتف الذكية يركز على سهولة اختيار خيارات المنتجات وإتمام الطلب بسرعة لرفع كفاءة التسويق للمستهلك النهائي.",
    role: ["Lead Developer"],
    stack: ["WordPress","WooCommerce","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/botella/02-home-page-en.webp",
      "/demo/projects/botella/01-header-en.webp",
      "/demo/projects/botella/02-home-page-en.webp",
      "/demo/projects/botella/03-shop-en.webp",
      "/demo/projects/botella/04-sinagkle-prodcut-en.webp",
      "/demo/projects/botella/05-botella-kits-en.webp",
      "/demo/projects/botella/06-corporate-orders-en.webp",
      "/demo/projects/botella/07-botella-rewards-en.webp",
      "/demo/projects/botella/08-about-us-en.webp",
      "/demo/projects/botella/09-delivery-&-return-policies-en.webp",
      "/demo/projects/botella/10-contact-us-en.webp",
      "/demo/projects/botella/11-my-account-en.webp",
      "/demo/projects/botella/12-checkout-en.webp",
      "/demo/projects/botella/13-الهيدر-ar.webp",
      "/demo/projects/botella/14-الرئيسية-ar.webp",
      "/demo/projects/botella/15-المتجر-ar.webp",
      "/demo/projects/botella/16-صفحة-المنتج-ar.webp",
      "/demo/projects/botella/17-7مجموعه-الاكواب-ar.webp",
      "/demo/projects/botella/18-طلبات-الشركات-ar.webp",
      "/demo/projects/botella/19-نقاط-بوتيلا-ar.webp",
      "/demo/projects/botella/20-معلومات-عنا-ar.webp",
      "/demo/projects/botella/21-سياسات-التوصيل-والإرجاع-ar.webp",
      "/demo/projects/botella/22-تواصل-معنا-ar.webp",
      "/demo/projects/botella/23-حسابي-ar.webp",
      "/demo/projects/botella/24-اتمام-الطلب-ar.webp"
    ],
    liveUrl: "https://gobotella.com/",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "techmart",
    title: "Techmart Apple Retail eCommerce Experience",
    titleAr: "متجر تيك مارت لمنتجات آبل Techmart",
    type: ["woocommerce","wordpress"] as WorkType[],
    category: "WordPress / WooCommerce",
    categoryAr: "ووردبريس / وكومرس",
    industry: "E-COMMERCE · APPLE RETAIL",
    goal: ["Performance", "Sales"],
    summary: "An Apple-focused retail storefront designed around structured product discovery, offer-led merchandising, and smoother purchase journeys.",
    summaryAr: "تجربة تسوق إلكترونية متطورة مخصصة لبيع منتجات آبل بالتجزئة، تعتمد على التصفح السلس والحلول التمويلية المبتكرة.",
    problem: "The project needed a clearer storefront experience that helped users browse products, discover key categories, and move through the purchase journey with less friction.",
    problemAr: "كان المشروع يحتاج إلى تجربة متجر أوضح تساعد المستخدم على تصفح المنتجات بسهولة، الوصول للأقسام المهمة بسرعة، وتحسين رحلة الشراء بدون تعقيد.",
    solution: "Techmart is a high-performance Apple-centric storefront built to handle high-frequency retail transactions. The platform integrates specialized trade-in and installment modules, providing a premium shopping experience that mirrors Apple's retail standards in the Middle East.",
    solutionAr: "تطوير متجر إلكتروني فائق الأداء لمنتجات آبل يدمج بين أنظمة الاستبدال والتقسيط المخصصة لتقديم تجربة تسوق راقية تماثل معايير آبل العالمية.",
    role: ["Lead Developer"],
    stack: ["WordPress","WooCommerce","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/projects/techmart/cover.png",
      "/projects/techmart/homepage.png",
      "/projects/techmart/shop.png",
      "/projects/techmart/single-prodcut.png",
      "/projects/techmart/cart.png",
      "/projects/techmart/checkout.png",
      "/projects/techmart/Installments.png",
      "/projects/techmart/trade-in.png",
      "/projects/techmart/offers.png",
      "/projects/techmart/my-account.png",
      "/projects/techmart/about-us.png",
      "/projects/techmart/contactus.png"
    ],
    liveUrl: "https://techmartme.com/",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "ashhalan",
    title: "Ashhalan Group Corporate Brand Platform",
    titleAr: "مجموعة أشهلان القابضة Ashhalan",
    type: ["nextjs"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "CORPORATE · GROUP PLATFORM",
    goal: ["Performance", "Sales"],
    summary: "A corporate group platform built to present a diversified business portfolio with clearer structure, stronger trust signals, and subsidiary visibility.",
    summaryAr: "منصة رقمية موحدة لمجموعة أشهلان القابضة لعرض أعمالها المتنوعة وهيكلها التنظيمي وبناء الثقة لدى المستثمرين والعملاء.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "Ashhalan Group required a unified Brand Architecture that could represent multiple business units under one cohesive digital umbrella. The platform emphasizes executive-level trust, high-quality corporate storytelling, and effortless subsidiary discoverability for global stakeholders.",
    solutionAr: "تصميم وتطوير بوابة رقمية متكاملة لربط الشركات التابعة للمجموعة تحت هوية بصرية وتعبيرية موحدة تسلط الضوء على نقاط القوة والخدمات المشتركة.",
    role: ["Lead Developer"],
    stack: ["Next.js","HTML","CSS"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/projects/ashhalan/section-1.png",
      "/projects/ashhalan/home-page.png",
      "/projects/ashhalan/home-page-ar.png",
      "/projects/ashhalan/section-1.png",
      "/projects/ashhalan/section-1-ar.png",
      "/projects/ashhalan/section-2.png",
      "/projects/ashhalan/section-2-ar.png",
      "/projects/ashhalan/section-3.png",
      "/projects/ashhalan/section-3-ar.png",
      "/projects/ashhalan/section-4.png",
      "/projects/ashhalan/section-4-ar.png",
      "/projects/ashhalan/section-5.png",
      "/projects/ashhalan/section-5-ar.png",
      "/projects/ashhalan/section-6-ar.png"
    ],
    liveUrl: "https://ashhalan.com",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },



  {
    slug: "nora24jewelry",
    title: "Nora 24 Luxury Jewelry",
    titleAr: "مجوهرات نورا 24 الفاخرة Nora 24",
    type: ["woocommerce","wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "E-COMMERCE · JEWELRY",
    goal: ["Performance", "Sales"],
    summary: "An elegant luxury storefront focusing on product collections, high-value visual merchandising, and seamless retail discovery.",
    summaryAr: "متجر إلكتروني راقٍ لعلامة مجوهرات فاخرة يعتمد على العرض البصري الجذاب والتصفح السلس للقطع الفنية النادرة وسهولة الطلب.",
    problem: "The project needed a clearer storefront experience that helped users browse products, discover key categories, and move through the purchase journey with less friction.",
    problemAr: "كان المشروع يحتاج إلى تجربة متجر أوضح تساعد المستخدم على تصفح المنتجات بسهولة، الوصول للأقسام المهمة بسرعة، وتحسين رحلة الشراء بدون تعقيد.",
    solution: "The Nora 24 digital experience handles jewelry product discovery through refined category logic, high-quality asset presentation, and an intuitive direct-to-consumer flow. The platform is optimized for luxury visual storytelling, ensuring every piece of jewelry is presented with maximum aesthetic impact.",
    solutionAr: "تصميم واجهة متجر جذابة تعكس الهوية الراقية للمجوهرات الفاخرة مع تبسيط وتأمين خطوات الشراء لضمان تجربة مميزة للعملاء.",
    role: ["Lead Developer"],
    stack: ["WordPress","WooCommerce","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
        "/projects/nora24jewelry/cover.png",
        "/projects/nora24jewelry/home.png",
        "/projects/nora24jewelry/shop.png",
        "/projects/nora24jewelry/prodcut.png",
        "/projects/nora24jewelry/cart.png",
        "/projects/nora24jewelry/checkout.png",
        "/projects/nora24jewelry/about.png",
        "/projects/nora24jewelry/contact.png"
      ],
    liveUrl: "https://nora24jewelry.com",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "gobeagency",
    title: "Gobe Agency Corporate Portfolio",
    titleAr: "وكالة غوبي الإبداعية Gobe Agency",
    type: ["wordpress"] as WorkType[],
    category: "Agency / Creative / Portfolio",
    categoryAr: "وكالة / إبداعي / بورتفوليو",
    industry: "AGENCY · CREATIVE",
    goal: ["Performance", "Sales"],
    summary: "A refined agency portfolio emphasizing creative services, structured case studies, and corporate branding authority.",
    summaryAr: "معرض أعمال ومنصة رقمية لوكالة إبداعية تسلط الضوء على الخدمات البصرية والحملات التسويقية وقصص النجاح للعملاء.",
    problem: "The project needed a clearer visual presentation that highlighted creative services, work, and identity in a professional, easily navigable format.",
    problemAr: "كان المشروع يحتاج إلى طريقة عرض بصرية أوضح تبرز الخدمات، الأعمال، وطبيعة الهوية الإبداعية بشكل احترافي وسهل التصفح.",
    solution: "The Gobe Agency platform is architected to establish creative authority in the digital agency space. It focuses on presenting comprehensive service hierarchies alongside proven work, structured in a way that appeals to high-tier B2B clients looking for modern branding and performance-led digital solutions.",
    solutionAr: "تطوير منصة تبرز الهوية البصرية للوكالة وتوفر وصولًا سهلًا لخدماتها وسجل أعمالها المتميز لجذب شريحة جديدة من العملاء التجاريين.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/gobeagency/cover.png",
      "/demo/projects/gobeagency/preview-01.png",
      "/demo/projects/gobeagency/preview-02.png"
    ],
    liveUrl: "https://gobeagency.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "genedyeg",
    title: "Genedy Group Construction Platform",
    titleAr: "مجموعة الجنيدي للمقاولات Genedy Group",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "CORPORATE · CONSTRUCTION",
    goal: ["Performance", "Sales"],
    summary: "A corporate profile structured to present large-scale construction sectors, landmark projects, and institutional trust.",
    summaryAr: "منصة رقمية لشركة مقاولات وإنشاءات رائدة لعرض مشاريعها الضخمة، وهيكلها التنظيمي، وبناء الثقة في قطاع البناء.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "Developed to reflect the immense scale of Genedy Construction, this platform structures vast arrays of operational data—from engineering sectors to landmark projects—into an easily navigable corporate overview. The user journey is tailored for global stakeholders seeking evidence of execution capacity and institutional reliability.",
    solutionAr: "بناء واجهة مستخدم احترافية وتصنيف المشاريع الإنشائية لقطاعات متعددة ليسهل على الشركاء والمستثمرين تصفح سابقة أعمال الشركة الضخمة.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
        "/projects/genedyeg/cover.png",
        "/projects/genedyeg/home.png",
        "/projects/genedyeg/about.png",
        "/projects/genedyeg/Chairman's Message - Construction.png",
        "/projects/genedyeg/sectors.png",
        "/projects/genedyeg/GENEDY CONSTRUCTION - Construction.png",
        "/projects/genedyeg/projects.png",
        "/projects/genedyeg/single prodcut.png",
        "/projects/genedyeg/Careers - Construction.png",
        "/projects/genedyeg/single job caeers.png",
        "/projects/genedyeg/News Update - Construction.png",
        "/projects/genedyeg/- Construction.png"
      ],
    liveUrl: "https://genedyeg.com",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "a2mkw",
    title: "A2M Digital Marketing Agency",
    titleAr: "وكالة التسويق الرقمي A2M بالكويت",
    type: ["wordpress"] as WorkType[],
    category: "Agency / Creative / Portfolio",
    categoryAr: "وكالة / إبداعي / بورتفوليو",
    industry: "AGENCY · DIGITAL MARKETING",
    goal: ["Performance", "Sales"],
    summary: "A digital marketing agency platform focusing on service comprehensiveness, digital presence, and high-performance campaign management.",
    summaryAr: "منصة متكاملة لوكالة تسويق رقمي تسلط الضوء على الخدمات الإعلانية وحلول تحسين محركات البحث وحملات التواصل الاجتماعي.",
    problem: "The project needed a clearer visual presentation that highlighted creative services, work, and identity in a professional, easily navigable format.",
    problemAr: "كان المشروع يحتاج إلى طريقة عرض بصرية أوضح تبرز الخدمات، الأعمال، وطبيعة الهوية الإبداعية بشكل احترافي وسهل التصفح.",
    solution: "Designed to effectively market the marketers, the A2M platform details the agency's proficiency across multiple digital verticals including SEO, PPC, and Social Media Management. The hierarchy is organized to lead B2B visitors directly toward service comprehensiveness and clear conversion pathways in the Kuwait market.",
    solutionAr: "تطوير موقع إلكتروني يعكس خبرات الوكالة في مجالات التسويق المختلفة مع توفير قنوات واضحة وسريعة لطلب الاستشارات والخدمات.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
        "/projects/a2mkw/cover.png",
        "/projects/a2mkw/000_ar.png",
        "/projects/a2mkw/001_ar_contact.png",
        "/projects/a2mkw/002_ar_solutions.png",
        "/projects/a2mkw/003_ar_portfolio_paydo.png",
        "/projects/a2mkw/004_ar_portfolio_nuc.png",
        "/projects/a2mkw/005_ar_portfolio_patients-helping-fund-society.png",
        "/projects/a2mkw/006_ar_blogs_the-correct-way-of-content-creation-using-ai-in-2026.png",
        "/projects/a2mkw/007_ar_blogs_9-e-commerce-strategies-to-double-your-sales-in-2025.png",
        "/projects/a2mkw/008_ar_blogs_professional-website-design-the-difference-between-a-website-that-sells-and-one-that-goes-unseen.png",
        "/projects/a2mkw/009_ar_blogs.png"
      ],
    liveUrl: "https://a2mkw.com",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "nuc-kw",
    title: "National United Co. Profile",
    titleAr: "الشركة الوطنية المتحدة National United Co.",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "CORPORATE · INSTITUTIONAL",
    goal: ["Performance", "Sales"],
    summary: "An institutional presentation for National United Co., emphasizing structural reliability, mission alignment, and industrial services.",
    summaryAr: "موقع تعريفي مؤسسي للشركة الوطنية المتحدة يعزز الهوية التجارية والخدمات الصناعية والتجارية للمجموعة في السوق الكويتي.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "National United Co. utilizes this platform to present institutional maturity and structural reliability in the industrial sector. The site functions as an executive-level overview detailing comprehensive operational capabilities, industrial scale, and evidence of significant project capabilities within Kuwait.",
    solutionAr: "بناء موقع متكامل يستعرض مجالات عمل الشركة الصناعية والخدمية بطريقة هيكلية تدعم التواصل المباشر مع العملاء والشركاء.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/nuc-kw/cover.png",
      "/demo/projects/nuc-kw/preview-01.png",
      "/demo/projects/nuc-kw/preview-02.png"
    ],
    liveUrl: "https://nuc-kw.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "tbinnovation",
    title: "TB Innovation Tech Agency",
    titleAr: "وكالة تي بي للحلول الرقمية TB Innovation",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "AGENCY · TECHNOLOGY",
    goal: ["Performance", "Sales"],
    summary: "A technology-focused agency platform prioritizing digital innovation, technical service methodologies, and innovation cases.",
    summaryAr: "بوابة رقمية تعرض خدمات التحول الرقمي والتطوير التقني وحلول الأعمال الذكية التي تقدمها وكالة TB Innovation.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "Targeted directly at modern corporate needs, the TB Innovation platform highlights robust digital transformation solutions. The experience acts as a lead generation tool that clearly articulates technical stacks, innovative methodologies, and demonstrated success records across multiple technology verticals.",
    solutionAr: "تصميم وتطوير موقع يعكس الابتكار التقني ويوضح آليات تقديم الخدمات والحلول البرمجية التي تلبي الاحتياجات الحديثة للمؤسسات.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
        "/projects/tbinnovation/cover.png",
        "/projects/tbinnovation/home.png",
        "/projects/tbinnovation/الرئيسيه.png",
        "/projects/tbinnovation/aboutus.png",
        "/projects/tbinnovation/عن الشركة.png",
        "/projects/tbinnovation/Sevices.png",
        "/projects/tbinnovation/الخدمات.png",
        "/projects/tbinnovation/Industries.png",
        "/projects/tbinnovation/الصناعات.png",
        "/projects/tbinnovation/Contacts.png",
        "/projects/tbinnovation/اتصل بنا.png"
      ],
    liveUrl: "https://tbinnovation.net",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "mediaandmore",
    title: "Media & More Production",
    titleAr: "وكالة ميديا أند مور للإنتاج الإعلامي Media & More",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "AGENCY · MEDIA PRODUCTION",
    goal: ["Performance", "Sales"],
    summary: "A media production agency platform highlighting multimedia services, production trust, and visual capabilities.",
    summaryAr: "موقع رسمي يعرض خدمات الإنتاج الفني وتصوير الفيديو وحلول التسويق البصري بجودة ممتازة لتلبية احتياجات الشركات والعلامات.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "This platform serves as the digital front door for Media & More, focusing inherently on high-end visual production capabilities. By mapping out extensive related services like video production and content creation, the hierarchy perfectly routes media seekers directly to proof of visual excellence.",
    solutionAr: "بناء معرض أعمال مرئي وتفاعلي يستعرض المشروعات السابقة وجودة الإنتاج لتسهيل عملية طلب خدمات التصوير والمونتاج وتوليد العملاء المهتمين.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/mediaandmore/cover.png",
      "/demo/projects/mediaandmore/preview-01.png",
      "/demo/projects/mediaandmore/preview-02.png"
    ],
    liveUrl: "https://mediaandmore.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "pxls-creative",
    title: "PXLS Creative Studio",
    titleAr: "استوديو بيكسلز الإبداعي PXLS Creative",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "AGENCY · CREATIVE STUDIO",
    goal: ["Performance", "Sales"],
    summary: "A creative studio platform prioritizing visual design storytelling, methodology, and designer-led branding.",
    summaryAr: "موقع تعريفي خاص باستوديو تصميم وبناء هوية تجارية يركز على سرد القصص البصرية والمنهجيات الإبداعية الراقية.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "PXLS Creative operates natively in the visual and branding spaces. This portfolio project reflects that aesthetic orientation by maintaining a clean, premium interface designed to immediately communicate design excellence, branding authority, and visual storytelling capabilities.",
    solutionAr: "تطوير موقع مبسط بهيكل أنيق يعكس الهوية البصرية الفريدة للاستوديو ويوفر تجربة بصرية غامرة لاستعراض منهجيات التصميم المتبعة.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/pxls-creative/cover.png",
      "/demo/projects/pxls-creative/preview-01.png",
      "/demo/projects/pxls-creative/preview-02.png"
    ],
    liveUrl: "https://pxls-creative.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },


  {
    slug: "ashhalanksa",
    title: "Ashhalan KSA Storefront",
    titleAr: "متجر أشهلان للمستلزمات الصناعية - السعودية Ashhalan KSA",
    type: ["woocommerce","wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "E-COMMERCE · SUPPLY STORE",
    goal: ["Performance", "Sales"],
    summary: "A high-performance KSA-specific retail storefront for industrial supplies, focusing on catalog volume and rapid procurement.",
    summaryAr: "منصة متجر إلكتروني متكاملة لعرض وتجارة المعدات والمستلزمات الصناعية في المملكة العربية السعودية تدعم الكتالوجات الضخمة والشراء السريع.",
    problem: "The project needed a clearer storefront experience that helped users browse products, discover key categories, and move through the purchase journey with less friction.",
    problemAr: "كان المشروع يحتاج إلى تجربة متجر أوضح تساعد المستخدم على تصفح المنتجات بسهولة، الوصول للأقسام المهمة بسرعة، وتحسين رحلة الشراء بدون تعقيد.",
    solution: "Ashhalan KSA is a dedicated storefront for the Saudi Arabian industrial and supply market. The platform is architected to handle complex catalogs with thousands of items, providing a robust search-and-discovery engine tailored for high-volume B2B and retail industrial stakeholders.",
    solutionAr: "بناء متجر إلكتروني قوي قادر على معالجة آلاف المنتجات والربط مع أنظمة الشراء اللوجستية للمؤسسات والشركات الصناعية في السعودية.",
    role: ["Lead Developer"],
    stack: ["WordPress","WooCommerce","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/ashhalanksa/cover.png",
      "/demo/projects/ashhalanksa/preview-01.png",
      "/demo/projects/ashhalanksa/preview-02.png"
    ],
    liveUrl: "https://ashhalanksa.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "ashhalanlogistics",
    title: "Ashhalan Logistics",
    titleAr: "أشهلان للخدمات اللوجستية Ashhalan Logistics",
    type: ["wordpress"] as WorkType[],
    category: "Services / Operations",
    categoryAr: "خدمات / عمليات",
    industry: "LOGISTICS · SERVICE PLATFORM",
    goal: ["Performance", "Sales"],
    summary: "A clean, high-performance service presentation platform for Ashhalan Group’s international logistics and supply chain operations.",
    summaryAr: "بوابة تعريفية وخدمية لأعمال النقل والخدمات اللوجستية لمجموعة أشهلان، تسهل التعرف على خدمات التخزين وسلاسل الإمداد العالمية.",
    problem: "The project needed to organize services and core information in a way that made it easy for clients to understand the offering and contact or decide quickly.",
    problemAr: "كان المشروع يحتاج إلى تنظيم الخدمات والمعلومات الأساسية بطريقة تسهّل على العميل فهم الخدمة والتواصل أو اتخاذ القرار بسرعة.",
    solution: "Ashhalan Logistics is a service-led platform designed to present global supply chain capabilities. The experience focuses on logistics architecture, surfacing complex freight and storage service hierarchies, and establishing executive-level trust through streamlined business-to-business content structures.",
    solutionAr: "تصميم واجهة مستخدم واضحة تبرز هيكل سلاسل الإمداد وخطوط النقل البري والبحري، وتوفر للعملاء فرصة طلب عروض الأسعار بسهولة.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/ashhalanlogistics/cover.png",
      "/demo/projects/ashhalanlogistics/preview-01.png",
      "/demo/projects/ashhalanlogistics/preview-02.png"
    ],
    liveUrl: "https://ashhalanlogistics.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "ashhalancarrental",
    title: "Ashhalan Car Rental Platform",
    titleAr: "منصة أشهلان لتأجير السيارات Ashhalan Car Rental",
    type: ["wordpress"] as WorkType[],
    category: "Services / Operations",
    categoryAr: "خدمات / عمليات",
    industry: "MOBILITY · CAR RENTAL PLATFORM",
    goal: ["Performance", "Sales"],
    summary: "A comprehensive mobility platform for vehicle rentals, featuring high-volume fleet browsing, structured rental plan selection, and localized booking flows.",
    summaryAr: "موقع خدمة وتأجير سيارات يعرض أساطيل المركبات المتوفرة وحلول التأجير المتنوعة للأفراد والشركات بطريقة مبسطة وجذابة.",
    problem: "The project needed to organize services and core information in a way that made it easy for clients to understand the offering and contact or decide quickly.",
    problemAr: "كان المشروع يحتاج إلى تنظيم الخدمات والمعلومات الأساسية بطريقة تسهّل على العميل فهم الخدمة والتواصل أو اتخاذ القرار بسرعة.",
    solution: "Developed to handle complex mobility requirements, the Ashhalan Car Rental platform structures vast vehicle inventories into an intuitive browsing experience. The interface focuses on booking intent, providing stakeholders with clear vehicle attributes, transparent rental plan comparisons, and a streamlined path to service engagement.",
    solutionAr: "تصميم وتطوير مستودع سيارات رقمي سهل التصفح والتصفية حسب نوع السيارة والفئة، لتسهيل اتخاذ قرار الاستئجار والتواصل المباشر.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/ashhalancarrental/cover.png",
      "/demo/projects/ashhalancarrental/preview-01.png",
      "/demo/projects/ashhalancarrental/preview-02.png"
    ],
    liveUrl: "https://ashhalancarrental.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "mahmmoud-gomaa",
    title: "Mahmmoud Gomaa Filmmaker Portfolio",
    titleAr: "معرض أعمال المخرج محمود جمعة",
    type: ["wordpress"] as WorkType[],
    category: "Agency / Creative / Portfolio",
    categoryAr: "وكالة / إبداعي / بورتفوليو",
    industry: "MEDIA · FILMMAKING",
    goal: ["Performance", "Sales"],
    summary: "A bold, high-contrast digital portfolio for Mahmmoud Gomaa, highlighting cinematic work, production reels, and creative services.",
    summaryAr: "منصة فنية مميزة للمخرج وصانع الأفلام محمود جمعة تستعرض لقطات سينمائية وخدمات الإنتاج الفني وتصميم الفيديوهات الإبداعية.",
    problem: "The project needed a clearer visual presentation that highlighted creative services, work, and identity in a professional, easily navigable format.",
    problemAr: "كان المشروع يحتاج إلى طريقة عرض بصرية أوضح تبرز الخدمات، الأعمال، وطبيعة الهوية الإبداعية بشكل احترافي وسهل التصفح.",
    solution: "Designed to reflect a modern filmmaking aesthetic, this portfolio utilizes a high-energy yellow and black palette to showcase Mahmmoud Gomaa's cinematic expertise. The platform integrates video-centric galleries and structured service categories, providing a high-impact visual narrative. Experience the complete creative journey also documented on Behance.",
    solutionAr: "بناء واجهة بصرية داكنة ومريحة للعين تبرز دقة وجودة الفيديوهات والأفلام المنتجة، مع توجيه سهل نحو قنوات التواصل ومعرض بيهانس.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/mahmmoud-gomaa/cover.png",
      "/demo/projects/mahmmoud-gomaa/preview-01.png",
      "/demo/projects/mahmmoud-gomaa/preview-02.png"
    ],
    liveUrl: "https://mahmmoud-gomaa.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "mashora",
    title: "Mashora Business Consultation",
    titleAr: "منصة مشورة للاستشارات وإدارة الأعمال Mashora",
    type: ["wordpress"] as WorkType[],
    category: "Education / Content / Community",
    categoryAr: "تعليم / محتوى / مجتمع",
    industry: "CONSULTING · BUSINESS SERVICES",
    goal: ["Performance", "Sales"],
    summary: "A professional service platform for business consultation and strategic planning, focusing on expertise presentation and client engagement.",
    summaryAr: "بوابة تعريفية وخدمية متخصصة في تقديم الاستشارات الإدارية وحلول تطوير المشاريع وتهيئة الشركات الناشئة.",
    problem: "The project needed to organize content, programs, or sections in a clear way that helped visitors understand value and reach required information easily.",
    problemAr: "كان المشروع يحتاج إلى تنظيم المحتوى والبرامج أو الأقسام بطريقة واضحة تساعد الزائر على فهم القيمة والوصول للمعلومة المطلوبة بسهولة.",
    solution: "Mashora provides a structured digital presence for business advisory services. The platform emphasizes professional trust, detailing a comprehensive suite of consulting services from strategic management to operational efficiency. Designed to bridge the gap between high-level expertise and client needs through a clean, conversion-ready interface.",
    solutionAr: "بناء هيكل خدمات متكامل يستعرض خبرات المستشارين الإداريين ومخرجات التدريب والتطوير، مع توفير سبل سهلة لحجز الجلسات الاستشارية.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/mashora/cover.png",
      "/demo/projects/mashora/preview-01.png",
      "/demo/projects/mashora/preview-02.png"
    ],
    liveUrl: "https://mashora.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "originals-hub",
    title: "Originals Hub WooCommerce Store",
    titleAr: "متجر أوريجينالز هاب للأزياء Originals Hub",
    type: ["woocommerce","wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "E-COMMERCE · FASHION & LIFESTYLE",
    goal: ["Performance", "Sales"],
    summary: "A high-performance WooCommerce storefront designed for seamless product discovery, featuring custom collection grids and a refined shopping experience.",
    summaryAr: "متجر إلكتروني مميز للأزياء والموضة مبني على ووكومرس يتميز بالتصفح السلس للعلامات التجارية وسهولة اختيار المقاسات والدفع.",
    problem: "The project needed a clearer storefront experience that helped users browse products, discover key categories, and move through the purchase journey with less friction.",
    problemAr: "كان المشروع يحتاج إلى تجربة متجر أوضح تساعد المستخدم على تصفح المنتجات بسهولة، الوصول للأقسام المهمة بسرعة، وتحسين رحلة الشراء بدون تعقيد.",
    solution: "Originals Hub is an e-commerce platform built to drive conversion through visual-first product presentation. The store integrates custom collections and a mobile-optimized shopping flow, ensuring a fluid journey from discovery to checkout. Explore the full technical breakdown and creative process documented on Behance.",
    solutionAr: "تطوير متجر سريع متوافق مع الهواتف ومخصص للأزياء، يعتمد على صور المنتجات الكبيرة وحلول الفلاتر الذكية لرفع كفاءة تصفح المجموعات.",
    role: ["Lead Developer"],
    stack: ["WordPress","WooCommerce","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/originals-hub/cover.png",
      "/demo/projects/originals-hub/preview-01.png",
      "/demo/projects/originals-hub/preview-02.png"
    ],
    liveUrl: "https://originals-hub.com",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "arcadia-digital",
    title: "Arcadia Digital Solutions",
    titleAr: "أركاديا الرقمية للحلول Arcadia Digital",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "DIGITAL AGENCY · ADVERTISING",
    goal: ["Performance", "Sales"],
    summary: "A robust service platform for Arcadia Digital, showcasing a comprehensive suite of digital marketing, advertising, and branding solutions.",
    summaryAr: "موقع شركة أركاديا الرقمية لعرض حلول التسويق الرقمي وتطوير العلامات التجارية وتصميم الاستراتيجيات الإعلانية المتكاملة.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "Arcadia Digital Solutions functions as a high-authority hub for digital excellence. The platform integrates complex service architectures and brand storytelling, utilizing WordPress and Elementor Pro to deliver a performant, scalable digital experience. Designed for high-tier corporate engagement, it emphasizes strategic depth and creative precision.",
    solutionAr: "بناء موقع متكامل باستخدام ووردبريس مع تنظيم أقسام الخدمات وحالات الدراسة لتسهيل إقناع الشركات الكبيرة بالتعاقد مع الوكالة.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/arcadia-digital/cover.png",
      "/demo/projects/arcadia-digital/preview-01.png",
      "/demo/projects/arcadia-digital/preview-02.png"
    ],
    liveUrl: "https://arcadia-digital.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "diwaniya",
    title: "Diwaniya Cultural Platform",
    titleAr: "منصة ديوانية الأربعاء الثقافية",
    type: ["wordpress"] as WorkType[],
    category: "Education / Content / Community",
    categoryAr: "تعليم / محتوى / مجتمع",
    industry: "COMMUNITY · CULTURAL HUB",
    goal: ["Performance", "Sales"],
    summary: "A refined digital showcase for Diwaniya Al-Arbe'a, focusing on community engagement, cultural storytelling, and session documentation.",
    summaryAr: "موقع لتوثيق الجلسات والندوات الثقافية واللقاءات الدورية لديوانية الأربعاء، وبناء صلة وصل تفاعلية مع المجتمع والمثقفين.",
    problem: "The project needed to organize content, programs, or sections in a clear way that helped visitors understand value and reach required information easily.",
    problemAr: "كان المشروع يحتاج إلى تنظيم المحتوى والبرامج أو الأقسام بطريقة واضحة تساعد الزائر على فهم القيمة والوصول للمعلومة المطلوبة بسهولة.",
    solution: "Developed to preserve and project traditional cultural values in a digital age, the Diwaniya platform bridges cultural heritage with modern interface design. The system documents recurring sessions, attendee analytics, and community impact through a clean, typography-led architecture. Designed for institutional trust, it provides a performant narrative for cultural stakeholders and participants.",
    solutionAr: "تطوير بوابة لتوثيق الفعاليات الأسبوعية وأسماء المتحدثين والموضوعات المطروحة بطريقة أرشيفية ممتازة لخدمة المثقفين والمتابعين.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/diwaniya/cover.png",
      "/demo/projects/diwaniya/preview-01.png",
      "/demo/projects/diwaniya/preview-02.png"
    ],
    liveUrl: "https://diwaniya.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "kuwait-arc",
    title: "Kuwait Arc Industrial Platform",
    titleAr: "منصة كويت آرك للصناعات الحديدية Kuwait Arc",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "INDUSTRIAL · MANUFACTURING",
    goal: ["Performance", "Sales"],
    summary: "A high-authority industrial platform for Kuwait Arc, showcasing over 50 years of excellence in stainless steel and aluminum fabrication.",
    summaryAr: "بوابة رقمية تعريفية لمصنع كويت آرك الرائد في تشكيل الحديد والألومنيوم والستانلس ستيل، تستعرض سوابق أعماله وخبراته الممتدة لعقود.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "Kuwait Arc's digital presence serves as a comprehensive catalog and capability showcase for the industrial manufacturing sector. The platform integrates deep product hierarchies, specialized service architectures, and institutional trust signals, documenting the company's legacy since 1969. Designed for B2B procurement and corporate engagement, it emphasizes precision engineering and professional reliability.",
    solutionAr: "بناء كتالوج رقمي للمنتجات والخدمات الصناعية لعرض قدرات المصنع الفنية والمعدات المستخدمة مع إتاحة سبل سريعة للتواصل وطلب التسعير.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/kuwait-arc/cover.png",
      "/demo/projects/kuwait-arc/preview-01.png",
      "/demo/projects/kuwait-arc/preview-02.png"
    ],
    liveUrl: "https://kuwait-arc.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "arabic-window",
    title: "Arabic Window Academy",
    titleAr: "أكاديمية نافذة اللغة العربية التعليمية",
    type: ["wordpress"] as WorkType[],
    category: "Education / Content / Community",
    categoryAr: "تعليم / محتوى / مجتمع",
    industry: "EDUCATION · ONLINE LEARNING",
    goal: ["Performance", "Sales"],
    summary: "A professional Islamic online academy for Arabic, Quran, and Islamic studies, featuring structured course discovery and high-authority education services.",
    summaryAr: "أكاديمية تعليمية متخصصة لتعليم اللغة العربية والقرآن الكريم لغير الناطقين بها، تتميز بتصنيف المناهج وسهولة حجز الدروس التعليمية.",
    problem: "The project needed to organize content, programs, or sections in a clear way that helped visitors understand value and reach required information easily.",
    problemAr: "كان المشروع يحتاج إلى تنظيم المحتوى والبرامج أو الأقسام بطريقة واضحة تساعد الزائر على فهم القيمة والوصول للمعلومة المطلوبة بسهولة.",
    solution: "Arabic Window Academy functions as a high-authority hub for online Islamic education. The platform integrates complex course taxonomies, multi-tier pricing structures, and educational resource discovery, delivering a streamlined enrollment flow for students worldwide. Designed for trust and academic excellence, it emphasizes specialized instruction and interactive learning architectures.",
    solutionAr: "بناء نظام تصفح مبسط للمستويات الدراسية والبرامج التعليمية وتسهيل حجز الجلسات وحلول الدفع للطلاب في مختلف أنحاء العالم.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/arabic-window/cover.png",
      "/demo/projects/arabic-window/preview-01.png",
      "/demo/projects/arabic-window/preview-02.png"
    ],
    liveUrl: "https://arabic-window.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "meshari-alali",
    title: "Meshari Al-Ali Engineering Consulting",
    titleAr: "مكتب مشاري العلي للاستشارات الهندسية",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "ENGINEERING · CONSULTING",
    goal: ["Performance", "Sales"],
    summary: "A high-authority digital presence for Meshari Al-Ali Engineering Consulting Office, showcasing specialized architectural and engineering expertise.",
    summaryAr: "موقع تعريفي لمكتب استشارات هندسية وتصميم معماري كويتي يستعرض سوابق المشاريع الإنشائية السكنية والتجارية بدقة واحترافية.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "The Meshari Al-Ali platform functions as a strategic hub for engineering excellence. Developed using WordPress and Elementor, the site integrates complex project portfolios, service architectures, and institutional trust signals. Designed for the Kuwaiti engineering landscape, it emphasizes precision, reliability, and professional storytelling for corporate and residential clients.",
    solutionAr: "تطوير موقع يعرض تفاصيل الخدمات الهندسية ورخص البناء والتصميم المعماري، مع إبراز المشاريع المنفذة لبناء الثقة مع الملاك والمستثمرين.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/meshari-alali/cover.png",
      "/demo/projects/meshari-alali/preview-01.png",
      "/demo/projects/meshari-alali/preview-02.png"
    ],
    liveUrl: "https://meshari-alali.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "light-islam",
    title: "Light Islam Maintenance Services",
    titleAr: "نور الإسلام لخدمات الصيانة والتشغيل",
    type: ["wordpress"] as WorkType[],
    category: "Services / Operations",
    categoryAr: "خدمات / عمليات",
    industry: "MAINTENANCE · SERVICES",
    goal: ["Performance", "Sales"],
    summary: "A robust digital platform for Light Islam (نور الإسلام), a UAE-based maintenance and cleaning company providing comprehensive home care solutions.",
    summaryAr: "بوابة الكترونية لطلب خدمات الصيانة والنظافة المنزلية والمؤسسية بدولة الإمارات، تسهل طلب الخدمة وحجز المواعيد والاتصال.",
    problem: "The project needed to organize services and core information in a way that made it easy for clients to understand the offering and contact or decide quickly.",
    problemAr: "كان المشروع يحتاج إلى تنظيم الخدمات والمعلومات الأساسية بطريقة تسهّل على العميل فهم الخدمة والتواصل أو اتخاذ القرار بسرعة.",
    solution: "The Light Islam platform serves as a primary lead generation and service discovery hub for maintenance excellence. Built with Elementor, it integrates a detailed service catalog—ranging from plumbing and electrical work to general repairs—with streamlined booking pathways. Designed for the UAE market, it emphasizes trust, professional reliability, and clear conversion architectures.",
    solutionAr: "بناء موقع متجاوب يوضح تفاصيل الخدمات المنزلية من سباكة وكهرباء ونظافة ويوفر زر حجز مباشر وتواصل فوري عبر الواتساب لرفع معدل التواصل.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/light-islam/cover.png",
      "/demo/projects/light-islam/preview-01.png",
      "/demo/projects/light-islam/preview-02.png"
    ],
    liveUrl: "https://light-islam.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "juli-tourism",
    title: "Juli for Tourism & Travel",
    titleAr: "جولي للسياحة والسفر Juli Tourism",
    type: ["wordpress"] as WorkType[],
    category: "Services / Operations",
    categoryAr: "خدمات / عمليات",
    industry: "TOURISM · TRAVEL",
    goal: ["Performance", "Sales"],
    summary: "A creative and professional digital platform for Juli Tourism Company, featuring innovative travel service architectures and seamless engagement flows.",
    summaryAr: "منصة خدمية وجمالية لشركة سياحة وسفر تستعرض البرامج السياحية والرحلات الخارجية وحلول حجز تذاكر الطيران وتأجير الفنادق.",
    problem: "The project needed to organize services and core information in a way that made it easy for clients to understand the offering and contact or decide quickly.",
    problemAr: "كان المشروع يحتاج إلى تنظيم الخدمات والمعلومات الأساسية بطريقة تسهّل على العميل فهم الخدمة والتواصل أو اتخاذ القرار بسرعة.",
    solution: "The Juli Tourism platform serves as a high-authority hub for travel excellence. Built with WordPress, it integrates a comprehensive service catalog—ranging from tour booking and holiday planning to specialized travel services—with a modern, elegant UI. Designed for a global audience, it emphasizes adventure, professional reliability, and high-impact visual storytelling.",
    solutionAr: "تصميم وتطوير واجهة مستخدم جذابة بصريًا تعتمد على الصور الملهمة وكتالوج رحلات واضح يسهل على العملاء الاستفسار وحجز الباقات السياحية.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/juli-tourism/cover.png",
      "/demo/projects/juli-tourism/preview-01.png",
      "/demo/projects/juli-tourism/preview-02.png"
    ],
    liveUrl: "https://juli-tourism.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "baslim-auto",
    title: "Baslim Auto Showroom",
    titleAr: "معرض بسالم للسيارات Baslim Auto",
    type: ["wordpress"] as WorkType[],
    category: "Services / Operations",
    categoryAr: "خدمات / عمليات",
    industry: "AUTOMOTIVE · DEALERSHIP",
    goal: ["Performance", "Sales"],
    summary: "A high-authority digital showroom for Baslim Auto (بسالم للسيارات), engineered for streamlined vehicle discovery and lead acquisition.",
    summaryAr: "معرض سيارات رقمي يستعرض السيارات المتاحة للبيع والبدائل وخطط التمويل الميسرة لتسهيل قرار شراء السيارات بالكويت.",
    problem: "The project needed to organize services and core information in a way that made it easy for clients to understand the offering and contact or decide quickly.",
    problemAr: "كان المشروع يحتاج إلى تنظيم الخدمات والمعلومات الأساسية بطريقة تسهّل على العميل فهم الخدمة والتواصل أو اتخاذ القرار بسرعة.",
    solution: "The Baslim Auto platform serves as the primary digital sales floor for an automotive dealership. It integrates a robust vehicle inventory system with detailed specifications and high-impact galleries. Designed with conversion in mind, the architecture prioritizes seamless vehicle discovery and rapid inquiry pathways for prospective buyers.",
    solutionAr: "تطوير معرض مركبات منظم يسهل البحث فيه وتصفية المعطيات حسب المواصفات الفنية مع توفير نماذج تواصل سريعة للشراء والاستبدال.",
    role: ["Lead Developer"],
    stack: ["WordPress","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/baslim-auto/cover.png",
      "/demo/projects/baslim-auto/preview-01.png",
      "/demo/projects/baslim-auto/preview-02.png"
    ],
    liveUrl: "https://baslim-auto.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "fast-shopping",
    title: "Fast Shopping E-Commerce",
    titleAr: "متجر التسوق السريع Fast Shopping",
    type: ["woocommerce","wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "E-COMMERCE · RETAIL",
    goal: ["Performance", "Sales"],
    summary: "A high-performance WooCommerce platform for Fast Shopping, optimized for rapid product discovery and dynamic cart conversions.",
    summaryAr: "متجر إلكتروني متعدد الأقسام مبني على ووكومرس يركز على تصفح المنتجات المتنوعة وإتمام عمليات الدفع والشحن بسرعة فائقة.",
    problem: "The project needed a clearer storefront experience that helped users browse products, discover key categories, and move through the purchase journey with less friction.",
    problemAr: "كان المشروع يحتاج إلى تجربة متجر أوضح تساعد المستخدم على تصفح المنتجات بسهولة، الوصول للأقسام المهمة بسرعة، وتحسين رحلة الشراء بدون تعقيد.",
    solution: "The Fast Shopping platform is a robust digital storefront designed for retail scale. Built on WooCommerce and Elementor, it integrates intuitive product cataloging with advanced shopping cart architectures. Designed for speed (as the brand implies), the user experience prioritizes seamless checkout flows, dynamic product filtering, and a fully responsive mobile-first shopping journey.",
    solutionAr: "بناء متجر متجاوب بالكامل وتطوير بنية البحث وتصنيف المنتجات لتحسين سرعة تحميل المتجر وسهولة تصفح مجموعات السلع المتنوعة.",
    role: ["Lead Developer"],
    stack: ["WordPress","WooCommerce","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/fast-shopping/cover.png",
      "/demo/projects/fast-shopping/preview-01.png",
      "/demo/projects/fast-shopping/preview-02.png"
    ],
    liveUrl: "https://fast-shopping.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "mishari-oud",
    title: "Mishari Oud Store",
    titleAr: "متجر مشاري للعود والبخور Mishari Oud",
    type: ["woocommerce","wordpress"] as WorkType[],
    category: "WooCommerce / eCommerce",
    categoryAr: "وكومرس / وردبريس",
    industry: "FRAGRANCE · RETAIL",
    goal: ["Performance", "Sales"],
    summary: "An elegant e-commerce experience for Mishari Oud, designed to reflect the luxury and heritage of premium fragrances and incense.",
    summaryAr: "متجر إلكتروني راقٍ مبني على ووكومرس لتجارة العطور الفاخرة والبخور والعود وتوثيق تجارب المنتجات الفاخرة وسهولة الدفع.",
    problem: "The project needed a clearer storefront experience that helped users browse products, discover key categories, and move through the purchase journey with less friction.",
    problemAr: "كان المشروع يحتاج إلى تجربة متجر أوضح تساعد المستخدم على تصفح المنتجات بسهولة، الوصول للأقسام المهمة بسرعة، وتحسين رحلة الشراء بدون تعقيد.",
    solution: "The Mishari Oud platform serves as a digital boutique for high-end fragrances. Built to accommodate a premium retail aesthetic, the site integrates a sophisticated product catalog with a frictionless shopping cart architecture. It emphasizes visual elegance, heritage storytelling, and a highly optimized pathway from product discovery to secure checkout.",
    solutionAr: "تصميم متجر يعكس الهوية الأصيلة لمنتجات العود والبخور من خلال واجهة بصرية جذابة وسلة تسوق سريعة تسهل الشراء للعملاء داخل وخارج دول الخليج.",
    role: ["Lead Developer"],
    stack: ["WordPress","WooCommerce","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/mishari-oud/cover.png",
      "/demo/projects/mishari-oud/preview-01.png",
      "/demo/projects/mishari-oud/preview-02.png"
    ],
    liveUrl: "https://mishari-oud.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "lec-elevators",
    title: "LEC Elevator Company",
    titleAr: "شركة إل إي سي للمصاعد LEC Elevators",
    type: ["wordpress"] as WorkType[],
    category: "Corporate / Business Website",
    categoryAr: "موقع شركة / أعمال",
    industry: "INDUSTRIAL · ENGINEERING",
    goal: ["Performance", "Sales"],
    summary: "A robust and authoritative digital presence for LEC, a leading elevator company, showcasing their engineering capabilities and product lines.",
    summaryAr: "موقع تعريفي لشركة مصاعد رائدة يستعرض خدمات التوريد والتركيب والصيانة وتصنيفات المصاعد والحلول الهندسية المختلفة.",
    problem: "The project needed a more structured digital presence that clearly presented the company’s services, identity, and trust signals.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يعرض الخدمات والهوية والثقة بشكل أوضح، بدل الاعتماد على عرض عام لا يشرح قيمة الشركة جيدًا.",
    solution: "The LEC Elevators platform serves as a primary digital anchor for industrial and commercial lift solutions. Built to accommodate complex engineering catalogs, it integrates detailed product specifications with a strong corporate narrative. It emphasizes safety, technical precision, and a highly optimized pathway for B2B contract inquiries and project consultations.",
    solutionAr: "بناء موقع متكامل يعرض تفاصيل المصاعد المنزلية والتجارية وعقود الصيانة الدورية مع إتاحة قنوات تواصل سريعة للاستشارات وعروض الأسعار.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
      "/demo/projects/lec-elevators/cover.png",
      "/demo/projects/lec-elevators/preview-01.png",
      "/demo/projects/lec-elevators/preview-02.png"
    ],
    liveUrl: "https://lec-elevators.com",
    isFeatured: false,
    isPrivate: false,
    status: "live",
    needsReview: true
  },
  {
    slug: "atour",
    title: "Atour - Saudi Tourism Marketplace",
    titleAr: "جولة Atour - منصة سياحية سعودية",
    type: ["laravel", "php"] as WorkType[],
    category: "Tourism / Travel",
    categoryAr: "سياحة / سفر",
    industry: "Tourism / Travel",
    goal: ["Booking", "Discovery", "Marketplace", "Support", "SEO", "Mobile UX"],
    summary: "Atour is a Laravel-based Saudi tourism marketplace that helps users discover and book tours, cultural experiences, adventure activities, and heritage gifts. The platform includes responsive RTL interfaces, dynamic tour and product detail pages, booking-focused calls to action, support content, FAQ pages, and a web-tomobile ecosystem.",
    summaryAr: "جولة Atour منصة سياحية سعودية تساعد المستخدمين على اكتشاف وحجز الجولات والتجارب السياحية والأنشطة والمنتجات التراثية داخل المملكة. تضمنت المنصة واجهات عربية RTL متجاوبة، صفحات ديناميكية للجولات والمنتجات، مسار حجز واضح، صفحات دعم وأسئلة شائعة، وتجربة مرتبطة بتطبيقات الموبايل.",
    problem: "Tourism platforms need to help users discover experiences quickly, understand trip details clearly, and move toward booking without confusion. The interface also needs to support Arabic RTL users, mobile browsing, trust content, and support flows.",
    problemAr: "منصات السياحة تحتاج إلى مساعدة المستخدم في اكتشاف التجارب بسرعة، فهم تفاصيل الرحلة بوضوح، والانتقال للحجز بدون تعقيد. كما تحتاج الواجهة لدعم المستخدم العربي RTL، التصفح من الموبايل، محتوى الثقة، ومسارات الدعم.",
    solution: "A responsive, SEO-friendly Laravel marketplace architecture focused on clear discovery and booking funnels. The platform presents robust tour detail pages, heritage product commerce flows, and well-organized support pages to increase user trust and conversions.",
    solutionAr: "منصة مبنية بـ لارافيل تتميز ببنية تدعم تحسين محركات البحث وتجربة مستخدم تركز على وضوح التصفح وسهولة مسار الحجز. تتضمن المنصة صفحات تفصيلية للجولات وعمليات شراء المنتجات التراثية وصفحات دعم منظمة لزيادة ثقة المستخدم ومعدلات التحويل.",
    role: [
      "Worked on presenting and structuring the public-facing marketplace experience.",
      "Built or contributed to responsive RTL frontend pages for tours, gifts, support, and booking flows.",
      "Prepared the project for portfolio presentation as a Laravel marketplace case study.",
      "Organized frontend screenshots and visual storytelling around discovery, booking, support, and mobile UX."
    ],
    roleAr: [
      "شاركت في بناء وتنظيم تجربة الواجهة العامة للمنصة.",
      "عملت على واجهات RTL متجاوبة لصفحات الجولات، المنتجات، الدعم، ومسار الحجز.",
      "جهزت المشروع للعرض داخل البرتفوليو كدراسة حالة لمنصة Marketplace مبنية بـ لارافيل.",
      "نظمت صور الواجهة الأمامية لتوضيح تجربة الاكتشاف، الحجز، الدعم، والموبايل."
    ],
    stack: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"],
    features: [
      "Saudi tourism marketplace structure.",
      "Arabic RTL user interface.",
      "Dynamic tour listing and detail pages.",
      "Booking-oriented user journey.",
      "Gift and heritage product pages.",
      "Support and FAQ content.",
      "Mobile responsive experience.",
      "SEO-friendly public pages."
    ],
    featuresAr: [
      "هيكل Marketplace للسياحة السعودية.",
      "واجهة عربية RTL.",
      "صفحات ديناميكية لعرض وتفاصيل الجولات.",
      "تجربة مستخدم موجهة للحجز.",
      "صفحات للهدايا والمنتجات التراثية.",
      "محتوى دعم وأسئلة شائعة.",
      "تجربة متجاوبة للموبايل.",
      "صفحات عامة مناسبة للـ SEO."
    ],
    built: [
      "Responsive RTL public website pages.",
      "Dynamic listing and detail page presentation for tours.",
      "Gift/product detail presentation.",
      "Booking-focused CTA sections.",
      "FAQ, Help Center, and contact/ticket pages.",
      "Mobile-friendly public experience.",
      "Organized portfolio screenshot structure for frontend, booking, support, mobile, and future dashboard visuals."
    ],
    builtAr: [
      "واجهات عامة متجاوبة تدعم RTL.",
      "عرض صفحات ديناميكية لقوائم وتفاصيل الجولات.",
      "عرض تفاصيل المنتجات والهدايا التراثية.",
      "أقسام CTA موجهة للحجز والتحويل.",
      "صفحات FAQ وHelp Center ونموذج تواصل / تذاكر.",
      "تجربة مناسبة للموبايل.",
      "تنظيم صور المشروع داخل البرتفوليو حسب الواجهة، الحجز، الدعم، الموبايل، ومكان مخصص لاحقًا للداشبورد."
    ],
    businessValue: [
      "Clearer discovery journey for tourism experiences.",
      "Easier browsing of tours and heritage products.",
      "More focused booking path through visible CTAs.",
      "Better support experience through FAQ, Help Center, and contact flows.",
      "Stronger presentation of the project as a Laravel marketplace case study."
    ],
    businessValueAr: [
      "تجربة أوضح لاكتشاف الجولات والتجارب السياحية.",
      "تصفح أسهل للجولات والمنتجات التراثية.",
      "مسار حجز أكثر وضوحًا من خلال أزرار CTA ظاهرة.",
      "تجربة دعم أفضل من خلال FAQ وHelp Center ونموذج التواصل.",
      "عرض أقوى للمشروع كدراسة حالة لمنصة Marketplace مبنية بـ لارافيل."
    ],
    screenshots: [
      "/demo/projects/atour/frontend/01-homepage-hero-desktop.png"
    ],
    frontendScreenshots: [
      {
        src: "/demo/projects/atour/frontend/01-homepage-hero-desktop.png",
        alt: {
          en: "Atour homepage hero section showing Saudi tourism experiences",
          ar: "واجهة الصفحة الرئيسية لمنصة جولة لعرض التجارب السياحية السعودية"
        },
        caption: {
          en: "Saudi tourism marketplace homepage focused on discovering and booking experiences.",
          ar: "واجهة رئيسية لمنصة سياحية سعودية تركز على اكتشاف وحجز التجارب."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/03-trips-listing-desktop.png",
        alt: {
          en: "Tour listing page with dynamic cards, prices, and booking-oriented browsing",
          ar: "صفحة عرض الجولات ببطاقات ديناميكية، أسعار، وتجربة تصفح موجهة للحجز"
        },
        caption: {
          en: "Tour listing page with dynamic cards, prices, and booking-oriented browsing.",
          ar: "صفحة عرض الجولات ببطاقات ديناميكية، أسعار، وتجربة تصفح موجهة للحجز."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/05-trip-detail-desktop.png",
        alt: {
          en: "Dynamic tour detail page with trip information, highlights, and booking CTA",
          ar: "صفحة تفاصيل جولة ديناميكية تعرض معلومات الرحلة والمميزات وزر الحجز"
        },
        caption: {
          en: "Dynamic tour detail page with trip information, highlights, and booking CTA.",
          ar: "صفحة تفاصيل جولة ديناميكية تعرض معلومات الرحلة والمميزات وزر الحجز."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/04-offers-desktop.png",
        alt: {
          en: "Heritage gifts commerce module with product details",
          ar: "موديول للهدايا التراثية يعرض تفاصيل المنتج"
        },
        caption: {
          en: "Heritage gifts commerce module with product details, price, and availability context.",
          ar: "موديول للهدايا التراثية يعرض تفاصيل المنتج والسعر ومعلومات التوفر."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/02-events-category-desktop.png",
        alt: {
          en: "Events category listing page",
          ar: "صفحة قائمة فئة الفعاليات"
        },
        caption: {
          en: "Events category listing page.",
          ar: "صفحة تصنيف وعرض الفعاليات المتاحة."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/14-about-page-desktop.png",
        alt: {
          en: "About page",
          ar: "صفحة من نحن"
        },
        caption: {
          en: "About page detailing the platform's vision.",
          ar: "صفحة من نحن التي توضح رؤية المنصة وأهدافها."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/11-articles-blog-desktop.png",
        alt: {
          en: "Articles and blog page",
          ar: "صفحة المقالات والمدونة"
        },
        caption: {
          en: "Articles and blog page.",
          ar: "صفحة المقالات والمدونة الخاصة بالمنصة."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/12-news-desktop.png",
        alt: {
          en: "News page",
          ar: "صفحة الأخبار"
        },
        caption: {
          en: "News page.",
          ar: "صفحة الأخبار والتحديثات."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/06-biography-2-desktop.png",
        alt: { en: "Biography/Information page", ar: "صفحة معلومات وسيرة" },
        caption: { en: "Additional public information page.", ar: "صفحة معلومات عامة إضافية." },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/07-biography-3-desktop.png",
        alt: { en: "Biography/Information page", ar: "صفحة معلومات وسيرة" },
        caption: { en: "Additional public information page.", ar: "صفحة معلومات عامة إضافية." },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/08-biography-4-desktop.png",
        alt: { en: "Biography/Information page", ar: "صفحة معلومات وسيرة" },
        caption: { en: "Additional public information page.", ar: "صفحة معلومات عامة إضافية." },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/09-biography-5-desktop.png",
        alt: { en: "Biography/Information page", ar: "صفحة معلومات وسيرة" },
        caption: { en: "Additional public information page.", ar: "صفحة معلومات عامة إضافية." },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/10-biography-6-desktop.png",
        alt: { en: "Biography/Information page", ar: "صفحة معلومات وسيرة" },
        caption: { en: "Additional public information page.", ar: "صفحة معلومات عامة إضافية." },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/16-terms-conditions-desktop.png",
        alt: { en: "Terms and conditions page", ar: "صفحة الشروط والأحكام" },
        caption: { en: "Terms and conditions page.", ar: "صفحة الشروط والأحكام." },
        type: "frontend",
        viewport: "desktop"
      }
    ],
    bookingScreenshots: [
      {
        src: "/demo/projects/atour/frontend/05-trip-detail-desktop.png",
        alt: {
          en: "Booking-focused panel showing price, trust messages, and clear conversion actions",
          ar: "جزء موجه للتحويل يعرض السعر، رسائل الثقة، وإجراءات الحجز بوضوح"
        },
        caption: {
          en: "Booking-focused panel showing price, trust messages, and clear conversion actions.",
          ar: "جزء موجه للتحويل يعرض السعر، رسائل الثقة، وإجراءات الحجز بوضوح."
        },
        type: "booking",
        viewport: "desktop"
      }
    ],
    supportScreenshots: [
      {
        src: "/demo/projects/atour/frontend/13-faq-help-desktop.png",
        alt: {
          en: "FAQ page for self-service support",
          ar: "صفحة الأسئلة الشائعة للدعم الذاتي"
        },
        caption: {
          en: "Self-service support pages designed to reduce friction after booking.",
          ar: "صفحات دعم ذاتي لتقليل احتكاك المستخدم بعد الحجز."
        },
        type: "support",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/frontend/15-contact-ticket-desktop.png",
        alt: {
          en: "Contact ticket flow",
          ar: "نموذج تواصل وتذاكر الدعم"
        },
        caption: {
          en: "Contact and ticket flow for customer inquiries and support requests.",
          ar: "نموذج تواصل وتذاكر لدعم استفسارات العملاء."
        },
        type: "support",
        viewport: "desktop"
      }
    ],
    backendScreenshots: [
      {
        src: "/demo/projects/atour/backend/backend-01-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 1", ar: "لوحة تحكم Atour - الشاشة 1" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-02-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 2", ar: "لوحة تحكم Atour - الشاشة 2" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-03-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 3", ar: "لوحة تحكم Atour - الشاشة 3" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-04-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 4", ar: "لوحة تحكم Atour - الشاشة 4" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-05-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 5", ar: "لوحة تحكم Atour - الشاشة 5" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-06-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 6", ar: "لوحة تحكم Atour - الشاشة 6" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-07-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 7", ar: "لوحة تحكم Atour - الشاشة 7" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-08-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 8", ar: "لوحة تحكم Atour - الشاشة 8" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-09-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 9", ar: "لوحة تحكم Atour - الشاشة 9" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-10-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 10", ar: "لوحة تحكم Atour - الشاشة 10" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/atour/backend/backend-11-dashboard.jpeg",
        alt: { en: "Atour backend dashboard screenshot 11", ar: "لوحة تحكم Atour - الشاشة 11" },
        caption: { en: "Backend / Dashboard Screenshot.", ar: "لوحة التحكم الداخلية للمنصة." },
        type: "backend",
        viewport: "desktop"
      }
    ],
    isFeatured: true,
    isPrivate: false,
    status: "live",
    liveUrl: "https://atour.sa/",
    needsReview: true
  },
  {
    slug: "edusmart-system",
    title: "Teachers Portal / EduSmart System",
    titleAr: "بوابة المدرسين / نظام EduSmart التعليمي",
    type: ["laravel", "php"] as WorkType[],
    category: "Education",
    categoryAr: "تعليم",
    industry: "Education",
    goal: ["Internal System", "Operations Management", "Academic Workflow", "Reporting", "Communication", "Role-Based Access", "Dashboard UX"],
    summary: "Teachers Portal / EduSmart System is an educational ERP and school management dashboard designed to organize academic and administrative workflows for educational institutions. The system helps teachers and administrators manage students, attendance, grades, schedules, assignments, reports, communication, announcements, and daily school operations through a centralized web dashboard.",
    summaryAr: "بوابة المدرسين / نظام EduSmart التعليمي هو نظام ERP تعليمي ولوحة تحكم لإدارة العمليات الأكاديمية والإدارية داخل المؤسسات التعليمية. يساعد النظام المدرسين والإدارة على تنظيم الطلاب، الحضور، الدرجات، الجداول، الواجبات، التقارير، التواصل، الإعلانات، والمهام اليومية من خلال لوحة مركزية واحدة.",
    problem: "Educational institutions often rely on disconnected tools, manual spreadsheets, and scattered communication channels to manage daily academic operations. This makes it harder for teachers and administrators to track students, attendance, grades, schedules, assignments, and reports from one place.",
    problemAr: "تعتمد بعض المؤسسات التعليمية على أدوات متفرقة، ملفات يدوية، وقنوات تواصل غير موحدة لإدارة العمليات الأكاديمية اليومية. هذا يجعل متابعة الطلاب، الحضور، الدرجات، الجداول، الواجبات، والتقارير من مكان واحد أكثر صعوبة على المدرسين والإدارة.",
    solution: "The system provides a centralized educational dashboard that brings academic workflows into one organized interface. Teachers and administrators can access the modules they need, manage student-related operations, follow schedules, track attendance and grades, and communicate through a structured system.",
    solutionAr: "يوفر النظام لوحة تحكم تعليمية مركزية تجمع العمليات الأكاديمية داخل واجهة منظمة واحدة. يستطيع المدرسون والإدارة الوصول إلى الموديولات المطلوبة، إدارة بيانات الطلاب، متابعة الجداول، تسجيل الحضور والدرجات، والتواصل من خلال نظام منظم.",
    role: [
      "Worked on presenting and organizing the backend dashboard experience as a portfolio-ready educational ERP case study.",
      "Structured the system modules around teachers, students, attendance, grades, assignments, schedules, reports, and communication.",
      "Organized dashboard screenshots into clear portfolio sections.",
      "Focused on showing the project as a backend system, not just a visual dashboard.",
      "Prepared bilingual case-study content without adding unverified metrics or fake claims."
    ],
    roleAr: [
      "شاركت في تجهيز وتنظيم تجربة لوحة التحكم التعليمية للعرض داخل البرتفوليو كدراسة حالة لنظام ERP تعليمي.",
      "نظمت موديولات النظام حول المدرسين، الطلاب، الحضور، الدرجات، الواجبات، الجداول، التقارير، والتواصل.",
      "رتبت صور الداشبورد داخل أقسام واضحة في صفحة المشروع.",
      "ركزت على عرض المشروع كنظام Backend تشغيلي وليس مجرد لوحة شكلية.",
      "جهزت محتوى عربي وإنجليزي بدون إضافة أرقام أو ادعاءات غير مؤكدة."
    ],
    stack: [
      "Backend Dashboard",
      "Educational ERP",
      "Role-Based Access",
      "Web App"
    ],
    features: [
      "Centralized teacher dashboard.",
      "Student records management.",
      "Attendance tracking.",
      "Grades and performance management.",
      "Assignments and homework workflows.",
      "Class schedules and academic timing.",
      "Reports and operational summaries.",
      "Messages and announcements.",
      "Calendar and academic events.",
      "Role-based access concept."
    ],
    featuresAr: [
      "لوحة مدرس مركزية.",
      "إدارة سجلات الطلاب.",
      "متابعة الحضور والغياب.",
      "إدارة الدرجات والأداء.",
      "تنظيم الواجبات والمهام.",
      "الجداول والحصص الدراسية.",
      "التقارير والملخصات التشغيلية.",
      "الرسائل والإعلانات.",
      "التقويم والأحداث الدراسية.",
      "مفهوم الصلاحيات حسب الدور."
    ],
    built: [
      "Educational dashboard structure for teacher and school workflows.",
      "Organized modules for students, attendance, grades, schedules, assignments, reports, and communication.",
      "Dashboard screens prepared for portfolio presentation.",
      "Screenshot groups for dashboard overview, academic management, operations, communication, and mobile experience.",
      "Bilingual case-study content focused on real system value.",
      "Clean backend project presentation inside the portfolio."
    ],
    builtAr: [
      "هيكل لوحة تحكم تعليمية لتنظيم عمليات المدرسين والمؤسسة.",
      "موديولات منظمة للطلاب، الحضور، الدرجات، الجداول، الواجبات، التقارير، والتواصل.",
      "تجهيز شاشات الداشبورد للعرض داخل البرتفوليو.",
      "تقسيم الصور إلى أقسام: نظرة عامة، إدارة تعليمية، عمليات وتقارير، تواصل، وتجربة موبايل.",
      "محتوى عربي وإنجليزي يركز على القيمة العملية للنظام.",
      "عرض المشروع داخل البرتفوليو كنظام Backend بشكل واضح واحترافي."
    ],
    businessValue: [
      "Centralizes academic and administrative workflows.",
      "Reduces scattered manual processes.",
      "Helps teachers manage daily tasks from one dashboard.",
      "Improves visibility into students, attendance, grades, and assignments.",
      "Supports clearer communication through messages and announcements.",
      "Makes educational operations easier to review and present."
    ],
    businessValueAr: [
      "توحيد العمليات الأكاديمية والإدارية داخل نظام واحد.",
      "تقليل الاعتماد على العمليات اليدوية والأدوات المتفرقة.",
      "مساعدة المدرسين على إدارة المهام اليومية من لوحة واحدة.",
      "تحسين وضوح بيانات الطلاب، الحضور، الدرجات، والواجبات.",
      "دعم التواصل المنظم من خلال الرسائل والإعلانات.",
      "تسهيل مراجعة وعرض العمليات التعليمية بشكل أوضح."
    ],
    screenshots: [
      "/demo/backend/edusmart-system/02-teacher-dashboard-overview-desktop.png"
    ],
    dashboardScreenshots: [
      {
        src: "/demo/backend/edusmart-system/01-login-page-desktop.png",
        alt: {
          en: "Secure login entry for users based on their assigned role",
          ar: "بوابة دخول آمنة للمستخدمين حسب الصلاحيات"
        },
        caption: {
          en: "Secure login entry for users based on their assigned role.",
          ar: "بوابة دخول آمنة للمستخدمين حسب الصلاحيات."
        },
        type: "auth",
        viewport: "desktop"
      },
      {
        src: "/demo/backend/edusmart-system/02-teacher-dashboard-overview-desktop.png",
        alt: {
          en: "Teacher dashboard overview for daily academic tasks, schedules, and alerts",
          ar: "لوحة مدرس تعرض ملخص المهام اليومية والجداول والتنبيهات"
        },
        caption: {
          en: "Teacher dashboard overview for daily academic tasks, schedules, and alerts.",
          ar: "لوحة مدرس تعرض ملخص المهام اليومية والجداول والتنبيهات."
        },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/backend/edusmart-system/13-profile-settings-desktop.png",
        alt: {
          en: "Profile and settings screen",
          ar: "شاشة الإعدادات والملف الشخصي"
        },
        caption: {
          en: "Profile and system settings for managing user preferences.",
          ar: "شاشة الإعدادات والملف الشخصي لتنظيم تفضيلات المستخدم."
        },
        type: "settings",
        viewport: "desktop"
      }
    ],
    academicScreenshots: [
      {
        src: "/demo/backend/edusmart-system/03-students-list-desktop.png",
        alt: {
          en: "Student records screen for browsing and managing assigned students",
          ar: "شاشة سجلات الطلاب لعرض وإدارة الطلاب المرتبطين بالمدرس"
        },
        caption: {
          en: "Student records screen for browsing and managing assigned students.",
          ar: "شاشة سجلات الطلاب لعرض وإدارة الطلاب المرتبطين بالمدرس."
        },
        type: "students",
        viewport: "desktop"
      },
      {
        src: "/demo/backend/edusmart-system/06-grades-management-desktop.png",
        alt: {
          en: "Grades management screen for reviewing and organizing student performance",
          ar: "شاشة إدارة الدرجات لمراجعة وتنظيم أداء الطلاب"
        },
        caption: {
          en: "Grades management screen for reviewing and organizing student performance.",
          ar: "شاشة إدارة الدرجات لمراجعة وتنظيم أداء الطلاب."
        },
        type: "grades",
        viewport: "desktop"
      },
      {
        src: "/demo/backend/edusmart-system/07-assignments-desktop.png",
        alt: {
          en: "Assignments screen for managing homework, deadlines, and submissions",
          ar: "شاشة الواجبات لإدارة المهام، المواعيد النهائية، والتسليمات"
        },
        caption: {
          en: "Assignments screen for managing homework, deadlines, and submissions.",
          ar: "شاشة الواجبات لإدارة المهام، المواعيد النهائية، والتسليمات."
        },
        type: "assignments",
        viewport: "desktop"
      },
      {
        src: "/demo/backend/edusmart-system/08-schedule-desktop.png",
        alt: {
          en: "Schedule view for lessons, classes, and academic timing",
          ar: "عرض الجداول للحصص والمواعيد الدراسية"
        },
        caption: {
          en: "Schedule view for lessons, classes, and academic timing.",
          ar: "عرض الجداول للحصص والمواعيد الدراسية."
        },
        type: "schedule",
        viewport: "desktop"
      }
    ],
    frontendScreenshots: [
      {
        src: "/demo/backend/edusmart-system/09-reports-dashboard-desktop.png",
        alt: {
          en: "Reporting screen for academic and operational insights",
          ar: "شاشة تقارير لعرض مؤشرات تعليمية وتشغيلية"
        },
        caption: {
          en: "Reporting screen for academic and operational insights.",
          ar: "شاشة تقارير لعرض مؤشرات تعليمية وتشغيلية."
        },
        type: "reports",
        viewport: "desktop"
      },
      {
        src: "/demo/backend/edusmart-system/10-messages-desktop.png",
        alt: {
          en: "Internal messaging screen for communication between school users",
          ar: "شاشة رسائل داخلية للتواصل بين مستخدمي النظام"
        },
        caption: {
          en: "Internal messaging screen for communication between school users.",
          ar: "شاشة رسائل داخلية للتواصل بين مستخدمي النظام."
        },
        type: "communication",
        viewport: "desktop"
      },
      {
        src: "/demo/backend/edusmart-system/11-announcements-desktop.png",
        alt: {
          en: "Announcements screen for sharing school updates and alerts",
          ar: "شاشة إعلانات لنشر تحديثات وتنبيهات المؤسسة"
        },
        caption: {
          en: "Announcements screen for sharing school updates and alerts.",
          ar: "شاشة إعلانات لنشر تحديثات وتنبيهات المؤسسة."
        },
        type: "communication",
        viewport: "desktop"
      },
      {
        src: "/demo/backend/edusmart-system/12-calendar-desktop.png",
        alt: {
          en: "Calendar view for academic events, reminders, and school activities",
          ar: "تقويم للأحداث الدراسية، التذكيرات، وأنشطة المؤسسة"
        },
        caption: {
          en: "Calendar view for academic events, reminders, and school activities.",
          ar: "تقويم للأحداث الدراسية، التذكيرات، وأنشطة المؤسسة."
        },
        type: "calendar",
        viewport: "desktop"
      }
    ],
    mobileScreenshots: [],
    isFeatured: true,
    isPrivate: false,
    status: "live",
    liveUrl: "https://teachers.tarmez.net/",
    needsReview: false
  },
  {
    slug: "ozone-clinic",
    title: "Ozone Clinic",
    titleAr: "أوزون كلينيك",
    type: ["wordpress"] as WorkType[],
    category: "Healthcare",
    categoryAr: "رعاية صحية",
    industry: "Healthcare / Medical",
    goal: ["Service Discovery", "Appointment Booking", "Lead Generation", "Trust Building", "Branch Contact", "Healthcare Marketing", "Backend Management"],
    summary: "Ozone Clinic is a healthcare website for a medical clinic group in Saudi Arabia, presenting dermatology, dental, and laser services through a clear Arabic interface. The website includes service pages, doctors profiles, offers, blog content, branch information, contact channels, and an online appointment booking flow designed to help users choose a branch, department, doctor, and time slot.",
    summaryAr: "أوزون كلينيك هو موقع طبي لمجموعة عيادات في المملكة العربية السعودية يعرض خدمات الجلدية، الأسنان، والليزر من خلال واجهة عربية واضحة. يحتوي الموقع على صفحات للخدمات، الأطباء، العروض، المدونة، معلومات الفروع، قنوات التواصل، ومسار حجز موعد أونلاين يساعد المستخدم على اختيار الفرع، القسم، الطبيب، والوقت.",
    problem: "Medical clinics need a clear website that helps visitors understand available services, explore doctors and branches, and book an appointment without confusion. The challenge is combining trust, service discovery, mobile usability, and a practical booking journey for Arabic users.",
    problemAr: "تحتاج العيادات الطبية إلى موقع واضح يساعد الزائر على فهم الخدمات المتاحة، استكشاف الأطباء والفروع، وحجز موعد بدون تعقيد. التحدي هو الجمع بين الثقة، سهولة الوصول للخدمات، تجربة الموبايل، ومسار حجز عملي للمستخدم العربي.",
    solution: "The website presents clinic services, doctors, offers, branches, blog content, and appointment booking through a clear Arabic interface. The case study also includes backend dashboard screenshots to show the management side of the system.",
    solutionAr: "يعرض الموقع خدمات العيادة، الأطباء، العروض، الفروع، محتوى المدونة، وحجز المواعيد من خلال واجهة عربية واضحة. كما تتضمن دراسة الحالة صورًا من لوحة التحكم لعرض جانب الإدارة الداخلي للنظام.",
    role: [
      "Worked on presenting and organizing the medical website as a portfolio-ready case study.",
      "Structured the project around service discovery, trust-building, appointment booking, and clinic communication.",
      "Organized frontend screenshots from the live website and backend dashboard screenshots into clear sections.",
      "Highlighted the value of the public website and the internal dashboard without adding fake metrics or unverified claims.",
      "Prepared bilingual Arabic/English content for a polished portfolio case study."
    ],
    roleAr: [
      "شاركت في تجهيز وتنظيم موقع العيادة الطبية للعرض داخل البرتفوليو كدراسة حالة احترافية.",
      "نظمت المشروع حول اكتشاف الخدمات، بناء الثقة، حجز المواعيد، والتواصل مع الفروع.",
      "رتبت صور الواجهة من الموقع الحي وصور لوحة التحكم في أقسام واضحة.",
      "أبرزت قيمة الموقع العام ولوحة الإدارة الداخلية بدون إضافة أرقام أو ادعاءات غير مؤكدة.",
      "جهزت محتوى عربي وإنجليزي مناسب للعرض داخل البرتفوليو."
    ],
    stack: [
      "Healthcare Website",
      "Medical Booking Website",
      "Arabic RTL UI",
      "Backend Dashboard",
      "Responsive Website"
    ],
    features: [
      "Arabic RTL clinic website.",
      "Medical service catalog.",
      "Dental, dermatology, and laser service sections.",
      "Online appointment booking.",
      "Doctors and specialties presentation.",
      "Multiple branch information.",
      "Offers and campaigns.",
      "Blog / medical content.",
      "Contact and branch communication.",
      "Backend dashboard screenshots.",
      "Responsive mobile experience."
    ],
    featuresAr: [
      "موقع عيادات بواجهة عربية RTL.",
      "كتالوج خدمات طبية.",
      "أقسام لخدمات الأسنان، الجلدية، والليزر.",
      "حجز موعد أونلاين.",
      "عرض الأطباء والتخصصات.",
      "معلومات فروع متعددة.",
      "عروض وحملات.",
      "مدونة ومحتوى طبي.",
      "تواصل وبيانات الفروع.",
      "صور من لوحة التحكم.",
      "تجربة متجاوبة للموبايل."
    ],
    built: [
      "Arabic RTL healthcare website interface.",
      "Service pages for dental, dermatology, and laser departments.",
      "Online appointment booking flow.",
      "Doctors, offers, branches, contact, and blog sections.",
      "Backend dashboard presentation using real dashboard screenshots.",
      "Screenshot organization for frontend, booking, backend, and mobile views.",
      "Portfolio-ready case study focused on practical business value."
    ],
    builtAr: [
      "واجهة عربية RTL لموقع عيادات طبية.",
      "صفحات خدمات لأقسام الأسنان، الجلدية، والليزر.",
      "مسار حجز موعد أونلاين.",
      "أقسام للأطباء، العروض، الفروع، التواصل، والمدونة.",
      "عرض لوحة التحكم باستخدام صور حقيقية من الداشبورد.",
      "تنظيم الصور حسب الواجهة، الحجز، الباك إند، والموبايل.",
      "تجهيز المشروع كدراسة حالة داخل البرتفوليو تركز على القيمة العملية."
    ],
    businessValue: [
      "Makes medical services easier to discover and understand.",
      "Helps visitors move from browsing to booking or contacting the clinic.",
      "Builds trust by showing doctors, branches, and service categories.",
      "Supports healthcare marketing through offers and blog content.",
      "Improves Arabic RTL user experience.",
      "Shows both the public website and the backend management side of the project."
    ],
    businessValueAr: [
      "تسهيل وصول المستخدم إلى الخدمات الطبية المناسبة.",
      "مساعدة الزائر على الانتقال من التصفح إلى الحجز أو التواصل.",
      "بناء الثقة من خلال عرض الأطباء، الفروع، وتصنيفات الخدمات.",
      "دعم التسويق الطبي من خلال العروض والمحتوى.",
      "تحسين تجربة المستخدم العربي RTL.",
      "عرض جانب الموقع العام وجانب الإدارة الداخلي للمشروع."
    ],
    screenshots: [
      "/demo/projects/ozone-clinic/frontend/01-homepage-hero-desktop.png"
    ],
    frontendScreenshots: [
      {
        src: "/demo/projects/ozone-clinic/frontend/01-homepage-hero-desktop.png",
        alt: {
          en: "Live clinic homepage presenting services, booking actions, doctors, offers, and clinic information",
          ar: "الصفحة الرئيسية للموقع الحي تعرض الخدمات، الحجز، الأطباء، العروض، ومعلومات العيادة"
        },
        caption: {
          en: "Live clinic homepage presenting services, booking actions, doctors, offers, and clinic information.",
          ar: "الصفحة الرئيسية للموقع الحي تعرض الخدمات، الحجز، الأطباء، العروض، ومعلومات العيادة."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/03-dental-services-desktop.png",
        alt: {
          en: "Dental services page with treatment and cosmetic service categories",
          ar: "صفحة خدمات الأسنان بتصنيف واضح للخدمات العلاجية والتجميلية"
        },
        caption: {
          en: "Dental services page with treatment and cosmetic service categories.",
          ar: "صفحة خدمات الأسنان بتصنيف واضح للخدمات العلاجية والتجميلية."
        },
        type: "services",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/04-dermatology-services-desktop.png",
        alt: {
          en: "Dermatology services page for skin and beauty treatments",
          ar: "صفحة خدمات الجلدية والعناية بالبشرة"
        },
        caption: {
          en: "Dermatology services page for skin and beauty treatments.",
          ar: "صفحة خدمات الجلدية والعناية بالبشرة."
        },
        type: "services",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/05-laser-services-desktop.png",
        alt: {
          en: "Laser services page presented in a clear clinic service layout",
          ar: "صفحة خدمات الليزر في تصميم واضح وسهل التصفح"
        },
        caption: {
          en: "Laser services page presented in a clear clinic service layout.",
          ar: "صفحة خدمات الليزر في تصميم واضح وسهل التصفح."
        },
        type: "services",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/07-doctors-section-desktop.png",
        alt: {
          en: "Doctors and specialties section designed to support trust before booking",
          ar: "قسم الأطباء والتخصصات لدعم الثقة قبل الحجز"
        },
        caption: {
          en: "Doctors and specialties section designed to support trust before booking.",
          ar: "قسم الأطباء والتخصصات لدعم الثقة قبل الحجز."
        },
        type: "doctors",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/08-offers-section-desktop.png",
        alt: {
          en: "Offers section for healthcare campaigns and service promotions",
          ar: "قسم العروض لدعم الحملات والخدمات الترويجية"
        },
        caption: {
          en: "Offers section for healthcare campaigns and service promotions.",
          ar: "قسم العروض لدعم الحملات والخدمات الترويجية."
        },
        type: "frontend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/09-blog-listing-desktop.png",
        alt: {
          en: "Medical blog content supporting education, marketing, and SEO",
          ar: "محتوى مدونة طبي يدعم التثقيف، التسويق، والـ SEO"
        },
        caption: {
          en: "Medical blog content supporting education, marketing, and SEO.",
          ar: "محتوى مدونة طبي يدعم التثقيف، التسويق، والـ SEO."
        },
        type: "blog",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/10-contact-page-desktop.png",
        alt: {
          en: "Branch and contact information designed for quick clinic communication",
          ar: "بيانات الفروع والتواصل لتسهيل الوصول للعيادة"
        },
        caption: {
          en: "Branch and contact information designed for quick clinic communication.",
          ar: "بيانات الفروع والتواصل لتسهيل الوصول للعيادة."
        },
        type: "branches",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/11-about-page-desktop.png",
        alt: {
          en: "About clinic page showing values and medical vision",
          ar: "صفحة عن العيادة تعرض القيم والرؤية الطبية"
        },
        caption: {
          en: "About clinic page showing values and medical vision.",
          ar: "صفحة عن العيادة تعرض القيم والرؤية الطبية."
        },
        type: "frontend",
        viewport: "desktop"
      }
    ],
    bookingScreenshots: [
      {
        src: "/demo/projects/ozone-clinic/frontend/06-reservation-booking-desktop.png",
        alt: {
          en: "Appointment booking flow for selecting branch, department, service, doctor, and time",
          ar: "مسار حجز موعد لاختيار الفرع، القسم، الخدمة، الطبيب، والوقت"
        },
        caption: {
          en: "Appointment booking flow for selecting branch, department, service, doctor, and time.",
          ar: "مسار حجز موعد لاختيار الفرع، القسم، الخدمة، الطبيب، والوقت."
        },
        type: "booking",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/frontend/12-login-desktop.png",
        alt: {
          en: "Login and authentication view for booking portal",
          ar: "واجهة تسجيل الدخول والمصادقة لبوابة الحجز"
        },
        caption: {
          en: "Login and authentication view for booking portal.",
          ar: "واجهة تسجيل الدخول والمصادقة لبوابة الحجز."
        },
        type: "auth",
        viewport: "desktop"
      }
    ],
    backendScreenshots: [
      {
        src: "/demo/projects/ozone-clinic/backend/01-dashboard-overview.png",
        alt: {
          en: "Backend dashboard overview for managing clinic operations",
          ar: "نظرة عامة على لوحة التحكم لإدارة عمليات العيادة"
        },
        caption: {
          en: "Backend dashboard overview for managing clinic operations.",
          ar: "نظرة عامة على لوحة التحكم لإدارة عمليات العيادة."
        },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/backend/02-appointments-management.png",
        alt: {
          en: "Appointment management screen for reviewing and organizing bookings",
          ar: "شاشة إدارة المواعيد لمراجعة وتنظيم الحجوزات"
        },
        caption: {
          en: "Appointment management screen for reviewing and organizing bookings.",
          ar: "شاشة إدارة المواعيد لمراجعة وتنظيم الحجوزات."
        },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/backend/03-bookings-list.png",
        alt: {
          en: "Bookings list view for administrative review",
          ar: "قائمة الحجوزات للمراجعة الإدارية"
        },
        caption: {
          en: "Bookings list view for administrative review.",
          ar: "قائمة الحجوزات للمراجعة الإدارية."
        },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/backend/04-services-management.png",
        alt: {
          en: "Service management screen for organizing clinic departments and treatments",
          ar: "شاشة إدارة الخدمات لتنظيم أقسام العيادة والعلاجات"
        },
        caption: {
          en: "Service management screen for organizing clinic departments and treatments.",
          ar: "شاشة إدارة الخدمات لتنظيم أقسام العيادة والعلاجات."
        },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/backend/05-doctors-management.png",
        alt: {
          en: "Doctors management screen for handling doctors and specialties",
          ar: "شاشة إدارة الأطباء والتخصصات"
        },
        caption: {
          en: "Doctors management screen for handling doctors and specialties.",
          ar: "شاشة إدارة الأطباء والتخصصات."
        },
        type: "backend",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/ozone-clinic/backend/06-branches-management.png",
        alt: {
          en: "Branch management screen for clinic locations and contact details",
          ar: "شاشة إدارة الفروع وبيانات التواصل"
        },
        caption: {
          en: "Branch management screen for clinic locations and contact details.",
          ar: "شاشة إدارة الفروع وبيانات التواصل."
        },
        type: "backend",
        viewport: "desktop"
      }
    ],
    mobileScreenshots: [],
    isFeatured: true,
    isPrivate: false,
    status: "live",
    liveUrl: "https://ozoneclinic-sa.com/",
    needsReview: false
  },
  {
    slug: "gold-mine-erp",
    title: "ERP Management System — Gold Mine Management in Saudi Arabia",
    titleAr: "نظام ERP لإدارة منجم ذهب في السعودية",
    type: ["laravel", "php"] as WorkType[],
    category: "Backend / Full-Stack ERP",
    categoryAr: "باك إند / نظام ERP",
    industry: "Mining / ERP",
    goal: ["Dashboard", "Admin Panel", "Role Management", "Reports", "Warehouse", "Accounting"],
    summary: "A full ERP management platform built for managing a gold mine operation in Saudi Arabia. The system centralizes administration, departments, roles, users, mining reports, factory reports, warehouse operations, accounting reports, cash receipts, operating costs, tasks, and stock movements into one secure dashboard.",
    summaryAr: "نظام ERP متكامل لإدارة عمليات منجم ذهب في السعودية، يجمع إدارة المستخدمين، الأقسام، الصلاحيات، تقارير المنجم، تقارير المصنع، المخازن، الحسابات، التكاليف، المقبوضات، المهام، وحركات المخزون داخل لوحة تحكم واحدة آمنة ومنظمة.",
    problem: "Gold mine operations include several connected departments such as administration, mining, factory operations, warehouse, accounting, and reporting. Managing these workflows manually or across separate tools makes it difficult to track responsibilities, permissions, stock quantities, operating costs, receipts, and daily reports accurately.",
    problemAr: "تتضمن إدارة منجم الذهب عدة أقسام مترابطة مثل الإدارة، المنجم، المصنع، المخازن، الحسابات، والتقارير. الاعتماد على أدوات منفصلة أو إدارة يدوية يجعل تتبع المسؤوليات، الصلاحيات، كميات المخزون، التكاليف التشغيلية، المقبوضات، والتقارير اليومية أكثر صعوبة وعرضة للأخطاء.",
    solution: "I built a unified ERP dashboard that connects the main business departments in one system. The platform includes authentication, user management, department management, role and permission control, mining reports, factory reports, warehouse items, receipts, issues, stock movements, accounting reports, operating costs, cash receipts, tasks, filters, searchable tables, and export-ready reporting screens.",
    solutionAr: "تم بناء لوحة تحكم ERP موحدة تربط الأقسام الرئيسية في نظام واحد. يشمل النظام تسجيل الدخول، إدارة المستخدمين، إدارة الأقسام، التحكم في الأدوار والصلاحيات، تقارير المنجم، تقارير المصنع، عناصر المخزن، الوارد، المنصرف، حركات المخزون، تقارير الحسابات، التكاليف التشغيلية، المقبوضات النقدية، المهام، الفلاتر، الجداول القابلة للبحث، وشاشات تقارير جاهزة للتصدير.",
    role: [
      "Built a unified ERP dashboard that connects the main business departments in one system.",
      "Developed secure authentication screen with email and password login.",
      "Implemented role-based access control for different employee levels.",
      "Created administration module for departments, roles, users, and permissions."
    ],
    roleAr: [
      "بناء لوحة تحكم ERP موحدة تربط الأقسام الرئيسية في نظام واحد.",
      "تطوير شاشة تسجيل دخول آمنة بالبريد الإلكتروني وكلمة المرور.",
      "تنفيذ نظام صلاحيات حسب الدور لكل مستوى وظيفي.",
      "إنشاء وحدة إدارة تشمل الأقسام، الأدوار، المستخدمين، والصلاحيات."
    ],
    stack: [
      "Backend", "REST API", "Database", "Authentication", "Role-Based Access Control", "Admin Dashboard", "Reports", "Warehouse Management", "Accounting Management"
    ],
    features: [
      "Authentication & Access Control",
      "Departments Management",
      "Roles & Permissions Management",
      "Users Management",
      "Mine Reports",
      "Factory Reports",
      "Warehouse Items",
      "Warehouse Receipts",
      "Warehouse Issues",
      "Stock Movements",
      "Accounting Reports",
      "Operating Costs",
      "Cash Receipts",
      "Task Management",
      "Search, Filters & Pagination",
      "Export Excel / Export PDF report actions"
    ],
    featuresAr: [
      "تسجيل الدخول والتحكم في الوصول",
      "إدارة الأقسام",
      "إدارة الأدوار والصلاحيات",
      "إدارة المستخدمين",
      "تقارير المنجم",
      "تقارير المصنع",
      "إدارة أصناف المخزن",
      "وارد المخزن",
      "منصرف المخزن",
      "حركات المخزون",
      "تقارير الحسابات",
      "التكاليف التشغيلية",
      "المقبوضات النقدية",
      "إدارة المهام",
      "البحث والفلاتر وتقسيم الصفحات",
      "أزرار تصدير Excel و PDF للتقارير"
    ],
    built: [
      "Secure authentication screen with email and password login.",
      "Role-based access control for different employee levels.",
      "Administration module for departments, roles, users, and permissions.",
      "Mining reports module for extraction, fuel usage, incidents, and equipment status.",
      "Factory reports module for production reports, approval status, and report types.",
      "Warehouse module for items, receipts, issues, and stock movements.",
      "Accounting module for operating costs and cash receipts.",
      "Task management module for internal operational tasks.",
      "Advanced reports pages with date filters, status filters, movement type filters, and export actions.",
      "Searchable data tables with pagination and edit actions.",
      "Empty-state UI for screens with no available records.",
      "Dark admin dashboard interface optimized for internal business use."
    ],
    builtAr: [
      "شاشة تسجيل دخول آمنة بالبريد الإلكتروني وكلمة المرور.",
      "نظام صلاحيات حسب الدور لكل مستوى وظيفي.",
      "وحدة إدارة تشمل الأقسام، الأدوار، المستخدمين، والصلاحيات.",
      "وحدة تقارير المنجم لمتابعة الاستخراج، استهلاك الوقود، الحوادث، وحالة المعدات.",
      "وحدة تقارير المصنع لمتابعة تقارير الإنتاج، حالات الاعتماد، وأنواع التقارير.",
      "وحدة مخازن تشمل الأصناف، الوارد، المنصرف، وحركات المخزون.",
      "وحدة حسابات تشمل التكاليف التشغيلية والمقبوضات النقدية.",
      "وحدة مهام لإدارة الأعمال التشغيلية الداخلية.",
      "صفحات تقارير متقدمة بفلاتر حسب التاريخ، الحالة، نوع الحركة، ونوع التقرير.",
      "جداول بيانات قابلة للبحث مع pagination وإجراءات تعديل.",
      "حالات Empty State للشاشات التي لا تحتوي على بيانات.",
      "واجهة Dashboard داكنة مناسبة للاستخدام الداخلي في الشركات."
    ],
    businessValue: [
      "Centralized all gold mine management workflows into one dashboard.",
      "Improved operational visibility across mining, factory, warehouse, and accounting departments.",
      "Reduced manual tracking and separated spreadsheets.",
      "Made permissions and user access easier to manage.",
      "Provided a scalable foundation for adding real data, approvals, analytics, and exports.",
      "Created a clean internal tool suitable for daily administrative and operational use."
    ],
    businessValueAr: [
      "توحيد جميع عمليات إدارة منجم الذهب داخل لوحة تحكم واحدة.",
      "تحسين وضوح العمليات بين أقسام المنجم، المصنع، المخازن، والحسابات.",
      "تقليل الاعتماد على التتبع اليدوي والملفات المنفصلة.",
      "تسهيل إدارة الصلاحيات ووصول المستخدمين.",
      "توفير أساس قابل للتوسع لإضافة بيانات حقيقية، اعتمادات، تحليلات، وتصدير التقارير.",
      "إنشاء أداة داخلية منظمة مناسبة للاستخدام الإداري والتشغيلي اليومي."
    ],
    screenshots: [
      "/demo/projects/gold-mine-erp/login.png"
    ],
    authScreenshots: [
      {
        src: "/demo/projects/gold-mine-erp/login.png",
        alt: { en: "Authentication - Login", ar: "تسجيل الدخول" },
        caption: { en: "Authentication", ar: "تسجيل الدخول" },
        type: "auth",
        viewport: "desktop"
      }
    ],
    adminScreenshots: [
      {
        src: "/demo/projects/gold-mine-erp/Departments.png",
        alt: { en: "Administration - Departments", ar: "الإدارة - الأقسام" },
        caption: { en: "Administration - Departments", ar: "الإدارة - الأقسام" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Roles.png",
        alt: { en: "Administration - Roles", ar: "الإدارة - الأدوار" },
        caption: { en: "Administration - Roles", ar: "الإدارة - الأدوار" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Users.png",
        alt: { en: "Administration - Users", ar: "الإدارة - المستخدمين" },
        caption: { en: "Administration - Users", ar: "الإدارة - المستخدمين" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    operationsScreenshots: [
      {
        src: "/demo/projects/gold-mine-erp/Tasks.png",
        alt: { en: "Operations & Tasks", ar: "العمليات والمهام" },
        caption: { en: "Operations & Tasks", ar: "العمليات والمهام" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    mineScreenshots: [
      {
        src: "/demo/projects/gold-mine-erp/Mine Reports.png",
        alt: { en: "Mine Management - Mine Reports", ar: "إدارة المنجم - تقارير المنجم" },
        caption: { en: "Mine Management - Mine Reports", ar: "إدارة المنجم - تقارير المنجم" },
        type: "reports",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Mine Reports2.png",
        alt: { en: "Mine Management - Mine Reports 2", ar: "إدارة المنجم - تقارير المنجم 2" },
        caption: { en: "Mine Management - Mine Reports 2", ar: "إدارة المنجم - تقارير المنجم 2" },
        type: "reports",
        viewport: "desktop"
      }
    ],
    factoryScreenshots: [
      {
        src: "/demo/projects/gold-mine-erp/Factory Reports.png",
        alt: { en: "Factory Management - Factory Reports", ar: "إدارة المصنع - تقارير المصنع" },
        caption: { en: "Factory Management - Factory Reports", ar: "إدارة المصنع - تقارير المصنع" },
        type: "reports",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Factory Reports2.png",
        alt: { en: "Factory Management - Factory Reports 2", ar: "إدارة المصنع - تقارير المصنع 2" },
        caption: { en: "Factory Management - Factory Reports 2", ar: "إدارة المصنع - تقارير المصنع 2" },
        type: "reports",
        viewport: "desktop"
      }
    ],
    warehouseScreenshots: [
      {
        src: "/demo/projects/gold-mine-erp/Warehouse Reports.png",
        alt: { en: "Warehouse Management - Warehouse Reports", ar: "إدارة المخازن - تقارير المخازن" },
        caption: { en: "Warehouse Management - Warehouse Reports", ar: "إدارة المخازن - تقارير المخازن" },
        type: "reports",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Warehouse Items.png",
        alt: { en: "Warehouse Management - Warehouse Items", ar: "إدارة المخازن - أصناف المخزن" },
        caption: { en: "Warehouse Management - Warehouse Items", ar: "إدارة المخازن - أصناف المخزن" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Warehouse Receipts.png",
        alt: { en: "Warehouse Management - Warehouse Receipts", ar: "إدارة المخازن - وارد المخزن" },
        caption: { en: "Warehouse Management - Warehouse Receipts", ar: "إدارة المخازن - وارد المخزن" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Warehouse Issues.png",
        alt: { en: "Warehouse Management - Warehouse Issues", ar: "إدارة المخازن - منصرف المخزن" },
        caption: { en: "Warehouse Management - Warehouse Issues", ar: "إدارة المخازن - منصرف المخزن" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Stock Movements.png",
        alt: { en: "Warehouse Management - Stock Movements", ar: "إدارة المخازن - حركات المخزون" },
        caption: { en: "Warehouse Management - Stock Movements", ar: "إدارة المخازن - حركات المخزون" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    accountingScreenshots: [
      {
        src: "/demo/projects/gold-mine-erp/Accounting Reports.png",
        alt: { en: "Accounting - Accounting Reports", ar: "الحسابات - تقارير الحسابات" },
        caption: { en: "Accounting - Accounting Reports", ar: "الحسابات - تقارير الحسابات" },
        type: "reports",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Operating Costs.png",
        alt: { en: "Accounting - Operating Costs", ar: "الحسابات - التكاليف التشغيلية" },
        caption: { en: "Accounting - Operating Costs", ar: "الحسابات - التكاليف التشغيلية" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/gold-mine-erp/Cash Receipts.png",
        alt: { en: "Accounting - Cash Receipts", ar: "الحسابات - المقبوضات النقدية" },
        caption: { en: "Accounting - Cash Receipts", ar: "الحسابات - المقبوضات النقدية" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    isFeatured: true,
    isPrivate: false,
    status: "case-study",
    needsReview: false
  },
  {
    slug: "crm-order-management-system",
    title: "CRM Order Management System",
    titleAr: "نظام CRM لإدارة الطلبات",
    type: ["laravel", "php"],
    category: "Backend / Full-Stack CRM",
    categoryAr: "باك إند / نظام CRM",
    industry: "Management",
    goal: ["order-management", "crm", "woocommerce"],
    summary: "A full CRM and order management dashboard built for managing customer orders, customers, payment statuses, shipment statuses, returns, delays, follow-ups, dynamic lookup tables, user roles, permissions, and WooCommerce webhook integration from one centralized Arabic RTL dashboard.",
    summaryAr: "نظام CRM متكامل لإدارة الطلبات والعملاء، يتضمن لوحة تحكم تحليلية، إدارة الطلبات، العملاء، المستخدمين، الأدوار، الصلاحيات، الإعدادات، الجداول الديناميكية، حالات الدفع والشحن والمرتجعات، أسباب التأخير والإلغاء، ومزامنة الطلبات مع ووكومرس من خلال Webhooks.",
    problem: "Many businesses receive orders from multiple sources such as WooCommerce, websites, social media, phone calls, and manual entries. Managing these orders manually makes it difficult to track customers, order statuses, payments, shipments, returns, delays, cancellation reasons, and follow-up priorities in one place.",
    problemAr: "تستقبل الكثير من الشركات الطلبات من مصادر متعددة مثل ووكومرس، الموقع الإلكتروني، السوشيال ميديا، المكالمات، والإدخال اليدوي. إدارة هذه الطلبات بشكل يدوي تجعل متابعة العملاء، حالات الطلب، الدفع، الشحن، المرتجعات، التأخير، أسباب الإلغاء، وأولويات المتابعة عملية صعبة وغير منظمة.",
    solution: "I built a centralized CRM dashboard that organizes the full order management workflow in one system. The platform includes authentication, dashboard analytics, order management, customer management, users, roles, permissions, settings, WooCommerce webhook integration, dynamic lookup tables, order statuses, payment methods, shipment statuses, return statuses, delay statuses, lead sources, lead statuses, follow-up statuses, attachment types, and reasons for cancellation, delay, and returns.",
    solutionAr: "تم بناء لوحة تحكم CRM مركزية تنظم دورة إدارة الطلبات بالكامل داخل نظام واحد. يشمل النظام تسجيل الدخول، لوحة مؤشرات تحليلية، إدارة الطلبات، إدارة العملاء، المستخدمين، الأدوار، الصلاحيات، الإعدادات، ربط ووكومرس، الجداول الديناميكية، حالات الطلبات، وسائل الدفع، حالات الدفع، حالات الشحن، حالات المرتجعات، حالات التأخير، مصادر العملاء المحتملين، حالات العملاء المحتملين، حالات المتابعة، أنواع المرفقات، وأسباب الإلغاء والتأخير والمرتجعات.",
    features: [
      "Arabic RTL Dashboard",
      "Light & Dark Mode",
      "Secure Authentication",
      "Orders Management",
      "Customers Management",
      "Users Management",
      "Roles Management",
      "Permissions Management",
      "System Settings",
      "WooCommerce Webhook Integration",
      "Dashboard Analytics & Charts",
      "Recent Orders Table",
      "Search, Filters & Pagination",
      "Export Excel Action",
      "Dynamic Lookup Tables",
      "Order Status Management",
      "Payment Status Management",
      "Shipment Status Management",
      "Return Status Management",
      "Delay Status Management",
      "Lead Sources & Lead Statuses",
      "Follow-Up Statuses & Priorities",
      "Cancellation, Delay & Return Reasons",
      "Attachment Types",
      "Payment Methods"
    ],
    featuresAr: [
      "لوحة تحكم عربية RTL",
      "دعم الوضع الفاتح والداكن",
      "تسجيل دخول آمن",
      "إدارة الطلبات",
      "إدارة العملاء",
      "إدارة المستخدمين",
      "إدارة الأدوار",
      "إدارة الصلاحيات",
      "إعدادات النظام",
      "ربط ووكومرس عبر Webhooks",
      "تحليلات ورسوم بيانية",
      "جدول آخر الطلبات",
      "البحث والفلاتر وتقسيم الصفحات",
      "تصدير Excel",
      "الجداول الديناميكية",
      "إدارة حالات الطلبات",
      "إدارة حالات الدفع",
      "إدارة حالات الشحنات",
      "إدارة حالات المرتجعات",
      "إدارة حالات التأخير",
      "مصادر وحالات العملاء المحتملين",
      "حالات وأولويات المتابعة",
      "أسباب الإلغاء والتأخير والمرتجعات",
      "أنواع المرفقات",
      "وسائل الدفع"
    ],
    role: ["Backend Developer", "Full-Stack Developer"],
    roleAr: ["مطور واجهات خلفية", "مطور شامل"],
    stack: [
      "Backend",
      "REST API",
      "Admin Dashboard",
      "CRM",
      "Order Management",
      "WooCommerce Webhooks",
      "Role-Based Access Control",
      "Dynamic Lookup Tables",
      "Analytics",
      "Arabic RTL UI",
      "Dark Mode"
    ],
    built: [
      "Arabic RTL admin dashboard for CRM and order operations.",
      "Secure login screen with email, password, remember me, and password visibility toggle.",
      "Light mode and dark mode UI support.",
      "Dashboard page with order KPIs, customer KPIs, sales totals, average order value, charts, and recent orders.",
      "Orders management module with searchable tables, pagination, filters, export action, and order tracking data.",
      "Customers management module with customer information, phone numbers, order counts, and actions.",
      "Users management module for internal system accounts.",
      "Roles management module for defining admin, moderator, and operations roles.",
      "Permissions management module for access control.",
      "Settings module for editable system configuration values.",
      "WooCommerce integration page with webhook delivery URL, endpoint URL, API key, setup instructions, testing checklist, and troubleshooting fields.",
      "Dynamic lookup tables for product categories, payment methods, attachment types, lead sources, lead statuses, follow-up statuses, order statuses, payment statuses, shipment statuses, return statuses, delay statuses, cancellation reasons, delay reasons, and return reasons.",
      "Searchable and paginated admin tables with edit/delete actions.",
      "Status badges, active/default indicators, sorting, and structured table controls.",
      "Right sidebar navigation optimized for Arabic RTL admin systems."
    ],
    builtAr: [
      "لوحة تحكم عربية RTL لإدارة CRM والطلبات.",
      "شاشة تسجيل دخول آمنة بالبريد الإلكتروني وكلمة المرور مع تذكرني وإظهار/إخفاء كلمة المرور.",
      "دعم الوضع الفاتح والوضع الداكن.",
      "لوحة تحكم تعرض مؤشرات الطلبات، العملاء، إجمالي المبيعات، متوسط قيمة الطلب، الرسوم البيانية، وآخر الطلبات.",
      "وحدة إدارة الطلبات مع البحث، الفلاتر، تقسيم الصفحات، التصدير، وبيانات تتبع الطلب.",
      "وحدة إدارة العملاء مع بيانات العميل، رقم الجوال، عدد الطلبات، وإجراءات التعديل والحذف.",
      "وحدة إدارة المستخدمين لحسابات النظام الداخلية.",
      "وحدة إدارة الأدوار لتعريف أدوار مثل Admin وModerator وOperations.",
      "وحدة إدارة الصلاحيات للتحكم في الوصول.",
      "وحدة الإعدادات لإدارة قيم النظام القابلة للتعديل.",
      "صفحة ربط ووكومرس تحتوي على Delivery URL وEndpoint URL وAPI Key وخطوات الإعداد وقائمة تحقق ودعم للمشكلات.",
      "جداول ديناميكية لتصنيفات المنتجات، وسائل الدفع، أنواع المرفقات، مصادر العملاء المحتملين، حالات العملاء المحتملين، حالات المتابعة، حالات الطلبات، حالات الدفع، حالات الشحنات، حالات المرتجعات، حالات التأخير، أسباب الإلغاء، أسباب التأخير، وأسباب المرتجعات.",
      "جداول قابلة للبحث وتقسيم الصفحات مع إجراءات تعديل وحذف.",
      "Badges للحالات، مؤشرات نشط وافتراضي، فرز، وتحكم منظم في الجداول.",
      "Sidebar يمين مناسب لأنظمة الإدارة العربية RTL."
    ],
    businessValue: [
      "Centralized order and customer operations into one dashboard.",
      "Reduced manual tracking across spreadsheets and separate tools.",
      "Improved visibility over order status, payment state, shipment state, returns, delays, and follow-ups.",
      "Enabled structured role-based access control for internal team members.",
      "Simplified WooCommerce integration through clear webhook setup fields and testing checklist.",
      "Made dynamic business data manageable without hardcoding statuses and lookup values.",
      "Delivered a scalable CRM foundation that can support more integrations, analytics, automation, and team workflows."
    ],
    businessValueAr: [
      "توحيد إدارة الطلبات والعملاء داخل لوحة تحكم واحدة.",
      "تقليل الاعتماد على الملفات المنفصلة والتتبع اليدوي.",
      "تحسين وضوح حالة الطلب، الدفع، الشحن، المرتجعات، التأخير، والمتابعات.",
      "توفير نظام صلاحيات منظم حسب الأدوار لأعضاء الفريق.",
      "تسهيل ربط ووكومرس من خلال حقول واضحة وخطوات إعداد وقائمة تحقق.",
      "جعل بيانات النظام الديناميكية قابلة للإدارة بدون تعديل الكود.",
      "بناء أساس CRM قابل للتوسع لإضافة تكاملات، تحليلات، أتمتة، وسير عمل للفريق."
    ],
    screenshots: [
      "/demo/projects/crm-order-management/dashboard.png",
      "/demo/projects/crm-order-management/إدارة الطلبات.png",
      "/demo/projects/crm-order-management/العملاء.png",
      "/demo/projects/crm-order-management/ربط ووكومرس.png"
    ],
    authThemeScreenshots: [
      {
        src: "/demo/projects/crm-order-management/تسجيل الدخول.png",
        alt: { en: "CRM login screen in Arabic RTL interface", ar: "شاشة تسجيل الدخول في نظام CRM العربي" },
        caption: { en: "Authentication - Login", ar: "تسجيل الدخول" },
        type: "auth",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/دارك سكرين و وايت سكرين.png",
        alt: { en: "CRM dashboard light and dark mode preview", ar: "معاينة الوضع الفاتح والداكن في لوحة التحكم" },
        caption: { en: "Light and Dark Modes", ar: "الوضع الفاتح والداكن" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    dashboardScreenshots: [
      {
        src: "/demo/projects/crm-order-management/dashboard.png",
        alt: { en: "CRM dashboard with order metrics, sales charts, customers, and recent orders", ar: "لوحة تحكم CRM تعرض مؤشرات الطلبات والمبيعات والعملاء وآخر الطلبات" },
        caption: { en: "Dashboard & Analytics", ar: "لوحة التحكم والتحليلات" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    ordersScreenshots: [
      {
        src: "/demo/projects/crm-order-management/إدارة الطلبات.png",
        alt: { en: "Order management table with search, filters, pagination, export, and order tracking", ar: "جدول إدارة الطلبات مع البحث والفلاتر والتصدير وتتبع الطلبات" },
        caption: { en: "Orders Management", ar: "إدارة الطلبات" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    customersScreenshots: [
      {
        src: "/demo/projects/crm-order-management/العملاء.png",
        alt: { en: "Customer management table", ar: "جدول إدارة العملاء" },
        caption: { en: "Customers", ar: "العملاء" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/مصادر العملاء المحتملين.png",
        alt: { en: "Lead sources lookup table", ar: "جدول مصادر العملاء المحتملين" },
        caption: { en: "Lead Sources", ar: "مصادر العملاء المحتملين" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/حالات العملاء المحتملين.png",
        alt: { en: "Lead statuses lookup table", ar: "جدول حالات العملاء المحتملين" },
        caption: { en: "Lead Statuses", ar: "حالات العملاء المحتملين" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/حالات المتابعة.png",
        alt: { en: "Follow-up statuses lookup table", ar: "جدول حالات المتابعة" },
        caption: { en: "Follow-Up Statuses", ar: "حالات المتابعة" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/أولويات المتابعة.png",
        alt: { en: "Follow-up priorities lookup table", ar: "جدول أولويات المتابعة" },
        caption: { en: "Follow-Up Priorities", ar: "أولويات المتابعة" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    adminScreenshots: [
      {
        src: "/demo/projects/crm-order-management/المستخدمون.png",
        alt: { en: "Users management screen", ar: "شاشة إدارة المستخدمين" },
        caption: { en: "Users Management", ar: "إدارة المستخدمين" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/الأدوار.png",
        alt: { en: "Roles management screen", ar: "شاشة إدارة الأدوار" },
        caption: { en: "Roles Management", ar: "إدارة الأدوار" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/الصلاحيات.png",
        alt: { en: "Permissions management screen", ar: "شاشة إدارة الصلاحيات" },
        caption: { en: "Permissions Management", ar: "إدارة الصلاحيات" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/الإعدادات.png",
        alt: { en: "System settings management screen", ar: "شاشة إدارة الإعدادات" },
        caption: { en: "System Settings", ar: "الإعدادات" },
        type: "settings",
        viewport: "desktop"
      }
    ],
    woocommerceScreenshots: [
      {
        src: "/demo/projects/crm-order-management/ربط ووكومرس.png",
        alt: { en: "WooCommerce webhook integration setup screen", ar: "شاشة إعداد ربط ووكومرس عبر Webhooks" },
        caption: { en: "WooCommerce Integration", ar: "ربط ووكومرس" },
        type: "settings",
        viewport: "desktop"
      }
    ],
    lookupTablesScreenshots: [
      {
        src: "/demo/projects/crm-order-management/تصنيفات المنتجات.png",
        alt: { en: "Product categories lookup table", ar: "جدول تصنيفات المنتجات" },
        caption: { en: "Product Categories", ar: "تصنيفات المنتجات" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/وسائل الدفع.png",
        alt: { en: "Payment methods lookup table", ar: "جدول وسائل الدفع" },
        caption: { en: "Payment Methods", ar: "وسائل الدفع" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/أنواع المرفقات.png",
        alt: { en: "Attachment types lookup table", ar: "جدول أنواع المرفقات" },
        caption: { en: "Attachment Types", ar: "أنواع المرفقات" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/حالات الطلبات.png",
        alt: { en: "Order statuses lookup table", ar: "جدول حالات الطلبات" },
        caption: { en: "Order Statuses", ar: "حالات الطلبات" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/حالات الدفع.png",
        alt: { en: "Payment statuses lookup table", ar: "جدول حالات الدفع" },
        caption: { en: "Payment Statuses", ar: "حالات الدفع" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/حالات الشحنات.png",
        alt: { en: "Shipment statuses lookup table", ar: "جدول حالات الشحنات" },
        caption: { en: "Shipment Statuses", ar: "حالات الشحنات" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/حالات المرتجعات.png",
        alt: { en: "Return statuses lookup table", ar: "جدول حالات المرتجعات" },
        caption: { en: "Return Statuses", ar: "حالات المرتجعات" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/حالات التأخير.png",
        alt: { en: "Delay statuses lookup table", ar: "جدول حالات التأخير" },
        caption: { en: "Delay Statuses", ar: "حالات التأخير" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/أسباب الإلغاء.png",
        alt: { en: "Cancellation reasons lookup table", ar: "جدول أسباب الإلغاء" },
        caption: { en: "Cancellation Reasons", ar: "أسباب الإلغاء" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/أسباب التأخير.png",
        alt: { en: "Delay reasons lookup table", ar: "جدول أسباب التأخير" },
        caption: { en: "Delay Reasons", ar: "أسباب التأخير" },
        type: "dashboard",
        viewport: "desktop"
      },
      {
        src: "/demo/projects/crm-order-management/أسباب المرتجعات.png",
        alt: { en: "Return reasons lookup table", ar: "جدول أسباب المرتجعات" },
        caption: { en: "Return Reasons", ar: "أسباب المرتجعات" },
        type: "dashboard",
        viewport: "desktop"
      }
    ],
    isFeatured: true,
    isPrivate: false,
    status: "case-study",
    needsReview: false
  }
];

