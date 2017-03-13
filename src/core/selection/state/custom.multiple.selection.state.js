import SelectionState from './selection.state';
import {isFunction} from 'core/services/utility';
import AppError from 'core/infrastructure/error';

export default class CustomMultipleSelectionState extends SelectionState {
	constructor(model, equal) {
		super(model);

		if (!isFunction(equal)){
			throw new AppError('customMultipleSelectionState', 'euqal is not a function');
		}

		this.items = [];
		this.equal = equal;
	}

	selectCore(item, state) {
		if (state) {
			if (!this.items.find(x => this.equal(x, item))) {
				this.items = [...this.items, item];
			}
		}
		else {
			this.items = this.items.filter(x => !this.equal(x, item));
		}
	}

	stateCore(item) {
		return this.items.some(x => this.equal(x, item));
	}

	clearCore() {
		this.items = [];
	}

	get view() {
		return this.items;
	}
}