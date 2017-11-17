import PluginComponent from '../plugin.component';
import * as validationService from './validation.service';

const Plugin = PluginComponent('validator');

class Validator extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		if (validationService.hasRules(this.rules, this.key)) {
			this.validator = validationService.createValidator(this.rules, this.key);
		}
	}

	get error() {
		if (this.validator) {
			const target = {
				[this.key]: this.value
			};
			const validData = this.validator.validate(target);
			if (!validData) {
				return this.validator.getErrors()[this.key];
			}
		}
	}

	get resource() {
		return this.model.validation().resource;
	}

	get rules() {
		return this.model.validation().rules;
	}

}

export default Validator.component({
	controller: Validator,
	controllerAs: '$validator',
	bindings: {
		'key': '@',
		'value': '<',
	}
});
