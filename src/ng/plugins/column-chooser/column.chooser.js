import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import TemplatePath from 'core/template/template.path';
import Aggregation from 'core/services/aggregation';
import * as columnService from 'core/column/column.service';
import {isFunction, noop} from 'core/services/utility';
import {COLUMNCHOOSER_NAME} from '../definition';
import merge from 'core/services/merge';

const doMerge = merge({
	equals: (l, r) => l.model.key === r.model.key,
	update: (l, r, left, i) => left[i] = r
});

TemplatePath
	.register(COLUMNCHOOSER_NAME, () => {
		return {
			model: 'columnchooser',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('columnchooser', {inject: ['qgrid']});
class ColumnChooser extends Plugin {
	constructor() {
		super(...arguments);

		this._columns = [];
		this.toggle = new Command({
			execute: column => {
				column.isVisible = !this.state(column);
				const data = this.model.data;

				data({columns: Array.from(data().columns)});
			}
		});

		this.toggleAggregation = new Command({
			execute: () => {
				const data = this.model.data;
				data({columns: Array.from(data().columns)});
			},
		});

		this.drop = new Command({
			canExecute: e => {
				if (e.source.key === COLUMNCHOOSER_NAME) {
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
						view({columns: Array.from(columnRows)});
					}
				}
			}
		});

		this.drag = new Command({
			canExecute: e => {
				if (e.source.key === COLUMNCHOOSER_NAME) {
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
		this.aggregations = Object
			.getOwnPropertyNames(Aggregation)
			.filter(key => isFunction(Aggregation[key]));

		this.dataChnag
	}

	state(column) {
		return column.isVisible !== false;
	}

	get canAggregate() {
		return this.columnChooserCanAggregate;
	}

	get columns() {
		return this.model.data().columns;
	}

	get resource() {
		return this.model.visibility().resource;
	}

	transfer(column) {
		return {
			key: COLUMNCHOOSER_NAME,
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