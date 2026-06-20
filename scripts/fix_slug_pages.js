const fs = require('fs');
const path = require('path');

function fix(file, lang) {
  let c = fs.readFileSync(file, 'utf8');
  // Fix the params type
  c = c.replace(/params: Promise<\{\s*lang:\s*string;\s*slug:\s*string\s*\}>/g, 'params: Promise<{ slug: string }>');
  // Fix the destructuring
  c = c.replace(/const\s*\{\s*lang,\s*slug\s*\}\s*=\s*await\s*params;/g, 'const { slug } = await params;\n  const lang = "' + lang + '";');
  fs.writeFileSync(file, c);
}

const files = [
  ['d:/my-website/src/app/(en)/work/[slug]/page.tsx', 'en'],
  ['d:/my-website/src/app/(en)/backend/[slug]/page.tsx', 'en'],
  ['d:/my-website/src/app/(en)/lab/plugins/[slug]/page.tsx', 'en'],
  ['d:/my-website/src/app/ar/work/[slug]/page.tsx', 'ar'],
  ['d:/my-website/src/app/ar/backend/[slug]/page.tsx', 'ar'],
  ['d:/my-website/src/app/ar/lab/plugins/[slug]/page.tsx', 'ar']
];

for (const [file, lang] of files) {
  fix(file, lang);
}

console.log('Fixed [slug] pages');
