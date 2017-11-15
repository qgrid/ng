import PluginComponent from '../plugin.component';
import LIVR from 'livr';
import * as validationService from './validation.service';

LIVR.Validator.defaultAutoTrim(true);

const Plugin = PluginComponent('validator');

class Validator extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const validationSettings = this.validationSettings;
		if (validationSettings.canValidate) {
			this.validator = new LIVR.Validator(validationSettings.rules);
		}
	}

	get error() {
		if (this.validator) {
			const validated = {
				[this.key]: this.value
			};
			const validData = this.validator.validate(validated);
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

	get validationSettings() {
		return validationService.toLIVR(this.rules, this.key);
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
