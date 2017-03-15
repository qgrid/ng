import SelectionState from './selection.state';
import {isFunction} from 'core/services/utility';
import AppError from 'core/infrastructure/error';

export default class CustomSingleSelectionState extends SelectionState {
	constructor(model, equal) {
		super(model);

		if (!isFunction(equal)){
			throw new AppError('customSingleSelectionState', 'euqal is not a function');
		}

		this.item = null;
		this.equal = equal;
	}

	selectCore(item, state) {
		if (state) {
			this.item = item;
		}
		else {
			this.item = null;
		}
	}

	stateCore(item) {
		return this.equal(this.item, item);
	}

	clearCore() {
		this.item = null;
	}

	get view() {
		return this.item ? [this.item] : [];
	}
}