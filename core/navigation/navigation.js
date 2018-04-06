import { Command } from '../command';

export class Navigation {
	constructor(model, table) {
		this.model = model;
		this.table = table;
	}

	positon(y, direction) {
		const table = this.table;
		const body = table.body;
		const currentColumn = this.currentColumn();
		const lastRow = this.lastRow(currentColumn);

		let index = 0;
		let offset = 0;

		// TODO: improve performance
		while (index <= lastRow && offset <= y) {
			offset += body.row(index).height();
			index++;
		}

		if (direction === 'down' && body.row(index)) {
			offset -= body.row(index).height();
			index--;
		}

		const firstRow = this.firstRow(currentColumn);
		const row = Math.max(firstRow, Math.min(lastRow, index));
		const lower = table.view.scrollHeight() - table.view.height();
		offset = Math.min(offset, lower);
		return { row, offset };
	}

	goTo(target, source = 'navigation') {
		const row = target.newRow;
		const column = target.newColumn;
		let cell = this.cell(row, column);
		if (!cell) {
			// TODO: make it better, right it just a huck for row-details,
			// need to support rowspan and colspan
			cell = this.cell(row, this.firstColumn(row));
		}

		if (cell) {
			this.model.navigation({ cell }, { source });
			return true;
		}

		return false;
	}

	columns(rowIndex) {
		const columns = this.table.body.columns(rowIndex);
		const index = [];
		for (let i = 0, length = columns.length; i < length; i++) {
			const column = columns[i];
			if (column.model().canFocus) {
				index.push(column.index);
			}
		}
		return index;
	}

	upCell() {
		return this.findRow(column => this.prevRow(column));
	}

	downCell() {
		return this.findRow(column => this.nextRow(column));
	}

	findRow(test) {
		const currentColumn = this.currentColumn();
		if (currentColumn >= 0) {
			const currentRow = this.currentRow();
			const columns = this.columns(currentRow);
			let i = columns.indexOf(currentColumn);
			while (i >= 0) {
				const newColumn = columns[i--];
				const newRow = test(newColumn);
				if (newRow >= 0) {
					return { newRow, newColumn };
				}
			}

			const length = columns.length;
			i = columns.indexOf(currentColumn) + 1;
			while (i < length) {
				const newColumn = columns[i++];
				const newRow = test(newColumn);
				if (newRow >= 0) {
					return { newRow, newColumn };
				}
			}
		}

		return null;
	}

	column(row, column) {
		const columns = this.columns(row);
		const index = columns.indexOf(column);
		return columns.length ? columns[Math.max(index, 0)] : -1;
	}

	currentColumn() {
		const row = this.currentRow();
		const column = this.model.navigation().columnIndex;
		return this.column(row, column);
	}

	nextColumn(row) {
		const columns = this.columns(row);
		const index = columns.indexOf(this.currentColumn());
		return index >= 0 && index < columns.length - 1 ? columns[index + 1] : -1;
	}

	prevColumn(row) {
		const columns = this.columns(row);
		const index = columns.indexOf(this.currentColumn());
		return index > 0 && index < columns.length ? columns[index - 1] : -1;
	}

	lastColumn(row) {
		const columns = this.columns(row);
		const index = columns.length - 1;
		return index >= 0 ? columns[index] : -1;
	}

	firstColumn(row) {
		const columns = this.columns(row);
		return columns.length ? columns[0] : -1;
	}

	currentRow() {
		const index = this.model.navigation().rowIndex;
		if (index < 0) {
			return this.model.scene().rows.length ? 0 : -1;
		}

		return index;
	}

	nextRow(column) {
		const row = this.currentRow() + 1;
		return row <= this.lastRow(column) ? row : -1;
	}

	prevRow(column) {
		const firstRow = this.firstRow(column);
		const row = this.currentRow() - 1;
		return row >= firstRow ? row : -1;
	}

	firstRow(column) {
		const lastRow = this.lastRow(column);
		return Math.min(0, lastRow);
	}

	lastRow(column) {
		return this.table.body.rowCount(column) - 1;
	}

	cell(row, column) {
		const cell = this.table.body.cell(row, column);
		return cell.model();
	}

