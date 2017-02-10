import View from './view';
import Command from 'core/infrastructure/command';

export default class SelectionView extends View {
	constructor(model) {
		super(model);

		this.selectionSet = new Set();

		this.toggle = new Command({
			execute: (item, state) => {
				if (!item) {
					this.toggleAll(state);
				} else if (item instanceof Node) {
					this.toggleNode(item, state);
				} else {
					this.toggleItem(item, state);
				}

				this.invalidate();
			},
			canExecute: () => {
				return true;
			}
		});
	}

	get selection(){
		return this.model.selection();
	}

	/**
	 * If no parameters returns current selection unit
	 * Otherwise checks if current unit equal to passed unit 
	 * @param {string} unit - value to check
	 */
	unit(unit) {
		const currentUnit = this.selection.unit;

		if (!unit) {
			return currentUnit; 
		}

		return unit === currentUnit;
	}


}