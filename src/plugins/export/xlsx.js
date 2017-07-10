import {flatView} from '@grid/core/export/export.service';

function sheet_to_workbook(sheet) {
	const sheets = {};
	sheets['Sheet1'] = sheet;
	return {SheetNames: ['Sheet1'], Sheets: sheets};
}

function toArrayBuffer(excel) {
	const buffer = new ArrayBuffer(excel.length);
	const view = new Uint8Array(buffer);
	for (let i = 0; i < excel.length; ++i) {
		view[i] = excel.charCodeAt(i) & 0xFF;
	}
	return buffer;
}

export class Xlsx {
	constructor(lib) {
		this.XLSX = lib;
	}
	write(rows, columns) {
		const result = [];
		const headers = [];
		const excelOptions = {bookType: 'xlsx', bookSST: true, cellDates: true, compression: true, type: 'binary'};

		for (let row of rows) {
			result.push(flatView(row));
		}
		for (let column of columns) {
			headers.push(column.title);
		}
		const worksheet = this.XLSX.utils.json_to_sheet(result);
		const workbook = sheet_to_workbook(this.updateTitles(worksheet, headers));
		const excel = this.XLSX.write(workbook, excelOptions);

		return toArrayBuffer(excel);
	}

	updateTitles(worksheet, headers) {
		const range = this.XLSX.utils.decode_range(worksheet['!ref']);
		for (let i = range.s.r; i <= range.e.r; ++i) {
			const address = this.XLSX.utils.encode_col(i) + '1';
			if (!worksheet[address]) continue;
			worksheet[address].v = headers[i];
		}
		return worksheet;
	}
}