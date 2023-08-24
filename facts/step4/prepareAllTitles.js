import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';

const excelFilePath = new URL('./all-titles.xlsx', import.meta.url);
const binary = await Deno.readFile(excelFilePath);
const workbook = XLSX.read(binary);
const result = {};
for (const sheetName of workbook.SheetNames) {
  result[sheetName] = {};
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  rows.forEach((row) => {
    row.year = String(row.year); // all year should be string not number, because there are some span values like "2019-2020":
    const id = `${row.year}|${row.title}`;
    result[sheetName][id] = row;
  });
}
const outputFilePath = new URL('../../ui/src/lib/facts/allTitles.ts', import.meta.url);
const output = `export const allTitles = ${JSON.stringify(result, null, 2)} as const;`;
Deno.writeTextFile(outputFilePath, output);