import View from '../view/view';
import Command from 'core/infrastructure/command';
import stateFactory from './state/selection.state.factory';
import rangeBuilderFactory from './range.builder.factory';
import Shortcut from 'core/infrastructure/shortcut';
import * as columnService from 'core/column/column.service';
import {GRID_PREFIX} from 'core/definition';

export default class SelectionView extends View {
	constructor(model, table, apply) {
		super(model);

		this.selectionState = stateFactory(model);
		this.rangeBuilder = rangeBuilderFactory(model);

		const markup = table.markup;
		this.markup = markup;
		this.apply = apply;
		
		const shortcut = new Shortcut(markup.document, markup.table, apply);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('selectionNavigation', commands);
		this.toggleRow = commands.get('toggleRow');
		this.toggleColumn = commands.get('toggleColumn');
		this.toggleCell = commands.get('toggleCell');
		
		this.reset = commands.get('reset');

		// model.viewChanged.watch(() => {
			// this.selectionState = stateFactory(model);
			// model.selection({items: this.selectionState.view});
		// });

		model.sortChanged.watch(() => {
			this.selectionState = stateFactory(model);

			model.selection({items: this.selectionState.view});
		});

		model.selectionChanged.watch(e => {
			if (e.hasChanges('mode')){
				apply(() => {

					const newClassName = `${GRID_PREFIX}-select-${model.selection().mode}`;
					this.markup.view.classList.add(newClassName);
					
					if (e && e.changes.mode.oldValue != e.changes.mode.newValue) {
						const oldClassName = `${GRID_PREFIX}-select-${e.changes.mode.oldValue}`;
						this.markup.view.classList.remove(oldClassName);
					}
				});
			}

			if (e.hasChanges('unit')) {
				this.rangeBuilder = rangeBuilderFactory(model);
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				this.selectionState = stateFactory(model);

				model.navigation({column: -1, row: -1});
				model.selection({items: this.selectionState.view});
			}

			if (e.tag.source !== 'toggle' && e.hasChanges('items')) {
				this.select(model.selection().items, true);
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
				shortcut: 'shift+space',
				execute: () => {
					const itemIndex = model.navigation().row;

					let item;
					if (itemIndex >= 0) {
						item = model.view().rows[itemIndex];
					} else {
						item = model.view().rows[itemIndex + 1];
						model.navigation({row: itemIndex + 1});
					}

					this.select(item);
				},
				canExecute: () => model.selection().unit === 'row'
			}),
			togglePrevRow: new Command({
				shortcut: 'shift+up',
				execute: () => {
					const itemIndex = model.navigation().row;
					
					if (itemIndex > 0) {
						const item = model.view().rows[itemIndex - 1];
						this.select(item);
						model.navigation({row: itemIndex - 1});
					}
				},
				canExecute: () => model.selection().unit === 'row'
			}),
			toggleNextRow: new Command({
				shortcut: 'shift+down',
				execute: () => {
					
					const itemIndex = model.navigation().row;
					if (itemIndex < model.view().rows.length - 1) {
						const item = model.view().rows[itemIndex + 1];
						this.select(item);
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

					const column = columns[index].key;
					this.select([...items, column]);
				},
				canExecute: () => model.selection().unit === 'column'
			}),
			toggleNextColumn: new Command({
				shortcut: 'shift+right',
				execute: () => {
					const columns = columnService.lineView(model.view().columns);
					const index = model.navigation().column + 1;
					const column = columns[index].key;

					this.select(column);

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

					this.select(column);
					
					model.navigation({column: index});
				},
				canExecute: () => model.selection().unit === 'column' && model.navigation().column > 0
			}),
			selectAll: new Command({
				shortcut: 'ctrl+a',
				execute: () => {
					this.select();
				},
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

	selectRange(startCell,  endCell) {
		const range = this.rangeBuilder(startCell, endCell);
		this.select(range);
	}

	select(items) {
		if (this.selection.mode === 'range') {
			this.selectionState.clear();
			this.selectionState.toggle(items, true);
		} else {
			this.selectionState.toggle(items);
		}

		this.model.selection({ items: this.selectionState.view }, {source: 'toggle'});
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

	get columns() {
		return columnService.lineView(this.model.view().columns);
	}

	get rows() {
		return this.model.view().rows;
	}
}