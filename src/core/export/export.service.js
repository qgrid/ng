import {get as valueFactory} from '@grid/core/services/value';

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
			const value = valueFactory(item, column).toString();
			return '"' + value.replace(/"/g, '""') + '"';
		}));
	});
	for (let i = 0; i < rows.length; i++) {
		rowsArr.push(columnsArr[i].join(CSV_DELIMETER));
	}
	return rowsArr.join('\n');
}