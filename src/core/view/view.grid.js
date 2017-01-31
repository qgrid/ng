import View from './view';
import {map as getColumnMap} from 'core/column/column.service';
import columnFactory from 'core/column/column.factory';
import nodeBuilder from 'core/node/node.builder';
import pivotBuilder from 'core/pivot/pivot.builder';

export default class GridView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.valueFactory = valueFactory;
		this.onInit(model);
	}

	onInit(model) {
		const view = model.view;

		model.dataChanged.watch(e => {
			const viewState = {};
			if (e.changes.hasOwnProperty('rows')) {
				viewState.rows = this.buildRows(e.state.rows);
			}

			if (e.changes.hasOwnProperty('columns')) {
				viewState.columns = this.buildColumns(e.state.columns);
			}

			if (Object.keys(viewState).length) {
				viewState.nodes = this.buildNodes();
				viewState.pivot = this.buildPivot();
				view(viewState);
			}
		});

		model.groupChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				view({nodes: this.buildNodes()});
			}
		});

		model.pivotChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				view({pivot: this.buildPivot()});
			}
		});
	}

	buildColumns(columns) {
		const result = [];
		const model = this.model;
		const selectionState = model.selection();
		if (selectionState.mode === 'check') {
			result.push(columnFactory('select', ColumnSelect.model()));
		}

		result.push(...columns.map(c => columnFactory(c.type || 'text', c)));
		return result;
	}

	buildRows(rows) {
		return Array.from(rows);
	}

	buildNodes() {
		const model = this.model;
		const dataState = model.data();
		const groupState = model.group();

		const build = nodeBuilder(
			getColumnMap(dataState.columns),
			groupState.by,
			this.valueFactory
		);

		return build(dataState.rows);
	}

	buildPivot() {
		const model = this.model;
		const dataState = model.data();
		const pivotState = model.pivot();

		const build = pivotBuilder(
			getColumnMap(dataState.columns),
			pivotState.by,
			this.valueFactory
		);

		return build(dataState.rows);
	}

	get selection() {
		return this.model.selection();
	}
}