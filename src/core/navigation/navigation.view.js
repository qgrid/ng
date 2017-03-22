import View from 'core/view/view';
import Command from 'core/infrastructure/command';
import Shortcut from 'core/infrastructure/shortcut';
import Navigation from 'core/navigation/navigation';
import {GRID_PREFIX} from 'core/definition';

export default class NavigationView extends View {
	constructor(model, table, apply) {
		super(model);
		this.table = table;
		const markup = table.markup;
		this.markup = markup;
		this.model = model;
		this.document = markup.document;
		const shortcut = new Shortcut(this.document, markup.table, apply);
		const navigation = new Navigation(model, markup);
		this.shortcutOff = shortcut.register('navigation', navigation.commands);

		this.blur = new Command({
			execute: (row, column) => {
				table.body.cell(row, column)
					.removeClass(`${GRID_PREFIX}-focus`);
			},
			canExecute: (row, column) => {
				return this.rows.length > row
					&& table.body.row(row)
					&& table.body.row(row).cells.length > column;
			}
		});
		this.focus = new Command({
			execute: (row, column) => {
				table.body.cell(row, column)
					.addClass(`${GRID_PREFIX}-focus`);
			},
			canExecute: (row, column) => {
				return this.rows.length > row
					&& table.body.row(row)
					&& table.body.row(row).cells.length > column;
			}
		});
		this.scrollTo = new Command({
			execute: (row, column) => {
				const cell = table.body.cell(row, column).view;
				this.scroll(markup.body, cell);
			},
			canExecute: (row, column) => {
				return this.rows.length > row
					&& table.body.row(row)
					&& table.body.row(row).cells.length > column;
			}
		});

		model.navigationChanged.watch(e => {
			if (e.hasChanges('row') || e.hasChanges('column')) {
				const nav = model.navigation();
				const newRow = nav.row == -1 ? 0 : nav.row;
				const newColumn = nav.column == -1 ? 0 : nav.column;
				const oldRow = e.hasChanges('row') ? e.changes.row.oldValue : newRow;
				const oldColumn = e.hasChanges('column') ? e.changes.column.oldValue : newColumn;

				if (this.blur.canExecute(newRow, newColumn) && oldRow > -1 && oldColumn > -1) {
					this.blur.execute(oldRow, oldColumn);
				}
				if (this.focus.canExecute(newRow, newColumn)) {
					this.focus.execute(newRow, newColumn);
					if (!(e && e.tag.source === 'navigation')) {
						this.scrollTo.execute(newRow, newColumn);
					}
				}

				const cell = table.body.cell(nav.row, nav.column).model;
				model.navigation({
					active: {
						cell: cell
					}
				});
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
			if (cr.left < tr.left
				|| cr.right < tr.right) {
				container.scrollLeft = tr.right - cr.right + scroll.left;
			} else if (cr.left > tr.left
				|| cr.left > tr.right) {
				container.scrollLeft = tr.left - cr.left + scroll.left;
			}
		}
		if (cr.top > tr.top
			|| cr.top > tr.bottom
			|| cr.bottom < tr.top
			|| cr.bottom < tr.bottom) {
			if (cr.top < tr.top
				|| cr.bottom < tr.bottom) {
				container.scrollTop = tr.bottom - cr.bottom + scroll.top;
			} else if (cr.top > tr.top
				|| cr.top > tr.bottom) {
				container.scrollTop = tr.top - cr.top + scroll.top;
			}

		}
	}

	destroy() {
		this.shortcutOff();
	}
}