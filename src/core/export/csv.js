import {getFactory as valueFactory} from '../services/value';

const DELIMETER = ',';

function Reverse(A) {
	const AT = [];
	const result = [];
	for (let i = 0; i < A[0].length; i++) {
		AT[i] = [];
		for (let j = 0; j < A.length; j++) {
			AT[i][j] = A[j][i];
		}
		result.push(AT[i].join(DELIMETER));
	}
	return result;
}

export class Csv {
	write(rows, columns) {
		const data = [];
		const head = [];
		for (let j = 0; j < columns.length; j++) {
			data.push([]);
			head[j] = columns[j].title;
			const value = valueFactory(columns[j]);
			let result = '';
			for (let i = 0; i < rows.length; i++) {
				result = '' + value(rows[i]);
				result = result.replace(/"/g, '""');
				result = /[\n",]/.test(result) ? `"${result}"` : result;
				data[j][i] = result;
			}
		}
		return [head.join(DELIMETER), ...Reverse(data)].join('\n');
	}
}