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
		});

		this.toggleCheckbox = new Command({
			execute: (checkbox) => {
				const selection = this.model.selection;
				
				selection({ checkbox: checkbox });
				//TODO: how to invalidate grid without this hack?
				this._view.grid.invalidate();
			},
			canExecute: () => {
				return this.mode === 'row';
			}
		});

	}

	get selection() {
		return this.model.selection();
	}

	onInit() {
		this.mode = this.selection.mode;
		this.checkbox = this.selection.checkbox;

		this.model.selectionChanged.on(e => {
			if (e.changes.hasOwnProperty('checkbox')) {
				this.checkbox = e.state.checkbox;
			}

			if (e.changes.hasOwnProperty('mode')) {
				this.mode = e.state.mode;
			}
		});
	}
	
	get resource() {
		return this.model.visibility().resource;
	}
}

export default Selectionbar.component({
	controller: Selectionbar,
	controllerAs: '$selectionbar'
});