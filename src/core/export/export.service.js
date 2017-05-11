import {get as valueFactory} from 'core/services/value';

export function toCsv(rows, columns) {
	const CSV_DELIMETER = ',';
	const columnsArr = [];
	const rowsArr = [];
	const head = columns.map(column => {
		return column.title;
	}).join(CSV_DELIMETER);

	rowsArr.push(head);
	rows.map(item => {
		columnsArr.push(columns.map(column => {
			return '"' + valueFactory(item, column) + '"';
		}));
	});
	for (let i = 0; i < rows.length; i++) {
		rowsArr.push(columnsArr[i].join(CSV_DELIMETER));
	}
	return rowsArr.join('\n');
}