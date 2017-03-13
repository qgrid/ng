import Component from 'ng/components/component';
require('./page.list.scss');

class PageList extends Component {
	constructor($filter) {
		super();

		const filter = $filter('filter');
		this.filter = item => filter(item.items, this.filterText).length > 0;
	}

	onInit() {
		this.select = item => {
			this.selection = item;
			this.selectionChanged({$selection: item});
		};
	}


}

PageList.$inject = ['$filter'];

export default {
	template: require('./page.list.html'),
	controller: PageList,
	bindings: {
		'items': '<',
		'selectionChanged': '&',
		'selection': '<'
	}
};