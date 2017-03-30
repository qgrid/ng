import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import TemplatePath from 'core/template/template.path';
import Aggregation from 'core/services/aggregation';
import * as columnService from 'core/column/column.service';
import {isFunction, noop} from 'core/services/utility';
import {COLUMN_CHOOSER_NAME} from '../definition';
import PipeUnit from 'core/pipe/units/pipe.unit';

TemplatePath
	.register(COLUMN_CHOOSER_NAME, () => {
		return {
			model: 'columnChooser',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('column-chooser', {inject: ['qgrid']});
class ColumnChooser extends Plugin {
	constructor() {
		super(...arguments);

		this.toggle = new Command({
			execute: column => {
				column.isVisible = !this.state(column);
				this.service.invalidate('column.chooser', {}, PipeUnit.column);
			}
		});

		this.toggleAll = new Command({
			execute: () => {
				const state = !this.stateAll();
				for (let column of this.columns) {
					column.isVisible = state;
				}

				this.service.invalidate('column.chooser', {}, PipeUnit.column);
			}
		});

		this.defaults = new Command({
			execute: () => {
				for (let column of this.columns) {
					column.isVisible = column.isDefault !== false;
				}

				this.service.invalidate('column.chooser', {}, PipeUnit.column);
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
				const model = this.model;
				const view = model.view;
				const columnRows = view().columns;
				for (let columns of columnRows) {
					const targetIndex = columns.findIndex(c => c.model.key === e.target.value);
					const sourceIndex = columns.findIndex(c => c.model.key === e.source.value);
					if (targetIndex >= 0 && sourceIndex >= 0) {
						const sourceColumn = columns[sourceIndex].model;
						const targetColumn = columns[targetIndex].model;
						const indexMap = Array.from(model.columnList().index);
						indexMap.splice(sourceColumn.index, 1);
						indexMap.splice(targetColumn.index, 0, sourceColumn.key);
						model.columnList({index: indexMap});
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
			execute: () => this.onSubmit()
		});

		this.cancel = new Command({
			execute: () => {
				this.reset.execute();
				this.onCancel();
			}
		});

		this.reset = new Command({
			execute: () => {
				const origin = this.origin;
				this.model.columnList({
					index: Array.from(origin.index)
				});

				this.columns.forEach(column => {
					const originColumn = origin.columns[column.key];
					column.isVisible = originColumn.isVisible;
					column.aggregation = originColumn.aggregation;
				});

				this.service.invalidate(
					'reset', {}, PipeUnit.column
				);
			}
		});
	}

	onInit() {
		const model = this.model;
		this.service = this.qgrid.service(model);
		this.aggregations = Object
			.getOwnPropertyNames(Aggregation)
			.filter(key => isFunction(Aggregation[key]));

		this.columns = [];
		this.origin = {
			index: Array.from(model.columnList().index),
			columns: model.data().columns
				.reduce((memo, column) => {
					memo[column.key] = {
						isVisible: column.isVisible,
						aggregation: column.aggregation
					};
					return memo
				}, {})
		};

		model.viewChanged.watch(e => {
			if (e.hasChanges('columns')) {
				this.columns = Array.from(model.data().columns);
				this.columns.sort((x, y) => x.index - y.index);
			}
		});
	}

	state(column) {
		return column.isVisible !== false;
	}

	stateAll() {
		return this.columns.every(this.state.bind(this));
	}

	stateDefault() {
		return this.columns.every(c => (c.isDefault !== false && c.isVisible !== false) || (c.isDefault === false && c.isVisible === false));
	}

	isIndeterminate() {
		return !this.stateAll() && this.columns.some(this.state.bind(this));
	}

	get canAggregate() {
		return this.columnChooserCanAggregate;
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