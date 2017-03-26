import {GRID_PREFIX} from 'core/definition';

export default class RowDetailsBehavior {
	constructor(model) {
		this.model = model;

		this.rows = new Set();
	}

	state(cell, state) {
		if (state) {
			cell.classList.add(`${GRID_PREFIX}-selected`);
		}
		else {
			cell.classList.remove(`${GRID_PREFIX}-selected`);
		}
	}

	update(items) {
		this.clear();

		this.cells = new Set(this.cellSelector(items));
		this.cells.forEach(cell => this.state(cell, true));
	}

	clear() {
		this.cells.forEach(cell => this.state(cell, false));
	}
}