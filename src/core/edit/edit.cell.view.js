import Command from 'core/infrastructure/command';
import Log from 'core/infrastructure/log';
import {parseFactory} from 'core/services/convert';
import {clone, isUndefined} from 'core/services/utility';
import Shortcut from 'core/infrastructure/shortcut';

export default class EditCellView {
	constructor(model, setValue, table, apply) {
		this.model = model;
		this.setValue = setValue;
		const markup = table.markup;
		this.markup = markup;

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

					if (this.mode !== 'edit' && model.edit().mode === 'cell' && cell) {
						// use shouldn't explicitly set it in the template, cause we have here canEdit !== false
						return cell.column.canEdit !== false;
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
					this.value = isUndefined(cell.value) ? null : parse(clone(cell.value));
					this.mode = 'edit';
					model.edit({editMode: 'edit'});
					cell.mode(this.mode);
				}
			}),
			commit: new Command({
				shortcut: 'Ctrl+S|Enter',
				// TODO: add validation support
				canExecute: () => this.mode === 'edit' && model.edit().mode === 'cell',
				execute: (cell, e) => {
					Log.info('cell.edit', 'commit');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().active.cell;
					if (cell) {
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
				execute: (cell, e) => {
					Log.info('cell.edit', 'cancel');
					if (e) {
						e.stopImmediatePropagation();
					}
					cell = cell || model.navigation().active.cell;
					if (cell) {
						this.value = null;
						this.mode = 'view';
						model.edit({editMode: 'view'});
						cell.mode(this.mode);
						table.focus();
					}

				}
			}),
			reset: new Command({
				execute: (cell, e) => {
					Log.info('cell.edit', 'reset');
					if (e) {
						e.stopImmediatePropagation();
					}

					cell = cell || model.navigation().active.cell;
					if (cell) {
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

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}

	destroy() {
		this.shortcutOff();
	}
}
