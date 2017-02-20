import {isUndefined, isArray} from 'core/services/utility';

export default function create(key, value) {
	const env = {};
	if (!isUndefined(key)) {
		if (isArray(value)) {
			const keys = parse(key);
			let length = keys.length;
			while (length--) {
				env[keys[length]] = value[length];
			}
		}
		else {
			env[key] = value;
		}
	}

	return env;
}

function parse(key) {
	const result = [];
	const regex = /[^\[\],]+/gi;
	let match;
	while (match = regex.exec(key)) {
		result.push(match[0]);
	}
	return result;
}