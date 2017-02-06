import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import {COLUMNCHOOSER_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';
import {isObject, isFunction} from 'core/services/utility';
import Aggregation from 'core/services/aggregation';

TemplatePath
	.register(COLUMNCHOOSER_NAME, () => {
		return {
			model: 'columnchooser',
			resource: 'content'
		};
	});

class ColumnChooser extends PluginComponent('columnchooser') {
	constructor() {
		super(...arguments);

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
	}

	onInit() {
		this.aggregations = Object
			.getOwnPropertyNames(Aggregation)
			.filter(key => isFunction(Aggregation[key]));
	}

	state(column) {
		return column.isVisible !== false;
	}

	get columns() {
		return this.model.data().columns;
	}

	get resource() {
		return this.model.visibility().resource;
	}
}

export default ColumnChooser.component({
	controller: ColumnChooser,
	controllerAs: '$columnChooser'
});