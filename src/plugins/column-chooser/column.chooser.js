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
		this.$scope.$columnChooser = new ColumnChooserView(this.model);
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
