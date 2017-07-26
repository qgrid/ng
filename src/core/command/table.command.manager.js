import {CommandManager} from './command.manager';
import {RowDetails} from '../row-details';

function isParentOf(parent, element) {
	while (element) {
		if (element === parent) {
			return true;
		}

		element = element.parentNode;
	}

	return false;
}

export class TableCommandManager extends CommandManager {
	constructor(apply, table) {
		super(apply);

		this.table = table;
	}

	filter(commands) {
		if (this.isViewActive() && !this.isRowDetailsActive()) {
			return super.filter(commands);
		}

		return [];
	}

	isViewActive() {
		return this.table.view.isFocused();
	}

	isRowDetailsActive() {
		const model = this.table.model;
		const cell = model.navigation().cell;
		const inRowDetails = cell && cell.row instanceof RowDetails;
		if (inRowDetails) {
			const activeElement = document.activeElement;
			return isParentOf(cell.row, activeElement);
		}

		return false;
	}
}