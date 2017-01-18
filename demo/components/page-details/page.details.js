import Component from '../../../src/components/component';

class PageDetails extends Component {
	constructor() {
		super();
	}
}

PageDetails.$inject = [];

export default {
	template: require('./page.details.html'),
	controller: PageDetails,
	bindings: {
		'selection': '<'
	}
};