import PluginComponent from '../plugin.component';
import * as columnService from '@grid/core/column/column.service';
import {Command} from '@grid/core/command';
import {TemplatePath} from '@grid/core/template';
import {Aggregation} from '@grid/core/services';
import {isFunction, noop} from '@grid/core/utility';
import {COLUMN_CHOOSER_NAME} from '../definition';
import {PipeUnit} from '@grid/core/pipe/pipe.unit';

TemplatePath
	.register(COLUMN_CHOOSER_NAME, () => {
		return {
			model: 'columnChooser',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('column-chooser', {
	inject: ['qgrid']
});
class ColumnChooser extends Plugin {
	constructor() {
		super(...arguments);

		this.temp = {
			index: [],
			columns: []
		};

		this.toggle = new Command({
			execute: column => {
				column.isVisible = !this.state(column);
			}
		});

		this.toggleAll = new Command({
			execute: () => {
				const state = !this.stateAll();
				for (let column of this.columns) {
					column.isVisible = state;
				}
			}
		});

		this.defaults = new Command({
			execute: () => {
				for (let column of this.columns) {
					column.isVisible = column.isDefault !== false;
				}
			}
		});

		this.toggleAggregation = new Command();

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
				const columnRows = model.scene().column.rows;
				for (let columns of columnRows) {
					const targetIndex = columns.findIndex(c => c.model.key === e.target.value);
					const sourceIndex = columns.findIndex(c => c.model.key === e.source.value);
					if (targetIndex >= 0 && sourceIndex >= 0) {
						const sourceColumn = columns[sourceIndex].model;
						const targetColumn = columns[targetIndex].model;
						const indexMap = this.temp.index;
						const sourceColumnIndex = indexMap.indexOf(sourceColumn.key);
						const targetColumnIndex = indexMap.indexOf(targetColumn.key);
						indexMap.splice(sourceColumnIndex, 1);
						indexMap.splice(targetColumnIndex, 0, sourceColumn.key);
					}
				}
			}
		});

		this.drag = new Command({
			canExecute: e => {
				const model = this.model;
				if (model.columnChooser().canSort) {
					if (e.source.key === COLUMN_CHOOSER_NAME) {
						const map = columnService.map(model.data().columns);
						return map.hasOwnProperty(e.source.value) &&
							map[e.source.value].canMove !== false;
					}
				}

				return false;
			},
			execute: noop
		});

		this.submit = new Command({
			execute: () => {
				const model = this.model;
				const temp = this.temp;

				model.columnList({
					index: Array.from(temp.index)
				});

				const columnMap = columnService.map(this.model.data().columns);
				temp.columns.forEach(column => {
					const originColumn = columnMap[column.key];
					if (originColumn) {
						originColumn.isVisible = column.isVisible;
						originColumn.aggregation = column.aggregation;
					}
				});


				this.service.invalidate('column.chooser', {}, PipeUnit.column);
				this.onSubmit();
			}
		});

		this.cancel = new Command({
			execute: () => {
				this.reset.execute();
				this.onCancel();
			}
		});

		this.reset = new Command({
			execute: () => {
				this.temp.index = this.originIndex();
				this.temp.columns = this.originColumns();
			}
		});
	}

	onInit() {
		const model = this.model;
		this.service = this.qgrid.service(model);
		this.aggregations = Object
			.getOwnPropertyNames(Aggregation)
			.filter(key => isFunction(Aggregation[key]));

		this.using(model.dataChanged.watch(e => {
			if (e.tag.source === 'column.chooser') {
				return;
			}

			if (e.hasChanges('columns')) {
				this.temp.index = this.originIndex();
				this.temp.columns = this.originColumns();
			}
		}));
	}

	get columns() {
		return this.temp.columns;
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

	originIndex() {
		return Array.from(this.model.columnList().index);
	}

	originColumns() {
		return this.model
			.data()
			.columns
			.filter(c => c.class === 'data')
			.map(column => ({
				key: column.key,
				title: column.title,
				isVisible: column.isVisible,
				aggregation: column.aggregation
			}));
	}

	get canAggregate() {
		return this.columnChooserCanAggregate;
	}

	get resource() {
		return this.model.columnChooser().resource;
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