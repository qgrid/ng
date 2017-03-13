import AppError from 'core/infrastructure/error';
import stateFactory from '../state/selection.state.factory';

import RowSelectionBehavior from './selection.row.behavior';
import ColumnSelectionBehavior from './selection.column.behavior';
import CellSelectionBehavior from './selection.cell.behavior';

export default (model, markup, apply) => {
	const mode = model.selection().mode;
	const unit = model.selection().unit;

	const state = stateFactory(model);

	switch (unit) {
		case 'row':
			return new RowSelectionBehavior(model, markup, state, apply);
		case 'column':
			return new ColumnSelectionBehavior(model, markup, state, apply);
		case 'cell':
			return new CellSelectionBehavior(model, markup, state, apply);
		default:
			throw new AppError('selection.state.factory', `Invalid pair "${mode}" and unit "${unit}"`);
	}
};