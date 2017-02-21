import Behavior from './highlight.behavior';

export default class ColumnHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		for (let item of items) {
			const index = this.model.view().columns[0].indexOf(item);
			const body = this.markup.body;
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
		return this.stateCore(item, state);
	}
}