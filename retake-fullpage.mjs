import puppeteer from 'puppeteer';
import { join } from 'path';

const NEW_SITE = 'https://buygeogrid-com.vercel.app';

const pages = [
  { name: 'products', path: '/geogrid/nx850', waitTime: 10000 },
  { name: 'lunch-learn', path: '/lunch-and-learn', waitTime: 10000 },
  { name: 'gallery', path: '/gallery', waitTime: 10000 },
];

async function retakeFullPage() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('\n📸 Taking FULL PAGE screenshots with 10 second wait...\n');

  for (const pageInfo of pages) {
    const url = `${NEW_SITE}${pageInfo.path}`;
    console.log(`📷 Capturing: ${pageInfo.name} (${url})`);
    console.log(`⏳ Waiting ${pageInfo.waitTime}ms for images to load...`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await new Promise(resolve => setTimeout(resolve, pageInfo.waitTime));

      await page.screenshot({
        path: join(screenshotsDir, `new-${pageInfo.name}.png`),
        fullPage: true  // FULL PAGE
      });
      console.log(`✅ Saved: new-${pageInfo.name}.png (full page)\n`);
    } catch (error) {
      console.log(`⚠️  Failed: ${error.message}\n`);
    }
  }

  await browser.close();
  console.log('✅ Done! All full-page screenshots saved.');
}

retakeFullPage().catch(console.error);
