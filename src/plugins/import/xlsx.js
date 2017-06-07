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
		const columns = [{key: '__rowNum__', title: '', pin: 'left'}];
		const workbook = XLSX.read(data, {type: 'binary'});
		const json = to_json(workbook);
		const headers = Object.keys(json[0]);
		for (let header of headers) {
			columns.push({
				key: header,
				title: header
			});
		}
		return {
			columns: columns,
			rows: json
		};
	}
}