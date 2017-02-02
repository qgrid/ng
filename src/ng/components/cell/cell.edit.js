import Command from 'core/infrastructure/Command';
import Log from 'core/infrastructure/log';
import {set as setValue} from 'ng/services/value';

export default class CellEdit {
	constructor(model) {
		let mode = 'view';
		this._value = null;

		this.enter = new Command({
			canExecute: cell => {
				if (mode !== 'edit' && model.edit().mode === 'cell') {
					// use shouldn't explicitly set it in the template, cause we have here canEdit !== false
					return cell.column.canEdit !== false;
				}

				return false;
			},
			execute: cell => {
				Log.info('cell.edit', 'edit mode');

				mode = 'edit';
				this.value = cell.value;
				cell.mode(mode);
			}
		});

		this.commit = new Command({
			// TODO: add validation support
			execute: cell => {
				Log.info('cell.edit', 'commit');
				const column = cell.column;
				const row = cell.row;
				setValue(row, column, this.value);

				mode = 'view';
				this.value = null;
				cell.mode(mode);
			}
		});

		this.cancel = new Command({
			execute: cell => {
				Log.info('cell.edit', 'cancel');

				mode = 'view';
				this.value = null;
				cell.mode(mode);
			}
		});

		this.reset = new Command({
			execute: cell => {
				Log.info('cell.edit', 'reset');

				this.value = cell.value;
				cell.mode(mode);
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
