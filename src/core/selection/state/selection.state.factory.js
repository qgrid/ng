import AppError from 'core/infrastructure/error';

import SingleSelectionState from './single.selection.state';
import MultipleSelectionState from './multiple.selection.state';
import CustomSingleSelectionState from './custom.single.selection.state';
import CustomMultipleSelectionState from './custom.multiple.selection.state';

function cellEqual(a, b) {
	if (a == b){
		return true;
	}

	if (a && b) {
		return a.column === b.column && a.row === b.row;
	}

	return false;
}

export default (model) => {
	const mode = model.selection().mode;
	const unit = model.selection().unit;

	switch (mode) {
		case 'single':
			return unit === 'cell' 
					? new CustomSingleSelectionState(model, cellEqual)
					: new SingleSelectionState(model);
		case 'multiple':
		case 'range':
			return unit === 'cell'
					? new CustomMultipleSelectionState(model, cellEqual)
					: new MultipleSelectionState(model);
		default:
			throw new AppError('selection.state.factory', `Invalid selection mode "${mode}"`);
	}
};