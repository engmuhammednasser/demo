const fs = require('fs');
const path = require('path');

function fix(file) {
  let c = fs.readFileSync(file, 'utf8');

  // Fix layout
  c = c.replace(/export default async function RootLayout\(\{\s*children,\s*params,\s*\}\:\s*\{\s*children\:\s*React\.ReactNode;\s*\{\};\s*\}\)/g, 'export default async function RootLayout({ children }: { children: React.ReactNode })');

  // Fix plugin slugs
  const pluginRegex = /const plugins = t\.lab\.pluginsList;[\s\S]*?return params;\s*\}/g;
  c = c.replace(pluginRegex, '');

  // Fix project slugs
  const projectRegex = /const projectsList = projects;[\s\S]*?return params;\s*\}/g;
  c = c.replace(projectRegex, '');

  // Fix backend slugs
  const backendRegex = /const backendServices = \[[\s\S]*?return params;\s*\}/g;
  c = c.replace(backendRegex, '');

  fs.writeFileSync(file, c, 'utf8');
}

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if(fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.tsx')) fix(p);
  });
}

walk(path.join(__dirname, '..', 'src', 'app', '(en)'));
walk(path.join(__dirname, '..', 'src', 'app', 'ar'));
console.log('Fixed layouts and slugs');
