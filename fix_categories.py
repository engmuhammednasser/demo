import re

# Mapping from English category to Arabic
CATEGORY_MAP = {
    "Agency / Creative / Portfolio": "وكالة / إبداعي / بورتفوليو",
    "Services / Operations": "خدمات / عمليات",
    "Education / Content / Community": "تعليم / محتوى / مجتمع",
    "Tourism / Travel": "سياحة / سفر",
    "Education": "تعليم",
    "Healthcare": "رعاية صحية",
    "Backend / Full-Stack ERP": "باك إند / نظام ERP",
    "Backend / Full-Stack CRM": "باك إند / نظام CRM",
}

def fix_categories(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # For each slug block that has category: "X" but NO categoryAr right after it,
    # we insert categoryAr right after category line
    lines = content.split("\n")
    result = []
    i = 0
    while i < len(lines):
        line = lines[i]
        result.append(line)

        # Check if this is a category line (but not categoryAr and not the type definition)
        stripped = line.strip()
        if stripped.startswith("category:") and "categoryAr" not in stripped and "string;" not in stripped:
            # Check if the NEXT line already has categoryAr
            next_line = lines[i + 1].strip() if i + 1 < len(lines) else ""
            if not next_line.startswith("categoryAr"):
                # Extract the English category value
                match = re.search(r'category:\s*"([^"]+)"', stripped)
                if match:
                    en_cat = match.group(1)
                    ar_cat = CATEGORY_MAP.get(en_cat)
                    if ar_cat:
                        # Get indentation of current line
                        indent = len(line) - len(line.lstrip())
                        result.append(" " * indent + f'categoryAr: "{ar_cat}",')
        i += 1

    new_content = "\n".join(result)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Done!")

fix_categories("src/data/projects.ts")
