import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';
import * as sortService from 'core/sort/sort.service';
import HighlightBehavior from './behaviors/highlight.behavior';
import cellSelector from './cell.selector';
import {noop} from 'core/services/utility';
import {GRID_PREFIX} from 'core/definition';

export default class HighlightView extends View {
	constructor(model, table, apply) {
		super(model);

		this.markup = table.markup;
		this.apply = apply;
		this.behavior = new HighlightBehavior(model, cellSelector(model, table.markup));
		this.table = table;

		// TODO: get rid of this variable, maybe using table class?
		let waitForLayout = false;

		let sortBlurs = [];
		let hoverBlurs = [];

		this.column = new Command({
			canExecute: () => !model.drag().isActive,
			execute: (column, state) => {
				if (!waitForLayout) {
					const columns = Array.from(model.highlight().columns);
					const index = columns.indexOf(column.key);
					let hasChanges = false;
					if (state) {
						if (index < 0) {
							columns.push(column.key);
							hasChanges = true;
						}
					}
					else {
						if (index >= 0) {
							columns.splice(index, 1);
							hasChanges = true;
						}
					}

					if (hasChanges) {
						model.highlight({columns: columns});
					}
				}
			}
		});

		model.selectionChanged.watch(e => {
			this.apply(() => this.behavior.update(e.state.entries), 0);
		});

		model.columnListChanged.watch(e => {
			if (e.hasChanges('index')) {
				waitForLayout = true;
				apply(() => {
					hoverBlurs = this.invalidateHover(hoverBlurs);
					sortBlurs = this.invalidateSortBy(sortBlurs);
					waitForLayout = false;
				}, 0);
			}
		});

		model.sortChanged.watch(e => {
			if (!waitForLayout && e.hasChanges('by')) {
				sortBlurs = this.invalidateSortBy(sortBlurs);
			}
		});

		model.highlightChanged.watch(e => {
			if (!waitForLayout && e.tag.source !== 'highlight') {
				hoverBlurs = this.invalidateHover(hoverBlurs);
			}
		});
	}

	invalidateHover(dispose) {
		dispose.forEach(f => f());
		dispose = [];
		const highlightColumns = this.model.highlight().columns;
		for (let columnKey of highlightColumns) {
			dispose.push(this.highlight(columnKey, 'highlighted'));
		}

		return dispose;
	}

	invalidateSortBy(dispose) {
		dispose.forEach(f => f());
		dispose = [];


		const sortBy = this.model.sort().by;
		for (let entry of sortBy) {
			const key = sortService.key(entry);
			dispose.push(this.highlight(key, 'sorted'));
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
		const table = this.table;
		const markup = this.markup;
		const index = this.columnIndex(key);
		if (index < 0) {
			return noop;
		}

		const head = table.head;
		if (markup.head.rows.length) {
			const cells = head.column(index).cells();
			cells.forEach((cell) => cell.addClass(`${GRID_PREFIX}-${cls}`));
			if (index > 0) {
				const cells = head.column(index - 1).cells();
				cells.forEach((cell) => cell.addClass(`${GRID_PREFIX}-${cls}-prev`));
			}

			if (index < markup.head.rows.length - 1) {
				const cells = head.column(index + 1).cells();
				cells.forEach((cell) => cell.addClass(`${GRID_PREFIX}-${cls}-next`));
			}
		}
		if (markup.body.rows.length) {
			const cells = table.body.column(index).cells();
			cells.forEach((cell) => cell.addClass(`${GRID_PREFIX}-${cls}`));
		}
		if (markup.foot.rows.length) {
			const cells = table.foot.column(index).cells();
			cells.forEach((cell) => cell.addClass(`${GRID_PREFIX}-${cls}`));
		}

		return this.blur(key, cls);
	}

	blur(key, cls) {
		const table = this.table;
		const markup = this.markup;
		const index = this.columnIndex(key);
		if (index < 0) {
			return noop;
		}

		return () => {
			const head = table.head;
			if (markup.head.rows.length) {
				const cells = head.column(index).cells();
				cells.forEach((cell) => cell.removeClass(`${GRID_PREFIX}-${cls}`));
				if (index > 0) {
					const cells = head.column(index - 1).cells();
					cells.forEach((cell) => cell.removeClass(`${GRID_PREFIX}-${cls}-prev`));
				}
				if (index < markup.head.rows.length - 1) {
					const cells = head.column(index + 1).cells();
					cells.forEach((cell) => cell.removeClass(`${GRID_PREFIX}-${cls}-next`));
				}
			}

			if (markup.body.rows.length) {
				const cells = table.body.column(index).cells();
				cells.forEach((cell) => cell.removeClass(`${GRID_PREFIX}-${cls}`));
			}
			if (markup.foot.rows.length) {
				const cells = table.foot.column(index).cells();
				cells.forEach((cell) => cell.removeClass(`${GRID_PREFIX}-${cls}`));
			}
		};
	}
}