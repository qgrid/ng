import PluginComponent from '../plugin.component';
import {DATA_MANIPULATION_NAME} from '../definition';
import {Command} from '@grid/core/command';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(DATA_MANIPULATION_NAME, () => {
		return {
			model: 'data',
			resource: 'data-manipulation'
		};
	});

const Plugin = PluginComponent('data-manipulation');
class DataManipulation extends Plugin {
	constructor() {
		super(...arguments);
	}

	get resource() {
		return this.model.data().resource;
	}
}

export default DataManipulation.component({
	controller: DataManipulation,
	controllerAs: '$data',
	bindings: {
	}
});