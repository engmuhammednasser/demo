import re

def update_projects_ts(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    new_screenshots = '''      screenshots: [
        "/projects/mediaandmore/cover.png",
        "/projects/mediaandmore/header1.png",
        "/projects/mediaandmore/header2.png",
        "/projects/mediaandmore/header3.png",
        "/projects/mediaandmore/home.png",
        "/projects/mediaandmore/about-us.png",
        "/projects/mediaandmore/servcies.png",
        "/projects/mediaandmore/products.png",
        "/projects/mediaandmore/contacts.png"
      ],'''

    # Find the mediaandmore block
    pattern = r'\s*slug:\s*"mediaandmore",.*?needsReview:\s*true\n\s*\},?'
    
    replacement = '''
    slug: "mediaandmore",
    title: "Media & More House of Software",
    titleAr: "ميديا أند مور هاوس أوف سوفتوير Media & More",
    type: ["wordpress"] as WorkType[],
    category: "Corporate Website / Software & Business Solutions",
    categoryAr: "موقع شركة / شركة برمجيات وحلول أعمال",
    industry: "SOFTWARE · BUSINESS SOLUTIONS",
    goal: ["Performance", "Sales"],
    summary: "The official website for Media & More, specializing in software development and business solutions. It showcases services such as web design and development, ERP/CRM systems, e-commerce, mobile apps, hosting, and digital marketing solutions for brands and companies.",
    summaryAr: "موقع رسمي لشركة Media & More المتخصصة في تطوير البرمجيات وحلول الأعمال، ويعرض خدمات تصميم وتطوير المواقع، أنظمة ERP وCRM، التجارة الإلكترونية، تطبيقات الموبايل، الاستضافة، وحلول التسويق الرقمي للشركات والعلامات التجارية.",
    problem: "The project required a structured digital presence to professionally present the company's software and business solutions, rather than providing generic content that didn't highlight its expertise in software development, ERP/CRM, e-commerce, and web/mobile apps.",
    problemAr: "كان المشروع يحتاج إلى حضور رقمي منظم يوضح خدمات الشركة البرمجية وحلول الأعمال بشكل احترافي، بدل تقديم محتوى عام لا يبرز تخصص الشركة في تطوير البرمجيات، أنظمة ERP/CRM، التجارة الإلكترونية، وتطبيقات الويب والموبايل.",
    solution: "Developed a corporate software company website that clearly displays core services, products, partners, clients, and contact points. The site is organized to facilitate access for potential clients to services like web development, software engineering, e-commerce, ERP/CRM systems, and digital marketing.",
    solutionAr: "تطوير موقع تعريفي لشركة برمجيات يعرض الخدمات الرئيسية، المنتجات، الشركاء والعملاء، ونقاط التواصل بوضوح، مع تنظيم أقسام الموقع لتسهيل وصول العملاء المحتملين إلى خدمات مثل تطوير المواقع، تطوير البرمجيات، التجارة الإلكترونية، أنظمة ERP وCRM، والتسويق الرقمي.",
    role: ["Lead Developer"],
    stack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    features: [
      "Professional corporate website design",
      "Clear presentation of software and business solutions",
      "Dedicated sections for services, products, and clients",
      "Enhanced user experience and content organization",
      "Basic SEO implementation",
      "Contact and quote request forms"
    ],
    featuresAr: [
      "تصميم موقع شركة احترافي",
      "عرض واضح للخدمات البرمجية وحلول الأعمال",
      "أقسام للخدمات والمنتجات والعملاء",
      "تحسين تجربة المستخدم وتنظيم المحتوى",
      "تهيئة أساسية لمحركات البحث",
      "نماذج تواصل وطلب عرض سعر"
    ],
''' + new_screenshots + '''
    liveUrl: "https://mediaandmore.org/",
    isFeatured: true,
    isPrivate: false,
    status: "live",
    needsReview: false
  },'''

    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

def update_page_tsx(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Also add mediaandmore to the list of slugs for isFullPage
    content = content.replace(
        '|| slug === "nuc-kw"',
        '|| slug === "nuc-kw" || slug === "mediaandmore"'
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

update_projects_ts("src/data/projects.ts")
update_page_tsx("src/app/(en)/work/[slug]/page.tsx")
update_page_tsx("src/app/ar/work/[slug]/page.tsx")
