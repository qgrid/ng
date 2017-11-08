import Component from '@grid/view/components/component';
import Prism from 'prismjs';
require('./page.details.scss');

class PageDetails extends Component {
	constructor($timeout) {
		super();

		this.$onChanges = this.onChange;
		this.$timeout = $timeout;
	}

	onChange(e) {
		if (e.hasOwnProperty('selection')) {
			this.$timeout(() => Prism.highlightAll(), 0);
		}
	}
}

PageDetails.$inject = ['$timeout'];

export default {
	template: require('./page.details.html'),
	controller: PageDetails,
	bindings: {
		'selection': '<',
		'title': '<header'
	},
	controllerAs: '$details'
};