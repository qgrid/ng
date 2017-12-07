import Component from '../../view/components/component';
import {VALIDATION_NAME} from '../definition';

const ruleBindings = {

	// Common Rules
	required: '@?',
	not_empty_list: '@? notEmptyList',
	any_object: '@? anyObject',

	// String Rules
	eq: '<? equal',
	string: '@?',
	length_between: '<? lengthBetween',
	length_equal: '<? lengthEqual',
	min_length: '<? minLength',
	max_length: '<? maxLength',
	one_of: '<? oneOf',
	like: '<? pattern',

	// Numeric Rules
	integer: '@?',
	positive_integer: '@? positiveInteger',
	decimal: '@?',
	positive_decimal: '@? positiveDecimal',
	max_number: '<? maxNumber',
	min_number: '<? minNumber',
	number_between: '<? numberBetween',

	// Special Rules
	email: '@?',
	url: '@?',
	iso_date: '@? isoDate',
	equal_to_field: '<? equalToField',
	list_of: '<? listOf',

	// Custom
	custom: '&?'
};
const bindings = {
	for: '@',
	key: '@'
};
Object.assign(bindings, ruleBindings);

class Rule extends Component {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const predefinedRules = Object.keys(ruleBindings);
		const gridModel = this.validation.model;
		const validation = gridModel.validation;
		const regularRules = Array.from(validation().regularRules);
		const customRules = Array.from(validation().customRules);
		const regularRule = {
			for: this.for,
			key: this.key
		};
		const customRule = Object.assign({}, regularRule);

		for (let name of predefinedRules) {
			if (this.hasOwnProperty(name)) {
				if (name === 'custom') {
					customRule[name] = this[name];
				} else {
					regularRule[name] = this[name];
				}
			}
		}

		regularRules.push(regularRule);
		customRules.push(customRule);
		validation({regularRules, customRules});
	}
}

Rule.$inject = [];

export default {
	controller: Rule,
	require: {
		validation: `^^${VALIDATION_NAME}`
	},
	controllerAs: '$rule',
	bindings: bindings
};
