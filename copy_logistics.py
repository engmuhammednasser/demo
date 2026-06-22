import os, shutil

src = r'D:\workspace\لاندج'
dst = r'D:\my-website\public\projects\ashhalanlogistics'

os.makedirs(dst, exist_ok=True)

# home.png is the main/cover image
# section01-03 are the rest of the screenshots

rename_map = {
    'home.png': 'home.png',
    'section01.png': 'section01.png',
    'section02.png': 'section02.png',
    'section03.png': 'section03.png',
}

for original, new_name in rename_map.items():
    src_path = os.path.join(src, original)
    dst_path = os.path.join(dst, new_name)
    shutil.copy2(src_path, dst_path)
    print(f"Copied: {original} -> {new_name}")

# cover = home.png
shutil.copy2(os.path.join(dst, 'home.png'), os.path.join(dst, 'cover.png'))
print("Created cover.png from home.png")
