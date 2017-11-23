import PluginComponent from '../plugin.component';
import * as validationService from '@grid/core/validation/validation.service';
import {isString} from '@grid/core/utility';

const isArray = angular.isArray;
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
				const errors = this.validator.getErrors()[this.key];
				if (isString(errors)) {
					return errors;
				} else if (isArray(errors) && isArray(this.value)) {
					const result = errors.reduce((prev, curr, i) => {
						if (curr !== null) {
							prev.push(`${this.value[i]}: ${curr}`);
						}
						return prev;
					}, []);
					return result.join('\n');
				}
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
