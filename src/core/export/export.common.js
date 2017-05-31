import {isObject, isArray} from '@grid/core/services/utility';

const flattenObject = (obj, separator = ' ,') => {
	const result = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if (isObject(obj[prop]) && !isArray(obj[prop])) {
				const flatObject = flattenObject(obj[prop]);
				for (let flatProp in flatObject) {
					if (flatObject.hasOwnProperty(flatProp)) {
						result[prop + '.' + flatProp] = flatObject[flatProp];
					}
				}
			} else if (isArray(obj[prop])) {
				const items = [];
				for (let item of obj[prop]) {
					items.push(item);
				}
				result[prop] = items.join(separator);
			} else {
				result[prop] = obj[prop];
			}
		}
	}
	return result;
};

export {
	flattenObject
};