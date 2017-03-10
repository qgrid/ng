import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';
import * as columnService from 'core/column/column.service';

export default class ColumnHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		const body = this.markup.body;
		const columns = columnService.lineView(this.model.view().columns);

		for (let item of items) {
			const index = columns.findIndex((c) => c.model.key === item);
			if (index > -1 && body && body.rows) {
				for (let row of body.rows) {
					this.state(row.cells[index], true);
				}
			}
		}
	}

	clearCore(items) {
		const body = this.markup.body;
		const columns = columnService.lineView(this.model.view().columns);

		for (let item of items) {
			const index = columns.findIndex((c) => c.model.key === item);
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