import AppError from 'core/infrastructure/error';

import SingleSelection from './single.selection';
import MultipleSelection from './multiple.selection';


export default (model) => {
	const mode = model.selection().mode;
	switch (mode) {
		case 'single':
			return new SingleSelection(model);
		case 'multiple':
		case 'range':
			return new MultipleSelection(model);
		default:
			throw new AppError('selection.factory', `Invalid selection mode "${mode}"`);
	}
};