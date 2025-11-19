import puppeteer from 'puppeteer';
import { join } from 'path';

const NEW_SITE = 'https://buygeogrid-com.vercel.app';

const pages = [
  { name: 'home', path: '/' },
  { name: 'lunch-learn', path: '/lunch-and-learn' },
];

async function captureMissing() {
  const screenshotsDir = join(process.cwd(), 'screenshots');

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('\n📸 Capturing missing pages with longer timeout...');
  for (const pageInfo of pages) {
    const url = `${NEW_SITE}${pageInfo.path}`;
    console.log(`  📷 Capturing: ${pageInfo.name} (${url})`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // Wait an extra 2 seconds for content to load
      await new Promise(resolve => setTimeout(resolve, 2000));
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
  console.log('\n✅ Done!');
}

captureMissing().catch(console.error);
