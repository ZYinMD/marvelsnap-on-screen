import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage();
const url = new URL('../step2-base-for-scraping/pasted-div-of-card-list.html', import.meta.url);
await page.goto(url.toString(), { waitUntil: ['load', 'domcontentloaded', 'networkidle0'] });

const result = await page.evaluate(() => {
  const result = {};
  const allCards = document.querySelectorAll('a.simple-card');
  allCards.forEach((i) => {
    const id = i.getAttribute('href')?.split('/')?.at(-2);
    const name = i.querySelector('.cardname')?.textContent;
    const descRaw = i.querySelector('.card-description')?.textContent?.trim();
    const desc = descRaw?.replaceAll(/\s+/g, ' ');
    const status = i.getAttribute('data-status');
    result[id] = { id, name, desc, status };
  });
  return result;
});

console.info(result);
const outputPath = new URL('all-cards.json', import.meta.url);
fs.writeFile(outputPath, JSON.stringify(result, null, 2));
console.info('\nResult has been output to all-cards.json');
browser.close();
