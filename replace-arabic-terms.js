const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  path.join(__dirname, 'src/app/[lang]/services/page.tsx'),
  path.join(__dirname, 'src/app/[lang]/about/page.tsx'),
  path.join(__dirname, 'src/app/[lang]/contact/page.tsx'),
  path.join(__dirname, 'src/app/[lang]/page.tsx'),
  path.join(__dirname, 'src/data/projects.ts'),
  path.join(__dirname, 'src/data/plugins.ts')
];

// Regex to match string literals (both single quotes, double quotes, and backticks)
const stringLiteralRegex = /(["'`])((?:\\.|[^\\])*?)\1/g;
const arabicRegex = /[\u0600-\u06FF]/;

filesToUpdate.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  let updatedContent = content.replace(stringLiteralRegex, (match, quote, str) => {
    // If the string contains at least one Arabic character
    if (arabicRegex.test(str)) {
      let newStr = str;
      // Replace WordPress (and case variations)
      newStr = newStr.replace(/WordPress/g, 'وردبريس');
      // Replace WooCommerce (and case variations)
      newStr = newStr.replace(/WooCommerce/g, 'ووكومرس');
      // Replace Laravel (and case variations)
      newStr = newStr.replace(/Laravel/g, 'لارافيل');
      
      return quote + newStr + quote;
    }
    return match;
  });

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Deep-Updated String Literals: ${filePath}`);
});
