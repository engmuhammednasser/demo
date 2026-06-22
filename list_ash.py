import os
import shutil
import sys

src = r'D:\workspace\ash'
dst = r'D:\my-website\public\projects\ashhalanksa'

os.makedirs(dst, exist_ok=True)

# Print file names with encoding
for f in os.listdir(src):
    print(repr(f))

