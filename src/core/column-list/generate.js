import {startCase, isObject, isArray, isUndefined} from '../services/utility';

export function generate(rows, deep=true, path='') {
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
				const parts = path !== '' ? path.split('.') : [];
				acc.push({
					key: key,
					title: startCase(prop),
					value: (item) => {
						let accessor = item;
						parts.forEach(part => {
							accessor = accessor[part];
						});
						return accessor[prop].join('; ');
					}
				});
			} else {
				const mergeColumns = generate([source[prop]], true, key);
				acc.push(...mergeColumns);
			}
		} else {
			const parts = path !== '' ? path.split('.') : [];
			acc.push({
				key: key,
				title: startCase(prop),
				value: (item, value) => {
					let accessor = item;
					parts.forEach(part => {
						accessor = accessor[part];
					});
					if (!isUndefined(value)) {
						accessor[prop] = value;
					} else {
						return accessor[prop];
					}
				}
			});
		}

		return acc;
	}, []);
}