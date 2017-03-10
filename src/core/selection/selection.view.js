import View from '../view/view';
import Command from 'core/infrastructure/command';
import stateFactory from './state/selection.state.factory';
import {isUndefined} from 'core/services/utility';
import Log from 'core/infrastructure/log';
import Shortcut from 'core/infrastructure/shortcut';
import * as columnService from 'core/column/column.service';
import {GRID_PREFIX} from 'core/definition';

export default class SelectionView extends View {
	constructor(model, markup, apply, timeoutApply) {
		super(model);

		this.behavior = stateFactory(model, markup);
		this.markup = markup;
		this.apply = apply;
		const shortcut = new Shortcut(markup.document, apply);
		const commands = this.commands;
		shortcut.register('selectionNavigation', commands);
		
		this.toggleRow = commands.get('toggleRow');
		this.toggleColumn = commands.get('toggleColumn');
		this.toggleCell = commands.get('toggleCell');
		
		this.reset = commands.get('reset');

		model.viewChanged.watch(() => {
			this.behavior = stateFactory(model, markup);
			model.selection({items: this.behavior.view});
		});

		model.sortChanged.watch(() => {
			this.behavior = stateFactory(model, markup);
			model.selection({items: this.behavior.view});
		});

		model.selectionChanged.watch(e => {
			if (!e || e.changes.hasOwnProperty('mode')){
				timeoutApply(() => {

					const newClassName = `${GRID_PREFIX}-select-${model.selection().mode}`;

					this.markup.body.classList.add(newClassName);
					this.markup.head.classList.add(newClassName);
					this.markup.foot.classList.add(newClassName);
					
					if (e && e.changes.mode.oldValue) {
						const oldClassName = `${GRID_PREFIX}-select-${e.changes.mode.oldValue}`;
												
						this.markup.body.classList.remove(oldClassName);
						this.markup.head.classList.remove(oldClassName);
						this.markup.foot.classList.remove(oldClassName);
					}
				});
			}

			if (!e || e.changes.hasOwnProperty('unit') || e.changes.hasOwnProperty('mode')) {
				this.behavior = stateFactory(model, markup);
				model.navigation({column: -1, row: -1});
				model.selection({items: this.behavior.view});
			}

			if (!e || e.tag.source !== 'toggle' && e.changes.hasOwnProperty('items')) {
				this.behavior.select(model.selection().items, true);
			}
		});
	}

