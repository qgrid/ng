import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/infrastructure';
import {SELECTION_BAR_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(SELECTION_BAR_NAME, () => {
		return {
			model: 'selection',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('selection-bar');
class SelectionBar extends Plugin {
	constructor() {
		super(...arguments);

		this.units = [ 
			{ key: 'row', title: 'Row' }, 
			{ key: 'column', title: 'Column' }, 
			{ key: 'cell', title: 'Cell' },
			{ key: 'mix', title: 'Mix' }
		];

		this.unit = this.units[0].key;

		this.modes = [
			{ key: 'single', title: 'Single' },
			{ key: 'multiple', title: 'Multiple' },
			{ key: 'range', title: 'Range' },
		];

		this.mode = this.modes[0].key;

		this.toggleMode = new Command({
			execute: (mode) => {
				const selection = this.model.selection;
				selection({mode: mode});
			}
		});

		this.toggleUnit = new Command({
			execute: (unit) => {
				const selection = this.model.selection;
				selection({unit: unit});
			}
		});
	}

	onInit() {
		this.model.selectionChanged.watch(() => {
			const selection = this.model.selection();
			this.mode = selection.mode;
			this.unit = selection.unit;
		});
	}

	get count() {
		return this.model.selection().entries.length;
	}

	get resource() {
		return this.model.visibility().resource;
	}
}

export default SelectionBar.component({
	controller: SelectionBar,
	controllerAs: '$selectionBar'
});