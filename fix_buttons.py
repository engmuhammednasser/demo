import re

def update_projects_ts(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find and delete gobeagency block
    # It starts with '    slug: "gobeagency",' and ends with '    needsReview: true\n  },'
    pattern = r'\s*\{\s*slug:\s*"gobeagency".*?needsReview:\s*true\n\s*\},?'
    content = re.sub(pattern, '', content, flags=re.DOTALL)

    # Add liveUrl to gobe
    # Find slug: "gobe",
    # We can inject liveUrl right after slug: "gobe",
    content = content.replace('    slug: "gobe",', '    slug: "gobe",\n    liveUrl: "https://gobeagency.com",')

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

update_projects_ts("src/data/projects.ts")
