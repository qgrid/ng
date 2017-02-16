import AppError from 'core/infrastructure/error';
import Selection from './behaviors/selection';
import SingleSelection from './behaviors/single.selection';
import MultipleSelection from './behaviors/multiple.selection';
import HighlightSelection from './behaviors/highlight.selection';

export default function (model, markup) {
	const mode = model.selection().mode;
	switch (mode) {
		case 'single':
			return new Selection(model, new SingleSelection(new HighlightSelection(model, markup)));
		case 'multiple':
			return new Selection(model, new MultipleSelection(new HighlightSelection(model, markup)));
		default:
			throw new AppError('selection.factory', `Invalid selection mode "${mode}"`);
	}
}