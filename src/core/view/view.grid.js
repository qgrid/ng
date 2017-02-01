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
			if (e.changes.hasOwnProperty('rows') ||
				e.changes.hasOwnProperty('columns')) {
				invalidate();
			}
		});

		model.groupChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				invalidate({pivot: model.view().pivot});
			}
		});

		model.pivotChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				invalidate({nodes: model.view().nodes});
			}
		});
	}

	invalidate(context = {}) {
		const nodes = context.nodes || this.buildNodes();
		const pivot = context.pivot || this.buildPivot();
		const rows = context.rows || this.buildRows(nodes, pivot);
		const columns = context.columns || this.buildColumns(nodes, pivot);

		this.model.view({
			nodes: nodes,
			pivot: pivot,
			rows: rows,
			columns: columns
		});
	}

	buildColumns(nodes, pivot) {
		const model = this.model;
		const columns = [];

		if (model.selection().mode === 'check') {
			columns.push(columnFactory('select', SelectColumn.model()));
		}

		if (nodes.length) {
			columns.push(columnFactory('group', GroupColumn.model()));
		}

		const dataColumns = model.data().columns;
		columns.push(...dataColumns.map(c => columnFactory(c.type || 'text', c)));

		return columns;
	}

	buildRows(nodes, pivot) {
		if (nodes.length) {
			return nodeFlatView(nodes);
		}

		const rows = this.model.data().rows;
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