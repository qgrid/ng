import XLSX from 'xlsx';
import {isObject, isArray} from '@grid/core/services/utility';

function sheet_to_workbook(sheet) {
	const sheets = {};
	sheets['Sheet1'] = sheet;
	return {SheetNames: ['Sheet1'], Sheets: sheets};
}
function flattenObject(obj) {
	const result = {};

	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if (isObject(obj[prop]) && !isArray(obj[prop])) {
				const flatObject = flattenObject(obj[prop]);
				for (let flatProp in flatObject) {
					if (flatObject.hasOwnProperty(flatProp)) {
						result[prop + '.' + flatProp] = flatObject[flatProp];
					}
				}
			} else if (isArray(obj[prop])) {
				const items = [];
				for (let item of obj[prop]) {
					items.push(item);
				}
				result[prop] = items.join(', ');
			} else {
				result[prop] = obj[prop];
			}
		}
	}
	return result;
}
function s2ab(s) {
	const buf = new ArrayBuffer(s.length);
	const view = new Uint8Array(buf);
	for (let i = 0; i < s.length; ++i) {
		view[i] = s.charCodeAt(i) & 0xFF;
	}
	return buf;
}
function rewriteHeaders(ws, headers) {
	const range = XLSX.utils.decode_range(ws['!ref']);
	for (let i = range.s.r; i <= range.e.r; ++i) {
		const address = XLSX.utils.encode_col(i) + '1'; // <-- first row, column number i
		if (!ws[address]) continue;
		ws[address].v = headers[i];
	}
}
export class Xlsx {
	write(rows, columns) {
		const result = [];
		const headers = [];
		for (let row of rows) {
			result.push(flattenObject(row));
		}
		for (let column of columns) {
			headers.push(column.title);
		}
		const ws = XLSX.utils.json_to_sheet(result);
		rewriteHeaders(ws, headers);
		const wb = sheet_to_workbook(ws);
		const opts = {bookType: 'xlsx', bookSST: true, cellDates: true, compression: true, type: 'binary'};
		const wbOut = XLSX.write(wb, opts);
		return s2ab(wbOut);
	}
}