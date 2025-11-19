import puppeteer from 'puppeteer';
import { join } from 'path';

const NEW_SITE = 'https://buygeogrid-com.vercel.app';

async function retakeGallery() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const url = `${NEW_SITE}/gallery`;
  console.log(`📷 Capturing gallery page: ${url}`);
  console.log('⏳ Waiting 10 seconds for all gallery images to load...');

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Wait 10 seconds for all images to load
    await new Promise(resolve => setTimeout(resolve, 10000));

    await page.screenshot({
      path: join(screenshotsDir, 'new-gallery.png'),
      fullPage: false  // viewport only
    });
    console.log('✅ Saved: new-gallery.png');
  } catch (error) {
    console.log(`⚠️  Failed: ${error.message}`);
  }

  await browser.close();
  console.log('✅ Done!');
}

retakeGallery().catch(console.error);
