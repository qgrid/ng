import Directive from '../directive';
import {map as getColumnMap} from '../../../core/column/column.service';
import {getFactory as valueFactory} from '../../services/value';
import Node from '../../../core/node/node';
import Error from '../../../core/infrastructure/error';
import {GRID_NAME, VIEW_CORE_NAME} from '../../../definition';

class ViewCore extends Directive(VIEW_CORE_NAME, {root: `^^${GRID_NAME}`}) {
	constructor(theme) {
		super();

		this.theme = theme;
	}

	onInit() {
		const model = this.model;
		this.initData(model);
		this.initGroup(model);
	}

	get model() {
		return this.root.model;
	}

	get rows() {
		return this.model.view().rows;
	}

	get columns() {
		return this.model.view().columns;
	}

	get nodes() {
		return this.model.view().nodes;
	}

	initData(model) {
		const dataState = model.data();
		const view = model.view;
		// TODO: should we protect by guard here or on the model level?
		view({
			rows: dataState.rows.slice(),
			columns: dataState.columns.slice()
		});

		model.dataChanged.on(e => {
			const newState = {};
			if (e.changes.hasOwnProperty('rows')) {
				newState.rows = e.state.rows.slice();
			}

			if (e.changes.hasOwnProperty('columns')) {
				newState.clumns = e.state.columns.slice();
			}

			view(newState);
		});
	}

	initGroup(model) {
		const groupState = model.group();
		const view = model.view;
		view({
			nodes: this.nodeBuilder(
				getColumnMap(this.columns),
				groupState.by
			)(this.rows)
		});

		model.groupChanged.on(e => {
			if (e.changes.hasOwnProperty('by')) {
				view({
					nodes: this.nodeBuilder(
						getColumnMap(this.columns),
						e.state.by
					)(this.rows)
				});
			}
		});
	}

	nodeBuilder(columnMap, groupBy) {
		if (groupBy.length === 0) {
			return () => [];
		}

		const groupKey = groupBy[0];
		if (!columnMap.hasOwnProperty(groupKey)) {
			throw new Error('view.core', `can't find column "${groupKey}"`);
		}

		const column = columnMap[groupKey];
		const getValue = valueFactory(column);
		const builder = this.nodeBuilder;

		return rows => {
			const keys = [];
			const nodes = [];
			const groups = {};

			for (let i = 0, length = rows.length; i < length; i++) {
				const row = rows[i];
				const key = getValue(row);
				if (!groups.hasOwnProperty(key)) {
					const node = new Node(key);
					node.rows.push(row);
					keys.push(key);
					nodes.push(node);
					groups[key] = node;
				}
				else {
					const node = groups[key];
					node.rows.push(row);
					keys.push(key);
				}
			}

			const nextGroupBy = groupBy.slice(1);
			if (nextGroupBy.length) {
				const build = builder(columnMap, nextGroupBy);
				for (let i = 0, length = keys.length; i < length; i++) {
					const key = keys[i];
					const node = groups[key];
					node.children = build(node.rows, columnMap, nextGroupBy);
				}
			}

			return nodes;
		};
	}
}

ViewCore.$inject = ['qgridTheme'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$view',
	controller: ViewCore,
	require: ViewCore.require,
	link: ViewCore.link
};