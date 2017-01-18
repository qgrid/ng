import Component from '../../../src/components/component';

class PageList extends Component {
	constructor() {
		super();
	}
}

PageList.$inject = ['$element', '$transclude'];

export default {
	template: require('./page.list.html'),
	controller: PageList,
	bindings: {
		'items': '<'
	}
};