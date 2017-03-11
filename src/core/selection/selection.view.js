import View from '../view/view';
import Command from 'core/infrastructure/command';
import behaviorFactory from './selection-behavior/selection.behavior.factory';
import Shortcut from 'core/infrastructure/shortcut';
import * as columnService from 'core/column/column.service';
import {GRID_PREFIX} from 'core/definition';

export default class SelectionView extends View {
	constructor(model, markup, apply, timeoutApply) {
		super(model);

		this.behavior = behaviorFactory(model, markup, apply);
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
			this.behavior = behaviorFactory(model, markup, apply);
			model.selection({items: this.behavior.view});
		});

		model.sortChanged.watch(() => {
			this.behavior = behaviorFactory(model, markup, apply);
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
				this.behavior = behaviorFactory(model, markup, apply);
				model.navigation({column: -1, row: -1});
				model.selection({items: this.behavior.state.view});
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
					this.behavior.select(item, state);
				}
			}),
			toggleColumn: new Command({
				execute: (item, state) => {
					this.behavior.select(item, state);
				}
			}),
			toggleCell: new Command({
				execute: (item, state) => {
					this.behavior.select(item, state);
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

					this.behavior.select(item);
				},
				canExecute: () => model.selection().unit === 'row'
			}),
			togglePrev: new Command({
				shortcut: 'shift+up',
				execute: () => {
					const itemIndex = model.navigation().row;
					
					if (itemIndex > 0) {
						const item = model.view().rows[itemIndex - 1];
						this.behavior.select(item);
						model.navigation({row: itemIndex - 1});
					}
				},
				canExecute: () => model.selection().unit === 'row'
			}),
			toggleNext: new Command({
				shortcut: 'shift+down',
				execute: () => {
					
					const itemIndex = model.navigation().row;
					if (itemIndex < model.view().rows.length - 1) {
						const item = model.view().rows[itemIndex + 1];
						this.behavior.select(item);
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
					this.behavior.select([...items, column]);
				},
				canExecute: () => model.selection().unit === 'column'
			}),
			toggleNextColumn: new Command({
				shortcut: 'shift+right',
				execute: () => {
					const columns = columnService.lineView(model.view().columns);
			
					const index = model.navigation().column + 1;
					const column = columns[index].key;

					this.behavior.select(column);

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

					this.behavior.select(column);
					
					model.navigation({column: index});
				},
				canExecute: () => model.selection().unit === 'column' && model.navigation().column > 0
			}),
			selectAll: new Command({
				shortcut: 'ctrl+a',
				execute: () => {
					this.behavior.select();
				},
				canExecute: () => model.selection().mode === 'multiple'
			}),
			reset: new Command({
				execute: () => {
					this.behavior.reset();
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

		return this.behavior.state.state(item) === true;
	}

	isIndeterminate(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.behavior.state.state(item) === null;
	}
}