import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('column-filter-panel');
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);
	}
}

export default ColumnFilterPanel.component({
	controller: ColumnFilterPanel,
	controllerAs: '$columnFilterPanel',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<'
	}
});