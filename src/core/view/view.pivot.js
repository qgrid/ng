import View from './view';
import {map as getColumnMap} from 'core/column/column.service';
import groupBuilder from 'core/group/group.build';
import pivotBuilder from 'core/pivot/pivot.build';
import Log from 'core/infrastructure/log';

export default class PivotView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.rows = [];
		this.valueFactory = valueFactory;

		model.viewChanged.on(() => this.invalidate(model));
	}

	static build(model, valueFactory) {
		return () => {
			const dataState = model.data();
			const pivotState = model.pivot();

			const build = pivotBuilder(
				getColumnMap(dataState.columns),
				pivotState.by,
				valueFactory
			);

			return build(dataState.rows);
		};
	}

	invalidate(model) {
		Log.info('view.pivot', 'invalidate');

		const pivot = model.view().pivot;
		const pivotRows = pivot.rows;
		if (pivotRows.length && model.group().by.length) {
			const build = groupBuilder(model);
			this.rows = build(this.valueFactory);
		}
		else {
			this.rows = pivotRows;
		}
	}

	value(row, column) {
		const rowIndex = this.model.view().rows.indexOf(row);
		return this.rows[rowIndex][column.columnIndex];
	}
}