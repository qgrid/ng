import {isUndefined, isArray} from '@grid/core/utility';

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
	const regex = /[^\[\],]+/gi; // eslint-disable-line no-useless-escape
	let match;
	while (match = regex.exec(key)) { // eslint-disable-line no-cond-assign
		result.push(match[0].trim());
	}
	return result;
}