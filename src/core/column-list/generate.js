import {startCase, isObject, isArray} from '../services/utility';

export function generate(rows, deep, path='') {
	if (!rows || rows.length === 0) {
		return [];
	}

	const source = rows[0];
	const props = Object.getOwnPropertyNames(source);
	return props.reduce((acc, prop) => {
		const key = path !== '' ?
			`${path}.${prop}` :
			prop;

		if (deep && isObject(source[prop])) {
			if (isArray(source[prop])) {
				acc.push({
					key: key,
					title: startCase(prop),
					value: (item) => {
						const parts = path !== '' ? path.split('.') : [];
						let accessor = item;
						parts.forEach(part => {
							accessor = accessor[part];
						});
						return accessor[prop].join('\n');
					}
				});
			} else {
				const mergeColumns = generate([source[prop]], true, key);
				acc.push(...mergeColumns);
			}
		} else {
			acc.push({
				key: key,
				title: startCase(prop),
				value: (item) => {
					const parts = path !== '' ? path.split('.') : [];
					let accessor = item;
					parts.forEach(part => {
						accessor = accessor[part];
					});
					return accessor[prop];
				}
			});
		}

		return acc;
	}, []);
}