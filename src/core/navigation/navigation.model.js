import {Command} from '../command';

export class NavigationModel {
	constructor() {
		this.cell = null;
		this.shortcut = {
			up: 'up',
			down: 'down',
			left: 'left',
			right: 'right',
			next: 'tab|space',
			previous: 'shift+tab',
			home: 'home',
			end: 'end',
			pageUp: 'pageUp',
			pageDown: 'pageDown',
		};

		this.go = new Command({
			canExecute: e => {
				switch (e.type) {
					case 'next': {
						if (e.keyCode.code === 'space') {
							return !e.model.edit().mode;
						}

						return true;
					}
					default: {
						return true;
					}
				}
			}
		});
	}

	get rowIndex() {
		return this.cell ? this.cell.rowIndex : -1;
	}

	get columnIndex() {
		return this.cell ? this.cell.columnIndex : -1;
	}

	get row() {
		return this.cell ? this.cell.row : null;
	}

	get column() {
		return this.cell ? this.cell.column : null;
	}
}