import PluginComponent from '../plugin.component';
import {ACTION_NAME} from '../definition';
// import {Command} from '@grid/core/infrastructure';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(ACTION_NAME, (template) => {
		return {
			model: 'action',
			resource: template.for
		};
	});

const Plugin = PluginComponent('action');
class Action extends Plugin {
	constructor() {
		super(...arguments);
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

export default Action.component({
	controller: Action,
	controllerAs: '$action',
	bindings: {
		'type': '@',
		'icon': '@',
		'title': '@',
		'command': '='
	}
});