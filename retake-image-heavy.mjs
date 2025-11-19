import puppeteer from 'puppeteer';
import { join } from 'path';

const NEW_SITE = 'https://buygeogrid-com.vercel.app';

const pages = [
  { name: 'products', path: '/geogrid/nx850', waitTime: 8000 },
  { name: 'lunch-learn', path: '/lunch-and-learn', waitTime: 8000 },
];

async function retakeImageHeavyPages() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('\n📸 Retaking NEW site screenshots with 8 second wait for images...\n');

  for (const pageInfo of pages) {
    const url = `${NEW_SITE}${pageInfo.path}`;
    console.log(`📷 Capturing: ${pageInfo.name} (${url})`);
    console.log(`⏳ Waiting ${pageInfo.waitTime}ms for images to load...`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // Wait for images to load
      await new Promise(resolve => setTimeout(resolve, pageInfo.waitTime));

      await page.screenshot({
        path: join(screenshotsDir, `new-${pageInfo.name}.png`),
        fullPage: false  // viewport only
      });
      console.log(`✅ Saved: new-${pageInfo.name}.png\n`);
    } catch (error) {
      console.log(`⚠️  Failed: ${error.message}\n`);
    }
  }

  await browser.close();
  console.log('✅ Done! Screenshots saved to screenshots/ folder');
}

retakeImageHeavyPages().catch(console.error);
