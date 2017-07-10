import {AppError} from '@grid/core/infrastructure';

function toJson(workbook, options = {}) {
	const wbOptions = {};
	switch (options.head) {
		case 'alpha': {
			wbOptions.header = 'A';
			break;
		}
		case 'numeric': {
			wbOptions.header = 1;
			break;
		}
		default: {
			break;
		}
	}
	let result = [];
	for (let sheetName of workbook.SheetNames) {
		const partial = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], wbOptions);
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
	read(data, options) {
		if (!window.xlsx) {
			throw new AppError('xlsx', 'To use import plugin for xlsx format please add http://github.com/SheetJS/js-xlsx library to your project');
		}


		const workbook = XLSX.read(data, {type: 'binary'});
		return toJson(workbook, options);
	}
}