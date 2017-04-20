import Command from 'core/infrastructure/command';
import Log from 'core/infrastructure/log';
import {parseFactory} from 'core/services/convert';
import {clone, isUndefined} from 'core/services/utility';
import Shortcut from 'core/infrastructure/shortcut';
import {set as setValue, getFactory as valueFactory} from 'core/services/value';
import {set as setLabel, getFactory as labelFactory} from 'core/services/label';
import CellEditor from './edit.value';

export default class EditCellView {
	constructor(model, table, apply) {
		this.model = model;
		this.table = table;

		this.setValue = setValue;
		this.valueFactory = valueFactory;
		this.setLabel = setLabel;
		this.labelFactory = labelFactory;

		this.mode = 'view';
		this._editor = CellEditor.empty;

		const shortcut = new Shortcut(table, apply);
		const commands = this.commands;
		this.shortcutOff = shortcut.register('editCellNavigation', commands);

		this.enter = commands.get('enter');
		this.commit = commands.get('commit');
		this.cancel = commands.get('cancel');
		this.reset = commands.get('reset');
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

					if (cell) {
						if (model.navigation().active.cell !== cell) {
							model.navigation({
								active: {
									cell: cell
								}
							});
						}
					}
					else {
						cell = model.navigation().active.cell;
					}

					const parse = parseFactory(cell.column.type);
					const value = isUndefined(cell.value) ? null : parse(clone(cell.value));
					const label = isUndefined(cell.label) ? null : parse(clone(cell.label));
					if (cell && model.edit().enter.execute(this.contextFactory(cell, value, label)) !== false) {
						this._editor = new CellEditor(cell.row, cell.column);

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
						this._editor.commit();
						this._editor = CellEditor.empty;

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
						this._editor.reset();
						this._editor = CellEditor.empty;

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
						this._editor.reset();

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

	get fetch() {
		return this._editor.fetch;
	}

	get value() {
		return this._editor.value;
	}

	set value(value) {
		this._editor.value = value;
	}

	get label() {
		return this._editor.label;
	}

	set label(label) {
		this._editor.label = label;
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

	options() {
		return this._editor.options();
	}

	destroy() {
		this.shortcutOff();
	}
}
