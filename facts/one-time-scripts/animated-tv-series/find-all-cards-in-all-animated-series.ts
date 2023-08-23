// import fs from 'node:fs/promises';

const inputPath = new URL('./wiki-pages/1992–97 X-Men The Animated Series.txt', import.meta.url);
const text = await Deno.readTextFile(inputPath);

console.log(text);
