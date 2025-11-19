import puppeteer from 'puppeteer';
import { join } from 'path';

const OLD_SITE = 'https://buygeogrid.com';
const NEW_SITE = 'https://buygeogrid-com.vercel.app';

const pages = [
  { name: 'home', path: '/', waitTime: 5000 },
  { name: 'products', path: '/geogrid/nx850', waitTime: 3000 },
  { name: 'interlayers', path: '/interlayers', waitTime: 3000 },
  { name: 'lunch-learn', path: '/lunch-and-learn', waitTime: 3000 },
  { name: 'gallery', path: '/gallery', waitTime: 3000 },
  { name: 'contact', path: '/contact', waitTime: 5000 },
];

async function takeViewportScreenshots() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // Set viewport to standard desktop size
  await page.setViewport({ width: 1920, height: 1080 });

  // Take screenshots of OLD site (viewport only - no full page)
  console.log('\n📸 Taking VIEWPORT screenshots of OLD site...');
  for (const pageInfo of pages) {
    const url = `${OLD_SITE}${pageInfo.path}`;
    console.log(`  📷 Capturing: ${pageInfo.name} (${url}) - waiting ${pageInfo.waitTime}ms...`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await new Promise(resolve => setTimeout(resolve, pageInfo.waitTime));
      // Viewport screenshot only (not fullPage)
      await page.screenshot({
        path: join(screenshotsDir, `old-${pageInfo.name}.png`),
        fullPage: false  // This is the key change!
      });
      console.log(`  ✅ Saved: old-${pageInfo.name}.png`);
    } catch (error) {
      console.log(`  ⚠️  Failed to capture ${pageInfo.name}: ${error.message}`);
    }
  }

  // Take screenshots of NEW site (viewport only)
  console.log('\n📸 Taking VIEWPORT screenshots of NEW site...');
  for (const pageInfo of pages) {
    const url = `${NEW_SITE}${pageInfo.path}`;
    console.log(`  📷 Capturing: ${pageInfo.name} (${url}) - waiting ${pageInfo.waitTime}ms...`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await new Promise(resolve => setTimeout(resolve, pageInfo.waitTime));
      // Viewport screenshot only (not fullPage)
      await page.screenshot({
        path: join(screenshotsDir, `new-${pageInfo.name}.png`),
        fullPage: false  // This is the key change!
      });
      console.log(`  ✅ Saved: new-${pageInfo.name}.png`);
    } catch (error) {
      console.log(`  ⚠️  Failed to capture ${pageInfo.name}: ${error.message}`);
    }
  }

  await browser.close();

  console.log('\n✅ All viewport screenshots saved!');
  console.log('📐 Screenshot size: 1920x1080 (viewport only, not full page)');
}

takeViewportScreenshots().catch(console.error);
