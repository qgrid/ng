import View from 'core/view/view';
import * as css from 'core/services/css';
import * as columnService from 'core/column/column.service';
import log from 'core/infrastructure/log';
import {clone} from 'core/services/utility';

export default class LayoutView extends View {
	constructor(model, markup) {
		super(model);
		this.model = model;
		this.markup = markup;
		this.onInit();
	}

	onInit() {
		const model = this.model;

		model.viewChanged.watch(e => {
			if (e.hasChanges('columns')) {
				this.invalidateColumns();
			}
		});

		model.layoutChanged.watch(e => {
			if (e.hasChanges('columns')) {
				this.invalidateColumns(this.form);
			}

			if (e.hasChanges('scroll')) {
				this.invalidateScroll();
			}
		});

		model.dataChanged.watch(e => {
			if (e.hasChanges('columns')) {
				const index = Array.from(model.columnList().index);
				const indexSet = new Set(index);
				index.push(...model.data().columns.filter(c => !indexSet.has(c.key)).map(c => c.key));
				model.columnList({index: index});
			}
		});
	}

	get form() {
		const model = this.model;
		const layout = model.layout;
		const state = clone(layout().columns);
		const headRow = this.markup.head.rows[0];
		if (headRow) {
			const columns = columnService
				.lineView(model.view().columns)
				.map(v => v.model);

			let length = columns.length;
			while (length--) {
				const column = columns[length];
				if (!state.hasOwnProperty(column.key)) {
					if (column.canResize) {
						state[column.key] = {width: headRow.cells[column.index].clientWidth};
					}
				}
			}

		}

		return state;
	}

	invalidateScroll() {
		log.info('layout', 'invalidate scroll');

		const markup = this.markup;
		const scroll = this.model.layout().scroll;
		markup.head.scrollLeft = scroll.left;
		markup.foot.scrollLeft = scroll.left;
	}

	invalidateColumns(form) {
		log.info('layout', 'invalidate columns');

		const model = this.model;
		const getWidth = columnService.widthFactory(model, form);
		const columns = columnService
			.lineView(model.view().columns)
			.map(v => v.model);

		const style = {};
		let length = columns.length;
		while (length--) {
			const column = columns[length];
			const width = getWidth(column);
			if (null !== width) {
				const key = css.escape(column.key);
				style[`td.q-grid-${key}, th.q-grid-${key}`] = {
					'width': width,
					'min-width': width,
					'max-width': width
				};
			}
		}

		const id = model.grid().id;
		css.removeStyle(id);
		css.addStyle(id, style);
	}
}