import PluginComponent from '../plugin.component';
import TemplatePath from 'core/template/template.path';
import {isFunction, noop} from 'core/services/utility';
import {COLUMN_FILTER_NAME} from '../definition';

// TemplatePath
// 	.register(COLUMN_FILTER_NAME, (template, filter) => {
// 		return {
// 			model: 'columnFilter',
// 			resource: filter.key
// 		};
// 	});

const Plugin = PluginComponent('column-filter');
class ColumnFilter extends Plugin {
	constructor() {
		super(...arguments);
	}
}

export default ColumnFilter.component({
	controller: ColumnFilter,
	controllerAs: '$columnFilter',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<'
	}
});