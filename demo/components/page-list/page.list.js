import Component from '../../../src/components/component';
require('./page.list.scss');

class PageList extends Component {
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

PageList.$inject = [];

export default {
	template: require('./page.list.html'),
	controller: PageList,
	bindings: {
		'items': '<',
		'selectionChanged': '&'
	}
};