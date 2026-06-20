const fs = require('fs');

function append(file, code) {
  let c = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, c + '\n\n' + code);
}

append('d:/my-website/src/app/(en)/backend/[slug]/page.tsx', `export async function generateStaticParams() { return [{ slug: "crm" }, { slug: "erp" }, { slug: "api" }]; }`);
append('d:/my-website/src/app/ar/backend/[slug]/page.tsx', `export async function generateStaticParams() { return [{ slug: "crm" }, { slug: "erp" }, { slug: "api" }]; }`);

append('d:/my-website/src/app/(en)/work/[slug]/page.tsx', `export async function generateStaticParams() { const { projects } = await import("@/data/projects"); return projects.map(p => ({ slug: p.slug })); }`);
append('d:/my-website/src/app/ar/work/[slug]/page.tsx', `export async function generateStaticParams() { const { projects } = await import("@/data/projects"); return projects.map(p => ({ slug: p.slug })); }`);

append('d:/my-website/src/app/(en)/lab/plugins/[slug]/page.tsx', `export async function generateStaticParams() { const { getDictionary } = await import("@/lib/i18n"); const t = await getDictionary("en"); return t.lab.pluginsList.map(p => ({ slug: p.slug })); }`);
append('d:/my-website/src/app/ar/lab/plugins/[slug]/page.tsx', `export async function generateStaticParams() { const { getDictionary } = await import("@/lib/i18n"); const t = await getDictionary("en"); return t.lab.pluginsList.map(p => ({ slug: p.slug })); }`);

console.log("Fixed slugs");
