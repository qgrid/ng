import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('column-filter');
class ColumnFilter extends Plugin {
	constructor() {
		super(...arguments);
	}

	get kind() {
		return 'control';
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