import {isObject, isArray} from '@grid/core/services/utility';


function rewriteProperties(rows, titles) {
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
}

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
			} else {
				result[prop] = obj[prop];
			}
		}
	}
	return result;
}

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

		return rewriteProperties(result, titles);
	}
}