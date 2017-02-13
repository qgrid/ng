import View from 'core/view/view';
import * as css from 'core/services/css';
import * as columnService from 'core/column/column.service';
import log from 'core/infrastructure/log';

export default class LayoutView extends View {
	constructor(model, markup, document) {
		super(model);
		this.model = model;
		this.markup = markup;
		this.document = document;
		this.width = columnService.widthFactory(model);

		this.onInit();
	}

	onInit() {
		const model = this.model;
		model.layoutChanged.watch(e => {
			if (e.changes.hasOwnProperty('columns')) {
				this.invalidateColumns();
			}

			if (e.changes.hasOwnProperty('scroll')) {
				this.invalidateScroll();
			}
		});
	}


	invalidateScroll() {
		log.info('layout', 'invalidate scroll');

		const markup = this.markup;
		const scroll = this.model.layout().scroll;
		markup.head.scrollLeft = scroll.left;
		markup.foot.scrollLeft = scroll.left;
	}

	invalidateColumns() {
		log.info('layout', 'invalidate columns');
		const model = this.model;
		const style = {};
		const columns = columnService
			.lineView(model.view().columns)
			.map(v => v.model);

		for (let [key, context] of Object.entries(model.layout().columns)) {
			const columnIndex = columnService.findIndex(columns, key);
			if (columnIndex >= 0) {
				const column = columns[columnIndex];
				const width = Math.max(context.width, parseInt(column.minWidth) || 20) + 'px';
				key = css.escape(key);
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

	setWidth(element, width) {
		element.style.width =
			element.style.maxWidth =
				element.style.minWidth = width + 'px';
	}

	getWidth(column) {
		const columns = this.model.layout().columns;
		if (columns.hasOwnProperty(column.key)) {
			return columns[column.key].width;
		}

		return this.width(column);
	}
}