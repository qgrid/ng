import View from './view';
import {map as getColumnMap} from 'core/column/column.service';
import pivotBuilder from 'core/pivot/pivot.build';

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
		}
	}

	invalidate(model) {
		const viewState = model.view();
		const pivot = viewState.pivot;
		const groupBy = model.group().by;
		const pivotRows = pivot.rows;
		if (pivotRows.length && groupBy.length) {
			const pivotRowLength = pivotRows[0].length;
			const nodes = viewState.rows;
			const result = [];
			for (let i = 0, nodeLength = nodes.length; i < nodeLength; i++) {
				const node = nodes[i];
				const aggRow = new Array(pivotRowLength);
				for (let j = 0, rowLength = node.rows.length; j < rowLength; j++) {
					const rowIndex = node.rows[j];
					const pivotRow = pivotRows[rowIndex];
					for (let k = 0; k < pivotRowLength; k++) {
						if (pivotRow[k]) {
							const value = aggRow[k];
							aggRow[k] = value ? value + 1 : 1; // apply aggregation
						}
					}
				}
				result.push(aggRow);
			}

			this.rows = result;
		}
		else {
			this.rows = pivot.rows;
		}
	}

	title(column) {
		return column.model.title;
	}

	value(row, column) {
		const rowIndex = this.model.view().rows.indexOf(row);
		return this.rows[rowIndex][column.columnIndex];
	}
}