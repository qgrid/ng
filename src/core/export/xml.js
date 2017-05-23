import {isObject, isArray, isString} from '@grid/core/services/utility';

const begin = '<?xml version="1.0" encoding="UTF-8"?><?mso-application progid="Excel.Sheet"?>';
const schema = '<!-- START OF SCHEMA --><xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"><xsd:element name="rows">' +
	'<xsd:complexType><xsd:sequence><xsd:element name="row" maxOccurs="unbounded"><xsd:complexType><xsd:sequence>' +
	'<xsd:element name="name"><xsd:complexType><xsd:sequence><xsd:element name="first" type="xsd:string"/>' +
	'<xsd:element name="last" type="xsd:string"/></xsd:sequence></xsd:complexType></xsd:element><xsd:element name="gender" type="xsd:string"/>' +
	'<xsd:element name="birthday" type="xsd:date"/><xsd:element name="contact"><xsd:complexType><xsd:sequence><xsd:element name="address">' +
	'<xsd:complexType><xsd:sequence><xsd:element name="street" type="xsd:string"/><xsd:element name="zip" type="xsd:string"/>' +
	'<xsd:element name="city" type="xsd:string"/><xsd:element name="state" type="xsd:string"/></xsd:sequence></xsd:complexType>' +
	'</xsd:element><xsd:element name="email" type="xsd:string" maxOccurs="unbounded"/><xsd:element name="region" type="xsd:string" maxOccurs="unbounded"/>' +
	'<xsd:element name="phone" type="xsd:string" maxOccurs="unbounded"/></xsd:sequence></xsd:complexType></xsd:element>' +
	'<xsd:element name="likes" type="xsd:string" maxOccurs="unbounded"/><xsd:element name="memberSince" type="xsd:date"/></xsd:sequence>' +
	'</xsd:complexType></xsd:element></xsd:sequence></xsd:complexType></xsd:element></xsd:schema><!-- END OF SCHEMA -->';

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

export class Xml {
	write(rows) {
		const result = [`${begin}<rows xmlns:xsd="http://www.w3.org/2001/XMLSchema">${schema}`];
		for (let row of rows) {
			const item = objToXml(row);
			result.push(`<row>${item}</row>`);
		}
		result.push('</rows>');
		return result.join('');
	}
}