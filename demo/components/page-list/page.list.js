import Component from 'ng/components/component';
require('./page.list.scss');

class PageList extends Component {
	constructor($filter, $location, $anchorScroll, $timeout) {
		super();

		const filter = $filter('filter');
		this.$location = $location;
		this.$anchorScroll = $anchorScroll;
		this.$timeout = $timeout;
		this.filter = item => filter(item.items, this.filterText).length > 0;
	}

	onInit() {
		this.select = item => {
			this.selection = item;
			this.selectionChanged({$selection: item});
		};

		const hash = this.$location.path().replace('/', '');
		this.$timeout(() => this.$anchorScroll(hash), 1000);
	}
}

PageList.$inject = ['$filter', '$location', '$anchorScroll', '$timeout'];

export default {
	template: require('./page.list.html'),
	controller: PageList,
	bindings: {
		'items': '<',
		'selectionChanged': '&',
		'selection': '<'
	}
};