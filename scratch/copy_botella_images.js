const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_EN = 'C:/Users/engmo/OneDrive/Desktop/bottel';
const SOURCE_AR = 'C:/Users/engmo/OneDrive/Desktop/bottel/العربية';
const DEST_DIR = path.join(__dirname, '../public/demo/projects/botella');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Order of images
const englishOrder = [
  'header.png',
  'home-page.png',
  'shop.png',
  'sinagkle prodcut.png',
  'botella-kits.png',
  'Corporate Orders.png',
  'Botella Rewards.png',
  'About Us.png',
  'Delivery & Return Policies.png',
  'contact-us.png',
  'my-account.png',
  'checkout.png'
];

const arabicOrder = [
  'الهيدر.png',
  'الرئيسية.png',
  'المتجر.png',
  'صفحة المنتج.png',
  '7مجموعه الاكواب.png',
  'طلبات الشركات.png',
  'نقاط بوتيلا.png',
  'معلومات عنا.png',
  'سياسات التوصيل والإرجاع.png',
  'تواصل معنا.png',
  'حسابي.png',
  'اتمام الطلب.png'
];

async function processImages(files, sourceDir, langPrefix, startIndex) {
  let index = startIndex;
  for (const file of files) {
    const inputPath = path.join(sourceDir, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping missing file: ${inputPath}`);
      continue;
    }

    const outputName = `${String(index).padStart(2, '0')}-${file.replace('.png', '').replace(/\s+/g, '-').toLowerCase()}-${langPrefix}.webp`;
    const outputPath = path.join(DEST_DIR, outputName);

    console.log(`Processing: ${file} -> ${outputName}`);
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Success: ${outputName}`);
    } catch (e) {
      console.error(`Failed to process ${file}:`, e);
    }
    index++;
  }
  return index;
}

async function main() {
  console.log('Processing English images...');
  let nextIndex = await processImages(englishOrder, SOURCE_EN, 'en', 1);
  console.log('\nProcessing Arabic images...');
  await processImages(arabicOrder, SOURCE_AR, 'ar', nextIndex);
  console.log('\nAll done!');
}

main();
