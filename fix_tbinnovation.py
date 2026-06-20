import re

def update_projects_ts(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace screenshots
    content = re.sub(
        r'(slug:\s*"tbinnovation",.*?screenshots:\s*\[).*?(\],)',
        r'\1\n        "/projects/tbinnovation/cover.png",\n        "/projects/tbinnovation/home.png",\n        "/projects/tbinnovation/الرئيسيه.png",\n        "/projects/tbinnovation/aboutus.png",\n        "/projects/tbinnovation/عن الشركة.png",\n        "/projects/tbinnovation/Sevices.png",\n        "/projects/tbinnovation/الخدمات.png",\n        "/projects/tbinnovation/Industries.png",\n        "/projects/tbinnovation/الصناعات.png",\n        "/projects/tbinnovation/Contacts.png",\n        "/projects/tbinnovation/اتصل بنا.png"\n      \2',
        content,
        flags=re.DOTALL
    )
    
    # Replace isFeatured
    content = re.sub(
        r'(slug:\s*"tbinnovation",.*?liveUrl:\s*"https://tbinnovation\.com",\s*isFeatured:\s*)false',
        r'\1true',
        content,
        flags=re.DOTALL
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

def update_page_tsx(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Add tbinnovation to isFullPage check
    old_line1 = 'const isFullPage = ((slug.startsWith("eventgift-") || slug === "botella" || slug === "techmart" || slug === "a2mkw" || slug === "nora24jewelry") && !src.includes("header")) || (slug === "ashhalan" && src.includes("home-page"));'
    new_line1 = 'const isFullPage = ((slug.startsWith("eventgift-") || slug === "botella" || slug === "techmart" || slug === "a2mkw" || slug === "nora24jewelry" || slug === "tbinnovation") && !src.includes("header")) || (slug === "ashhalan" && src.includes("home-page"));'
    
    if old_line1 in content:
        content = content.replace(old_line1, new_line1)

    # Add title extraction logic for tbinnovation
    title_logic = '''
              if (slug === "botella") {
                const filename = src.split("/").pop()?.replace(".webp", "") || "";
                let cleanName = filename.replace(/^\\d+-/, "").replace(/-en$/, "").replace(/-ar$/, "").replace(/-/g, " ");
                cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
                
                if (src.includes("-ar.webp")) {
                  customTitleAr = cleanName;
                  customTitleEn = "Screenshot";
                } else {
                  customTitleEn = cleanName;
                  customTitleAr = cleanName; // Show english name in arabic too if it's the english pic
                }
              } else if (slug === "tbinnovation") {
                const filename = src.split("/").pop()?.replace(".png", "") || "";
                customTitleEn = filename;
                customTitleAr = filename;
              }
'''
    
    # Replace the existing botella logic block
    pattern = r'(if\s*\(slug\s*===\s*"botella"\)\s*\{.*?\n\s*\})'
    content = re.sub(pattern, lambda _: title_logic.strip(), content, flags=re.DOTALL)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

update_projects_ts("src/data/projects.ts")
update_page_tsx("src/app/(en)/work/[slug]/page.tsx")
update_page_tsx("src/app/ar/work/[slug]/page.tsx")