	get commands() {
		const model = this.model;
		const commands = {
			toggleRow: new Command({
				execute: (item, state) => {
					if (isUndefined(item)) {
						item = model.view().rows;
					}

					this.behavior.toggle(item, state);

					model.selection({items: this.behavior.view}, {source: 'toggle'});
					Log.info('toggle.selection items count ', this.behavior.view.length);
				}
			}),
			toggleColumn: new Command({
				execute: (item, state) => {
					if (isUndefined(item)) {
						item = columnService.lineView(model.view().columns).map(c => c.key);
					}

					this.behavior.toggle(item, state);

					model.selection({items: this.behavior.view}, {source: 'toggle'});
					Log.info('toggle.selection items count ', this.behavior.view.length);
				}
			}),
			toggleCell: new Command({
				execute: (item, state) => {
					//TODO: select all
					// if (isUndefined(item)) {
					// 	item = columnService.lineView(model.view().columns);
					// }

					this.behavior.toggle(item, state);

					model.selection({items: this.behavior.view}, {source: 'toggle'});
					Log.info('toggle.selection items count ', this.behavior.view.length);
				}
			}),
			toggleActiveRow: new Command({
				shortcut: 'shift+space',
				execute: () => {
					let item;
					const itemIndex = model.navigation().row;
					if (itemIndex >= 0) {
						item = model.view().rows[itemIndex];
					} else {
						item = model.view().rows[itemIndex + 1];
						model.navigation({row: itemIndex + 1});
					}
					this.toggleRow.execute(item);
				},
				canExecute: () => model.selection().unit === 'row'
			}),
			togglePrev: new Command({
				shortcut: 'shift+up',
				execute: () => {
					let item;
					const itemIndex = model.navigation().row;
					if (itemIndex > 0) {
						item = model.view().rows[itemIndex - 1];
						this.toggleRow.execute(item);
						model.navigation({row: itemIndex - 1});
					}
				},
				canExecute: () => model.selection().unit === 'row'
			}),
			toggleNext: new Command({
				shortcut: 'shift+down',
				execute: () => {
					let item;
					const itemIndex = model.navigation().row;
					if (itemIndex < model.view().rows.length - 1) {
						item = model.view().rows[itemIndex + 1];
						this.toggleRow.execute(item);
						model.navigation({row: itemIndex + 1});
					}
				},
				canExecute: () => model.selection().unit === 'row'
			}),
			toggleActiveColumn: new Command({
				shortcut: 'ctrl+space',
				execute: () => {
					const index = model.navigation().column;
					const items = Array.from(model.selection().items);
					const columns = columnService.lineView(model.view().columns);
					items.push(columns[index]);
					model.selection({items: items});
				},
				canExecute: () => model.selection().unit === 'column'
			}),
			toggleNextColumn: new Command({
				shortcut: 'shift+right',
				execute: () => {
					const columns = columnService.lineView(model.view().columns);
			
					const index = model.navigation().column + 1;
					const column = columns[index].key;

					this.toggleColumn.execute(column);
					model.navigation({column: index});
				},
				canExecute: () => model.selection().unit === 'column'
				&& model.navigation().column < columnService.lineView(model.view().columns).length - 1
			}),
			togglePrevColumn: new Command({
				shortcut: 'shift+left',
				execute: () => {
					const columns = columnService.lineView(model.view().columns);
			
					const index = model.navigation().column - 1;
					const column = columns[index].key;

					this.toggleColumn.execute(column);
					model.navigation({column: index});
				},
				canExecute: () => model.selection().unit === 'column' && model.navigation().column > 0
			}),
			selectAll: new Command({
				shortcut: 'ctrl+a',
				execute: () => {
					switch (model.selection().unit) {
						case 'row':
							this.toggleRow.execute();
							break;
						case 'column':
							this.toggleColumn.execute();
							break;
						case 'cell':
							//toggle cells
							break;
					}
				},
				canExecute: () => model.selection().mode === 'multiple'
			}),
			reset: new Command({
				execute: () => {
					this.behavior.clear();
					
					model.selection({items: this.behavior.view}, {source: 'toggle'});
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}

	state(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.behavior.state(item) === true;
	}

	isIndeterminate(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.behavior.state(item) === null;
	}


	select(startCell, endCell) {
		return isUndefined(endCell) 
			? this.selectCell(startCell) 
			: this.selectRange(startCell, endCell);
	}

	selectCell(cell) {
		const selection = this.model.selection();
		const view = this.model.view();

		switch (selection.unit) {
			case 'row':
				{
					const rows = view.rows;
					const row = rows[cell.rowIndex];
					if (row && this.toggleRow.canExecute(row)) {
						this.apply(() => this.toggleRow.execute(row));
					}

					break;
				}
			case 'column':
				{
					const columns = columnService.lineView(view.columns);
					const column = columns.find(c => c.model === cell.column).model.key;

					if (column && this.toggleColumn.canExecute(column)) {
						return this.apply(() => this.toggleColumn.execute(column));
					} 

					break;
				}
			case 'cell':
				{
					const item = this.markup.body.rows[cell.rowIndex].cells[cell.columnIndex];

					if (item && this.toggleCell.canExecute(item)) {
						return this.apply(() => this.toggleCell.execute(item));
					}

					break;
				}
		}
	}

	selectRange(startCell, endCell) {
		const selection = this.model.selection();
		const view = this.model.view();

		switch (selection.unit) {
			case 'row':
				{
					const startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
					const endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
					const items = view.rows.slice(startIndex, endIndex + 1);

					if (items && this.toggleRow.canExecute(items)) {
						this.apply(() => {
							this.reset.execute();
							this.toggleRow.execute(items, true);
						});
					}

					break;
				}
			case 'column':
				{
					const startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
					const endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

					const columns = columnService.lineView(view.columns);
					const items = columns.slice(startIndex, endIndex + 1).map(x => x.model.key);

					if (items && this.toggleColumn.canExecute(items)) {
						this.apply(() => {
							this.reset.execute();
							this.toggleColumn.execute(items, true);
						});
					} 

					break;
				}
			case 'cell':
				{
					const startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
					const endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

					const startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
					const endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

					const rows = Array.from(this.markup.body.rows).slice(startRowIndex, endRowIndex + 1);

					const items = rows
						.map(row => Array.from(row.cells).slice(startColumnIndex, endColumnIndex + 1))
						.reduce((agg, row) => [...agg, ...row]);

					if (items && this.toggleCell.canExecute(items)) {
						this.apply(() => {
							this.reset.execute();
							this.toggleCell.execute(items, true);
						});
					}

					break;
				}
		}
	}
}