	context(type, settings) {
		const model = this.model;
		const oldRow = this.currentRow();
		const oldColumn = this.currentColumn();
		const keyCode = model.action().shortcut.keyCode;

		return Object.assign({
			model,
			type,
			oldRow,
			oldColumn,
			keyCode
		}, settings);
	}

	get commands() {
		const model = this.model;
		const table = this.table;
		const shortcut = model.navigation().shortcut;
		const edit = model.edit;
		const self = this;

		const canNavigate = () => {
			if (edit().state === 'view') {
				return true;
			}

			const column = table.body.column(this.currentColumn()).model();
			return column && (column.editorOptions.trigger === 'focus' || column.editorOptions.cruise === 'transparent');
		};

		const go = this.model.navigation().go;

		const commands = {
			goDown: new Command({
				source: 'navigation',
				shortcut: shortcut.down,
				canExecute: () => {
					if (canNavigate()) {
						const target = this.downCell();
						return target && go.canExecute(this.context('down', target)) && target;
					}

					return false;
				},
				execute: function () {
					return go.execute(self.context('down', this.issue)) && self.goTo(this.issue);
				}
			}),
			goUp: new Command({
				source: 'navigation',
				shortcut: shortcut.up,
				canExecute: () => {
					if (canNavigate()) {
						const target = this.upCell();
						return target && go.canExecute(this.context('up', target)) && target;
					}

					return false;
				},
				execute: function () {
					return go.execute(self.context('up', this.issue)) && self.goTo(this.issue);
				}
			}),
			goRight: new Command({
				source: 'navigation',
				shortcut: shortcut.right,
				canExecute: () => {
					if (canNavigate()) {
						const newRow = this.currentRow();
						const newColumn = this.nextColumn(newRow);

						const target = { newRow, newColumn };
						return newColumn >= 0 && go.canExecute(this.context('right', target)) && target;
					}

					return false;
				},
				execute: function () {
					return go.execute(self.context('right', this.issue)) && self.goTo(this.issue);
				}
			}),
			goLeft: new Command({
				source: 'navigation',
				shortcut: shortcut.left,
				canExecute: () => {
					if (canNavigate()) {
						const newRow = this.currentRow();
						const newColumn = this.prevColumn(newRow);

						const target = { newRow, newColumn };
						return newColumn >= 0 && go.canExecute(this.context('left', target)) && target;
					}

					return false;
				},
				execute: function () {
					return go.execute(self.context('left', this.issue)) && self.goTo(this.issue);
				}
			}),
			goNext: new Command({
				source: 'navigation',
				shortcut: shortcut.next,
				canExecute: () => {
					const currentRow = this.currentRow();
					const newColumn = this.nextColumn(currentRow);
					const newRow = this.nextRow(this.currentColumn());

					const hasNextColumn = newColumn >= 0;
					const hasNextRow = newRow >= 0;

					const target = { newRow, newColumn };
					return (hasNextColumn || hasNextRow) && go.canExecute(this.context('next', target)) && target;
				},
				execute: () => {
					const currentRow = this.currentRow();
					const nextColumn = this.nextColumn(currentRow);
					const hasNextColumn = nextColumn >= 0;

					const newRow = hasNextColumn ? currentRow : this.nextRow(this.firstColumn(currentRow));
					const newColumn = hasNextColumn ? nextColumn : this.firstColumn(newRow);

					const target = { newRow, newColumn };
					return go.execute(this.context('next', target)) && this.goTo(target);
				}
			}),
			goPrevious: new Command({
				source: 'navigation',
				shortcut: shortcut.previous,
				canExecute: () => {
					const currentRow = this.currentRow();
					const newColumn = this.prevColumn(currentRow);
					const newRow = this.prevRow(this.currentColumn());

					const hasPrevColumn = newColumn >= 0;
					const hasPrevRow = newRow >= 0;

					const target = { newRow, newColumn };
					return (hasPrevColumn || hasPrevRow) && go.canExecute(this.context('previous', target)) && target;
				},
				execute: () => {
					const currentRow = this.currentRow();
					const prevColumn = this.prevColumn(currentRow);
					const hasPrevColumn = prevColumn >= 0;

					const newRow = hasPrevColumn ? currentRow : this.prevRow(this.lastColumn(currentRow));
					const newColumn = hasPrevColumn ? prevColumn : this.lastColumn(newRow);

					const target = { newRow, newColumn };
					return go.execute(this.context('previous', target)) && this.goTo(target);
				}
			}),
			home: new Command({
				source: 'navigation',
				shortcut: shortcut.home,
				canExecute: () => {
					if (canNavigate()) {
						const newRow = this.currentRow();
						const newColumn = this.prevColumn(newRow);

						const target = { newRow, newColumn };
						return newColumn >= 0 && go.canExecute(this.context('end', target)) && target;
					}

					return false;
				},
				execute: () => {
					const newRow = this.currentRow();
					const newColumn = this.firstColumn(newRow);

					const target = { newRow, newColumn };
					return go.execute(this.context('home', target)) && this.goTo(target);
				}
			}),
			end: new Command({
				source: 'navigation',
				shortcut: shortcut.end,
				canExecute: () => {
					if (canNavigate()) {
						const newRow = this.currentRow();
						const newColumn = this.nextColumn(newRow);

						const target = { newRow, newColumn };
						return newColumn >= 0 && go.canExecute(this.context('home', target)) && target;
					}

					return false;
				},
				execute: () => {
					const newRow = this.currentRow();
					const newColumn = this.lastColumn(newRow);

					const target = { newRow, newColumn };
					return go.execute(this.context('end', target)) && this.goTo(target);
				}
			}),
			upward: new Command({
				source: 'navigation',
				shortcut: shortcut.upward,
				canExecute: () => {
					if (canNavigate()) {
						const newColumn = this.currentColumn();
						const newRow = this.prevRow(newColumn);

						const target = { newRow, newColumn };
						return newRow >= 0 && go.canExecute(this.context('upward', target)) && target;
					}

					return false;
				},
				execute: () => {
					const newColumn = this.currentColumn();
					const newRow = this.firstRow(newColumn);

					const target = { newRow, newColumn };
					return go.execute(this.context('upward', target)) && this.goTo(target);
				}
			}),
			downward: new Command({
				source: 'navigation',
				shortcut: shortcut.downward,
				canExecute: () => {
					if (canNavigate()) {
						const newColumn = this.currentColumn();
						const newRow = this.nextRow(newColumn);

						const target = { newRow, newColumn };
						return newRow >= 0 && go.canExecute(this.context('downward', target));
					}

					return false;
				},
				execute: () => {
					const newColumn = this.currentColumn();
					const newRow = this.lastRow(newColumn);

					const target = { newRow, newColumn };
					return go.execute(this.context('downward', target)) && this.goTo(target);
				}
			}),
			pageUp: new Command({
				source: 'navigation',
				shortcut: shortcut.pageUp,
				canExecute: () => {
					if (canNavigate()) {
						const newColumn = this.currentColumn();
						const newRow = this.prevRow(newColumn);

						const target = { newRow, newColumn };
						return newRow >= 0 && go.canExecute(this.context('pageUp', target)) && target;
					}

					return false;
				},
				execute: () => {
					const view = table.view;
					const position = this.positon(view.scrollTop() - view.height(), 'up');

					const newRow = position.row;
					const newColumn = this.currentColumn();

					const target = { newRow, newColumn };
					if (go.execute(this.context('pageUp', target))) {
						this.model.scroll({ top: position.offset });
						return this.goTo(target, 'navigation.scroll');
					}

					return false;
				}
			}),
			pageDown: new Command({
				source: 'navigation',
				shortcut: shortcut.pageDown,
				canExecute: () => {
					if (canNavigate()) {
						const newColumn = this.currentColumn();
						const newRow = this.nextRow(newColumn);

						const target = { newRow, newColumn };
						return newRow >= 0 && go.canExecute(this.context('pageDown', target)) && target;
					}

					return false;
				},
				execute: () => {
					const view = table.view;
					const position = this.positon(view.scrollTop() + view.height(), 'down');

					const newRow = position.row;
					const newColumn = this.currentColumn();

					const target = { newRow, newColumn };
					if (go.execute(this.context('pageDown', target))) {
						this.model.scroll({ top: position.offset });
						return this.goTo(target, 'navigation.scroll');
					}

					return false;
				}
			})
		};

		return new Map(Object.entries(commands));
	}
}