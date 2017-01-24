import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
import clone from 'lodash/clone';
import isUndefined from 'lodash/isUndefined';
import debounce from 'lodash/debounce';

const noop = () => {
};

const toCamelCase = (...names) => {
	const length = names.length;
	if (length > 0) {
		return names[0] +
			names.slice(1)
				.map(name =>
				name[0].toUpperCase() +
				name.substring(1, name.length));
	}

	return '';
};

export {
	isObject,
	isFunction,
	isUndefined,
	clone,
	debounce,
	toCamelCase,
	noop
};