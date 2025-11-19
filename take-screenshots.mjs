import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const OLD_SITE = 'https://buygeogrid.com';
const NEW_SITE = 'https://buygeogrid-com.vercel.app';

const pages = [
  { name: 'home', path: '/' },
  { name: 'products', path: '/geogrid/nx850' },
  { name: 'interlayers', path: '/interlayers' },
  { name: 'lunch-learn', path: '/lunch-and-learn' },
  { name: 'gallery', path: '/gallery' },
  { name: 'contact', path: '/contact' },
];

async function takeScreenshots() {
  // Create screenshots directory
  const screenshotsDir = join(process.cwd(), 'screenshots');
  await mkdir(screenshotsDir, { recursive: true });

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // Take screenshots of OLD site
  console.log('\n📸 Taking screenshots of OLD site (Squarespace)...');
  for (const pageInfo of pages) {
    const url = `${OLD_SITE}${pageInfo.path}`;
    console.log(`  📷 Capturing: ${pageInfo.name} (${url})`);

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.screenshot({
        path: join(screenshotsDir, `old-${pageInfo.name}.png`),
        fullPage: true
      });
      console.log(`  ✅ Saved: old-${pageInfo.name}.png`);
    } catch (error) {
      console.log(`  ⚠️  Failed to capture ${pageInfo.name}: ${error.message}`);
    }
  }

  // Take screenshots of NEW site
  console.log('\n📸 Taking screenshots of NEW site (Vercel)...');
  for (const pageInfo of pages) {
    const url = `${NEW_SITE}${pageInfo.path}`;
    console.log(`  📷 Capturing: ${pageInfo.name} (${url})`);

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.screenshot({
        path: join(screenshotsDir, `new-${pageInfo.name}.png`),
        fullPage: true
      });
      console.log(`  ✅ Saved: new-${pageInfo.name}.png`);
    } catch (error) {
      console.log(`  ⚠️  Failed to capture ${pageInfo.name}: ${error.message}`);
    }
  }

  await browser.close();

  console.log('\n✅ All screenshots saved to: ' + screenshotsDir);
  console.log('\nFiles created:');
  pages.forEach(p => {
    console.log(`  - old-${p.name}.png`);
    console.log(`  - new-${p.name}.png`);
  });
}

takeScreenshots().catch(console.error);
