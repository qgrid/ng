import View from './view';

export default class HeadView extends View {
	constructor(model) {
		super(model);

		this.rows = [];
		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		const groupBy = new Set(model.group().by);
		const pivotBy = new Set(model.pivot().by);
		const columns = model.view().columns;
		this.rows = [{columns: columns.filter(c => !groupBy.has(c.model.key) && !pivotBy.has(c.model.key))}];
	}
}