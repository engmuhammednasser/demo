const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  path.join(__dirname, 'src/app/[lang]/services/page.tsx'),
  path.join(__dirname, 'src/app/[lang]/about/page.tsx'),
  path.join(__dirname, 'src/app/[lang]/contact/page.tsx'),
  path.join(__dirname, 'src/app/[lang]/page.tsx')
];

filesToUpdate.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace inside Arabic sections or specific localized blocks
  // In services, contact, about pages, we can replace the Arabic versions:
  
  // WordPress replacements
  content = content.replace(/تطوير مواقع WordPress/g, 'تطوير مواقع وردبريس');
  content = content.replace(/مواقع WordPress/g, 'مواقع وردبريس');
  content = content.replace(/إضافات WordPress/g, 'إضافات وردبريس');
  content = content.replace(/قوالب WordPress/g, 'قوالب وردبريس');
  content = content.replace(/موقع WordPress/g, 'موقع وردبريس');
  content = content.replace(/لـ WordPress/g, 'لـ وردبريس');
  content = content.replace(/مشروع WordPress/g, 'مشروع وردبريس');
  content = content.replace(/خدمات WordPress/g, 'خدمات وردبريس');
  content = content.replace(/بين مرونة WordPress/g, 'بين مرونة وردبريس');
  
  // WooCommerce replacements
  content = content.replace(/تطوير متاجر WooCommerce/g, 'تطوير متاجر ووكومرس');
  content = content.replace(/متاجر WooCommerce/g, 'متاجر ووكومرس');
  content = content.replace(/تخصيص WooCommerce/g, 'تخصيص ووكومرس');
  content = content.replace(/متجر WooCommerce/g, 'متجر ووكومرس');
  content = content.replace(/أو WooCommerce/g, 'أو ووكومرس');
  content = content.replace(/وWooCommerce/g, 'وووكومرس');
  content = content.replace(/مشروع WooCommerce/g, 'مشروع ووكومرس');
  content = content.replace(/تجارة في WooCommerce/g, 'تجارة في ووكومرس');
  
  // Laravel replacements
  content = content.replace(/لوحات Laravel/g, 'لوحات لارافيل');
  content = content.replace(/نظام Laravel/g, 'نظام لارافيل');
  content = content.replace(/أنظمة Laravel/g, 'أنظمة لارافيل');
  content = content.replace(/أو Laravel/g, 'أو لارافيل');
  content = content.replace(/وLaravel/g, 'ولارافيل');
  content = content.replace(/مشروع Laravel/g, 'مشروع لارافيل');
  content = content.replace(/بـ Laravel/g, 'بـ لارافيل');
  content = content.replace(/باستخدام Laravel/g, 'باستخدام لارافيل');
  content = content.replace(/تطوير Laravel/g, 'تطوير لارافيل');

  // Let's also do general fallback inside Arabic strings if there's any left:
  // We can target specific strings in the format: isAr ? "..." : "..." or ar: { ... }
  // To avoid changing English, we only replace if preceded by Arabic characters or common Arabic words
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filePath}`);
});
