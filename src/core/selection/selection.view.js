import View from '../view/view';
import Command from 'core/infrastructure/command';
import behaviorFactory from './selection.factory';
import {isUndefined} from 'core/services/utility';
import {GRID_PREFIX} from 'core/definition';
import Log from 'core/infrastructure/log';
import Shortcut from 'core/infrastructure/shortcut';

export default class SelectionView extends View {
	constructor(model, markup, apply) {
		super(model);

		this.markup = markup;
		this.behavior = behaviorFactory(model);
		const shortcut = new Shortcut(markup.document, apply);
		const commands = this.commands;
		shortcut.register('selectionNavigation', commands);
		this.toggle = commands.get('toggleRow');

		model.viewChanged.watch(e => {
			this.behavior = behaviorFactory(model);
			if (e.changes.hasOwnProperty('rows')) {
				e.state.rows.forEach((item) => this.blurRow(item));
			}
		});
		model.selectionChanged.watch(e => {
			if (e.tag.source !== 'toggle'
				&& e.changes.hasOwnProperty('items')) {
				this.behavior.select(e.state.items, true);
			}

			if (e.changes.hasOwnProperty('unit')) {
				if (e.changes.unit.oldValue === 'row') {
					e.state.items.forEach((item) => this.blurRow(item));
				} else if (e.changes.unit.oldValue === 'column') {
					//blur all columns
				}
			}
			if (e.changes.hasOwnProperty('unit') || e.changes.hasOwnProperty('mode')) {
				this.behavior = behaviorFactory(model);
				model.navigation({
					column: -1,
					row: -1
				});
				if (e.state.unit === 'row') {
					e.state.items.forEach((item) => {
						this.blurRow(item);
					});
				} else if (e.state.unit === 'column') {
					//blur all highlighted columns
				}
			}
			if (e.changes.hasOwnProperty('items')) {
				if (e.state.unit === 'row') {
					e.changes.items.newValue.forEach((item) => {
						if (this.state(item)) {
							this.highlightRow(item);
						}
					});
					e.changes.items.oldValue.forEach((item) => {
						if (!this.state(item)) {
							this.blurRow(item);
						}
					});
				} else if (e.state.unit === 'column') {
					//blur oldValue columns
					//highlight newValue columns
				}
			}
		});
	}

	highlightRow(item) {
		const index = this.model.view().rows.indexOf(item);
		const body = this.markup.body;
		if (body && body.rows[index]) {
			for (let cell of body.rows[index].cells) {
				this.highlight(cell);
			}
		}
	}

	blurRow(item) {
		const index = this.model.view().rows.indexOf(item);
		const body = this.markup.body;
		if (body && body.rows[index]) {
			for (let cell of body.rows[index].cells) {
				this.blur(cell);
			}
		}
	}

	highlightColumn(index) {
		const body = this.markup.body;
		if (body && body.rows) {
			for (let row of body.rows) {
				this.highlight(row.cells[index]);
			}
		}
	}

	blurColumn(index) {
		const body = this.markup.body;
		if (body && body.rows) {
			for (let row of body.rows) {
				this.blur(row.cells[index]);
			}
		}
	}

	highlight(item) {
		item.classList.add(`${GRID_PREFIX}-selected`);
	}

	blur(item) {
		item.classList.remove(`${GRID_PREFIX}-selected`);
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
					this.toggle.execute(item);
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
						this.toggle.execute(item);
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
						this.toggle.execute(item);
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
			selectAll: new Command({
				shortcut: 'ctrl+a',
				execute: () => {
					this.toggle.execute();
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