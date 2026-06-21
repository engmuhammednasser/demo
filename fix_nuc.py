import re

def update_projects_ts(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    new_screenshots = '''      screenshots: [
        "/projects/nuc-kw/cover.png",
        "/projects/nuc-kw/header.png",
        "/projects/nuc-kw/هيدر.png",
        "/projects/nuc-kw/Home - NUC.png",
        "/projects/nuc-kw/الرئيسيه - NUC.png",
        "/projects/nuc-kw/welcome - NUC.png",
        "/projects/nuc-kw/الترحيب - NUC.png",
        "/projects/nuc-kw/About - NUC.png",
        "/projects/nuc-kw/عن الشركة - NUC.png",
        "/projects/nuc-kw/Services - NUC.png",
        "/projects/nuc-kw/خدماتنا - NUC.png",
        "/projects/nuc-kw/Our Licenses - NUC.png",
        "/projects/nuc-kw/التراخيص - NUC.png",
        "/projects/nuc-kw/Our Project - NUC.png",
        "/projects/nuc-kw/المشاريع.png",
        "/projects/nuc-kw/Private Villa - NUC.png",
        "/projects/nuc-kw/فيلا خاصة - NUC.png",
        "/projects/nuc-kw/Team - NUC.png",
        "/projects/nuc-kw/فريق العمل - NUC.png",
        "/projects/nuc-kw/Pricing - NUC.png",
        "/projects/nuc-kw/التسعير - NUC.png",
        "/projects/nuc-kw/Careers - NUC.png",
        "/projects/nuc-kw/وظائف - NUC.png",
        "/projects/nuc-kw/Contact - NUC.png",
        "/projects/nuc-kw/تواصل معنا - NUC.png"
      ],'''

    pattern = r'\s*screenshots:\s*\[\s*"/demo/projects/nuc-kw/cover\.png",\s*"/demo/projects/nuc-kw/preview-01\.png",\s*"/demo/projects/nuc-kw/preview-02\.png"\s*\],'
    
    content = re.sub(pattern, "\n" + new_screenshots, content, flags=re.DOTALL)

    # I also need to change `isFeatured: false` to `isFeatured: true` for nuc-kw
    # Let's just find the nuc-kw block and do it manually
    block_pattern = r'(slug:\s*"nuc-kw",.*?)isFeatured:\s*false,'
    content = re.sub(block_pattern, r'\1isFeatured: true,', content, flags=re.DOTALL)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

def update_page_tsx(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # The user wants nuc-kw to use the isFullPage scroll logic.
    # Currently isFullPage checks: `!src.includes("header")`
    # Since nuc-kw has "header.png" and "هيدر.png", we should also exclude "هيدر"
    content = content.replace(
        '&& !src.includes("header")',
        '&& !src.includes("header") && !src.includes("هيدر")'
    )
    
    # Also add nuc-kw to the list of slugs
    content = content.replace(
        '|| slug === "genedyeg" || slug === "gobe"',
        '|| slug === "genedyeg" || slug === "gobe" || slug === "nuc-kw"'
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

update_projects_ts("src/data/projects.ts")
update_page_tsx("src/app/(en)/work/[slug]/page.tsx")
update_page_tsx("src/app/ar/work/[slug]/page.tsx")
