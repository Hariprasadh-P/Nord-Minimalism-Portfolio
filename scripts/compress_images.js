const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const worksDir = path.join(__dirname, '..', 'public', 'Works');

async function compressAll() {
  const files = fs.readdirSync(worksDir);
  console.log('Found files in Works:', files);

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpeg') || file.endsWith('.jpg')) {
      const inputPath = path.join(worksDir, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const webpPath = path.join(worksDir, `${baseName}.webp`);
      
      const statBefore = fs.statSync(inputPath);
      console.log(`Compressing ${file} (${(statBefore.size / 1024 / 1024).toFixed(2)} MB)...`);

      // 1. Generate optimized WebP
      await sharp(inputPath)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(webpPath);
      
      const statWebp = fs.statSync(webpPath);
      console.log(` -> Created ${baseName}.webp: ${(statWebp.size / 1024).toFixed(1)} KB (${((1 - statWebp.size / statBefore.size) * 100).toFixed(1)}% reduction)`);

      // 2. Also compress the original PNG/JPEG in-place to ensure instant fallback speed
      if (file.endsWith('.png')) {
        const tempPath = path.join(worksDir, `temp_${file}`);
        await sharp(inputPath)
          .resize({ width: 1600, withoutEnlargement: true })
          .png({ quality: 80, compressionLevel: 9, palette: true })
          .toFile(tempPath);
        
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);
        const statPng = fs.statSync(inputPath);
        console.log(` -> Optimized ${file}: ${(statPng.size / 1024).toFixed(1)} KB`);
      }
    }
  }
  console.log('All image compressions completed successfully!');
}

compressAll().catch(console.error);
