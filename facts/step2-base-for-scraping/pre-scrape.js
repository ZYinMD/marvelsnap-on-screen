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
console.info('result:', result);
