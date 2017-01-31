import View from './view';
import {map as getColumnMap} from 'core/column/column.service';
import columnFactory from 'core/column/column.factory';
import nodeBuilder from 'core/node/node.builder';
import pivotBuilder from 'core/pivot/pivot.builder';
import {flatView as nodeFlatView} from 'core/node/node.service';
import SelectColumn from 'core/column/column.select';
import GroupColumn from 'core/column/column.group';

export default class GridView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.valueFactory = valueFactory;
		this.onInit(model);
	}

	onInit(model) {
		const view = model.view;

		model.dataChanged.watch(e => {
			const rowsChanged = e.changes.hasOwnProperty('rows');
			const columnsChanged = e.changes.hasOwnProperty('columns');

			if (rowsChanged || columnsChanged) {
				view({
					nodes: this.buildNodes(),
					pivot: this.buildPivot()
				});

				view({
					rows: this.buildRows(e.state.rows),
					columns: this.buildColumns(e.state.columns)
				});
			}
		});

		model.groupChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				const dataState = model.data();
				view({nodes: this.buildNodes()});
				view({
					rows: this.buildRows(dataState.rows),
					columns: this.buildColumns(dataState.columns)
				});
			}
		});

		model.pivotChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				const dataState = model.data();
				view({
					pivot: this.buildPivot(),
					rows: this.buildRows(dataState.rows),
					columns: this.buildColumns(dataState.columns)
				});
			}
		});
	}

	buildColumns(columns) {
		const result = [];
		const model = this.model;
		const selectionState = model.selection();
		if (selectionState.mode === 'check') {
			result.push(columnFactory('select', SelectColumn.model()));
		}

		const groupBy = model.group().by;
		if (groupBy.length) {
			result.push(columnFactory('group', GroupColumn.model()));
		}

		result.push(...columns.map(c => columnFactory(c.type || 'text', c)));
		return result;
	}

	buildRows(rows) {
		const model = this.model;
		const groupBy = model.group().by;
		if (groupBy.length) {
			const nodes = model.view().nodes;
			return nodeFlatView(nodes);
		}

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