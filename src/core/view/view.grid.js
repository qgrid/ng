import View from './view';
import HeadView from './view.head';
import BodyView from './view.body';
import GroupView from './view.group';
import PivotView from './view.pivot';

export default class GridView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.valueFactory = valueFactory;
		this.onInit(model);
	}

	onInit(model) {
		model.dataChanged.watch(e => {
			if (e.changes.hasOwnProperty('rows') ||
				e.changes.hasOwnProperty('columns')) {
				this.invalidate();
			}
		});

		model.groupChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				this.invalidate({pivot: model.view().pivot});
			}
		});

		model.pivotChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				this.invalidate({nodes: model.view().nodes});
			}
		});
	}

	invalidate(context = {}) {
		const model = this.model;
		const valueFactory  = this.valueFactory;
		const nodes = context.nodes || GroupView.build(model, valueFactory)();
		const pivot = context.pivot || PivotView.build(model, valueFactory)();
		const rows = context.rows || BodyView.build(model)(nodes, pivot);
		const columns = context.columns || HeadView.build(model)(nodes, pivot);

		this.model.view({
			nodes: nodes,
			pivot: pivot,
			rows: rows,
			columns: columns
		});
	}

	get selection() {
		return this.model.selection();
	}
}