import View from 'core/view/view';
import {Element as DomElement} from 'core/services/dom';

export default class StyleView extends View {
	constructor(model, table) {
		super(model);

		this.markup = table.markup;
		this.cache = {
			rows: []
		};

		model.viewChanged.watch(() => {
			this.invalidate();
		});
	}

	invalidate() {
		const cache = this.cache;
		for (let i = 0, length = cache.rows.length; i < length; i++) {
			cache.rows[i].reset();
		}

		cache.rows = [];

		const markup = this.markup;
		const model = this.model;
		const styleState = model.style();
		const dataRows = model.view().rows;
		const bodyRows = markup.body.rows;
		for (let i = 0, length = bodyRows.length; i < length; i++) {
			const bodyRow = bodyRows[i];
			const dataRow = dataRows[i];
			const domRow = new DomElement(bodyRow);
			cache.rows.push(domRow);
			styleState.row(dataRow, domRow);
		}
	}
}