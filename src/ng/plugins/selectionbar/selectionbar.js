import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import {SELECTIONBAR_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';

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
		
		this.checkbox = false;
		this.mode = 'row';
		this.modes = ['row', 'column', 'cell'];
		
		this.toggleMode = new Command({
			execute: (mode) => {
				const selection = this.model.selection;
				selection({ mode: mode });
				this.invalidateGrid();
			}
		});

		this.toggleCheckbox = new Command({
			execute: (checkbox) => {
				const selection = this.model.selection;
				selection({ checkbox: checkbox });
				this.invalidateGrid();
			},
			canExecute: () => {
				return this.mode === 'row';
			}
		});

	}

	get selection() {
		return this.model.selection();
	}

	invalidateGrid(){
		this.model.data({
			columns: Array.from(this.model.data().columns)
		});
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