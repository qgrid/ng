import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';

export default class RowHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		for (let item of items) {
			const index = this.model.view().rows.indexOf(item);
			const body = this.markup.body;
			if (index > -1 && body && body.rows[index]) {
				for (let cell of body.rows[index].cells) {
					this.state(cell, true);
				}
			}
		}
	}

	clearCore(items) {
		for (let item of items) {
			const index = this.model.view().rows.indexOf(item);
			const body = this.markup.body;
			if (index > -1 && body && body.rows[index]) {
				for (let cell of body.rows[index].cells) {
					this.state(cell, false);
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