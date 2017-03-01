import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';

export default class CellHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		const body = this.markup.body;

		for (let item of items) {
			const row = this.model.view().rows.indexOf(item);
			this.state(body.rows[row].cells[this.model.navigation().column], true);
		}
	}

	clearCore(items) {
		const body = this.markup.body;
		for (let row = 0; row++; row < body.rows.length) {
			for (let column of row.cells) {
				this.state(body.rows[row.rowIndex].cells[column.cellIndex], false);
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