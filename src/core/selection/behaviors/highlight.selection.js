import {GRID_PREFIX} from 'core/definition';
// import * as columnService from 'core/column/column.service';

export default class HighlightSelection {
	constructor(model, markup) {
		this.model = model;
		this.markup = markup;
	}

	highlight_row(item) {
		const index = this.model.view().rows.indexOf(item);
		const body = this.markup.body;
		if (index > -1 && body && body.rows[index]) {
			for (let cell of body.rows[index].cells) {
				this.highlight(cell);
			}
		}
	}

	blur_row(item) {
		const index = this.model.view().rows.indexOf(item);
		const body = this.markup.body;
		if (index > -1 && body && body.rows[index]) {
			for (let cell of body.rows[index].cells) {
				this.blur(cell);
			}
		}
	}

	highlight_column(item) {
		const index = this.model.view().columns[0].indexOf(item);
		const body = this.markup.body;
		if (index > -1 && body && body.rows) {
			for (let row of body.rows) {
				this.highlight(row.cells[index]);
			}
		}
	}

	blur_column(item) {
		const index = this.model.view().columns[0].indexOf(item);
		const body = this.markup.body;
		if (index > -1 && body && body.rows) {
			for (let row of body.rows) {
				this.blur(row.cells[index]);
			}
		}
	}

	highlight(item) {
		item.classList.add(`${GRID_PREFIX}-selected`);
	}

	blur(item) {
		item.classList.remove(`${GRID_PREFIX}-selected`);
	}

	select(e) {
		if (e) {
			const blur = `blur_${e.oldUnit}`;
			const highlight = `highlight_${e.newUnit}`;
			const oldUnit = `${e.oldUnit}s`;

			if (e.newUnit === e.oldUnit) {
				if (e.oldItems) {
					e.oldItems.forEach((item) => this[blur](item));
				}
				if (e.oldItems) {
					e.newItems.forEach((item) => this[highlight](item));
				}
			} else {
				if (e.oldUnit === 'row' || e.oldUnit === 'column') {
					this.model.view()[oldUnit].forEach((item) => this[blur](item));
				}
			}
		}
	}

}