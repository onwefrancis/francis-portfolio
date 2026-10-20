import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const mk = async (w, h, name) => {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto('http://127.0.0.1:8137/', { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
  await page.waitForTimeout(2200);
  await page.screenshot({ path: `/home/user/rims-kit/capture/frames/${name}.png` });
  console.log(name, 'done');
  await ctx.close();
};
await mk(1440, 900, 'pf-desktop-top');
await mk(390, 844, 'pf-mobile-top');
await browser.close();
console.log('DONE');
