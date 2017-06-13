// const schema = require('raw-loader!@grid/core/export/schema.xml');

const KEY_DELIMETER = '-';

function flatView(xml) {
	const result = {};
	if (xml.nodeType === 1 && xml.hasChildNodes()) {
		for (let child of xml.childNodes) {
			if (child.nodeType === 1) {
				const flatObject = flatView(child);
				for (let [flatProp, flatValue] of Object.entries(flatObject)) {
					if (flatProp === '#text') {
						result[child.nodeName] = flatValue;
					} else {
						result[child.nodeName + KEY_DELIMETER + flatProp] = flatValue;
					}
				}
			} else if (child.nodeType === 3) {
				result[child.nodeName] = child.nodeValue;
			}
		}
		return result;
	} else if (xml.nodeType === 3) {
		result[xml.nodeName] = xml.nodeValue;
	}
}

function parseLight(root) {
	const rows = root.getElementsByTagName('row');
	const result = [];
	for (let row of rows) {
		result.push(flatView(row));
	}
	console.log(result);
	return result;
}

export class Xml {
	read(data) {
		const parser = new DOMParser();
		const root = parser.parseFromString(data, 'text/xml').documentElement;
		console.log(root);
		// const xsd = parser.parseFromString(schema, 'text/xml').firstChild;
		// const dataXsd = root.getElementsByTagNameNS('*', 'schema').item(0);

		// if (xsd.isEqualNode(dataXsd)) {
		// 	parseLight(root);
		// }

		return parseLight(root);
	}
}