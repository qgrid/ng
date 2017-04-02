import Command from 'core/infrastructure/command';
import Log from 'core/infrastructure/log';
import {parseFactory} from 'core/services/convert';
import {clone, isUndefined} from 'core/services/utility';
import Shortcut from 'core/infrastructure/shortcut';

export default class EditCellView {
	constructor(model, setValue, valueFactory, table, apply) {
		this.model = model;
		this.setValue = setValue;
		const markup = table.markup;
		this.markup = markup;
		this.valueFactory = valueFactory;

		this.mode = 'view';
		this._value = null;

		const shortcut = new Shortcut(markup.document, markup.table, apply);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('editCellNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
	}

	get commands() {
		const model = this.model;
		const table = this.markup.table;
		const commands = {
			enter: new Command({
				shortcut: 'F2|Enter',
				canExecute: cell => {
					cell = cell || model.navigation().active.cell;
					if (cell && this.mode !== 'edit' && model.edit().mode === 'cell' && cell) {
						return cell.column.canEdit && model.edit().enter.canExecute(this.contextFactory(cell)) && model.edit().editMode === 'view';
					}

					return false;
				},
				execute: (cell, e) => {
					Log.info('cell.edit', 'edit mode');
					if (e) {
						e.stopImmediatePropagation();
					}
					cell = cell || model.navigation().active.cell;
					const parse = parseFactory(cell.column.type);
					const value = isUndefined(cell.value) ? null : parse(clone(cell.value));
					if (cell && model.edit().enter.execute(this.contextFactory(cell, value)) !== false) {
						this.value = value;
						this.mode = 'edit';
						model.edit({editMode: 'edit'});
						cell.mode(this.mode);
					}
				}
			}),
			commit: new Command({
				shortcut: this.commitShortcut,
				// TODO: add validation support
				canExecute: cell => {
					cell = cell || model.navigation().active.cell;
					return this.mode === 'edit' && model.edit().mode === 'cell' && model.edit().commit.canExecute(this.contextFactory(cell)) && model.edit().editMode === 'edit';
				},
				execute: (cell, e) => {
					Log.info('cell.edit', 'commit');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().active.cell;
					if (cell && model.edit().commit.execute(this.contextFactory(cell, this.value)) !== false) {
						const column = cell.column;
						const row = cell.row;
						this.setValue(row, column, this.value);

						this.value = null;
						this.mode = 'view';
						model.edit({editMode: 'view'});
						cell.mode(this.mode);
						table.focus();
					}
				}
			}),
			cancel: new Command({
				shortcut: 'Escape',
				canExecute: cell => {
					cell = cell || model.navigation().active.cell;
					return cell && model.edit().cancel.canExecute(this.contextFactory(cell, this.value)) && model.edit().editMode === 'edit';
				},
				execute: (cell, e) => {
					Log.info('cell.edit', 'cancel');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().active.cell;
					if (cell && model.edit().cancel.execute(this.contextFactory(cell, this.value)) !== false) {
						this.value = null;
						this.mode = 'view';
						model.edit({editMode: 'view'});
						cell.mode(this.mode);
						table.focus();
					}

				}
			}),
			reset: new Command({
				canExecute: cell => {
					cell = cell || model.navigation().active.cell;
					return cell && model.edit().reset.canExecute(this.contextFactory(cell, this.value)) && model.edit().editMode === 'edit';
				},
				execute: (cell, e) => {
					Log.info('cell.edit', 'reset');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().active.cell;
					if (cell && model.edit().reset.execute(this.contextFactory(cell, this.value)) !== false) {
						const parse = parseFactory(cell.column.type);
						this.value = parse(cell.value);
						cell.mode(this.mode);
						return false;
					}
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}

	contextFactory(cell, value) {
		return {
			column: cell.column,
			row: cell.row,
			columnIndex: cell.columnIndex,
			rowIndex: cell.rowIndex,
			oldValue: cell.value,
			newValue: arguments.length === 2 ? value : cell.value,
			valueFactory: this.valueFactory,
			unit: 'cell'
		};
	}

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}

	get commitShortcut() {
		const commitShortcuts = {
			'$default': 'tab|enter',
			'text': 'enter',
			'password': 'ctrl+s',
			'number': 'ctrl+s'
		};
		const navigationState = this.model.navigation();
		const cell = navigationState.active.cell;
		if (cell && commitShortcuts.hasOwnProperty(cell.column.type)) {
			return commitShortcuts[cell.column.type];
		}
		return commitShortcuts['$default'];
	}

	destroy() {
		this.shortcutOff();
	}
}
