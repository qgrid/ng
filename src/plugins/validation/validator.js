import PluginComponent from '../plugin.component';
import {ValidatorView} from '@grid/plugin/validation/validator.view';
import {VIEW_CORE_NAME} from '../../view/definition';

const Plugin = PluginComponent('validator');

class Validator extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		this.validator = new ValidatorView(this.model, this);
		this.$scope.$validator = this.validator;
		this.$scope.$watch(() => this.value, () => {
			this.validator.valueChanged.emit();
		});
	}
}

export default Validator.component({
	controller: Validator,
	controllerAs: '$validatorPlugin',
	require: {
		$view: `^^${VIEW_CORE_NAME}`
	},
	bindings: {
		'key': '@',
		'type': '@',
		'value': '<',
	}
});
