import puppeteer from 'puppeteer';
import { join } from 'path';

const OLD_SITE = 'https://buygeogrid.com';

async function retakeOldContact() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const url = `${OLD_SITE}/contact`;
  console.log(`📷 Capturing old contact page: ${url}`);
  console.log('⏳ Waiting 10 seconds for form to fully load...');

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Wait 10 seconds for form to fully load
    await new Promise(resolve => setTimeout(resolve, 10000));
    await page.screenshot({
      path: join(screenshotsDir, 'old-contact.png'),
      fullPage: true
    });
    console.log('✅ Saved: old-contact.png');
  } catch (error) {
    console.log(`⚠️  Failed: ${error.message}`);
  }

  await browser.close();
  console.log('\n✅ Done! Now copy to public folder.');
}

retakeOldContact().catch(console.error);
