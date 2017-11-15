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
		const validationSettings = validationService.toLIVR(this.rules, this.key);
		if (validationSettings.hasRules) {
			this.validator = new LIVR.Validator(validationSettings.rules);
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
