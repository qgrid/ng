import Component from '../component';
import {map as getColumnMap} from 'core/column/column.service';
import {getFactory as valueFactory} from 'ng/services/value';
import nodeBuilder from 'core/node/node.builder';
import pivotBuilder from 'core/pivot/pivot.builder';
import Pivot from './view.pivot';
import Group from './view.group';
import {GRID_NAME} from 'src/definition';

class ViewCore extends Component {
	constructor($element, theme) {
		super();

		this.$element = $element;
		this.theme = theme;
		this.pivot = new Pivot(this);
		this.group = new Group(this);

		this.initTheme();
	}

	onInit() {
		const model = this.model;
		this.initData(model);
		this.initGroup(model);
		this.initPivot(model);
	}

	templateUrl(key) {
		return `qgrid.${key}.${this.mode}.tpl.html`;
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
	}

	get mode() {
		const state = this.model.view();
		if (state.pivot) {
			return 'pivot';
		}

		if (state.nodes.length) {
			return 'group';
		}

		return 'row';
	}

	get selection() {
		return this.model.selection();
	}
	
	initTheme() {
		this.$element[0].classList.add(`theme-${this.theme.name}`);

		this.theme.changed.on(e => {
			this.$element[0].classList.remove(`theme-${e.oldValue}`);
			this.$element[0].classList.add(`theme-${e.newValue}`);
		});
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
				newState.columns = e.state.columns.slice();
			}

			view(newState);
		});
	}

	initGroup(model) {
		const view = model.view;
		const build = () =>
			nodeBuilder(
				getColumnMap(this.columns),
				model.group().by,
				valueFactory
			)(this.rows);

		view({nodes: build()});

		model.groupChanged.on(e => {
			if (e.changes.hasOwnProperty('by')) {
				view({nodes: build()});
			}
		});

		model.viewChanged.on(e => {
			if (e.changes.hasOwnProperty('rows') || e.changes.hasOwnProperty('rows')) {
				view({nodes: build()});
			}
		});
	}

	initPivot(model) {
		const view = model.view;
		const build = () =>
			pivotBuilder(
				getColumnMap(this.columns),
				model.pivot().by,
				valueFactory
			)(this.rows);

		view({pivot: build()});

		model.pivotChanged.on(e => {
			if (e.changes.hasOwnProperty('by')) {
				view({pivot: build()});
			}
		});

		model.viewChanged.on(e => {
			if (e.changes.hasOwnProperty('rows') || e.changes.hasOwnProperty('rows')) {
				view({pivot: build()});
			}
		});

	}
}

ViewCore.$inject = ['$element', 'qgridTheme'];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	}
}