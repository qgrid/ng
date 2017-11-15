import PluginComponent from '../plugin.component';

const LIVR = require('livr');
LIVR.Validator.defaultAutoTrim(true);

const Plugin = PluginComponent('validator');

class Validator extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		if (this.validationArray.length > 0) {
			this.validator = new LIVR.Validator({
				[this.key]: this.validationArray
			});
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

	get validationArray() {
		const result = [];
		this.rules.forEach(rule => {
			if (rule.key === this.key) {
				for (let key of Object.keys(rule)) {
					if (key !== 'key' && key !== 'for') {
						result.push({
							[key]: rule[key]
						});
					}
				}
			}
		});
		return result;
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
