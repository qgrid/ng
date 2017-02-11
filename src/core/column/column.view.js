import View from 'core/view/view';

export default class ColumnView extends View {
	constructor(model) {
		super(model);

		this.colspan = 0;
		this.rowspan = 0;
	}
}