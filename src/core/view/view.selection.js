import View from './view';
import Command from 'core/infrastructure/command';
import selectionServiceFactory from 'core/services/selection.factory';
import {isUndefined} from 'core/services/utility';

export default class SelectionView extends View {
	constructor(model) {
		super(model);
		
		this.toggle = new Command({
			execute: (item, state) => {

				if (isUndefined(state)){
					const currentState = this._selectionService.state(item);
					state = !(currentState && currentState.isSelected);
				}

				this._selectionService.select(item, state);
				this.invalidate();
			},
			canExecute: () => {
				return true;
			}
		});

		model.dataChanged.watch(e => {
			if (e.changes.hasOwnProperty('rows')) {				
				this.createService();
			}
		});

		model.selectionChanged.watch(e => {
			if (e.changes.hasOwnProperty('items')) {				
				this.createService();
				this._selectionService.select(e.state.items, true);
			}

			if (e.changes.hasOwnProperty('unit') || e.changes.hasOwnProperty('mode')) {
				this.createService();
			}
		});

	}

	createService() {
		this._selectionService = selectionServiceFactory(this.selection.mode);
	}

	get selection(){
		return this.model.selection();
	}	
	
	unit(unit) {
		const currentUnit = this.selection.unit;

		if (!unit) {
			return currentUnit; 
		}

		return unit === currentUnit;
	}

	mode(mode) {
		const currentMode = this.selection.mode;

		if (!mode) {
			return currentMode; 
		}

		return mode === currentMode;
	}

	state(item) {
		return this._selectionService.state(item);
	}

	invalidate() {
		const selection = this.model.selection;

		selection({
			items: this._selectionService.selected
		});
	}
}