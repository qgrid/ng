import AppError from 'core/infrastructure/error';

import SingleSelectionState from './single.selection.state';
import MultipleSelectionState from './multiple.selection.state';


export default (model) => {
	const mode = model.selection().mode;
	//const unit = model.selection().unit;
	switch (mode) {
		case 'single':
			return new SingleSelectionState(model);
		case 'multiple':
		case 'range':
			return new MultipleSelectionState(model);
		default:
			throw new AppError('selection.factory', `Invalid selection mode "${mode}"`);
	}
};