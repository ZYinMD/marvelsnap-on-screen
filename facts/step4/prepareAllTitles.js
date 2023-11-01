import * as XLSX from 'https://unpkg.com/xlsx/xlsx.mjs';

/* The list of all the existing movies and TV shows are maintained in "all-titles.xlsx". This script reads the excel as json, programmatically construct a .ts file, put it into ui/src/lib, as a source of truth to be imported by other code */

const excelFilePath = new URL('./all-titles.xlsx', import.meta.url);
const binary = await Deno.readFile(excelFilePath);
const workbook = XLSX.read(binary);
const result = {};
for (const sheetName of workbook.SheetNames) {
  result[sheetName] = {};
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  rows.forEach((row) => {
    row.year = String(row.year); // all year should be string not number, because there are some span values like "2019-2020":
    const key = `${row.year}|${row.title}`;
    row['key'] = key;
    row['type'] = sheetName;
    result[sheetName][key] = row;
  });
}
const outputFilePath = new URL('../../ui/src/lib/facts/allTitles.ts', import.meta.url);
const output = `export const allTitles = ${JSON.stringify(result, null, 2)} as const;`;
Deno.writeTextFile(outputFilePath, output);
