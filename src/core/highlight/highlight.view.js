import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';
import * as sortService from 'core/sort/sort.service';
import behaviorFactory from './behaviors/highlight.behavior.factory';
import {noop} from 'core/services/utility';
import {GRID_PREFIX} from 'core/definition';

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
			if (!e || e.changes.hasOwnProperty('by')) {
				blurs = this.invalidate(blurs);
			}
			this.behavior = behaviorFactory(this.model, this.markup);
		});

		model.viewChanged.watch(() => {
			blurs = this.invalidate(blurs);
			this.behavior = behaviorFactory(this.model, this.markup);
		});

		model.selectionChanged.watch(e => {
			if (!e || e.hasOwnProperty('unit') || e.hasOwnProperty('mode')) {
				if (this.behavior) {
					this.behavior.destroy();
				}

				this.behavior = behaviorFactory(this.model, this.markup);
			}

			this.behavior.apply(model.selection().items);
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
		const index = columnService.findIndex(columns, key);
		if (index >= 0) {
			// TODO: add pivot col support
			const column = columns[index];
			if (column.type === 'pivot' || column.type === 'pad') {
				return -1;
			}
		}

		return index;
	}

	highlight(key, cls) {
		const index = this.columnIndex(key);
		if (index < 0) {
			return noop;
		}

		const head = this.markup.head;
		if (head && head.rows.length) {
			for (let row of head.rows) {
				row.cells[index].classList.add(`${GRID_PREFIX}-${cls}`);
				if (index > 0) {
					row.cells[index - 1].classList.add(`${GRID_PREFIX}-${cls}-prev`);
				}

				if (index < head.rows.length - 1) {
					row.cells[index + 1].classList.add(`${GRID_PREFIX}-${cls}-next`);
				}
			}
		}

		const body = this.markup.body;
		if (body) {
			for (let row of body.rows) {
				row.cells[index].classList.add(`${GRID_PREFIX}-${cls}`);
			}
		}

		const foot = this.markup.foot;
		if (foot) {
			for (let row of foot.rows) {
				row.cells[index].classList.add(`${GRID_PREFIX}-${cls}`);
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
			for (let row of head.rows) {
				row.cells[index].classList.remove(`${GRID_PREFIX}-${cls}`);
				if (index > 0) {
					row.cells[index - 1].classList.remove(`${GRID_PREFIX}-${cls}-prev`);
				}

				if (index < head.rows.length - 1) {
					row.cells[index + 1].classList.remove(`${GRID_PREFIX}-${cls}-next`);
				}
			}
		}

		const body = this.markup.body;
		if (body) {
			for (let row of body.rows) {
				row.cells[index].classList.remove(`${GRID_PREFIX}-${cls}`);
			}
		}

		const foot = this.markup.foot;
		if (foot) {
			for (let row of foot.rows) {
				row.cells[index].classList.remove(`${GRID_PREFIX}-${cls}`);
			}
		}
	}
}