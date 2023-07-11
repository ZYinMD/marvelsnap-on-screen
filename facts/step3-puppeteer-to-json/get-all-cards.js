import puppeteer from 'puppeteer-core';
const currentModulePath = new URL(import.meta.url).href;
const browser = await puppeteer.launch({ channel: 'chrome', headless: false });
const page = await browser.newPage();
await page.goto(currentModulePath + '/../../step2-base-for-scraping/pasted-div-of-card-list.html', {
  waitUntil: ['load', 'domcontentloaded', 'networkidle0'],
});
