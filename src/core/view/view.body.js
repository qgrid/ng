import View from './view';

export default class BodyView extends View {
	constructor(model) {
		super(model);

		this.rows = [];
		this.columns = [];
		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		this.rows = model.view().rows;

		const groupBy = new Set(model.group().by);
		const pivotBy = new Set(model.pivot().by);
		const columns = model.view().columns;
		this.columns = columns.filter(c => !groupBy.has(c.model.key) && !pivotBy.has(c.model.key));
	}
}