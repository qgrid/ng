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
				const cell = this.rows[row].cells[column];
				cell.classList.add(`${GRID_PREFIX}-focus`);
			},
			canExecute: () => {
				return this.rows.length > this.newRow
					&& this.rows[this.newRow].cells.length > this.newColumn;
			}
		});
		this.scrollTo = new Command({
			execute: (row, column) => {
				const rows = this.rows;
				const cell = rows[row.new].cells[column.new];
				const firstCell = rows[0].cells[0];
				const body = markup.body;
				const diff = firstCell.offsetTop - body.offsetTop;
				const scroll = model.layout().scroll;
				const bottom = (row.new > row.old)
					&& (cell.offsetTop + cell.offsetHeight - diff > body.offsetTop + body.offsetHeight + scroll.top);
				const top = (row.new < row.old)
					&& (cell.offsetTop + cell.offsetHeight < body.offsetHeight + scroll.top);
				const right = (column.new > column.old)
					&& (cell.offsetLeft + cell.offsetWidth > body.offsetLeft + body.offsetWidth + scroll.left);
				const left = (column.new < column.old)
					&& (cell.offsetLeft + cell.offsetWidth < body.offsetLeft + body.offsetWidth + scroll.left);
				if (bottom || top || right || left) {
					cell.scrollIntoView();
				}
			}
		});

		model.navigationChanged.watch(e => {
			const nav = model.navigation();
			this.newRow = nav.row == -1 ? 0 : nav.row;
			this.newColumn = nav.column == -1 ? 0 : nav.column;
			this.oldRow = e && e.changes.hasOwnProperty('row') ? e.changes.row.oldValue : this.newRow;
			this.oldColumn = e && e.changes.hasOwnProperty('column') ? e.changes.column.oldValue : this.newColumn;

			if (this.blur.canExecute() && this.oldRow > -1 && this.oldColumn > -1) {
				this.blur.execute(this.oldRow, this.oldColumn);
			}
			if (this.focus.canExecute()) {
				this.focus.execute(this.newRow, this.newColumn);
				this.scrollTo.execute({new: this.newRow, old: this.oldRow}, {new: this.newColumn, old: this.oldColumn});
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