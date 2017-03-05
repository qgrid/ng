import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';

export default class CellHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		const body = this.markup.body;
		for (let item of items) {
			if (body && body.rows && body.rows.length > item.rowIndex) {
				const row = body.rows[item.rowIndex];
				if (row && row.cells && row.cells.length > item.columnIndex) {
					this.state(row.cells[item.columnIndex], true);
				}
			}
		}
	}

	clearCore(items) {
		const body = this.markup.body;
		for (let item of items) {
			if (body && body.rows && body.rows.length > item.rowIndex) {
				const row = body.rows[item.rowIndex];
				if (row && row.cells && row.cells.length > item.columnIndex) {
					this.state(row.cells[item.columnIndex], false);
				}
			}
		}
	}

	state(item, state) {
		if (state) {
			item.classList.add(`${GRID_PREFIX}-selected`);
		}
		else {
			item.classList.remove(`${GRID_PREFIX}-selected`);
		}
	}
}