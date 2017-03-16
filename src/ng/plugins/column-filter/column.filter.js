import PluginComponent from '../plugin.component';

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
		'key': '<',
		'title': '@'
	}
});