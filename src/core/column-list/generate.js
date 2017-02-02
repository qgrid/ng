import {startCase, isObject} from '../services/utility';

export function generate(source) {
	if (!source || !isObject(source)) {
		return [];
	}

	const keys = Object.getOwnPropertyNames(source);
	return keys.map(key => ({
		key: key,
		title: startCase(key)
	}));
}