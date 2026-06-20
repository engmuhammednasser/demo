const fs = require('fs');
const path = require('path');

function fixFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix generateMetadata params
  content = content.replace(/export async function generateMetadata\(\{[\s\S]*?\}\s*:\s*\{[\s\S]*?\}\)/g, 'export async function generateMetadata()');
  
  // Remove dangling generateStaticParams array remnants
  content = content.replace(/,\s*\{\s*lang:\s*"ar"\s*\}\];\s*\}\n/g, '');
  content = content.replace(/, \{\s*lang:\s*"ar"\s*\}\];\n\}/g, '');
  
  // Some places it might be `} \n }`
  content = content.replace(/\s*,\s*\{\s*lang:\s*"ar"\s*\}\];\s*\}/g, '');

  // Fix `<AppLink href=""` -> `<AppLink href="/"`
  content = content.replace(/<AppLink lang=\{lang\} href=\"\"/g, '<AppLink lang={lang} href="/"');
  
  // Fix closing </Link> to </AppLink> where AppLink was injected
  content = content.replace(/<\/Link>/g, '</AppLink>');
  // But wait! If there are still normal <Link> elements, this will break them.
  // We only replace if the opening tag is <AppLink. 
  // Let's just do a regex replace for <AppLink ... > ... </Link>
  let newContent = "";
  let lastIndex = 0;
  const regex = /<AppLink([\s\S]*?)<\/Link>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
      newContent += content.substring(lastIndex, match.index);
      newContent += "<AppLink" + match[1] + "</AppLink>";
      lastIndex = regex.lastIndex;
  }
  newContent += content.substring(lastIndex);
  content = newContent;

  fs.writeFileSync(file, content, 'utf8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, '..', 'src', 'app', '(en)'));
walkDir(path.join(__dirname, '..', 'src', 'app', 'ar'));
console.log('Fixed syntax errors');
