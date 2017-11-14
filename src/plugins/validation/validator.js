import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('validator');

class Validator extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {

	}

	get error() {
		return 'my error';
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