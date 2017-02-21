import AppError from 'core/infrastructure/error';
import RowHighlight from './row.highlight';
import ColumnHighlight from './column.highlight';
import CellHighlight from './cell.highlight';

export default function (model, markup) {
	const selection = model.selection();
	switch (selection.unit) {
		case 'row':
			return new RowHighlight(model, markup);
		case 'cell':
			return new CellHighlight(model, markup);
		case 'column':
			return new ColumnHighlight(model, markup);
		default:
			throw new AppError('highlight.behavior.factory', `Invalid highlight mode "${selection.unit}"`);
	}
}