import Command from 'core/infrastructure/Command';
import Log from 'core/infrastructure/log';

export default class CellEdit {
	constructor(model) {
		let mode = 'view';
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
				cell.mode(mode);
			}
		});

		this.commit = new Command({
			execute: cell => {
				Log.info('cell.edit', 'commit');

				mode = 'view';
				cell.mode(mode);
			}
		});

		this.reset = new Command({
			execute: cell => {
				Log.info('cell.edit', 'reset');

				mode = 'view';
				cell.mode(mode);
			}
		});
	}
}
