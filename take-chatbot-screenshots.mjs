import puppeteer from 'puppeteer';

const pages = [
  {
    url: 'http://localhost:3000',
    filename: 'new-home-chatbot.png',
    viewport: { width: 1920, height: 1080 },
  },
  {
    url: 'http://localhost:3000/geogrids/nx850',
    filename: 'new-products-chatbot.png',
    viewport: { width: 1920, height: 1080 },
  },
];

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const page of pages) {
    console.log(`📸 Taking screenshot: ${page.filename}`);

    const browserPage = await browser.newPage();
    await browserPage.setViewport(page.viewport);

    // Navigate to page
    await browserPage.goto(page.url, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    });

    // Wait for page to fully load
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Click the chatbot button to open it
    try {
      await browserPage.click('#gideon-chat-button');
      console.log('  ✓ Chatbot opened');

      // Wait for chatbot to animate in
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Optional: Type a message to show interaction
      const input = await browserPage.$('#gideon-chat-input');
      if (input) {
        await input.type('What products do you sell?');
        console.log('  ✓ Message typed');
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.log('  ⚠ Could not interact with chatbot:', error.message);
    }

    // Take screenshot
    await browserPage.screenshot({
      path: `public/screenshots/${page.filename}`,
      fullPage: false,
    });

    console.log(`  ✅ Saved: public/screenshots/${page.filename}`);
    await browserPage.close();
  }

  await browser.close();
  console.log('\n✅ All chatbot screenshots captured!');
}

takeScreenshots().catch(console.error);
