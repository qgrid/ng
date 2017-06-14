import {AppError} from '@grid/core/infrastructure';
import {columnFactory} from '@grid/core/column/column.factory';
import {generate} from '@grid/core/column-list';
import {Json} from '@grid/core/import/json';
import {Xml} from '@grid/core/import/xml';
import {Xlsx} from './xlsx';


function getType(name) {
	const dotDelimeter = /[.]/g.test(name);
	if (dotDelimeter) {
		let type = name.split('.');
		return type[type.length - 1];
	}
}
//
// function toObj(row) {
// 	const obj = {};
// 	const regexp = /".+?"/g;
// 	if (regexp.test(row)) {
// 		for (let match of row.match(regexp)) {
// 			const unquoted = match.split('"')[1];
// 			const escaped = match.replace(/,/g, '~~');
// 		}
// 	}
// 	for (let i = 0; i < row.length; i++) {
// 		obj[i] = row[i];
// 	}
// 	return obj;
// }

function readFile(e, file, model) {
	const data = e.target.result;
	const type = file.type === '' ? getType(file.name) : file.type;
	switch (type) {
		case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
			const xlsx = new Xlsx();
			const rows = xlsx.read(data);
			const columns = generate(rows, columnFactory(model), false);
			model.data({
				columns: columns,
				rows: rows
			});
			break;
		}
		case 'text/json':
		case 'json': {
			const json = new Json();
			const rows = json.read(data);
			if (rows.length) {
				const columns = generate(rows, columnFactory(model), true);
				model.data({
					columns: columns,
					rows: rows
				});
			} else {
				throw new AppError('import', 'JSON for input should be an array of objects');
			}
			break;
		}
		case 'xml':
		case 'text/xml': {
			const xml = new Xml();
			const rows = xml.read(data);
			const columns = generate(rows, columnFactory(model), false);
			model.data({
				columns: columns,
				rows: rows
			});
			break;
		}
		case 'application/vnd.ms-excel':
		case 'csv': {
			// const rows = data.split(/\r\n|\n/);
			// for (let row of rows) {
			// 	row = toObj(row);
			// }
			// const columns = generate(rows, columnFactory(model), false);
			// model.data({
			// 	columns: columns,
			// 	rows: rows
			// });
			break;
		}
		default: {
			throw new AppError('import', `This is not valid file type ${type}`);
		}
	}
}

export {
	readFile
};