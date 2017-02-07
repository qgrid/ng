import Command from 'core/infrastructure/command';
import Log from 'core/infrastructure/log';
import {set as setValue} from 'ng/services/value';
import {parseFactory} from 'core/services/convert';
import {clone} from 'core/services/utility';

export default class CellEdit {
	constructor(model) {
		this.mode = 'view';
		this._value = null;

		this.enter = new Command({
			canExecute: cell => {
				if (this.mode !== 'edit' && model.edit().mode === 'cell') {
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

				const parse = parseFactory(cell.column.type);
				this.value = parse(clone(cell.value));
				this.mode = 'edit';
				cell.mode(this.mode);
			}
		});

		this.commit = new Command({
			// TODO: add validation support
			execute: (cell, e) => {
				Log.info('cell.edit', 'commit');
				if (e) {
					e.stopImmediatePropagation();
				}

				const column = cell.column;
				const row = cell.row;
				setValue(row, column, this.value);

				this.value = null;
				this.mode = 'view';
				cell.mode(this.mode);
			}
		});

		this.cancel = new Command({
			execute: (cell, e) => {
				Log.info('cell.edit', 'cancel');
				if (e) {
					e.stopImmediatePropagation();
				}

				this.value = null;
				this.mode = 'view';
				cell.mode(this.mode);
			}
		});

		this.reset = new Command({
			execute: (cell, e) => {
				Log.info('cell.edit', 'reset');
				if (e) {
					e.stopImmediatePropagation();
				}

				const parse = parseFactory(cell.column.type);
				this.value = parse(cell.value);
				cell.mode(this.mode);
				return false;
			}
		});
	}

	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}
}
