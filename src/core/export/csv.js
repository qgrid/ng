import {get as valueFactory} from '../services/value';

export default function toCsv(rowsModel, columnsModel) {
	const CSV_DELIMETER = ',';
	const columns = [];
	const rows = [];
	const head = columnsModel.map(column => {
		return column.title;
	}).join(CSV_DELIMETER);
	rows.push(head);

	rowsModel.map(item => {
		columns.push(columnsModel.map(column => {
			const value = '' + valueFactory(item, column);
			const result = value.replace(/"/g, '""');
			return /[\n",]/.test(value) ? '"' + result + '"' : result;
		}));
	});
	for (let i = 0; i < rowsModel.length; i++) {
		rows.push(columns[i].join(CSV_DELIMETER));
	}
	return rows.join('\n');
}