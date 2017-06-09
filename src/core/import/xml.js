const schema = require('raw-loader!@grid/core/export/schema.xml');
function xmlToObj(xml) {
	const result = {};
	result[xml.nodeName] = xml.nodeValue;
	if (xml.hasChildNodes()) {
		xmlToObj();
	}
	return result;
}

function parseLight(root) {
	const rows = root.getElementsByTagName('row');
	for (let row of rows) {
		xmlToObj(row);
	}
}

export class Xml {
	read(data) {
		const parser = new DOMParser();
		const xsd = parser.parseFromString(schema, 'text/xml').firstChild;
		const root = parser.parseFromString(data, 'text/xml').documentElement;
		const dataXsd = root.getElementsByTagNameNS('*', 'schema').item(0);

		if (xsd.isEqualNode(dataXsd)) {
			parseLight(root);
		}

		return root;
	}
}