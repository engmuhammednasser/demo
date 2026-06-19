const fs = require('fs');
let c = fs.readFileSync('src/data/projects.ts', 'utf8');
c = c.replace(/category: string;/g, 'category: string;\n  categoryAr?: string;');
c = c.replace(/category: "WooCommerce \/ eCommerce",/g, 'category: "WooCommerce / eCommerce",\n    categoryAr: "وكومرس / وردبريس",');
fs.writeFileSync('src/data/projects.ts', c);
