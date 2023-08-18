import { read, utils } from 'xlsx/xlsx.mjs';
import fs from 'node:fs/promises';
const excelFilePath = new URL('./all-titles.xlsx', import.meta.url);
const binary = await fs.readFile(excelFilePath);
const workbook = read(binary);
const result = {};
for (const sheetName of workbook.SheetNames) {
  result[sheetName] = {};
  const rows = utils.sheet_to_json(workbook.Sheets[sheetName]);
  rows.forEach((row) => {
    row.year = String(row.year); // all year should be string not number, because there are some span values like "2019-2020":
    const id = `${row.year}|${row.title}`;
    result[sheetName][id] = row;
  });
}
const outputFilePath = new URL('../../ui/src/lib/facts/allTitles.ts', import.meta.url);
const output = `export const allTitles = ${JSON.stringify(result, null, 2)} as const;`;
fs.writeFile(outputFilePath, output);
