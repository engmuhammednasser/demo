import os
import shutil
import io
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

src = r'D:\workspace\ash'
dst = r'D:\my-website\public\projects\ashhalanksa'

os.makedirs(dst, exist_ok=True)

files = os.listdir(src)
print("Files found:")
for f in files:
    print(repr(f))

# Rename map: arabic name -> english name
rename_map = {}
counter = 1
for f in files:
    if f in ['home.png', '404.png']:
        rename_map[f] = f
    elif f == 'landing page.png':
        rename_map[f] = 'landing-page.png'
    else:
        rename_map[f] = f'section-{counter}.png'
        counter += 1

print("\nRename map:")
for k, v in rename_map.items():
    print(f"  {repr(k)} -> {v}")

# Copy with renamed files
for original, new_name in rename_map.items():
    src_path = os.path.join(src, original)
    dst_path = os.path.join(dst, new_name)
    shutil.copy2(src_path, dst_path)
    print(f"Copied: {repr(original)} -> {new_name}")

# Make cover.png a copy of home.png
shutil.copy2(os.path.join(dst, 'home.png'), os.path.join(dst, 'cover.png'))
print("Created cover.png from home.png")
