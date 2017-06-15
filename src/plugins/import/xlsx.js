import XLSX from 'xlsx';

function toJson(workbook) {
	let result = [];
	for (let sheetName of workbook.SheetNames) {
		const partial = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 'A'});
		result = partial.concat(result);
	}

	return result.map(rewriteObject);
}
function rewriteObject(obj) {
	const result = {};
	for (let [key, value] of Object.entries(obj)) {
		result[key] = value;
	}
	return result;
}

export class Xlsx {
	read(data) {
		const workbook = XLSX.read(data, {type: 'binary'});
		return toJson(workbook);
	}
}