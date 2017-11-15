import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('validation');

class Validation extends Plugin {
	constructor() {
		super(...arguments);
	}

	get resource() {
		return this.model.validation().resource;
	}
}

export default Validation.component({
	controller: Validation,
	controllerAs: '$validation',
	bindings: {
		'type': '@'
	}
});
