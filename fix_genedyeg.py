import re

def update_projects_ts(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace screenshots
    new_screenshots = r'''\1
        "/projects/genedyeg/cover.png",
        "/projects/genedyeg/home.png",
        "/projects/genedyeg/about.png",
        "/projects/genedyeg/Chairman's Message - Construction.png",
        "/projects/genedyeg/sectors.png",
        "/projects/genedyeg/GENEDY CONSTRUCTION - Construction.png",
        "/projects/genedyeg/projects.png",
        "/projects/genedyeg/Careers - Construction.png",
        "/projects/genedyeg/single job caeers.png",
        "/projects/genedyeg/News Update - Construction.png",
        "/projects/genedyeg/- Construction.png"
      \2'''
      
    content = re.sub(
        r'(slug:\s*"genedyeg",.*?screenshots:\s*\[).*?(\],)',
        new_screenshots,
        content,
        flags=re.DOTALL
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

def update_page_tsx(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Update isFullPage to include genedyeg
    content = content.replace(
        'slug === "tbinnovation"',
        'slug === "tbinnovation" || slug === "genedyeg"'
    )

    # Add genedyeg to the dynamic title logic
    logic_to_replace = '''              } else if (slug === "tbinnovation") {
                const filename = src.split("/").pop()?.replace(".png", "") || "";
                customTitleEn = filename;
                customTitleAr = filename;
              }'''
              
    new_logic = '''              } else if (slug === "tbinnovation" || slug === "genedyeg") {
                const filename = src.split("/").pop()?.replace(".png", "") || "";
                customTitleEn = filename;
                customTitleAr = filename;
              }'''
              
    content = content.replace(logic_to_replace, new_logic)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

update_projects_ts("src/data/projects.ts")
update_page_tsx("src/app/(en)/work/[slug]/page.tsx")
update_page_tsx("src/app/ar/work/[slug]/page.tsx")
