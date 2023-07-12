import puppeteer from 'puppeteer-core';
import fs from 'fs';
const currentModulePath = new URL(import.meta.url).href;
const browser = await puppeteer.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage();
await page.goto(currentModulePath + '/../../step2-base-for-scraping/pasted-div-of-card-list.html', {
  waitUntil: ['load', 'domcontentloaded', 'networkidle0'],
});

const result = await page.evaluate(() => {
  const allCards = document.querySelectorAll('a.simple-card');
  const result = [];
  allCards.forEach((i) => {
    const id = i.getAttribute('href')?.split('/')?.at(-2);
    const name = i.querySelector('.cardname')?.textContent;
    const descRaw = i.querySelector('.card-description')?.textContent?.trim();
    const desc = descRaw?.replaceAll(/\s+/g, ' ');
    const status = i.getAttribute('data-status');
    result.push({ id, name, desc, status });
  });
  return result;
});

console.log('result:', result);
fs.writeFileSync('all-cards.json', JSON.stringify(result, null, 2));
browser.close();
