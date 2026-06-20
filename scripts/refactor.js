const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'app', '[lang]');
const enDir = path.join(__dirname, '..', 'src', 'app', '(en)');
const arDir = path.join(__dirname, '..', 'src', 'app', 'ar');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function processFiles(dir, lang) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processFiles(fullPath, lang);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // 1. Replace the params signature
      // export default async function Home({ params }: { params: Promise<{ lang: string }> })
      content = content.replace(/params\s*:\s*Promise\s*<\s*\{\s*lang\s*:\s*string\s*\}\s*>/g, '{}');
      content = content.replace(/params\s*,\s*\n\s*\}:\s*\{\s*params\s*:\s*\{\s*lang\s*:\s*string\s*\}\s*\}\)/g, '})');
      content = content.replace(/params[,\s]*\}:\s*\{\s*params[^\}]+\}\s*\)/g, '})');
      content = content.replace(/params,?\s*\}:\s*\{\s*params:\s*Promise<\{ lang: string \}>\s*\}\)/g, '})');
      
      // Remove params destructuring
      content = content.replace(/const\s+\{\s*lang\s*\}\s*=\s*await\s*params;/g, `const lang = "${lang}";`);
      // Sometimes it's synchronous (if older nextjs)
      content = content.replace(/const\s+\{\s*lang\s*\}\s*=\s*params;/g, `const lang = "${lang}";`);
      
      content = content.replace(/const\s+locale\s*=\s*lang\s+as\s+Locale;/g, `const locale = "${lang}" as Locale;`);

      // 2. Replace Links
      content = content.replace(/import Link from "next\/link";/g, `import AppLink from "@/components/ui/AppLink";\nimport Link from "next/link";`);
      content = content.replace(/import Link from 'next\/link';/g, `import AppLink from "@/components/ui/AppLink";\nimport Link from "next/link";`);

      // 3. Fix the generateStaticParams inside layout.tsx and page.tsx if they exist
      // Since it's no longer dynamic, we can just remove generateStaticParams!
      content = content.replace(/export async function generateStaticParams\(\) \{[\s\S]*?\}/g, '');

      // 4. Update the actual Link elements -> AppLink
      // <Link href={`/${lang}/about`}>  ==> <AppLink lang={lang} href="/about">
      content = content.replace(/<Link\s+([^>]*?)href=\{`\/\$\{lang\}([^`]*)`\}([^>]*)>/g, '<AppLink lang={lang} href="$2" $1 $3>');
      content = content.replace(/<Link\s+([^>]*?)href=\{"\/"\s*\+\s*lang\s*\+\s*"([^"]*)"\}([^>]*)>/g, '<AppLink lang={lang} href="$2" $1 $3>');
      // Also for the root: <Link href={`/${lang}`}>
      content = content.replace(/<Link\s+([^>]*?)href=\{`\/\$\{lang\}`\}([^>]*)>/g, '<AppLink lang={lang} href="/" $1 $2>');

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

// Execute
console.log("Copying to (en)...");
copyDir(srcDir, enDir);
console.log("Processing (en)...");
processFiles(enDir, 'en');

console.log("Copying to ar...");
copyDir(srcDir, arDir);
console.log("Processing ar...");
processFiles(arDir, 'ar');

console.log("Done!");
