import puppeteer from 'puppeteer';
import { join } from 'path';

const OLD_SITE = 'https://buygeogrid.com';
const NEW_SITE = 'https://buygeogrid-com.vercel.app';

const pages = [
  { name: 'home', path: '/', waitTime: 3000 },  // Extra wait for home
  { name: 'products', path: '/geogrid/nx850', waitTime: 2000 },
  { name: 'interlayers', path: '/interlayers', waitTime: 2000 },
  { name: 'lunch-learn', path: '/lunch-and-learn', waitTime: 3000 },
  { name: 'gallery', path: '/gallery', waitTime: 2000 },
  { name: 'contact', path: '/contact', waitTime: 5000 },  // Extra wait for form to load
];

async function takeScreenshotsWithWait() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

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
    console.log(`  📷 Capturing: ${pageInfo.name} (${url}) - waiting ${pageInfo.waitTime}ms...`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // Wait for page-specific time
      await new Promise(resolve => setTimeout(resolve, pageInfo.waitTime));
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
    console.log(`  📷 Capturing: ${pageInfo.name} (${url}) - waiting ${pageInfo.waitTime}ms...`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // Wait for page-specific time
      await new Promise(resolve => setTimeout(resolve, pageInfo.waitTime));
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

takeScreenshotsWithWait().catch(console.error);
