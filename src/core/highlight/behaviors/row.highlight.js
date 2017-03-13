import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';

export default class RowHighlight extends Behavior {
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
		const rows = this.model.view().rows;

		for (let item of items) {
			const index = rows.indexOf(item);
			if (index > -1 && body && body.rows[index]) {
				for (let cell of body.rows[index].cells) {
					result.push(cell);
				}
			}
		}

		return result;
	}
}