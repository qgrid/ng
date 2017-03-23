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

		const sort = function (columns) {
			const result = Array.from(columns);
			const indexedColumn = result.filter(c => c.hasOwnProperty('index') && c.index >= 0);
			indexedColumn.sort((x, y) => x.index - y.index);
			const move = c => result.splice(c.index, 0, result.splice(result.indexOf(c), 1)[0]);
			indexedColumn.forEach(move);
			return result;
		};

		model.dataChanged.watch(e => {
			if (e.hasChanges('columns')) {
				const columns = sort(model.data().columns);
				const columnMap = columnService.map(columns);
				const index =
					model.columnList()
						.index
						.filter(key => columnMap.hasOwnProperty(key));

				const indexSet = new Set(index);
				const appendIndex = columns.filter(c => !indexSet.has(c.key)).map(c => c.key);
				index.push(...appendIndex);
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

		const sheet = css.sheet(`${model.grid().id}-layout`);
		sheet.set(style);
	}
}