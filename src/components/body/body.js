'use strict';

import Component from '../component';

class Body extends Component {
	constructor() {
		super('body');
	}

	onInit() {
	}
}

Body.$inject = ['$element', '$transclude'];

export default {
	require: {
		root: '^qGrid'
	},
	controller: Body,
	bindings: {
	}
};