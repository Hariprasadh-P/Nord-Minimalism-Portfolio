const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const worksDir = path.join(__dirname, '..', 'public', 'Works');

const photos = [
  'Cake.png',
  'Cheese balls.png',
  'Chicken Lollipop.png',
  'Chicken.png',
  'Kunafa Dream Cake.jpeg',
  'Lollipop.png',
  'Pasta.png',
  'Prawn.png',
  'Wrap.png',
  'WRAPPED.png'
];

async function upscaleTo4K() {
  console.log('Starting 4K UHD (3840px) image processing & detail enhancement...');

  for (const filename of photos) {
    const inputPath = path.join(worksDir, filename);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${filename}`);
      continue;
    }

    const baseName = path.basename(filename, path.extname(filename));
    const webp4kPath = path.join(worksDir, `${baseName}.webp`);
    const png4kPath = path.join(worksDir, `${baseName}.png`);

    const meta = await sharp(inputPath).metadata();
    console.log(`Processing ${filename} (Original: ${meta.width}x${meta.height})...`);

    // Target 4K UHD: Longest side = 3840px
    let targetWidth, targetHeight;
    if (meta.width >= meta.height) {
      targetWidth = 3840;
      targetHeight = Math.round((3840 / meta.width) * meta.height);
    } else {
      targetHeight = 3840;
      targetWidth = Math.round((3840 / meta.height) * meta.width);
    }

    console.log(` -> Upscaling to 4K: ${targetWidth}x${targetHeight}`);

    // High-fidelity Lanczos3 scaling with multi-frequency unsharp detail enhancement
    let pipeline = sharp(inputPath)
      .resize({
        width: targetWidth,
        height: targetHeight,
        kernel: sharp.kernel.lanczos3,
        fit: 'contain',
        withoutEnlargement: false
      })
      .sharpen({
        sigma: 1.4,
        m1: 1.2,
        m2: 2.2
      });

    // 1. Output 4K WebP with high quality
    await pipeline
      .clone()
      .webp({ quality: 94, effort: 6, smartSubsample: true })
      .toFile(webp4kPath);

    const webpStat = fs.statSync(webp4kPath);
    console.log(` -> 4K WebP saved: ${baseName}.webp (${(webpStat.size / 1024 / 1024).toFixed(2)} MB)`);

    // 2. Output 4K PNG / high-res original format
    if (filename.endsWith('.png')) {
      const tempPng = path.join(worksDir, `temp_4k_${filename}`);
      await pipeline
        .clone()
        .png({ compressionLevel: 8 })
        .toFile(tempPng);
      
      fs.unlinkSync(png4kPath);
      fs.renameSync(tempPng, png4kPath);
      const pngStat = fs.statSync(png4kPath);
      console.log(` -> 4K PNG saved: ${baseName}.png (${(pngStat.size / 1024 / 1024).toFixed(2)} MB)`);
    } else if (filename.endsWith('.jpeg')) {
      const tempJpeg = path.join(worksDir, `temp_4k_${filename}`);
      await pipeline
        .clone()
        .jpeg({ quality: 95 })
        .toFile(tempJpeg);
      
      fs.unlinkSync(inputPath);
      fs.renameSync(tempJpeg, inputPath);
      const jpegStat = fs.statSync(inputPath);
      console.log(` -> 4K JPEG saved: ${filename} (${(jpegStat.size / 1024 / 1024).toFixed(2)} MB)`);
    }
  }

  console.log('All images upgraded to 4K UHD (3840px) successfully!');
}

upscaleTo4K().catch(console.error);
