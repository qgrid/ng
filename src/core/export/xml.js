import {isObject, isArray, isString} from '@grid/core/services/utility';


function objToXml(obj) {
	let toReturn = '';

	for (let [prop, value] of Object.entries(obj)) {
		if (obj.hasOwnProperty(prop)) {
			toReturn += `<${prop}>`;
			if (isObject(value) && !isArray(value)) {
				const xmlObj = objToXml(value);
				for (let [xmlprop, xmlvalue] of Object.entries(xmlObj)) {
					toReturn += `<${xmlprop}>${xmlvalue}</${xmlprop}>`;
				}
			} else if (isArray(value)) {
				for (let item of value) {
					toReturn += `<${prop}-item>${item}</${prop}-item>`;
				}
			} else if (isString(value)) {
				toReturn += value;
			}
			toReturn += `</${prop}>`;
		}
	}
	// console.log(obj, toReturn);
	return toReturn;
}

function toXml(rows) {
	const result = ['<?xml version="1.0" encoding="UTF-8"?><rows>'];
	for (let row of rows) {
		const item = objToXml(row);
		result.push(`<row>${item}</row>`);
	}
	result.push('</rows>');
	return result.join('');
}
export class Xml {
	write(rows) {
		return toXml(rows);
	}
}