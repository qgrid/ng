import {startCase, isObject, isArray} from '../services/utility';
import Path from '../services/path';

export function generate(rows, deep=true, path='') {
	if (!rows || rows.length === 0) {
		return [];
	}

	const source = rows[0];
	const props = Object.getOwnPropertyNames(source);
	return props.reduce((memo, prop) => {
		const key = path !== '' ? `${path}.${prop}` : prop;

		if (deep && isObject(source[prop])) {
			if (isArray(source[prop])) {
				const value = Path.compile(key);
				memo.push({
					key: key,
					title: startCase(prop),
					value: item => value(item).join('; ')
				});
			} else {
				const mergeColumns = generate([source[prop]], true, key);
				memo.push(...mergeColumns);
			}
		} else {
			const value = Path.compile(key);
			memo.push({
				key: key,
				title: startCase(prop),
				value: value
			});
		}

		return memo;
	}, []);
}