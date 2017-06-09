import XLSX from 'xlsx';

function to_json(workbook) {
	let result = [];
	for (let sheetName of workbook.SheetNames) {
		const partial = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 'A'});
		result = partial.concat(result);
	}

	return result;
}

export class Xlsx {
	read(data) {
		const workbook = XLSX.read(data, {type: 'binary'});
		return to_json(workbook);
	}
}