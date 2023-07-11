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
  const desc = i.querySelector('.card-description')?.textContent?.trim();
  const imgTag = i.querySelector('img.active');
  const imgFilename = parseImgFilename(imgTag?.src);
  const cardId = parseCardId(imgFilename);
  result.push({ name, desc, cardId });
});
console.log('result:', result);
