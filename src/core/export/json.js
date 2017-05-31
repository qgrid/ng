import {flattenObject} from './export.common';

const rewriteHeaders = (rows, titles) => {
	const result = [];
	for (let row of rows) {
		const obj = {};
		const values = Object.values(row);
		for (let i = 0; i < titles.length; i++) {
			obj[titles[i]] = values[i];
		}
		result.push(obj);
	}
	return JSON.stringify(result, '', 4);
};

export class Json {
	write(rows, columns) {
		const titles = [];
		const result = [];
		for (let column of columns) {
			titles.push(column.title);
		}
		for (let row of rows) {
			result.push(flattenObject(row));
		}

		return rewriteHeaders(result, titles);
	}
}