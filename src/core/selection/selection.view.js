import View from '../view/view';
import Command from 'core/infrastructure/command';
import behaviorFactory from './mode-behaviors/selection.behavior.factory';
import {isUndefined, isFunction} from 'core/services/utility';
import Log from 'core/infrastructure/log';
import Shortcut from 'core/infrastructure/shortcut';
import * as columnService from 'core/column/column.service';
import {GRID_PREFIX} from 'core/definition';

import selectItemFactory from './unit-behaviors/select.item.factory';
import selectRangeFactory from './unit-behaviors/select.range.factory';

export default class SelectionView extends View {
	constructor(model, markup, apply, timeoutApply) {
		super(model);

		this.behavior = behaviorFactory(model, markup);
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
			this.behavior = behaviorFactory(model, markup);
			model.selection({items: this.behavior.view});
		});

		model.sortChanged.watch(() => {
			this.behavior = behaviorFactory(model, markup);
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
				this.behavior = behaviorFactory(model, markup);
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

					if (isUndefined(state)) {
						state = this.behavior.state(item);
						this.behavior.select(item, state === null || !state);
					}
					else {
						this.behavior.select(item, state);
					}
					model.selection({items: this.behavior.view}, {source: 'toggle'});
					Log.info('toggle.selection items count ', this.behavior.view.length);
				}
			}),
			toggleColumn: new Command({
				execute: (item, state) => {
					if (isUndefined(item)) {
						item = columnService.lineView(model.view().columns).map(c => c.key);
					}

					if (isUndefined(state)) {
						state = this.behavior.state(item);
						this.behavior.select(item, state === null || !state);
					}
					else {
						this.behavior.select(item, state);
					}

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

					if (isUndefined(state)) {
						state = this.behavior.state(item);
						this.behavior.select(item, state === null || !state);
					}
					else {
						this.behavior.select(item, state);
					}

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
		const select = isUndefined(endCell) 
			? selectItemFactory(this, startCell) 
			: selectRangeFactory(this, startCell, endCell);

		if (select && isFunction(select)) {
			this.apply(select);
		}
	}
}