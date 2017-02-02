import {identity} from './utility';

export function parseFactory(type) {
	switch (type) {
		case 'text':
		case 'currency':
			return parseText;
		case 'integer':
			return parseIngeger;
		case 'number':
			return parseNumber;
		case 'date':
			return parseDate;
		default:
			return identity;
	}
}

function parseText(value) {
	return '' + value;
}

function parseDate(value) {
	const date = new Date(value);
	if (date !== 'Invalid Date' && !isNaN(date)) {
		return date;
	}

	return null;
}

function parseNumber(value) {
	const number = parseFloat(value);
	if (!isNaN(number) && isFinite(number)) {
		return number;
	}

	return null;
}

function parseIngeger(value) {
	const number = parseInt(value);
	if (!isNaN(number) && isFinite(number)) {
		return number;
	}

	return null;
}
