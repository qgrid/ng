import Directive from '../directive';
import {map as getColumnMap} from '../../../core/column/column.service';
import {getFactory as valueFactory} from '../../services/value';
import nodeBuilder from '../../../core/node/node.builder';
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
			nodes: nodeBuilder(
				getColumnMap(this.columns),
				groupState.by,
				valueFactory
			)(this.rows)
		});

		model.groupChanged.on(e => {
			if (e.changes.hasOwnProperty('by')) {
				view({
					nodes: nodeBuilder(
						getColumnMap(this.columns),
						e.state.by,
						valueFactory
					)(this.rows)
				});
			}
		});
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