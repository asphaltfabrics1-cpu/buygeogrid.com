import puppeteer from 'puppeteer';
import { join } from 'path';

const NEW_SITE = 'https://buygeogrid-com.vercel.app';

const pages = [
  { name: 'home', path: '/' },
  { name: 'products', path: '/geogrid/nx850' },
  { name: 'interlayers', path: '/interlayers' },
  { name: 'lunch-learn', path: '/lunch-and-learn' },
  { name: 'gallery', path: '/gallery' },
  { name: 'contact', path: '/contact' },
];

async function retakeNewScreenshots() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // Take screenshots of NEW site only
  console.log('\n📸 Retaking screenshots of NEW site (public Vercel URL)...');
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

  console.log('\n✅ All new screenshots updated in: ' + screenshotsDir);
}

retakeNewScreenshots().catch(console.error);
