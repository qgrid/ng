import Component from '../../view/components/component';
import {VALIDATION_NAME} from '../definition';

class Rule extends Component {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const gridModel = this.validation.model;
		const validation = gridModel.validation;
		const rules = Array.from(validation().rules);

		rules.push({
			for: this.for,
			key: this.key
		});

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
		'key': '@'
	}
};