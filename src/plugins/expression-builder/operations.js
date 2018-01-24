const swap = function (obj) {
	const result = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			result[obj[prop]] = prop;
		}
	}

	return result;
};

const commonOperations = [
		'EQUALS',
		'NOT EQUALS',
		'IN',
		'IS EMPTY',
		'IS NOT EMPTY'
	],
	oneToOneCommonOperations = [
		'EQUALS',
		'NOT EQUALS'
	],
	textOperations = [
		'LIKE',
		'NOT LIKE',
		'STARTS WITH',
		'ENDS WITH'
	],
	numberOperations = [
		'BETWEEN',
		'GREATER THAN',
		'LESS THAN',
		'GREATER OR EQ. TO',
		'LESS OR EQ. TO'
	],
	oneToOneNumberOperations = [
		'GREATER THAN',
		'LESS THAN',
		'GREATER OR EQ. TO',
		'LESS OR EQ. TO'
	];

export const typeMapping = {
	id: commonOperations.concat(textOperations),
	text: commonOperations.concat(textOperations),
	email: commonOperations.concat(textOperations),
	integer: commonOperations.concat(numberOperations),
	number: commonOperations.concat(numberOperations),
	datetime: commonOperations.concat(numberOperations),
	currency: commonOperations.concat(numberOperations)
};

export const camelCaseMapping = {
	'IS EMPTY': 'isNull',
	'IS NOT EMPTY': 'isNotNull',
	'EQUALS': 'equals',
	'NOT EQUALS': 'notEquals',
	'GREATER OR EQ. TO': 'greaterThanOrEquals',
	'LESS OR EQ. TO': 'lessThanOrEquals',
	'GREATER THAN': 'greaterThan',
	'LESS THAN': 'lessThan',
	'LIKE': 'like',
	'NOT LIKE': 'notLike',
	'STARTS WITH': 'startsWith',
	'ENDS WITH': 'endsWith',
	'IN': 'in',
	'BETWEEN': 'between'
};

export const labelMapping = swap(camelCaseMapping);

export const oneToOneMapping = {
	STRING: oneToOneCommonOperations.concat(textOperations),
	INTEGER: oneToOneCommonOperations.concat(oneToOneNumberOperations),
	NUMBER: oneToOneCommonOperations.concat(oneToOneNumberOperations),
	DATETIME: oneToOneCommonOperations.concat(oneToOneNumberOperations),
	CURRENCY: oneToOneCommonOperations.concat(oneToOneNumberOperations)
}
