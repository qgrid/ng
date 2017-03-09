import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';

export default class CellHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		const body = this.markup.body;
		for (let item of items) {
			if (body && body.rows && body.rows.length > item.parentElement.rowIndex) {
				const row = body.rows[item.parentElement.rowIndex];
				if (row && row.cells && row.cells.length > item.cellIndex) {
					this.state(item, true);
				}
			}
		}
	}

	clearCore(items) {
		const body = this.markup.body;
		for (let item of items) {
			if (body && body.rows && body.rows.length > item.parentElement.rowIndex) {
				const row = body.rows[item.parentElement.rowIndex];
				if (row && row.cells && row.cells.length > item.cellIndex) {
					this.state(item, false);
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