import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all PNG files from the public directory
async function getImagesToOptimize() {
    const files = await fs.readdir(path.join(__dirname, 'public'));
    return files.filter(file => 
        file.toLowerCase().endsWith('.png') && 
        !file.includes('vite')
    );
}

async function optimizeImage(imageName) {
    const inputPath = path.join(__dirname, 'public', imageName);
    const outputPath = path.join(__dirname, 'public', 'optimized', imageName);

    try {
        await sharp(inputPath, { limitInputPixels: 50000 * 50000 })
            .resize(1500, 1500, {
                fit: 'inside',
                withoutEnlargement: true,
                kernel: 'lanczos3'
            })
            .png({
                compressionLevel: 9,
                palette: true,
                colors: 256,
                dither: 0.5,
                effort: 10
            })
            .toFile(outputPath);

        const stats = await fs.stat(inputPath);
        const optimizedStats = await fs.stat(outputPath);
        const savedSize = ((stats.size - optimizedStats.size) / stats.size * 100).toFixed(2);
        
        console.log(`✓ ${imageName}`);
        console.log(`  Original: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`  Optimized: ${(optimizedStats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`  Saved: ${savedSize}%`);
        
        // Replace original with optimized directly
        await fs.unlink(inputPath);
        await fs.rename(outputPath, inputPath);
        console.log('  ✓ Replaced original with optimized version\n');
    } catch (error) {
        console.error(`Error processing ${imageName}:`, error);
    }
}

// Create optimized directory if it doesn't exist
const optimizedDir = path.join(__dirname, 'public', 'optimized');
try {
    await fs.mkdir(optimizedDir, { recursive: true });
} catch (error) {
    // Directory might already exist, ignore error
    console.warn('Directory might already exist, ignoring error:', error);
}

// Optimize all images
const imagesToOptimize = await getImagesToOptimize();
console.log(`Found ${imagesToOptimize.length} images to optimize...`);
for (const image of imagesToOptimize) {
    await optimizeImage(image);
}
