import View from '../view/view';
import Command from 'core/infrastructure/command';
import behaviorFactory from './selection.factory';
import {isUndefined} from 'core/services/utility';
import Log from 'core/infrastructure/log';
import Shortcut from 'core/infrastructure/shortcut';
import * as columnService from 'core/column/column.service';

export default class SelectionView extends View {
	constructor(model, markup, apply) {
		super(model);

		this.behavior = behaviorFactory(model, markup);
		this.markup = markup;
		const shortcut = new Shortcut(markup.document, apply);
		const commands = this.commands;
		shortcut.register('selectionNavigation', commands);
		this.toggleRow = commands.get('toggleRow');

		model.viewChanged.watch(() => {
			this.behavior = behaviorFactory(model, markup);
		});
		model.selectionChanged.watch(e => {
			if (e.changes.hasOwnProperty('unit') || e.changes.hasOwnProperty('mode')) {
				this.behavior = behaviorFactory(model, markup);
				model.navigation({
					column: -1,
					row: -1
				});
			}
		});
	}

	get commands() {
		const model = this.model;
		const commands = {
			toggleRow: new Command({
				execute: (item, state, e = {}) => {
					if (isUndefined(item)) {
						item = model.view().rows;
					}

					e.oldItems = this.model.selection().items;
					e.oldUnit = this.model.selection().unit;
					e.newUnit = e.oldUnit;
					e.newItems = [item];

					if (isUndefined(state)) {
						state = this.behavior.state(item);
						this.behavior.select(item, state === null || !state, e);
					}
					else {
						this.behavior.select(item, state, e);
					}
					model.selection({items: this.behavior.view});
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
				canExecute: () => {
					const selection = this.model.selection();
					return selection.unit === 'row';
				}
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
				canExecute: () => {
					const selection = this.model.selection();
					return selection.unit === 'row';
				}
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
				canExecute: () => {
					const selection = this.model.selection();
					return selection.unit === 'row';
				}
			}),
			toggleActiveColumn: new Command({
				shortcut: 'ctrl+space',
				execute: () => {
					const columnIndex = model.navigation().column;
					this.highlightColumn(columnIndex);
				},
				canExecute: () => {
					const selection = this.model.selection();
					return selection.unit === 'column';
				}
			}),
			toggleNextColumn: new Command({
				shortcut: 'shift+right',
				execute: () => {
					const columnIndex = model.navigation().column;
					this.highlightColumn(columnIndex + 1);
					model.navigation({column: columnIndex + 1});
				},
				canExecute: () => {
					const selection = this.model.selection();
					return selection.unit === 'column'
						&& model.navigation().column < columnService.lineView(model.view().columns).length - 1;
				}
			}),
			togglePrevColumn: new Command({
				shortcut: 'shift+left',
				execute: () => {
					const columnIndex = model.navigation().column;
					this.highlightColumn(columnIndex - 1);
					model.navigation({column: columnIndex - 1});
				},
				canExecute: () => {
					const selection = this.model.selection();
					return selection.unit === 'column'
						&& model.navigation().column > 0;
				}
			}),
			selectAll: new Command({
				shortcut: 'ctrl+a',
				execute: () => {
					this.toggleRow.execute();
				},
				canExecute: () => {
					return this.model.selection().mode === 'multiple';
				}
			}),

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
}