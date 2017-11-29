import PluginComponent from '../plugin.component';
import {ValidatorView} from '@grid/plugin/validation/validator.view';

const Plugin = PluginComponent('validator');

class Validator extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		this.$scope.$validator = new ValidatorView(this.model, this);
	}
}

export default Validator.component({
	controller: Validator,
	controllerAs: '$validatorPlugin',
	bindings: {
		'key': '@',
		'type': '@',
		'value': '<',
	}
});
