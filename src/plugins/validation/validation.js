import PluginComponent from '../plugin.component';
import {VALIDATION_NAME} from '../definition';
import {RulePath} from '@grid/core/rule';
import {Log} from '@grid/core/infrastructure';

RulePath
	.register(VALIDATION_NAME, (rule) => {
		return {
			model: 'validation',
			resource: rule.for
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