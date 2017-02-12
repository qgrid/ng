import View from 'core/view/view';
import * as dom from 'core/services/dom';
import * as columnService from 'core/column/column.service';
import log from 'core/infrastructure/log';

export default class LayoutView extends View {
	constructor(model, markup) {
		super(model);
		this.model = model;
		this.markup = markup;
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

	invalidateScroll(){
		log.info('layout', 'invalidate scroll');

		const markup = this.markup;
		const scroll = this.model.layout().scroll;
		markup.head.scrollLeft = scroll.left;
		markup.foot.scrollLeft = scroll.left;
	}

	invalidateColumns() {
		log.info('layout', 'invalidate columns');

		const model = this.model;
		const markup = this.markup;
		const columns = columnService
			.lineView(model.view().columns)
			.map(v => v.model);

		for (let [key, context] of Object.entries(model.layout().columns)) {
			const columnIndex = columnService.findIndex(columns, key);
			const column = columns[columnIndex];
			// TODO: make it better
			const minWidth = parseInt(column.minWidth) || 20;
			if (context.width >= minWidth) {
				const headCells = dom.cellsAt(markup.head, columnIndex);
				const bodyCells = dom.cellsAt(markup.body, columnIndex);
				const footCells = dom.cellsAt(markup.foot, columnIndex);

				const width = context.width;
				headCells.forEach(c => this.setWidth(c, width));
				bodyCells.forEach(c => this.setWidth(c, width));
				footCells.forEach(c => this.setWidth(c, width));
			}
		}
	}

	setWidth(element, width) {
		element.style.width =
			element.style.maxWidth =
				element.style.minWidth = width + 'px';
	}

	getWidth(column){
		const columns = this.model.layout().columns;
		if(columns.hasOwnProperty(column.key)){
			return columns[column.key].width;
		}

		return this.width(column);
	}
}