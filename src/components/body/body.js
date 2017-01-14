'use strict';

import ModelComponent from '../model.component';

class Body extends ModelComponent {
	constructor() {
		super('body');
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