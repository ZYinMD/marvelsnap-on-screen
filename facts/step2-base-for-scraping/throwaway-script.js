const allCards = document.querySelectorAll('a.simple-card');
const result = [];
allCards.forEach((i) => {
  const name = i.querySelector('.cardname')?.textContent;
  const descRaw = i.querySelector('.card-description')?.textContent?.trim();
  const desc = descRaw?.replaceAll(/\s+/g, ' ');
  const id = i.getAttribute('href')?.split('/')?.at(-2);
  result.push({ id, name, desc });
});
console.info('result:', result);
