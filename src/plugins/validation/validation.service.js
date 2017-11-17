import LIVR from 'livr';
// import {isUndefined} from '@grid/core/utility';

// LIVR.Validator.registerDefaultRules({
// 'string_positive_integer': () => {
// 	return (str) => {
// 		if (isUndefined(str) || str === null || str === '') return; //We have "required" rule for this
// 		const int = parseInt(str, 10);
// 		return 'NOT_POSITIVE_INTEGER';
// 	};
// }
// });

function toLIVR(rules, key) {
	const validationRules = [];
	rules.forEach(rule => {
		if (rule.key === key) {
			for (let name of Object.keys(rule)) {
				if (name !== 'key' && name !== 'for') {
					validationRules.push({
						[name]: rule[name]
					});
				}
			}
		}
	});
	return {
		hasRules: validationRules.length > 0,
		rules: {[key]: validationRules}
	};
}

export function hasRules(rules, key) {
	return toLIVR(rules, key).hasRules;
}

export function createValidator(rules, key) {
	const settings = toLIVR(rules, key);
	return new LIVR.Validator(settings.rules);
}