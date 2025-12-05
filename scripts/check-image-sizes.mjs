#!/usr/bin/env node
/**
 * Checks image sizes used in the codebase.
 * - Finds Cloudinary URLs referenced in source files and fetches their sizes via HEAD.
 * - Scans local images under /public for file sizes.
 *
 * Run: node scripts/check-image-sizes.mjs
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const ignoreDirs = new Set([
  'node_modules',
  '.git',
  '.next',
  '.turbo',
  '.vercel',
  '.idea',
  '.vscode',
  '.cursor',
]);

const textExtensions = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.mjs',
  '.cjs',
  '.json',
  '.md',
  '.css',
  '.scss',
  '.html',
]);

const imageExtensions = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.avif',
  '.ico',
  '.bmp',
]);

const cloudinaryRegex =
  /https?:\/\/res\.cloudinary\.com\/[^\s"'`<>\\)]+/g;

const formatBytes = (bytes) => {
  if (bytes == null) return 'unknown';
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  const precision = size >= 10 ? 1 : 2;
  return `${size.toFixed(precision)} ${units[unitIndex]}`;
};

const walkFiles = async (startDir) => {
  const files = [];
  const stack = [startDir];

  while (stack.length) {
    const current = stack.pop();
    const entries = await fs.readdir(current, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (!ignoreDirs.has(entry.name)) {
          stack.push(fullPath);
        }
      } else {
        files.push(fullPath);
      }
    }
  }

  return files;
};

const extractCloudinaryUrls = async () => {
  const files = await walkFiles(repoRoot);
  const occurrences = new Map();

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!textExtensions.has(ext)) continue;

    const content = await fs.readFile(file, 'utf8');
    let match;
    while ((match = cloudinaryRegex.exec(content)) !== null) {
      const url = match[0];
      if (!occurrences.has(url)) {
        occurrences.set(url, new Set());
      }
      occurrences.get(url).add(file);
    }
  }

  return occurrences;
};

const fetchCloudinaryMeta = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const contentLength = response.headers.get('content-length');
    const contentType = response.headers.get('content-type');

    return {
      sizeBytes: contentLength ? Number(contentLength) : null,
      contentType: contentType || 'unknown',
    };
  } catch (error) {
    return { error: error.message };
  }
};

const scanLocalImages = async () => {
  const publicDir = path.join(repoRoot, 'public');
  const files = await walkFiles(publicDir);
  const images = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!imageExtensions.has(ext)) continue;

    const stat = await fs.stat(file);
    images.push({
      path: path.relative(repoRoot, file),
      sizeBytes: stat.size,
    });
  }

  return images.sort((a, b) => b.sizeBytes - a.sizeBytes);
};

const printSection = (title) => {
  console.log(`\n=== ${title} ===`);
};

const main = async () => {
  console.log('Checking image sizes...\nRepo:', repoRoot);

  printSection('Cloudinary images referenced in code');
  const cloudinaryOccurrences = await extractCloudinaryUrls();
  const urls = Array.from(cloudinaryOccurrences.keys()).sort();

  if (!urls.length) {
    console.log('No Cloudinary URLs found in source files.');
  } else {
    for (const url of urls) {
      const meta = await fetchCloudinaryMeta(url);
      const sources = Array.from(cloudinaryOccurrences.get(url)).map((p) =>
        path.relative(repoRoot, p)
      );

      console.log(`- ${url}`);
      if (meta.error) {
        console.log(`  error: ${meta.error}`);
      } else {
        console.log(
          `  size: ${formatBytes(meta.sizeBytes)}${meta.sizeBytes ? ` (${meta.sizeBytes} bytes)` : ''
          }`
        );
        console.log(`  type: ${meta.contentType}`);
      }
      console.log(`  referenced in: ${sources.join(', ')}`);
    }
  }

  printSection('Local images under /public');
  const localImages = await scanLocalImages();

  if (!localImages.length) {
    console.log('No local images found in /public.');
  } else {
    for (const image of localImages) {
      console.log(
        `- ${image.path}: ${formatBytes(image.sizeBytes)} (${image.sizeBytes} bytes)`
      );
    }
  }

  console.log('\nDone.');
};

main().catch((error) => {
  console.error('Unexpected error:', error);
  process.exit(1);
});
