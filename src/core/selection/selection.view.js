import {View} from '../view';
import {Command, Shortcut} from '../infrastructure';
import {selectionStateFactory as stateFactory} from './state';
import {SelectionRange} from './selection.range';
import {GRID_PREFIX} from '../definition';
import {isUndefined} from '../utility';

export class SelectionView extends View {
	constructor(model, table, commandManager) {
		super(model);

		this.table = table;

		this.selectionState = stateFactory(model);
		this.selectionRagne = new SelectionRange(model);

		const shortcut = new Shortcut(table, commandManager);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('selectionNavigation', commands);
		this.toggleRow = commands.get('toggleRow');
		this.toggleColumn = commands.get('toggleColumn');
		this.toggleCell = commands.get('toggleCell');

		this.reset = commands.get('reset');

		model.navigationChanged.watch(e => {
			if (e.hasChanges('cell') && e.tag.source !== 'selection') {
				const selectionState = model.selection();
				if (selectionState.unit === 'cell') {
					if (e.state.cell) {
						this.select(e.state.cell, true);
					}
				}
			}
		});

		model.selectionChanged.watch(e => {
			if (e.hasChanges('mode')) {
				const newClassName = `${GRID_PREFIX}-select-${model.selection().mode}`;
				const view = table.view;
				view.addClass(newClassName);

				if (e.changes.mode.oldValue != e.changes.mode.newValue) {
					const oldClassName = `${GRID_PREFIX}-select-${e.changes.mode.oldValue}`;
					view.removeClass(oldClassName);
				}
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				if (!e.hasChanges('items')) {
					model.selection({
						items: []
					});
					this.selectionState = stateFactory(model);
				}
			}
		});
	}

	get commands() {
		const model = this.model;
		const commands = {
			toggleRow: new Command({
				execute: (item, state) => {
					this.select(item, state);
				}
			}),
			toggleColumn: new Command({
				execute: (item, state) => {
					this.select(item, state);
				}
			}),
			toggleCell: new Command({
				execute: (item, state) => {
					this.select(item, state);
				}
			}),
			toggleActiveRow: new Command({
				canExecute: () => model.selection().unit === 'row' && this.rows.length > 0,
				execute: () => {
					const navState = model.navigation();
					const rowIndex = navState.rowIndex;

					let row;
					if (rowIndex >= 0) {
						row = this.rows[rowIndex];
					} else {
						row = this.rows[rowIndex + 1];
						this.navigateTo(rowIndex + 1, navState.columnIndex);
					}

					this.select(row);
				},
				shortcut: 'shift+space'
			}),
			togglePrevRow: new Command({
				canExecute: () => model.selection().unit === 'row' && model.navigation().rowIndex > 0,
				execute: () => {
					const navState = model.navigation();
					const rowIndex = navState.rowIndex - 1;
					const row = this.rows[rowIndex];
					this.select(row);
					this.navigateTo(rowIndex, navState.columnIndex);
				},
				shortcut: 'shift+up'
			}),
			toggleNextRow: new Command({
				canExecute: () => model.selection().unit === 'row' && model.navigation().rowIndex < this.rows.length - 1,
				execute: () => {
					const navState = model.navigation();
					const rowIndex = navState.rowIndex + 1;
					const row = this.rows[rowIndex];
					this.select(row);
					this.navigateTo(rowIndex, navState.columnIndex);
				},
				shortcut: 'shift+down'
			}),
			toggleActiveColumn: new Command({
				canExecute: () => model.selection().unit === 'column' && model.navigation().columnIndex >= 0,
				execute: () => {
					const columnIndex = model.navigation().columnIndex;
					const entries = Array.from(model.selection().entries);
					const column = this.columns[columnIndex].key;
					this.select([...entries, column]);
				},
				shortcut: 'ctrl+space'
			}),
			toggleNextColumn: new Command({
				canExecute: () => model.selection().unit === 'column' && model.navigation().columnIndex < this.columns().length - 1,
				execute: () => {
					const navState = model.navigation();
					const columnIndex = navState.columnIndex + 1;
					const column = this.columns[columnIndex].key;
					this.select(column);
					this.navigateTo(navState.rowIndex, columnIndex);
				},
				shortcut: 'shift+right'
			}),
			togglePrevColumn: new Command({
				canExecute: () => model.selection().unit === 'column' && model.navigation().columnIndex > 0,
				execute: () => {
					const navState = model.navigation();
					const columnIndex = navState.columnIndex - 1;
					const column = this.columns[columnIndex].key;
					this.select(column);
					this.navigateTo(navState.rowIndex, columnIndex);
				},
				shortcut: 'shift+left'
			}),
			selectAll: new Command({
				shortcut: 'ctrl+a',
				execute: () => this.select(),
				canExecute: () => model.selection().mode === 'multiple'
			}),
			reset: new Command({
				execute: () => {
					this.reset();
				}
			})
		};

		return new Map(
			Object.entries(commands)
		);
	}

	selectRange(startCell, endCell) {
		const range = this.selectionRagne.build(startCell, endCell);
		this.select(range);
	}

	select(items) {
		if (arguments.length && !isUndefined(items)) {
			if (this.selection.mode === 'range') {
				this.selectionState.clear();
				this.selectionState.toggle(items, true);
			} else {
				this.selectionState.toggle(items);
			}
		}
		else {
			if (this.state() || this.model.selection().mode === 'single') {
				this.selectionState.clear();
			}
			else {
				this.selectionState.select(this.model.view().rows, true);
			}
		}

		const entries = this.selectionState.entries();
		this.model.selection({
			entries: entries,
		}, {
			source: 'selection.view'
		});
	}

	state(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.selectionState.state(item) === true;
	}

	isIndeterminate(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.selectionState.state(item) === null;
	}

	destroy() {
		this.shortcutOff();
	}

	get selection() {
		return this.model.selection();
	}

	get rows() {
		return this.table.data.rows();
	}

	get columns() {
		return this.table.data.columns();
	}

	navigateTo(rowIndex, columnIndex) {
		const cellModel = this.table.body.cell(rowIndex, columnIndex).model;
		this.model.navigation({cell: cellModel}, {source: 'selection'});
	}
}