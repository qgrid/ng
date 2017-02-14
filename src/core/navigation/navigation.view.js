import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import Shortcut from 'core/infrastructure/shortcut';
import Navigation from 'core/navigation/navigation';
import {GRID_PREFIX} from 'core/definition';


export default class NavigationView extends View {
	constructor(model, markup, apply) {
		super(model);
		this.markup = markup;
		this.document = this.markup.document;
		this.newRow = 0;
		this.newColumn = 0;
		this.oldRow = 0;
		this.oldColumn = 0;
		const shortcut = new Shortcut(this.document, apply);
		const navigation = new Navigation(model);
		shortcut.register('navigation', navigation.commands);


		this.blur = new Command({
			execute: (row, column) => {
				this.rows[row].cells[column].classList.remove(`${GRID_PREFIX}-focus`);
			},
			canExecute: () => {
				return this.rows.length > this.newRow
					&& this.rows[this.newRow].cells.length > this.newColumn;
			}
		});
		this.focus = new Command({
			execute: (row, column) => {
				this.rows[row].cells[column].classList.add(`${GRID_PREFIX}-focus`);
			},
			canExecute: () => {
				return this.rows.length > this.newRow
					&& this.rows[this.newRow].cells.length > this.newColumn;
			}
		});

		model.navigationChanged.watch(e => {
			this.newRow = e.state.row == -1 ? 0 : e.state.row;
			this.newColumn = e.state.column == -1 ? 0 : e.state.column;
			this.oldRow = e.changes.hasOwnProperty('row') ? e.changes.row.oldValue : this.newRow;
			this.oldColumn = e.changes.hasOwnProperty('column') ? e.changes.column.oldValue : this.newColumn;

			if (this.blur.canExecute() && this.oldRow !== -1 && this.oldColumn !== -1) {
				this.blur.execute(this.oldRow, this.oldColumn);
			}

			if (this.oldRow === -1 || this.oldColumn === -1) {
				model.navigation({
					column: 0,
					row: 0
				});
			}
			if (this.focus.canExecute()) {
				this.focus.execute(this.newRow, this.newColumn);
			}
		});

		model.viewChanged.watch(() => {
			model.navigation({
				column: -1,
				row: -1
			});
		});
	}

	get rows() {
		return this.markup.body.rows;
	}

}