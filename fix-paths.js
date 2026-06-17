const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  { path: 'src/data/projects.ts', replace: '"/projects/', with: '"/demo/projects/' },
  { path: 'src/data/backend-projects.ts', replace: '"/backend/', with: '"/demo/backend/' },
  { path: 'src/data/plugins.ts', replace: '"/plugins/', with: '"/demo/plugins/' },
  { path: 'src/app/[lang]/layout.tsx', replace: '"/logos/', with: '"/demo/logos/' }
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, file.path);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.split(file.replace).join(file.with);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${file.path}`);
  } else {
    console.log(`File not found: ${file.path}`);
  }
});
