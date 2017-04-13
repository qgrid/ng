import Command from 'core/infrastructure/command';
import Log from 'core/infrastructure/log';
import {parseFactory} from 'core/services/convert';
import {clone, isUndefined} from 'core/services/utility';
import Shortcut from 'core/infrastructure/shortcut';
import {set as setValue, getFactory as valueFactory} from 'core/services/value';
import {set as setLabel, getFactory as labelFactory} from 'core/services/label';
import Fetch from 'core/infrastructure/fetch';

export default class EditCellView {
	constructor(model, table, apply) {
		this.model = model;
		this.table = table;
		
		this.setValue = setValue;
		this.valueFactory = valueFactory;
		this.setLabel = setLabel;
		this.labelFactory = labelFactory;

		this.mode = 'view';
		this._value = null;
		this._label = null;

		const shortcut = new Shortcut(table, apply);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('editCellNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
		
		this.fetch = null;
	}

	get commands() {
		const model = this.model;
		const table = this.table;
		const commands = {
			enter: new Command({
				shortcut: 'F2|Enter',
				canExecute: cell => {
					cell = cell || model.navigation().active.cell;
					if (cell && this.mode !== 'edit' && model.edit().mode === 'cell') {
						return cell.column.canEdit
							&& model.edit().enter.canExecute(this.contextFactory(cell))
							&& model.edit().editMode === 'view';
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
					const label = isUndefined(cell.label) ? null : parse(clone(cell.label));
					if (cell && model.edit().enter.execute(this.contextFactory(cell, value, label)) !== false) {
						this.value = value;
						this.label = label;
						const editorFetch = cell.column.editorOptions.fetch;
						if (editorFetch) {
							this.fetch = new Fetch(editorFetch);
							this.fetch.run(cell.row);
						}

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
					return this.mode === 'edit' && model.edit().mode === 'cell'
						&& model.edit().commit.canExecute(this.contextFactory(cell))
						&& model.edit().editMode === 'edit';
				},
				execute: (cell, e) => {
					Log.info('cell.edit', 'commit');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().active.cell;
					if (cell && model.edit().commit.execute(this.contextFactory(cell, this.value, this.label)) !== false) {
						const column = cell.column;
						const row = cell.row;
						this.setValue(row, column, this.value);
						if (this.label !== null) {
							this.setLabel(row, column, this.label);
						}

						this.value = null;
						this.label = null;
						if (this.fetch) {
							this.fetch.reset();
						}
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
					return cell
						&& model.edit().cancel.canExecute(this.contextFactory(cell, this.value, this.label))
						&& model.edit().editMode === 'edit';
				},
				execute: (cell, e) => {
					Log.info('cell.edit', 'cancel');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().active.cell;
					if (cell && model.edit().cancel.execute(this.contextFactory(cell, this.value, this.label)) !== false) {
						this.value = null;
						this.label = null;
						if (this.fetch) {
							this.fetch.reset();
						}
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
					return cell
						&& model.edit().reset.canExecute(this.contextFactory(cell, this.value, this.label))
						&& model.edit().editMode === 'edit';
				},
				execute: (cell, e) => {
					Log.info('cell.edit', 'reset');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().active.cell;
					if (cell && model.edit().reset.execute(this.contextFactory(cell, this.value, this.label)) !== false) {
						const parse = parseFactory(cell.column.type);
						this.value = parse(cell.value);
						if (this.fetch) {
							this.fetch.reset();
						}
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

	contextFactory(cell, value, label) {
		return {
			column: cell.column,
			row: cell.row,
			columnIndex: cell.columnIndex,
			rowIndex: cell.rowIndex,
			oldValue: cell.value,
			newValue: arguments.length === 2 ? value : cell.value,
			oldLabel: cell.label,
			newLabel: arguments.length === 3 ? label : cell.label,
			valueFactory: this.valueFactory,
			labelFactory: this.labelFactory,
			unit: 'cell'
		};
	}

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}

	get label() {
		return this._label;
	}

	set label(label) {
		this._label = label;
	}

	get commitShortcut() {
		const model = this.model;
		const commitShortcuts = model.edit().commitShortcuts;
		const cell = model.navigation().active.cell;
		if (cell && commitShortcuts.hasOwnProperty(cell.column.type)) {
			return commitShortcuts[cell.column.type];
		}
		return commitShortcuts['$default'];
	}

	destroy() {
		this.shortcutOff();
	}
}
