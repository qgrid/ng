import PluginComponent from '../plugin.component';
import {VALIDATION_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {Log} from '@grid/core/infrastructure';

TemplatePath
	.register(VALIDATION_NAME, (template) => {
		return {
			model: 'validation',
			resource: template.for
		};
	});

const Plugin = PluginComponent('validation');

class Validation extends Plugin {
	constructor() {
		super(...arguments);
		Log.warn('validation');
	}

	get id() {
		return this.model.grid().id;
	}

	get rows() {
		return this.model.data().rows;
	}

	get columns() {
		return this.model.data().columns;
	}

	get resource() {
		return this.model.export().resource;
	}

	get resourceKey() {
		return [this.type];
	}
}

export default Validation.component({
	controller: Validation,
	controllerAs: '$validation',
	bindings: {
		'type': '@'
	}
});