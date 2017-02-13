import {isUndefined} from './utility';

export function css(element, property, value) {
	const normalizedProperty = normalize(property);
	if (isUndefined(value)) {
		return element.style[normalizedProperty];
	} else {
		element.style[normalizedProperty] = value;
	}
}

function normalize(property) {
	return property.replace(/-([a-z])/g, upperFirst);
}

function upperFirst(match, letter) {
	return letter.toUpperCase();
}

export function cellsAt(element, index) {
	const result = [];
	const rows = element.rows;
	for (let i = 0, length =  rows.length; i < length; i++) {
		result.push(rows[i].cells[index]);
	}

	return result;
}