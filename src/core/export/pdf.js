import jsPDF from 'jspdf';
import 'jspdf-autotable';

import {isObject, isArray} from '@grid/core/services/utility';

function flattenObject(obj) {
	const result = {};

	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if (isObject(obj[prop]) && !isArray(obj[prop])) {
				const flatObject = flattenObject(obj[prop]);
				for (let flatProp in flatObject) {
					if (flatObject.hasOwnProperty(flatProp)) {
						result[prop + '.' + flatProp] = flatObject[flatProp];
					}
				}
			} else if (isArray(obj[prop])) {
				const items = [];
				for (let item of obj[prop]) {
					items.push(item);
				}
				result[prop] = items.join(',\n');
			} else {
				result[prop] = obj[prop];
			}
		}
	}
	return result;
}

export class Pdf {
	write(rows, columns, name) {
		const doc = new jsPDF({
			orientation: 'landscape',
			unit: 'in'
		});
		const titles = [];
		const values = [];
		for (let column of columns) {
			titles.push({title: column.title, dataKey: column.path});
		}
		for (let row of rows) {
			values.push(flattenObject(row));
		}

		doc.autoTable(titles, values, {
			styles: {
				overflow: 'linebreak',
				fontSize: 8,
				columnWidth: 'wrap'
			},
			headerStyles: {
				lineWidth: 0,
				overflow: 'linebreak',
			},
			pageBreak: 'auto',
			margin: 0
		});
		doc.save(`${name}.pdf`);
	}
}