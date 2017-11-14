import PluginComponent from '../plugin.component';

const LIVR = require('livr');
LIVR.Validator.defaultAutoTrim(true);

const Plugin = PluginComponent('validator');

class Validator extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		console.log('rules:', this.rules, 'key:', this.key);
		// const keys = this.rules.map(rule => rule.key);
		this.validator = new LIVR.Validator({
			gender: ['required', {one_of: ['male', 'female']}],
		});
		// console.log('VALIDATOR', this.validator);
	}

	get error() {
		const validated = {
			[this.key]: this.value
		};
		const validData = this.validator.validate(validated);
		if (!validData) {
			return this.validator.getErrors()[this.key];
		}
	}

	get rules() {
		return this.model.validation().rules;
	}

	get resource() {
		return this.model.validation().resource;
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