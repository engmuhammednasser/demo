const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folders = [
  path.join(__dirname, '../public/projects/eventgift-uae'),
  path.join(__dirname, '../public/projects/eventgift-egypt'),
  path.join(__dirname, '../public/projects/eventgift-saudi')
];

async function processFolder(folderPath) {
  if (!fs.existsSync(folderPath)) return;
  const files = fs.readdirSync(folderPath);
  
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(folderPath, file.replace('.png', '.webp'));
      
      console.log(`Processing: ${file}`);
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        fs.unlinkSync(inputPath); // Delete original
        console.log(`Success: ${file} -> webp`);
      } catch (e) {
        console.error(`Failed to process ${file}:`, e);
      }
    }
  }
}

async function main() {
  for (const folder of folders) {
    console.log(`\n--- Processing Folder: ${folder} ---`);
    await processFolder(folder);
  }
  console.log('\nAll done!');
}

main();
