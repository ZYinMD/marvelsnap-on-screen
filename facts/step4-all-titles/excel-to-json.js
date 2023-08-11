import { read, utils } from 'xlsx/xlsx.mjs';
import fs from 'node:fs/promises';
const excelFilePath = new URL('./all-titles.xlsx', import.meta.url);
const binary = await fs.readFile(excelFilePath);
const workbook = read(binary);
const result = {};
for (const sheetName of workbook.SheetNames) {
  result[sheetName] = utils.sheet_to_json(workbook.Sheets[sheetName]);
}

// all year should be string not number, because there are some span values like "2019-2020":
const output = JSON.stringify(result, (key, value) => (key === 'year' ? String(value) : value), 2);
const outputFilePath = new URL('./all-titles.json', import.meta.url);
fs.writeFile(outputFilePath, output);
