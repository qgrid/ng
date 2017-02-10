import View from './view';
import Command from 'core/infrastructure/command';

export default class NavigationView extends View {
	constructor(model, document) {
		super(model);
		this.document = document;
		this.model = model;
		this.blur = new Command({
			execute: (row, column) => {
				this.rows[row].cells[column].classList.remove('q-grid-focused');
			},
			canExecute: () => {
				return this.rows.length > this.newRow && this.rows[this.newRow].cells.length > this.newColumn;
			}
		});
		this.focus = new Command({
			execute: (row, column) => {
				this.rows[row].cells[column].classList.add('q-grid-focused');
			},
			canExecute: () => {
				return this.rows.length > this.newRow && this.rows[this.newRow].cells.length > this.newColumn;
			}
		});
		this.onInit(this.model);

	}

	onInit(model) {
		model.navigationChanged.on(e => {
			this.newRow = e.state.row;
			this.newColumn = e.state.column;
			this.oldRow = e.changes.hasOwnProperty('row') ? e.changes.row.oldValue : this.newRow;
			this.oldColumn = e.changes.hasOwnProperty('column') ? e.changes.column.oldValue : this.newColumn;

			if (this.blur.canExecute()) {
				this.blur.execute(this.oldRow, this.oldColumn);
			}
			if (this.focus.canExecute()) {
				this.focus.execute(this.newRow, this.newColumn);
			}
		});
	}

	get rows() {
		return this.document.querySelector('tbody').rows;
	}

}