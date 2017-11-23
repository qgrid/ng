import PluginComponent from '../plugin.component';
import {DATA_MANIPULATION_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {DataManipulationView} from '@grid/plugin/data-manipulation/data.manipulation.view';

TemplatePath
	.register(DATA_MANIPULATION_NAME, () => {
		return {
			model: 'dataManipulation',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('data-manipulation', {models: ['dataManipulation']});
class DataManipulation extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		this.$scope.$data = new DataManipulationView(this.model);
	}

	get resource() {
		return this.model.dataManipulation().resource;
	}

	onDestroy() {
		if (this.$scope.$data) {
			this.$scope.$data.dispose();
		}
	}
}

export default DataManipulation.component({
	controller: DataManipulation,
	controllerAs: '$dataManipulationPlugin',
	bindings: {
		dataManipulationRowFactory: '<rowFactory',
		dataManipulationRowId: '<rowId'
	}
});