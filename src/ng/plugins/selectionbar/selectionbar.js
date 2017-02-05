import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import {SELECTIONBAR_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';
// import {isFunction} from 'core/services/utility';
// import Aggregation from 'core/services/aggregation';

TemplatePath
	.register(SELECTIONBAR_NAME, () => {
		return {
			model: 'selectionbar',
			resource: 'content'
		};
	});

class Selectionbar extends PluginComponent('selectionbar') {
	constructor() {
		super(...arguments);
		
		this.mode = 'row';
		this.modes = ['row', 'column', 'cell'];
		
		this.toggleMode = new Command({
			execute: (mode) => {
				const selection = this.model.selection;
				selection({ mode: mode });
			}
		})
	}

	onInit() {
		this.mode = this.model.selection().mode;
	}
	
	get resource() {
		return this.model.visibility().resource;
	}
}

export default Selectionbar.component({
	controller: Selectionbar,
	controllerAs: '$selectionbar'
});