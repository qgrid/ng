import Component from '../../view/components/component';
import {VALIDATION_NAME} from '../definition';

class Rule extends Component {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const optionalRules = ['required', 'one_of', 'min_length', 'max_length', 'length_between', 'positive_integer'];
		const gridModel = this.validation.model;
		const validation = gridModel.validation;
		const rules = Array.from(validation().rules);
		let rule = {
			for: this.for,
			key: this.key
		};
		for (let name of optionalRules) {
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
	bindings: {
		'for': '@',
		'key': '@',
		'required': '@?',
		'one_of': '<? oneOf',
		'min_length': '@? minLength',
		'max_length': '@? maxLength',
		'length_between': '<? lengthBetween',
		'positive_integer': '@? positiveInteger'
	}
};
