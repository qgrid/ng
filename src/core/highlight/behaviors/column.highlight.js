import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';

export default class ColumnHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		const body = this.markup.body;
		for (let item of items) {
			const index = this.model.view().columns[0].indexOf(item);
			if (index > -1 && body && body.rows) {
				for (let row of body.rows) {
					this.state(row.cells[index], true);
				}
			}
		}
	}

	clearCore(items) {
		for (let item of items) {
			const index = this.model.view().columns[0].indexOf(item);
			const body = this.markup.body;
			if (index > -1 && body && body.rows) {
				for (let row of body.rows) {
					this.state(row.cells[index], false);
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