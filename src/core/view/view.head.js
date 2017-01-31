import View from './view';

export default class HeadView extends View {
	constructor(getModel) {
		super(getModel);
	}


	get columns() {
		const model = this.model;
		const groupBy = new Set(model.group().by);
		const pivotBy = new Set(model.pivot().by);
		const columns = model.view().columns;
		//	return columns;
		return columns.filter(c => !groupBy.has(c.key) && !pivotBy.has(c.key));
	}
}