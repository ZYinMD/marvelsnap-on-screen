import puppeteer from 'puppeteer-core';
import fs from 'fs';
const currentModulePath = new URL(import.meta.url).href;
const browser = await puppeteer.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage();
await page.goto(currentModulePath + '/../../step2-base-for-scraping/pasted-div-of-card-list.html', {
  waitUntil: ['load', 'domcontentloaded', 'networkidle0'],
});

const result = await page.evaluate(() => {
  function parseImgFilename(imgUrl) {
    if (!imgUrl) return null;
    const imgFilename = imgUrl.split('/').at(-1);
    return imgFilename;
  }
  function parseCardId(imgFilename) {
    if (!imgFilename) return null;
    const cardId = imgFilename.split('.')[0];
    return cardId;
  }
  const allCards = document.querySelectorAll('a.simple-card');
  const result = [];
  allCards.forEach((i) => {
    const name = i.querySelector('.cardname')?.textContent;
    const descRaw = i.querySelector('.card-description')?.textContent?.trim();
    const desc = descRaw?.replaceAll(/\s+/g, ' ');
    const imgTag = i.querySelector('img.active');
    const imgFilename = parseImgFilename(imgTag?.src);
    const id = parseCardId(imgFilename);
    result.push({ id, name, desc });
  });
  return result;
});

console.log('result:', result);
fs.writeFileSync('all-cards.json', JSON.stringify(result, null, 2));
browser.close();
