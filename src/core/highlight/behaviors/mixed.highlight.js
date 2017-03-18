import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';
import * as columnService from 'core/column/column.service';

export default class MixedHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		this.cells(items).forEach((cell) => this.state(cell, true));
	}

	clearCore(items) {
		this.cells(items).forEach((cell) => this.state(cell, false));
	}

	state(item, state) {
		if (state) {
			item.classList.add(`${GRID_PREFIX}-selected`);
		}
		else {
			item.classList.remove(`${GRID_PREFIX}-selected`);
		}
	}

	cells(items) {
		const result = [];
		const body = this.markup.body;

		const columns = columnService.lineView(this.model.view().columns);
		const rows = this.model.view().rows;

		for (let item of items) {
			if (rows.includes(item)) {
				const index = rows.indexOf(item);
				if (index > -1 && body && body.rows[index]) {
					for (let cell of body.rows[index].cells) {
						result.push(cell);
					}
				}
			} else {
				const rowIndex = rows.indexOf(item.row);
				const columnIndex = columns.findIndex((c) => c.model === item.column);

				if (rowIndex > -1 && body && body.rows[rowIndex]) {
					const row = body.rows[rowIndex];

					if (columnIndex > -1 && row && row.cells[columnIndex]) {
						result.push(row.cells[columnIndex]);
					}
				}
			}

		}

		return result;
	}
}