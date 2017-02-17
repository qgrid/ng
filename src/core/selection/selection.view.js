import View from '../view/view';
import Command from 'core/infrastructure/command';
import behaviorFactory from './selection.factory';
import HighlightSelection from './behaviors/highlight.selection';
import {isUndefined} from 'core/services/utility';
import Log from 'core/infrastructure/log';
import Shortcut from 'core/infrastructure/shortcut';
import * as columnService from 'core/column/column.service';

export default class SelectionView extends View {
	constructor(model, markup, apply) {
		super(model);

		this.behavior = behaviorFactory(model, markup);
		this.markup = markup;
		this.highlight = new HighlightSelection(model, markup);
		const shortcut = new Shortcut(markup.document, apply);
		const commands = this.commands;
		shortcut.register('selectionNavigation', commands);
		this.toggleRow = commands.get('toggleRow');

		model.viewChanged.watch(() => {
			this.behavior = behaviorFactory(model, markup);
			model.selection({items: this.behavior.view});
		});
		model.selectionChanged.watch(e => {
			const behavior = {
				oldUnit: e.changes.hasOwnProperty('unit') ? e.changes.unit.oldValue : e.state.unit,
				newUnit: e.changes.hasOwnProperty('unit') ? e.changes.unit.newValue : e.state.unit,
				oldItems: e.changes.hasOwnProperty('items') ? e.changes.items.oldValue : e.state.items,
				newItems: e.changes.hasOwnProperty('items') ? e.changes.items.newValue : e.state.items
			};
			if (e.changes.hasOwnProperty('unit') || e.changes.hasOwnProperty('mode')) {
				model.navigation({
					column: -1,
					row: -1
				});
				this.behavior = behaviorFactory(model, markup);
				model.selection({items: this.behavior.view});
				behavior.newItems = model.selection().items;
				this.highlight.select(behavior);
			}
			if (e.tag.src !== 'toggle') {
				this.highlight.select(behavior);
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
					const behavior = {
						oldItems: model.selection().items,
						oldUnit: model.selection().unit,
						newUnit: model.selection().unit
					};

					if (isUndefined(state)) {
						state = this.behavior.state(item);
						this.behavior.select(item, state === null || !state);
					}
					else {
						this.behavior.select(item, state);
					}
					model.selection({items: this.behavior.view}, {src: 'toggle'});
					behavior.newItems = model.selection().items;
					Log.info('toggle.selection items count ', this.behavior.view.length);
					this.highlight.select(behavior);
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
					const columns = columnService.lineView(model.view().columns);
					const behavior = {
						oldItems : model.selection().items || columns,
						oldUnit: model.selection().unit,
						newUnit: model.selection().unit
					};
					model.selection({items: [columns[index]]}, {src: 'toggleColumn'});
					behavior.newItems = model.selection().items;
					this.highlight.select(columns[index]);
				},
				canExecute: () => model.selection().unit === 'column'
			}),
			toggleNextColumn: new Command({
				shortcut: 'shift+right',
				execute: () => {
					const columnIndex = model.navigation().column;
					this.highlight.select(columnIndex + 1);
					model.navigation({column: columnIndex + 1});
				},
				canExecute: () => model.selection().unit === 'column'
				&& model.navigation().column < columnService.lineView(model.view().columns).length - 1
			}),
			togglePrevColumn: new Command({
				shortcut: 'shift+left',
				execute: () => {
					const columnIndex = model.navigation().column;
					this.highlight.select(columnIndex - 1);
					model.navigation({column: columnIndex - 1});
				},
				canExecute: () => model.selection().unit === 'column'
				&& model.navigation().column > 0
			}),
			selectAll: new Command({
				shortcut: 'ctrl+a',
				execute: () => {
					this.toggleRow.execute();
				},
				canExecute: () => model.selection().mode === 'multiple'
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
}