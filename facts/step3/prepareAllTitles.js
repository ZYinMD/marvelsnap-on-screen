import { read, utils } from 'xlsx/xlsx.mjs';
import fs from 'node:fs/promises';
const excelFilePath = new URL('./all-titles.xlsx', import.meta.url);
const binary = await fs.readFile(excelFilePath);
const workbook = read(binary);
const result = {};
for (const sheetName of workbook.SheetNames) {
  result[sheetName] = utils.sheet_to_json(workbook.Sheets[sheetName]);
}
const stringifiedResult = JSON.stringify(
  result,
  (key, value) => (key === 'year' ? String(value) : value), // all year should be string not number, because there are some span values like "2019-2020":
  2,
);

const outputFilePath = new URL('../../ui/src/lib/facts/allTitles.ts', import.meta.url);
const output = `export const allTitles = ${stringifiedResult} as const;`;
fs.writeFile(outputFilePath, output);
