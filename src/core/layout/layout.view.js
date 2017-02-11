import View from 'core/view/view';
import * as dom from 'core/services/dom';
import {isNumber} from 'core/services/utility';
import * as columnService from 'core/column/column.service';

export default class LayoutView extends View {
	constructor(model, markup) {
		super(model);
		this.model = model;
		this.markup = markup;

		this.onInit();
	}

	onInit() {
		const model = this.model;
		const markup = this.markup;

		model.layoutChanged.on(e => {
			if (e.changes.hasOwnProperty('columns')) {
				const columns = columnService
					.lineView(model.view().columns)
					.map(v => v.model);

				for (let [key, context] of Object.entries(e.state.columns)) {
					const columnIndex = columnService.findIndex(columns, key);
					const column = columns[columnIndex];
					// TODO: make it better
					const minWidth = parseInt(column.minWidth) || 20;
					if(context.width >= minWidth) {
						const headCells = dom.cellsAt(markup.head, columnIndex);
						const bodyCells = dom.cellsAt(markup.bodyHead, columnIndex);
						const footCells = dom.cellsAt(markup.foot, columnIndex);

						headCells.forEach(c => c.style.width = context.width + 'px');
						bodyCells.forEach(c => c.style.width = context.width + 'px');
						footCells.forEach(c => c.style.width = context.width + 'px');
					}
				}
			}

			if (e.changes.hasOwnProperty('scroll')) {
				markup.headView.scrollLeft = e.state.scroll.left;
				markup.footView.scrollLeft = e.state.scroll.left;
			}
		});
	}
}