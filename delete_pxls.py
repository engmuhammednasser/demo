import re

def delete_pxls_creative(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Find and delete pxls-creative block
    # It starts with '    slug: "pxls-creative",' and ends with '    needsReview: true\n  },'
    pattern = r'\s*\{\s*slug:\s*"pxls-creative".*?needsReview:\s*true\n\s*\},?'
    content = re.sub(pattern, '', content, flags=re.DOTALL)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

delete_pxls_creative("src/data/projects.ts")
