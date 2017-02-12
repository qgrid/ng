import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import Shortcut from 'core/infrastructure/shortcut';
import Navigation from 'core/navigation/navigation';

export default class NavigationView extends View {
	constructor(model, document) {
		super(model);
		this.document = document;
		this.newRow = 0;
		this.newColumn = 0;
		this.oldRow = 0;
		this.oldColumn = 0;
		const shortcut = new Shortcut(document);
		const navigation = new Navigation(model);
		shortcut.register('navigation', navigation.commands);


		this.blur = new Command({
			execute: (row, column) => {
				this.rows[row].cells[column].classList.remove('q-grid-focus');
			},
			canExecute: () => {
				return this.rows.length > this.newRow && this.rows[this.newRow].cells.length > this.newColumn;
			}
		});
		this.focus = new Command({
			execute: (row, column) => {
				this.rows[row].cells[column].classList.add('q-grid-focus');
			},
			canExecute: () => {
				return this.rows.length > this.newRow && this.rows[this.newRow].cells.length > this.newColumn;
			}
		});

		model.navigationChanged.watch(e => {
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

		model.viewChanged.watch(() => {
			model.navigation({
				column: 0,
				row: 0
			});
			if (this.blur.canExecute()) {
				this.blur.execute(this.newRow, this.newColumn);
			}
		});
	}

	get rows() {
		return this.document.querySelector('tbody').rows || [];
	}

}