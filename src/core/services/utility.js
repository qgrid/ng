import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
import clone from 'lodash/clone';
import isUndefined from 'lodash/isUndefined';
import debounce from 'lodash/debounce';
import merge from 'lodash/merge';
import extend from 'lodash/extend';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import groupBy from 'lodash/groupBy';

const noop = () => {};
const yes = () => true;
const no = () => false;
const identity = arg => arg;

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
	merge,
	extend,
	flatten,
	uniq,
	groupBy,
	identity,
	yes,
	no,
	toCamelCase,
	noop
};