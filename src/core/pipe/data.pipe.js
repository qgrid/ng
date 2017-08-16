import {columnFactory} from '../column/column.factory';
import * as columnService from '../column/column.service';
import {generateFactory, sortIndexFactory} from '../column-list';

export function dataPipe(data, context, next) {
	const model = context.model;
	addDataRows(model, data);
	addDataColumns(model);
	next(data);
}

function addDataRows(model, rows) {
	model.data({rows: rows}, {source: 'data.pipe', behavior: 'core'});
}

function addDataColumns(model) {
	const getColumns = generateFactory(model);
	const getIndex = sortIndexFactory(model);
	const createColumn = columnFactory(model);
	const result = getColumns();
	const dataColumns = columnService.dataView(
		result.columns
			.map(columnBody => {
				const columnView = createColumn(columnBody.type || 'text', columnBody);
				return columnView.model;
			}),
		model);

	if (result.hasChanges) {
		model.data({
			columns: dataColumns
		}, {
			source: 'data.pipe',
			behavior: 'core'
		});
	}

	const indexResult = getIndex(dataColumns);
	if (indexResult.hasChanges) {
		model.columnList({
			index: indexResult.index
		}, {
			source: 'column.pipe',
			behavior: 'core'
		});
	}

	return result.columns;
}