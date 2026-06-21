import re

def update_projects_ts(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    new_project = '''  {
    slug: "gobe",
    title: "وكالة غوبي الإبداعية Gobe Agency",
    titleAr: "جو بي للدعايا",
    type: ["wordpress"] as WorkType[],
    category: "Agency / Creative / Portfolio",
    categoryAr: "وكالة إبداعية / بورتفوليو",
    industry: "AGENCY · MARKETING",
    goal: ["Branding", "Sales"],
    summary: "A creative digital agency platform showcasing strategic marketing, SEO, web development, and branding services.",
    summaryAr: "منصة لوكالة إبداعية تقدم خدمات التسويق الاستراتيجي، تحسين محركات البحث، تطوير الويب، وبناء الهوية التجارية.",
    problem: "The agency needed a modern, visually appealing portfolio to highlight its diverse range of digital marketing services and attract new clients.",
    problemAr: "كانت الوكالة بحاجة إلى محفظة أعمال حديثة وجذابة بصريًا لإبراز مجموعة خدمات التسويق الرقمي المتنوعة وجذب عملاء جدد.",
    solution: "Developed a comprehensive digital presence with detailed service pages for branding, SEO, motion graphics, and web development to effectively communicate the agency's capabilities.",
    solutionAr: "تم تطوير حضور رقمي شامل مع صفحات خدمات تفصيلية تشمل بناء الهوية، تحسين محركات البحث، الرسوم المتحركة، وتطوير الويب لعرض إمكانيات الوكالة بفعالية.",
    role: ["Lead Developer"],
    stack: ["WordPress","PHP","HTML","CSS","JavaScript"],
    features: ["Custom Theme", "Performance Optimization", "SEO Structure"],
    featuresAr: ["ثيم مخصص", "تحسين الأداء", "تهيئة محركات البحث"],
    screenshots: [
        "/projects/gobe/cover.png",
        "/projects/gobe/الرئيسية.png",
        "/projects/gobe/من نحن.png",
        "/projects/gobe/الخدمات الرقمية جو بي للتسويق.png",
        "/projects/gobe/الهوية وتصميم الشعارات.png",
        "/projects/gobe/تحسين محركات البحث SEO جو بي للتسويق.png",
        "/projects/gobe/تصميم وتطوير المواقع الإلكترونية جو بي للتسويق.png",
        "/projects/gobe/ادارة الصفحات.png",
        "/projects/gobe/قيديو رسومي.png",
        "/projects/gobe/الدعايا.png",
        "/projects/gobe/الاستراتجية.png",
        "/projects/gobe/دراسات وابحاث.png",
        "/projects/gobe/اتصل بنا جو بي للتسويق.png"
    ],
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: true
  },

  {
    slug: "genedyeg",'''

    content = content.replace('  {\n    slug: "genedyeg",', new_project)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

def update_page_tsx(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Update isFullPage to include gobe
    content = content.replace(
        'slug === "tbinnovation" || slug === "genedyeg"',
        'slug === "tbinnovation" || slug === "genedyeg" || slug === "gobe"'
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

update_projects_ts("src/data/projects.ts")
update_page_tsx("src/app/(en)/work/[slug]/page.tsx")
update_page_tsx("src/app/ar/work/[slug]/page.tsx")
