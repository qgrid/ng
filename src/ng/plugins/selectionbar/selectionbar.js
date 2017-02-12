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
		
		this.unit = 'row';
		this.units = ['row', 'column', 'cell', 'checkbox'];

		this.mode = 'single';
		this.modes = ['single', 'multiple'];
		
		this.toggleMode = new Command({
			execute: (mode) => {
				const selection = this.model.selection;
				selection({ mode: mode });
				this.invalidateGrid();
			}
		});

		this.toggleUnit = new Command({
			execute: (unit) => {
				const selection = this.model.selection;
				selection({ unit: unit });
				this.invalidateGrid();
			},
			canExecute: () => {
				return true;
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
		this.unit = this.selection.unit;

		this.model.selectionChanged.on(e => {
			if (e.changes.hasOwnProperty('unit')) {
				this.unit = e.state.unit;
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