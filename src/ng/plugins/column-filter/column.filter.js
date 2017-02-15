import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import TemplatePath from 'core/template/template.path';
import {isFunction, noop} from 'core/services/utility';
import {COLUMN_FILTER_NAME} from '../definition';
import PipeUnit from 'core/pipe/units/pipe.unit';

TemplatePath
	.register(COLUMN_FILTER_NAME, () => {
		return {
			model: 'columnchooser',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('columnfilter');
class ColumnFilter extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
	}
}

export default ColumnFilter.component({
	controller: ColumnFilter,
	controllerAs: '$columnFilter',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&'
	}
});