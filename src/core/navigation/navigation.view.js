import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import Shortcut from 'core/infrastructure/shortcut';
import Navigation from 'core/navigation/navigation';
import {GRID_PREFIX} from 'core/definition';


export default class NavigationView extends View {
	constructor(model, markup, apply) {
		super(model);
		this.markup = markup;
		this.model = model;
		this.document = this.markup.document;
		const shortcut = new Shortcut(this.document, apply);
		const navigation = new Navigation(model);

		shortcut.register('navigation', navigation.commands);

		this.blur = new Command({
			execute: (row, column) => {
				this.rows[row].cells[column].classList.remove(`${GRID_PREFIX}-focus`);
			},
			canExecute: (row, column) => {
				return this.rows.length > row
					&& this.rows[row].cells.length > column;
			}
		});

		this.focus = new Command({
			execute: (row, column) => {
				const cell = this.rows[row].cells[column];
				cell.classList.add(`${GRID_PREFIX}-focus`);
			},
			canExecute: (row, column) => {
				return this.rows.length > row
					&& this.rows[row].cells.length > column;
			}
		});

		this.scrollTo = new Command({
			canExecute: (row, column) => {
				return this.rows.length > row
					&& this.rows[row].cells.length > column;
			},
			execute: (row, column) => {
				const cell = this.rows[row].cells[column];
				this.scroll(markup.body, cell);
			}
		});

		model.navigationChanged.watch(e => {
			const nav = model.navigation();
			const newRow = nav.row == -1 ? 0 : nav.row;
			const newColumn = nav.column == -1 ? 0 : nav.column;
			const oldRow = e && e.changes.hasOwnProperty('row') ? e.changes.row.oldValue : newRow;
			const oldColumn = e && e.changes.hasOwnProperty('column') ? e.changes.column.oldValue : newColumn;

			if (this.blur.canExecute(newRow, newColumn) && oldRow > -1 && oldColumn > -1) {
				this.blur.execute(oldRow, oldColumn);
			}

			if (this.focus.canExecute(newRow, newColumn)) {
				this.focus.execute(newRow, newColumn);
				this.scrollTo.execute(newRow, newColumn);
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

	scroll(container, target) {
		const tr = target.getBoundingClientRect();
		const cr = container.getBoundingClientRect();
		const scroll = this.model.layout().scroll;

		if (cr.left > tr.left
			|| cr.left > tr.right
			|| cr.right < tr.left
			|| cr.right < tr.right) {
			container.scrollLeft = tr.left - cr.left + scroll.left;
		}

		if (cr.top > tr.top
			|| cr.top > tr.bottom
			|| cr.bottom < tr.top
			|| cr.bottom < tr.bottom) {
			container.scrollTop = tr.top - cr.top + scroll.top;
		}
	}
}