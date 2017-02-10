import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'src/definition';
import EventListener from 'core/infrastructure/event.listener';
import Command from 'core/infrastructure/command';
import CellEdit from '../cell/cell.edit';
import * as pathFinder from 'ng/services/path.find';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.element = $element[0];
		this.listener = new EventListener(this, this.element);
		this.cellEdit = null;
		Object.defineProperty($scope, '$view', {get: () => this.view});
		this.blur = new Command({
			execute: (row, column) => this.element.rows[row].cells[column].classList.remove('q-grid-focused')
		});
		this.focus = new Command({
			execute: (row, column) => this.element.rows[row].cells[column].classList.add('q-grid-focused')
		});
	}

	onInit() {
		const element = this.element;

		this.cellEdit = new CellEdit(this.view.model);
		this.listener.on('click', this.onClick);
		this.view.model.navigationChanged.on(e => {
			const newRow = e.state.row;
			const newColumn = e.state.column;

			const oldRow = e.changes.hasOwnProperty('row') ? e.changes.row.oldValue : newRow;
			const oldColumn = e.changes.hasOwnProperty('column') ? e.changes.column.oldValue : newColumn;

			const rows = element.rows;
			if (rows.length > newRow && rows[newRow].cells.length > newColumn) {
				if (this.blur.canExecute()) {
					this.blur.execute(oldRow, oldColumn)
				}
				if (this.focus.canExecute()) {
					this.focus.execute(newRow, newColumn)
				}
			}
		});
	}

	onDestroy() {
		this.listener.off();
	}

	onClick(e) {
		const cell = pathFinder.cell(e.path);
		if (cell && this.cellEdit.enter.canExecute(cell)) {
			this.cellEdit.enter.execute(cell);
		}
	}
}

BodyCore.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link,
	scope: true
};
