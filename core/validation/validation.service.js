import LIVR from 'livr';
import {CustomValidator} from './customValidator';

function formatRules(rules, key) {
	const result = [];
	rules.forEach(rule => {
		if (rule.key === key) {
			for (let name of Object.keys(rule)) {
				if (name !== 'key' && name !== 'for') {
					result.push({
						[name]: rule[name]
					});
				}
			}
		}
	});
	return result;
}

function toLIVR(rules, key) {
	const validationRules = formatRules(rules, key);
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

export function createCustomValidator(rules, key) {
	const validationRules = formatRules(rules, key);
	const validator = new CustomValidator(validationRules);
	return validator;
}
