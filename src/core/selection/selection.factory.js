import AppError from 'core/infrastructure/error';
import SingleSelection from './behaviors/multiple.selection';
import MultipleSelection from './behaviors/single.selection';

export default function (model) {
	const mode = model.selection().mode;
	switch (mode) {
		case 'single':
			return new SingleSelection(model);
		case 'multiple':
			return new MultipleSelection(model);
		default:
			throw new AppError('selection.factory', `Invalid selection mode "${mode}"`);
	}
}