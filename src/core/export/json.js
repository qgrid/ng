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
	write(rows, columns, structure = 'tree') {
		const titles = [];
		const result = [];

		if (structure === 'tree') {
			for (let column of columns) {
				titles.push({
					key: column.key,
					title: column.title,
					type: column.type
				});
			}
			const obj = {
				head: titles,
				body: rows
			};
			return JSON.stringify(obj,  '', 4);
		} else {

			for (let row of rows) {
				result.push(flattenObject(row));
			}
			for (let column of columns) {
				titles.push(column.title);
			}

			return rewriteHeaders(result, titles);
		}

	}
}