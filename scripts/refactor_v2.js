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

      // 1. Replace the params signature in layout
      content = content.replace(
        /export default async function RootLayout\(\{\s*children,\s*params,\s*\}\:\s*\{\s*children:\s*React\.ReactNode;\s*params:\s*Promise<\{\s*lang:\s*string\s*\}>;\s*\}\)\s*\{\s*const\s*\{\s*lang\s*\}\s*=\s*await\s*params;/g,
        `export default async function RootLayout({ children }: { children: React.ReactNode }) {\n  const lang = "${lang}";`
      );

      // 2. Replace params signature in pages
      content = content.replace(
        /export default async function (\w+)\(\{\s*params,\s*\}\:\s*\{\s*params:\s*Promise<\{\s*lang:\s*string\s*\}>;\s*\}\)\s*\{\s*const\s*\{\s*lang\s*\}\s*=\s*await\s*params;/g,
        `export default async function $1() {\n  const lang = "${lang}";`
      );

      // 3. Replace params in generateMetadata
      content = content.replace(
        /export async function generateMetadata\(\{\s*params,\s*\}\:\s*\{\s*params:\s*Promise<\{\s*lang:\s*string\s*\}>;\s*\}\):\s*Promise<Metadata>\s*\{\s*const\s*\{\s*lang\s*\}\s*=\s*await\s*params;/g,
        `export async function generateMetadata(): Promise<Metadata> {\n  const lang = "${lang}";`
      );

      // 4. Remove generateStaticParams ENTIRELY
      content = content.replace(/export async function generateStaticParams\(\)\s*\{[\s\S]*?\n\}\n/g, '');

      // 5. Override Link import
      content = content.replace(/import Link from "next\/link";/g, 'import Link from "@/components/ui/AppLink";');

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

console.log("Copying to (en)...");
copyDir(srcDir, enDir);
console.log("Processing (en)...");
processFiles(enDir, 'en');

console.log("Copying to ar...");
copyDir(srcDir, arDir);
console.log("Processing ar...");
processFiles(arDir, 'ar');

console.log("Done!");
