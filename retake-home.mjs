import puppeteer from 'puppeteer';
import { join } from 'path';

const NEW_SITE = 'https://buygeogrid-com.vercel.app';

async function retakeHome() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('\n📸 Retaking home page with 5 second wait...');
  const url = `${NEW_SITE}/`;
  console.log(`  📷 Capturing: ${url}`);

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Wait 5 seconds for video thumbnail to load
    console.log('  ⏳ Waiting 5 seconds for video to load...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    await page.screenshot({
      path: join(screenshotsDir, 'new-home.png'),
      fullPage: true
    });
    console.log(`  ✅ Saved: new-home.png`);
  } catch (error) {
    console.log(`  ⚠️  Failed: ${error.message}`);
  }

  await browser.close();
  console.log('\n✅ Done!');
}

retakeHome().catch(console.error);
