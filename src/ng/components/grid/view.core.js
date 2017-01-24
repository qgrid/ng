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
		this.rows = [];
		this.columns = [];
		this.nodes = [];
	}

	onInit() {
		const model = this.model;
		this.initData(model);
		this.initGroup(model);
	}

	get model() {
		return this.root.model;
	}

	initData(model) {
		const data = model.data();

		this.rows = data.rows;
		this.columns = data.columns;

		model.dataChanged.on(e => {
			if (e.changes.hasOwnProperty('rows')) {
				this.rows = e.state.rows;
			}

			if (e.changes.hasOwnProperty('columns')) {
				this.columns = e.state.columns;
			}
		});
	}

	initGroup(model) {
		const group = model.group();
		this.nodes =
			this.nodeBuilder(
				getColumnMap(this.columns),
				group.by
			)(this.rows);

		model.groupChanged.on(e => {
			if (e.changes.hasOwnProperty('by')) {
				this.nodes =
					this.nodeBuilder(
						getColumnMap(this.columns),
						e.state.by
					)(this.rows);
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