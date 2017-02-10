import View from './view';
import Command from '../infrastructure/command';

export default class NavigationView extends View {
	constructor(model, document) {
		super(model);
		this.document = document;
		this.blur = new Command({
			execute: (row, column, element) => element.rows[row].cells[column].classList.remove('q-grid-focused')
		});
		this.focus = new Command({
			execute: (row, column, element) => element.rows[row].cells[column].classList.add('q-grid-focused')
		});

		model.navigationChanged.on(e => {
			let element = this.document.querySelector('tbody');
			const newRow = e.state.row;
			const newColumn = e.state.column;

			const oldRow = e.changes.hasOwnProperty('row') ? e.changes.row.oldValue : newRow;
			const oldColumn = e.changes.hasOwnProperty('column') ? e.changes.column.oldValue : newColumn;

			const rows = element.rows;
			if (rows.length > newRow && rows[newRow].cells.length > newColumn) {
				if (this.blur.canExecute()) {
					this.blur.execute(oldRow, oldColumn, element);
				}
				if (this.focus.canExecute()) {
					this.focus.execute(newRow, newColumn, element);
				}
			}
		});

	}

}