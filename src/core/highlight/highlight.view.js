import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';
import * as sortService from 'core/sort/sort.service';
import {noop} from 'core/services/utility';

export default class HighlightView extends View {
	constructor(model, markup) {
		super(model);
		this.model = model;
		this.markup = markup;

		let blur = noop;
		this.column = new Command({
			execute: (state, column) => {
				if (state) {
					blur = this.highlight(column.key, 'highlight');
				}
				else {
					blur();
					blur = noop;
				}
			}
		});

		this.onInit(this.model);
	}

	onInit(model) {
		let blurs = [];
		model.sortChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				blurs = this.invalidate(blurs);
			}
		});

		model.viewChanged.watch(() => {
			blurs = this.invalidate(blurs);
		});
	}

	invalidate(dispose) {
		dispose.forEach(f => f());

		dispose = [];
		const sortBy = this.model.sort().by;
		for (let entry of sortBy) {
			const key = sortService.key(entry);
			dispose.push(this.highlight(key, 'order'));
		}

		return dispose;
	}


	columnIndex(key) {
		const columnRows = this.model.view().columns;
		const columns = columnService.lineView(columnRows).map(v => v.model);
		return columnService.findIndex(columns, key);
	}

	highlight(key, cls) {
		const index = this.columnIndex(key);
		if (index < 0) {
			return noop;
		}

		const head = this.markup.head;
		if (head && head.rows.length) {
			const row = head.rows[head.rows.length - 1];
			row.cells[index].classList.add(`q-grid-${cls}`);
			if (index > 0) {
				row.cells[index - 1].classList.add(`q-grid-${cls}-prev`);
			}

			if (index < head.rows.length - 1) {
				row.cells[index + 1].classList.add(`q-grid-${cls}-next`);
			}
		}

		const body = this.markup.body;
		if (body) {
			for (let row of body.rows) {
				row.cells[index].classList.add(`q-grid-${cls}`);
			}
		}

		const foot = this.markup.foot;
		if (foot) {
			for (let row of foot.rows) {
				row.cells[index].classList.add(`q-grid-${cls}`);
			}
		}

		return () => this.blur(key, cls);
	}

	blur(key, cls) {
		const index = this.columnIndex(key);
		if (index < 0) {
			return noop;
		}

		const head = this.markup.head;
		if (head && head.rows.length) {
			const row = head.rows[head.rows.length - 1];
			row.cells[index].classList.remove(`q-grid-${cls}`);
			if (index > 0) {
				row.cells[index - 1].classList.remove(`q-grid-${cls}-prev`);
			}

			if (index < head.rows.length - 1) {
				row.cells[index + 1].classList.remove(`q-grid-${cls}-next`);
			}
		}

		const body = this.markup.body;
		if (body) {
			for (let row of body.rows) {
				row.cells[index].classList.remove(`q-grid-${cls}`);
			}
		}

		const foot = this.markup.foot;
		if (foot) {
			for (let row of foot.rows) {
				row.cells[index].classList.remove(`q-grid-${cls}`);
			}
		}
	}
}