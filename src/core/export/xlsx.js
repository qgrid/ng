import XLSX from 'xlsx';
import {flattenObject} from './export.common';

const sheet_to_workbook = (sheet) => {
	const sheets = {};
	sheets['Sheet1'] = sheet;
	return {SheetNames: ['Sheet1'], Sheets: sheets};
};

const toArrayBuffer = (excel) => {
	const buffer = new ArrayBuffer(excel.length);
	const view = new Uint8Array(buffer);
	for (let i = 0; i < excel.length; ++i) {
		view[i] = excel.charCodeAt(i) & 0xFF;
	}
	return buffer;
};
const rewriteHeaders = (worksheet, headers) => {
	const range = XLSX.utils.decode_range(worksheet['!ref']);
	for (let i = range.s.r; i <= range.e.r; ++i) {
		const address = XLSX.utils.encode_col(i) + '1';
		if (!worksheet[address]) continue;
		worksheet[address].v = headers[i];
	}
	return worksheet;
};
export class Xlsx {
	write(rows, columns) {
		const result = [];
		const headers = [];
		const excelOptions = {bookType: 'xlsx', bookSST: true, cellDates: true, compression: true, type: 'binary'};

		for (let row of rows) {
			result.push(flattenObject(row));
		}
		for (let column of columns) {
			headers.push(column.title);
		}
		const worksheet = XLSX.utils.json_to_sheet(result);
		const workbook = sheet_to_workbook(rewriteHeaders(worksheet, headers));
		const excel = XLSX.write(workbook, excelOptions);

		return toArrayBuffer(excel);
	}
}