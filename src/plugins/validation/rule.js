import Component from '../../view/components/component';
import {VALIDATION_NAME} from '../definition';

const ruleBindings = {
	length_between: '<? lengthBetween',
	length_equal: '<? lengthEqual',
	min_length: '<? minLength',
	max_length: '<? maxLength',
	one_of: '<? oneOf',
	positive_integer: '@? positiveInteger',
	required: '@?'
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
		const rules = Array.from(validation().rules);
		const rule = {
			for: this.for,
			key: this.key
		};
		for (let name of predefinedRules) {
			if (this.hasOwnProperty(name)) {
				rule[name] = this[name];
			}
		}

		rules.push(rule);
		validation({rules});
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
