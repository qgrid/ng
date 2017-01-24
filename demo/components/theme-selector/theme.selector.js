import Component from '../../../src/ng/components/component';
require('./theme.selector.scss');

class ThemeSelector extends Component {
	constructor() {
		super();
	}

	onInit() {
		this.select = item => {
			this.selection = item;
			this.selectionChanged({$selection: item});
		};
	}
}

ThemeSelector.$inject = [];

export default {
	template: require('./theme.selector.html'),
	controller: ThemeSelector,
	bindings: {
		'items': '<',
		'selectionChanged': '&',
		'selection': '<'
	}
};