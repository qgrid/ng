import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import TemplatePath from 'core/template/template.path';
import Aggregation from 'core/services/aggregation';
import * as columnService from 'core/column/column.service';
import {isFunction, noop} from 'core/services/utility';
import {COLUMN_CHOOSER_NAME} from '../definition';
import merge from 'core/services/merge';
import PipeUnit from 'core/pipe/units/pipe.unit';

const orderFromDataToView = merge({
	equals: (l, r) => l.model.key === r.key,
	update: noop,
	insert: noop,
	remove: noop
});


const orderFromViewToData = merge({
	equals: (l, r) => l.key === r.model.key,
	update: noop,
	insert: noop,
	remove: noop
});

TemplatePath
	.register(COLUMN_CHOOSER_NAME, () => {
		return {
			model: 'columnchooser',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('column-chooser', {inject: ['qgrid']});
class ColumnChooser extends Plugin {
	constructor() {
		super(...arguments);

		this._columns = [];
		this.toggle = new Command({
			execute: column => {
				column.isVisible = !this.state(column);
				this.service.invalidate('column.chooser', {}, PipeUnit.column)
					.then(() => orderFromDataToView(this.model.view().columns[0] || [], this._columns));
			}
		});

		this.toggleAggregation = new Command({
			execute: () => {
				this.service.invalidate('column.chooser', {}, PipeUnit.column)
			},
		});

		this.drop = new Command({
			canExecute: e => {
				if (e.source && e.source.key === COLUMN_CHOOSER_NAME) {
					const map = columnService.map(this.model.data().columns);
					return map.hasOwnProperty(e.target.value);
				}

				return false;
			},
			execute: e => {
				const view = this.model.view;
				const columnRows = view().columns;
				for (let columns of columnRows) {
					const targetIndex = columns.findIndex(c => c.model.key === e.target.value);
					const sourceIndex = columns.findIndex(c => c.model.key === e.source.value);
					if (targetIndex >= 0 && sourceIndex >= 0) {
						// TODO: full copy? impacting pef. on pivoting?
						const sourceColumn = columns[sourceIndex];
						columns.splice(sourceIndex, 1);
						columns.splice(targetIndex, 0, sourceColumn);
						this.service.invalidate('column.chooser', {}, PipeUnit.column)
							.then(() => orderFromDataToView(columnRows[0] || [], this._columns));
					}
				}
			}
		});

		this.drag = new Command({
			canExecute: e => {
				if (e.source.key === COLUMN_CHOOSER_NAME) {
					const map = columnService.map(this.model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			},
			execute: noop
		});

		this.submit = new Command({
			execute: () => {
				this.onSubmit();
			}
		});

		this.cancel = new Command({
			execute: () => {
				this.onCancel();
			}
		});

		this.reset = new Command({
			execute: () => {

			}
		});
	}

	onInit() {
		const model = this.model;
		this.service = this.qgrid.service(model);
		this.aggregations = Object
			.getOwnPropertyNames(Aggregation)
			.filter(key => isFunction(Aggregation[key]));

		model.dataChanged.on(e => {
			if (e.changes.hasOwnProperty('columns')) {
				this._columns = Array.from(e.state.columns);
			}
		});

		model.viewChanged.on(e => {
			if (e.changes.hasOwnProperty('columns')) {
				orderFromViewToData(this._columns, e.state.columns[0]);
			}
		});

		this._columns = Array.from(model.data().columns);
		orderFromViewToData(this._columns, model.view().columns[0]);
	}

	state(column) {
		return column.isVisible !== false;
	}

	get canAggregate() {
		return this.columnChooserCanAggregate;
	}

	get columns() {
		return this._columns;
	}

	get resource() {
		return this.model.visibility().resource;
	}

	transfer(column) {
		return {
			key: COLUMN_CHOOSER_NAME,
			value: column.key
		};
	}
}

export default ColumnChooser.component({
	controller: ColumnChooser,
	controllerAs: '$columnChooser',
	bindings: {
		'columnChooserCanAggregate': '<canAggregate',
		'onSubmit': '&',
		'onCancel': '&'
	}
});