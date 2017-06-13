import {View} from '../view';
import {Command, Shortcut} from '../infrastructure';
import {selectionStateFactory as stateFactory} from './state';
import {SelectionRange} from './selection.range';
import {SelectionService} from './selection.service';
import {GRID_PREFIX} from '../definition';
import {isUndefined} from '../utility';

export class SelectionView extends View {
	constructor(model, table, commandManager) {
		super(model);

		this.table = table;

		this.selectionService = new SelectionService(model);
		this.selectionState = stateFactory(model, this.selectionService);
		this.selectionRange = new SelectionRange(model);

		const shortcut = new Shortcut(table, commandManager);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('selectionNavigation', commands);
		this.toggleRow = commands.get('toggleRow');
		this.toggleColumn = commands.get('toggleColumn');
		this.toggleCell = commands.get('toggleCell');

		this.reset = commands.get('reset');

		model.navigationChanged.watch(e => {
			if (e.hasChanges('cell') && e.tag.source !== 'selection.view') {
				const selectionState = model.selection();
				if (selectionState.unit === 'cell' && selectionState.mode !== 'range') {
					if (e.state.cell) {
						const commit = this.select(e.state.cell, true);
						commit();
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
					this.selectionState.clear();
					model.selection({
						items: []
					}, {
						source: 'selection.view'
					});

					this.selectionState = stateFactory(model, this.selectionService);
				}
			}

			if (e.hasChanges('items') && e.tag.source !== 'selection.view') {
				const entries = this.selectionService.lookup(e.state.items);
				// Don't use commit it came outside already
				this.select(entries, true);
			}
		});
	}

	get commands() {
		const model = this.model;
		const commands = {
			toggleRow: new Command({
				execute: item => {
					const commit = this.toggle(item);
					commit();
				}
			}),
			toggleColumn: new Command({
				execute: item => {
					const commit = this.toggle(item);
					commit();
				}
			}),
			toggleCell: new Command({
				execute: item => {
					const commit = this.toggle(item);
					commit();
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
					}

					const commit = this.toggle(row);
					commit();

					this.navigateTo(rowIndex + 1, navState.columnIndex);
				},
				shortcut: 'shift+space'
			}),
			togglePrevRow: new Command({
				canExecute: () => model.selection().unit === 'row' && model.navigation().rowIndex > 0,
				execute: () => {
					const navState = model.navigation();
					const rowIndex = navState.rowIndex - 1;
					const row = this.rows[rowIndex];
					const commit = this.toggle(row);
					commit();

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
					const commit = this.toggle(row);
					commit();

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
					const commit = this.toggle([...entries, column]);
					commit();
				},
				shortcut: 'ctrl+space'
			}),
			toggleNextColumn: new Command({
				canExecute: () => model.selection().unit === 'column' && model.navigation().columnIndex < this.columns().length - 1,
				execute: () => {
					const navState = model.navigation();
					const columnIndex = navState.columnIndex + 1;
					const column = this.columns[columnIndex].key;
					const commit = this.toggle(column);
					commit();

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
					const commit = this.toggle(column);
					commit();

					this.navigateTo(navState.rowIndex, columnIndex);
				},
				shortcut: 'shift+left'
			}),
			selectAll: new Command({
				canExecute: () => model.selection().mode === 'multiple',
				execute: () => {
					const commit = this.select(this.model.data.rows(), true);
					commit();
				},
				shortcut: 'ctrl+a'
			})
		};

		return new Map(
			Object.entries(commands)
		);
	}

	selectRange(startCell, endCell) {
		const buildRange = this.selectionRange.build();
		const range = buildRange(startCell, endCell);
		const commit = this.select(range, true);
		commit();
	}

	toggle(items) {
		const selectionState = this.selectionState;
		if (!arguments.length || isUndefined(items)) {
			items = this.model.view().rows;
		}

		selectionState.toggle(items);

		return () => {
			const items = this.selectionService.map(selectionState.entries());
			this.model.selection({
				items: items
			}, {
				source: 'selection.view'
			});
		};
	}

	select(items, state) {
		const selectionState = this.selectionState;
		selectionState.select(items, state);

		return () => {
			const items = this.selectionService.map(selectionState.entries());
			this.model.selection({
				items: items
			}, {
				source: 'selection.view'
			});
		};
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
		this.model.navigation({cell: cellModel}, {source: 'selection.view'});
	}
}