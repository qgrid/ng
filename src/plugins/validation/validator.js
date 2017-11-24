import PluginComponent from '../plugin.component';
import * as validationService from '@grid/core/validation/validation.service';
import {isString, isEqual} from '@grid/core/utility';

const Plugin = PluginComponent('validator');

class Validator extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		if (validationService.hasRules(this.rules, this.key)) {
			this.validator = validationService.createValidator(this.rules, this.key);
		}

		this.oldErrors = [];
	}

	get errors() {
		if (this.validator) {
			const target = {
				[this.key]: this.value
			};

			const isValid = this.validator.validate(target);
			if (!isValid) {
				const newError = this.validator.getErrors()[this.key];
				const newErrors = isString(newError) ? [newError] : newError;
				if (!isEqual(newErrors, this.oldErrors)) {
					this.oldErrors = newErrors;
				}
			} else {
				this.oldErrors.length = 0;
			}

			return this.oldErrors;
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
		'type': '@',
		'value': '<',
	}
});
