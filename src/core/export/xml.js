import {isObject, isArray, isString} from '@grid/core/utility';

const begin = '<?xml version="1.0" encoding="UTF-8"?><rows xmlns:xsd="http://www.w3.org/2001/XMLSchema">';
const schema = require('raw-loader!./schema.xml');

function escape(value) {
	let result = '' + value;
	const characters = [/</g, />/g, /&/g, /'/g, /"/g, /\s\s+/g, /\n/g];
	const replacements = ['&lt;', '&gt;', '&amp;', '&apos;', '&quot;', ' ', '&#xA;'];
	for (let i = 0; i < characters.length; i++) {
		result = result.replace(characters[i], replacements[i]);
	}
	return result;
}

function objToXml(obj) {
	let result = '';

	for (let [prop, value] of Object.entries(obj)) {
		if (obj.hasOwnProperty(prop)) {
			if (isObject(value) && !isArray(value) && !isString(value)) {
				result += `<${prop}>${objToXml(value)}</${prop}>`;
			} else if (isArray(value)) {
				for (let item of value) {
					if (isString(item)) {
						result += `<${prop}>${escape(item)}</${prop}>`;
					} else {
						result += `<${prop}>${objToXml(item)}</${prop}>`;
					}
				}
			} else if (isString(value)) {
				result += `<${prop}>${escape(value)}</${prop}>`;
			}
		}
	}
	return result;
}
function formHead(columns) {
	const headers = ['<head>'];
	for (let column of columns) {
		headers.push(`<column><key>${column.key}</key><title>${column.title}</title><type>${column.type}</type></column>`);
	}
	headers.push('</head>');
	return headers.join('');
}

export class Xml {
	write(rows, columns) {
		const result = [`${begin}${schema}`, ...formHead(columns), '<body>'];
		for (let row of rows) {
			result.push(`<row>${objToXml(row)}</row>`);
		}
		result.push('</body></rows>');
		return result.join('');
	}
}