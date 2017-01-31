import View from './view';
import {map as getColumnMap} from 'core/column/column.service';
import nodeBuilder from 'core/node/node.builder';
import pivotBuilder from 'core/pivot/pivot.builder';

export default class GridView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.valueFactory = valueFactory;

		this.initData(model);
		this.initGroup(model);
		this.initPivot(model);
	}

	initData(model) {
		const dataState = model.data();
		const view = model.view;
		view({
			rows: Array.from(dataState.rows),
			columns: Array.from(dataState.columns)
		});

		model.dataChanged.on(e => {
			const newState = {};
			if (e.changes.hasOwnProperty('rows')) {
				newState.rows = Array.from(e.state.rows);
			}

			if (e.changes.hasOwnProperty('columns')) {
				newState.columns = Array.from(e.state.columns);
			}

			view(newState);
		});
	}

	initGroup(model) {
		const view = model.view;
		const build = () => {
			const state = view();
			return nodeBuilder(
				getColumnMap(state.columns),
				model.group().by,
				this.valueFactory
			)(state.rows);
		};

		view({nodes: build()});

		model.groupChanged.on(e => {
			if (e.changes.hasOwnProperty('by')) {
				view({nodes: build()});
			}
		});

		model.viewChanged.on(e => {
			if (e.changes.hasOwnProperty('columns') ||
				e.changes.hasOwnProperty('rows')) {
				view({nodes: build()});
			}
		});
	}

	initPivot(model) {
		const view = model.view;
		const build = () => {
			const state = view();
			return pivotBuilder(
				getColumnMap(state.columns),
				model.pivot().by,
				this.valueFactory
			)(state.rows);
		};

		view({pivot: build()});

		model.pivotChanged.on(e => {
			if (e.changes.hasOwnProperty('by')) {
				view({pivot: build()});
			}
		});

		model.viewChanged.on(e => {
			if (e.changes.hasOwnProperty('columns') ||
				e.changes.hasOwnProperty('rows')) {
				view({pivot: build()});
			}
		});
	}

	get selection() {
		return this.model.selection();
	}
}