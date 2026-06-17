
export type PluginItem = {
  slug: string;
  name: string;
  nameAr: string;
  version?: string;
  category?: string;
  categoryAr?: string;
  description: string;
  descriptionAr: string;
  problem: string;
  problemAr: string;
  solution: string;
  solutionAr: string;
  features: string[];
  featuresAr: string[];
  stack: string[];
  built: string[];
  builtAr: string[];
  learningNote?: string;
  learningNoteAr?: string;
  securityNote?: string;
  securityNoteAr?: string;
  githubUrl?: string;
  demoUrl?: string;
  screenshots: string[];
  status:
    | "public-github"
    | "private-client"
    | "internal-tool"
    | "experimental"
    | "production-ready";
  compatibility?: string[];
  needsReview?: boolean;
};

export const plugins: PluginItem[] = [
  {
    slug: "custom-currency-icon",
    name: "Custom Currency Icon for WooCommerce",
    nameAr: "تخصيص أيقونة العملة لـ WooCommerce",
    version: "v1.0.0",
    category: "WordPress Plugin / WooCommerce / Customization",
    categoryAr: "إضافة ووردبريس / ووكومرس / تخصيص واجهة",
    description:
      "A lightweight WooCommerce plugin that allows store owners to easily replace the default text-based currency symbol with a custom SVG or image icon, enhancing the brand's visual identity across the storefront.",
    descriptionAr:
      "إضافة خفيفة لمتجر WooCommerce تسمح لأصحاب المتاجر بتغيير رمز العملة الافتراضي (النصي) بأيقونة مخصصة (SVG أو صورة) لتعزيز الهوية البصرية للمتجر في كافة الصفحات وسلة المشتريات.",
    problem:
      "WooCommerce by default only allows text-based currency symbols, which limits design flexibility when a store wants to use a branded icon, SVG, or a unique graphic for its currency display.",
    problemAr:
      "يسمح WooCommerce افتراضياً باستخدام رموز نصية للعملات فقط، مما يقيد المرونة في التصميم عندما يرغب المتجر في استخدام أيقونة مميزة، ملف SVG، أو شعار خاص للعملة.",
    solution:
      "Developed a custom WordPress plugin that hooks into WooCommerce currency filters, providing a simple settings page to upload and display a custom currency icon seamlessly across all product prices and cart summaries.",
    solutionAr:
      "تطوير إضافة ووردبريس مخصصة تتصل بفلاتر عملة WooCommerce، وتقدم صفحة إعدادات بسيطة تتيح رفع وعرض أيقونة عملة مخصصة بسلاسة على كافة أسعار المنتجات وملخصات السلة.",
    features: [
      "Custom Settings Page in WooCommerce",
      "Media Uploader Integration",
      "SVG and Image Support",
      "Seamless Frontend and Cart Integration",
      "Lightweight without affecting performance",
    ],
    featuresAr: [
      "صفحة إعدادات مخصصة داخل WooCommerce",
      "الربط مع مكتبة وسائط WordPress",
      "دعم الصور وملفات SVG",
      "تكامل سلس مع أسعار المنتجات وسلة المشتريات",
      "إضافة خفيفة لا تؤثر على سرعة المتجر",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "WordPress Hooks & Filters",
    ],
    built: [
      "Plugin structure and settings page",
      "Media uploader script for selecting the icon",
      "WooCommerce currency symbol overriding logic",
    ],
    builtAr: [
      "هيكل الإضافة وصفحة الإعدادات",
      "سكربت لرفع واختيار الأيقونة من مكتبة الوسائط",
      "منطق برمجي لتغيير وتخطي رمز العملة الافتراضي",
    ],
    githubUrl: "https://github.com/engmuhammednasser/custom-currency-icon-for-woocommerce",
    screenshots: [
      "/demo/plugins/custom-currency-icon/cover.png",
      "/demo/plugins/custom-currency-icon/1.png",
      "/demo/plugins/custom-currency-icon/2.png",
      "/demo/plugins/custom-currency-icon/3.png",
      "/demo/plugins/custom-currency-icon/4.png",
    ],
    status: "public-github",
    needsReview: false,
  },
  {
    slug: "geidea-payment-gateway",
    name: "Geidea Payment Gateway for Custom WordPress Booking",
    nameAr: "إضافة Geidea Payment Gateway لحجوزات WordPress المخصصة",
    version: "v2.3.9",
    category: "WordPress Plugin / Payment Gateway / Custom Booking Workflow",
    categoryAr: "إضافة ووردبريس / بوابة دفع / مسار حجز مخصص",
    description:
      "This plugin was built for a custom WordPress car booking website that was not using the standard WooCommerce checkout workflow. Geidea provides an official WooCommerce plugin, but the project required a custom WordPress payment integration that works with a custom booking flow outside the traditional WooCommerce cart and checkout process.\n\nThe plugin integrates Geidea HPP Checkout V2 using a redirect-based payment flow. The user is redirected to Geidea’s secure payment page, then returned to the website after payment, where the booking status is updated based on the payment result.",
    descriptionAr:
      "تم بناء هذه الإضافة لموقع حجوزات سيارات مبني داخل WordPress بطريقة مخصصة خارج منطق WooCommerce التقليدي. كانت بوابة Geidea توفر إضافة جاهزة لـ WooCommerce، لكن المشروع كان يحتاج إلى تكامل دفع مخصص يناسب booking workflow خاص داخل WordPress.\n\nتعتمد الإضافة على Geidea HPP Checkout V2 من خلال redirect payment flow، حيث يتم تحويل المستخدم إلى صفحة الدفع الخاصة بـ Geidea بشكل واضح وآمن، ثم يعود إلى الموقع بعد انتهاء العملية ليتم تحديث حالة الحجز بناءً على نتيجة الدفع.",
    problem:
      "Geidea provides a WooCommerce-ready payment plugin, but the project needed a secure custom WordPress payment flow for a booking system that was not built on the standard WooCommerce cart and checkout workflow.",
    problemAr:
      "كانت المشكلة أن بوابة Geidea توفر إضافة جاهزة لـ WooCommerce، لكن موقع الحجز كان مبنيًا بطريقة مخصصة خارج cart وcheckout التقليديين، لذلك احتاج المشروع إلى بناء payment flow مخصص وآمن داخل WordPress.",
    solution:
      "Built a custom WordPress plugin that creates a Geidea payment session, redirects the user to the Geidea hosted payment page, handles return and callback URLs, and updates the booking status after payment success or failure.",
    solutionAr:
      "تم بناء إضافة WordPress مخصصة تقوم بإنشاء جلسة دفع مع Geidea، وتحويل المستخدم إلى صفحة الدفع المستضافة، ثم التعامل مع return وcallback URLs وتحديث حالة الحجز بعد نجاح أو فشل عملية الدفع.",
    features: [
      "Geidea HPP Checkout V2 integration",
      "Redirect payment mode",
      "Custom WordPress booking workflow support",
      "Test and Live environment settings",
      "WordPress admin settings page",
      "Callback URL handling",
      "Return URL handling",
      "Booking status update after payment",
      "Cleaner and more trusted payment experience for users",
    ],
    featuresAr: [
      "تكامل مع Geidea HPP Checkout V2",
      "Redirect payment mode",
      "دعم booking workflow مخصص داخل WordPress",
      "إعدادات Test وLive",
      "صفحة إعدادات داخل لوحة تحكم WordPress",
      "التعامل مع Callback URL",
      "التعامل مع Return URL",
      "تحديث حالة الحجز بعد الدفع",
      "تجربة دفع أوضح وأكثر ثقة للمستخدم",
    ],
    stack: [
      "WordPress",
      "PHP",
      "Geidea HPP Checkout V2",
      "Payment Gateway Integration",
      "Callback Handling",
      "Admin Settings",
      "Custom Booking Workflow",
    ],
    built: [
      "Custom WordPress plugin structure",
      "Admin settings page for Geidea credentials and environment mode",
      "Payment session creation flow",
      "Redirect payment flow",
      "Return URL handling",
      "Callback handling",
      "Booking status update logic",
      "Test/Live mode support",
      "Safer payment experience compared to forcing the user into a WooCommerce checkout flow that did not fit the project",
    ],
    builtAr: [
      "هيكل إضافة WordPress مخصصة",
      "صفحة إعدادات داخل لوحة التحكم",
      "إعدادات بيانات Geidea وبيئة Test/Live",
      "إنشاء payment session",
      "Redirect payment flow",
      "التعامل مع Return URL",
      "التعامل مع Callback URL",
      "منطق تحديث حالة الحجز بعد الدفع",
      "تجربة دفع أوضح تناسب طبيعة موقع الحجوزات",
    ],
    learningNote:
      "AI was used as an assistant to understand unfamiliar parts faster, analyze errors, and speed up debugging, but the implementation relied on reading Geidea documentation, testing, and integrating the payment flow into a real WordPress project.",
    learningNoteAr:
      "تم استخدام الذكاء الاصطناعي كمساعد في الفهم وتحليل الأخطاء وتسريع حل بعض المشاكل، لكنه لم يكن بديلًا عن قراءة التوثيق، الاختبار، وفهم طريقة ربط بوابة الدفع داخل workflow حقيقي.",
    githubUrl: "https://github.com/engmuhammednasser/geidea-payment-gateway",
    screenshots: [
      "/demo/plugins/geidea-payment-gateway/cover.png",
      "/demo/plugins/geidea-payment-gateway/admin-settings.png",
      "/demo/plugins/geidea-payment-gateway/admin-settings2.png",
      "/demo/plugins/geidea-payment-gateway/admin-settings3.png",
      "/demo/plugins/geidea-payment-gateway/admin-settings4.png",
      "/demo/plugins/geidea-payment-gateway/payment-redirect-flow.jpg",
    ],
    status: "production-ready",
    needsReview: true,
  },
  {
    slug: "access-trail",
    name: "AccessTrail – Admin Login & Security Monitor",
    nameAr: "AccessTrail – Admin Login & Security Monitor",
    version: "V1.0.0",
    category: "WORDPRESS PLUGIN / SECURITY / LOGIN MONITORING",
    categoryAr: "إضافة ووردبريس / حماية / مراقبة تسجيل الدخول",
    description:
      "A lightweight WordPress security plugin that tracks successful admin logins, failed login attempts, IP addresses, user agents, and suspicious access activity through a clean admin dashboard.\n\nAccessTrail is a professional WordPress security plugin built to help website owners and administrators monitor backend access activity. It records successful administrator logins, failed login attempts, IP addresses, user-agent data, login timestamps, and security-related events inside a clean WordPress admin dashboard.",
    descriptionAr:
      "إضافة ووردبريس خفيفة لمراقبة دخول الأدمن ومحاولات تسجيل الدخول الفاشلة، مع تسجيل الـ IP والـ User-Agent وتنبيهات أمنية ولوحة تحكم واضحة.\n\nAccessTrail هي إضافة ووردبريس أمنية تساعد أصحاب المواقع ومديري النظام على مراقبة نشاط الدخول إلى لوحة التحكم. تقوم الإضافة بتسجيل عمليات دخول الأدمن الناجحة، ومحاولات الدخول الفاشلة، وعناوين الـ IP، وبيانات المتصفح User-Agent، ووقت الدخول، والتنبيهات الأمنية داخل لوحة تحكم واضحة ومنظمة.",
    problem:
      "WordPress websites often lack clear visibility into who accessed the admin dashboard, when the access happened, which IP address was used, and whether there are repeated failed login attempts. Without a dedicated log and alert system, suspicious access patterns can be missed.",
    problemAr:
      "في كثير من مواقع WordPress لا توجد رؤية واضحة لمن قام بالدخول إلى لوحة التحكم، ومتى حدث الدخول، وما هو عنوان الـ IP المستخدم، وهل توجد محاولات دخول فاشلة متكررة أم لا. بدون سجل واضح وتنبيهات، قد تمر الأنشطة المشبوهة بدون ملاحظة.",
    solution:
      "AccessTrail provides a dedicated admin login monitoring system inside WordPress. It logs successful admin logins, failed login attempts, IP activity, user-agent details, and provides configurable email notifications, new IP alerts, failed attempt threshold alerts, filters, CSV export, and automatic log cleanup.",
    solutionAr:
      "AccessTrail توفر نظام مراقبة مخصص داخل WordPress لتتبع نشاط دخول الأدمن. تقوم الإضافة بتسجيل الدخول الناجح، ومحاولات الدخول الفاشلة، ونشاط الـ IP، وبيانات User-Agent، مع تنبيهات بريد إلكتروني قابلة للتخصيص، وتنبيهات عند الدخول من IP جديد، وتنبيهات عند تكرار المحاولات الفاشلة، بالإضافة إلى الفلترة، وتصدير CSV، والتنظيف التلقائي للسجلات القديمة.",
    features: [
      "Successful admin login tracking",
      "Failed login attempt monitoring",
      "IP address logging",
      "User-Agent logging",
      "New IP detection alerts",
      "Configurable email notifications",
      "Failed login threshold alerts",
      "Filterable login activity dashboard",
      "Pagination for large log datasets",
      "CSV export with active filter support",
      "Automatic log retention cleanup using WP-Cron",
      "Secure IP detection with optional Cloudflare / proxy support",
      "Multisite compatible with Super Admin detection",
      "No passwords or sensitive credentials stored",
      "Translation-ready with WordPress i18n support",
    ],
    featuresAr: [
      "تتبع عمليات دخول الأدمن الناجحة",
      "مراقبة محاولات تسجيل الدخول الفاشلة",
      "تسجيل عنوان الـ IP",
      "تسجيل بيانات User-Agent",
      "تنبيه عند الدخول من IP جديد",
      "تنبيهات بريد إلكتروني قابلة للتخصيص",
      "تنبيه عند تجاوز عدد معين من محاولات الدخول الفاشلة",
      "لوحة سجلات قابلة للبحث والفلترة",
      "Pagination للتعامل مع عدد كبير من السجلات",
      "تصدير السجلات بصيغة CSV مع دعم الفلاتر الحالية",
      "تنظيف تلقائي للسجلات القديمة باستخدام WP-Cron",
      "اكتشاف آمن للـ IP مع دعم اختياري لـ Cloudflare والـ Proxy",
      "دعم Multisite و Super Admin",
      "لا يتم تخزين كلمات مرور أو بيانات حساسة",
      "جاهزة للترجمة باستخدام WordPress i18n",
    ],
    stack: [
      "WordPress",
      "PHP",
      "WooCommerce-ready environment",
      "MySQL / wpdb",
      "WP-Cron",
      "WordPress Admin Dashboard",
      "WordPress Hooks",
      "WordPress Nonces",
      "Capability Checks",
      "CSV Export",
      "i18n",
      "GitHub Auto Update Support",
    ],
    built: [
      "Custom WordPress plugin structure",
      "Activation and deactivation hooks",
      "Custom database table for login logs",
      "Successful admin login tracking using WordPress login hooks",
      "Failed login attempt tracking",
      "Admin-only dashboard for login activity",
      "Statistics cards for total events, successful logins, failed attempts, last success, and last failed attempt",
      "Filters by status, username, IP address, and date range",
      "CSV export flow with nonce validation",
      "Clear all logs action with confirmation dialog",
      "Settings page for email notifications and security preferences",
      "New IP detection logic per admin user",
      "Failed attempt threshold notification system",
      "Daily WP-Cron cleanup for old logs",
      "Secure sanitization, escaping, prepared SQL statements, nonce checks, and capability checks",
      "Optional data deletion on uninstall",
      "GitHub updater fallback and plugin information support",
    ],
    builtAr: [
      "بناء هيكل إضافة WordPress مخصص",
      "استخدام Activation و Deactivation hooks",
      "إنشاء جدول مخصص في قاعدة البيانات لحفظ سجلات الدخول",
      "تتبع دخول الأدمن الناجح باستخدام WordPress hooks",
      "تتبع محاولات تسجيل الدخول الفاشلة",
      "بناء Dashboard داخل لوحة تحكم WordPress لعرض نشاط الدخول",
      "كروت إحصائيات لعرض إجمالي الأحداث، الدخول الناجح، المحاولات الفاشلة، آخر دخول ناجح، وآخر محاولة فاشلة",
      "فلترة حسب الحالة، اسم المستخدم، عنوان الـ IP، والتاريخ",
      "تصدير CSV مع حماية nonce validation",
      "حذف كل السجلات مع نافذة تأكيد",
      "صفحة إعدادات للتنبيهات وخيارات الأمان",
      "اكتشاف الدخول من IP جديد لكل مستخدم أدمن",
      "نظام تنبيه عند تجاوز عدد معين من المحاولات الفاشلة",
      "تنظيف تلقائي يومي للسجلات القديمة باستخدام WP-Cron",
      "تطبيق sanitization و escaping و prepared SQL statements و nonce checks و capability checks",
      "خيار حذف بيانات الإضافة عند إلغاء التثبيت",
      "دعم GitHub updater وبيانات View Details الخاصة بالإضافة",
    ],
    learningNote:
      "This project focused on building a practical WordPress security monitoring tool with a clean admin experience. The main challenge was balancing useful access tracking with safe data handling, secure IP detection, configurable alerts, and a simple dashboard that site owners can understand quickly.",
    learningNoteAr:
      "ركز هذا المشروع على بناء أداة عملية لمراقبة أمان الدخول في WordPress مع تجربة استخدام واضحة داخل لوحة التحكم. التحدي الأساسي كان تحقيق توازن بين تتبع بيانات الدخول المهمة، والتعامل الآمن مع البيانات، واكتشاف الـ IP بشكل صحيح، والتنبيهات القابلة للتخصيص، ولوحة تحكم سهلة الفهم لأصحاب المواقع.",
    securityNote:
      "AccessTrail does not store passwords or sensitive credentials. It only records security-relevant metadata such as username, user ID, login status, IP address, user-agent, timestamps, and internal event details. All admin actions are protected using WordPress capabilities and nonce checks.",
    securityNoteAr:
      "AccessTrail لا تقوم بتخزين كلمات المرور أو أي بيانات حساسة. الإضافة تحفظ فقط بيانات مرتبطة بالمراقبة الأمنية مثل اسم المستخدم، رقم المستخدم، حالة الدخول، عنوان الـ IP، بيانات User-Agent، وقت الحدث، وتفاصيل داخلية. كل إجراءات لوحة التحكم محمية باستخدام صلاحيات WordPress و nonce checks.",
    githubUrl: "https://github.com/engmuhammednasser/AccessTrail",
    screenshots: [
      "/demo/plugins/access-trail/cover.png",
      "/demo/plugins/access-trail/screenshots/01.png",
      "/demo/plugins/access-trail/screenshots/02.png",
      "/demo/plugins/access-trail/screenshots/03.png"
    ],
    status: "public-github",
    needsReview: false,
  },
];
