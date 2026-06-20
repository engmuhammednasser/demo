const fs = require('fs');
const path = require('path');

function fix(file) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/const lang = "en";/g, 'const lang = "en" as string;');
  c = c.replace(/const lang = "ar";/g, 'const lang = "ar" as string;');
  fs.writeFileSync(file, c);
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
console.log('Fixed TS errors');
