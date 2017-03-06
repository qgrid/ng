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
				const cell = rows[row].cells[column];
				if (!this.isVisibleVertical(cell, markup.body)) {
					markup.body.scrollTop = cell.getBoundingClientRect().top - markup.body.getBoundingClientRect().top + model.layout().scroll.top;
				}
				if (!this.isVisibleHorizontal(cell, markup.body)) {
					markup.body.scrollLeft = cell.getBoundingClientRect().left - markup.body.getBoundingClientRect().left + model.layout().scroll.left;
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
				this.scrollTo.execute(this.newRow, this.newColumn);
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

	isVisible(inner, outer) {
		inner = inner.getBoundingClientRect();
		outer = outer.getBoundingClientRect();
		return outer.left <= inner.left
			&& outer.left <= inner.right
			&& outer.right >= inner.left
			&& outer.right >= inner.right
			&& outer.top <= inner.top
			&& outer.top <= inner.bottom
			&& outer.bottom >= inner.top
			&& outer.bottom >= inner.bottom;
	}

	isVisibleVertical(inner, outer) {
		inner = inner.getBoundingClientRect();
		outer = outer.getBoundingClientRect();
		return outer.top <= inner.top
			&& outer.top <= inner.bottom
			&& outer.bottom >= inner.top
			&& outer.bottom >= inner.bottom;
	}

	isVisibleHorizontal(inner, outer) {
		inner = inner.getBoundingClientRect();
		outer = outer.getBoundingClientRect();
		return outer.left <= inner.left
			&& outer.left <= inner.right
			&& outer.right >= inner.left
			&& outer.right >= inner.right;
	}

}