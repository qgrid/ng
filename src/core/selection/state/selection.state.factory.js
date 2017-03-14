import AppError from 'core/infrastructure/error';

import SingleSelectionState from './single.selection.state';
import MultipleSelectionState from './multiple.selection.state';

function cellKey(item) {
	return JSON.stringify(item);
}

export default (model) => {
	const mode = model.selection().mode;
	const unit = model.selection().unit;

	switch (mode) {
		case 'single':
			return unit === 'cell' 
					? new SingleSelectionState(model, cellKey)
					: new SingleSelectionState(model);
		case 'multiple':
		case 'range':
			return unit === 'cell'
					? new MultipleSelectionState(model, cellKey)
					: new MultipleSelectionState(model);
		default:
			throw new AppError('selection.state.factory', `Invalid selection mode "${mode}"`);
	}
};