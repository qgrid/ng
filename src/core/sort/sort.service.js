import AppError from 'core/infrastructure/error';

export function key(entry) {
	const key = Object.keys(entry)[0];
	if(!key){
		throw new AppError(
			'sort.service',
			`Sort key is not defined in "${entry}"`);
	}

	return key;
}

export function index(by, entryKey) {
	return by.map(key).findIndex(k => k === entryKey);
}

export function direction(entry) {
	const entryKey = key(entry);
	return entry[entryKey];
}

export function map(by) {
	return by.reduce((memo, entry) => {
		const entryKey = key(entry);
		memo[entryKey] = entry[entryKey];
		return memo;
	}, {});
}

