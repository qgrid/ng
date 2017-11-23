import PluginComponent from '../plugin.component';
import {TemplatePath} from '@grid/core/template';
import {COLUMN_CHOOSER_NAME} from '../definition';
import {ColumnChooserView} from '@grid/plugin/column-chooser/column.chooser.view';

TemplatePath
	.register(COLUMN_CHOOSER_NAME, () => {
		return {
			model: 'columnChooser',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('column-chooser');

class ColumnChooser extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const context = {
			name: COLUMN_CHOOSER_NAME
		};

		const columnChooser = new ColumnChooserView(this.model, context);
		this.using(columnChooser.submitEvent.on(this.onSubmit));
		this.using(columnChooser.cancelEvent.on(this.onCancel));

		this.$scope.$columnChooser = columnChooser;
	}

	get resource() {
		return this.model.columnChooser().resource;
	}

	onDestroy() {
		if (this.$scope.$columnChooser) {
			this.$scope.$columnChooser.dispose();
		}
	}
}

export default ColumnChooser.component({
	controller: ColumnChooser,
	controllerAs: '$columnChooserPlugin',
	bindings: {
		'columnChooserCanAggregate': '<canAggregate',
		'onSubmit': '&',
		'onCancel': '&'
	}
});