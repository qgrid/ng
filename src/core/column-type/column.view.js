import View from 'core/view/view';

export default class ColumnView extends View {
	constructor(model) {
		super(model);

		this.key = null;
		this.colspan = 0;
		this.rowspan = 0;
	}

	static assign(body) {
		const etalon = this.model();
		for (let key of Object.keys(etalon)) {
			if (!body.hasOwnProperty(key)) {
				body[key] = etalon[key];
			}
		}
		return body;
	}
}