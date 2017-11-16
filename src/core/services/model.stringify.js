import {flatten} from '../utility';

export function stringifyFactory(property) {
	switch (property) {
		case 'filter':
			return filter;
		case 'sort':
			return sort;
		case 'group':
		case 'pivot':
			return transformByKeys(property);
		default:
			throw new AppError(
				'model.stringify',
				`Stringifier for ${property} model is not defined`);
	}
}

function filter(model) {
	const values = Object.values(model.by)
		.map(column => column.items);
	if (values.length === 0) {
		return '';
	}
	const target = flatten(values).join(', ');

	return `filter ${target}`;
}

function sort(model) {
	const keys = [];
	for (let item of model.by) {
		for (let key in item) {
			keys.push(key);
		}
	}

	if (keys.length === 0) return '';

	return `sort ${keys.join(', ')}`;
}

function transformByKeys(property) {
	return model => {
		if (model.by.length === 0) {
			return '';
		}
		return `${property} ${model.by.join(', ')}`;
	};
}