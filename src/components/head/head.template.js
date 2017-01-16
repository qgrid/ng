'use strict';

import ModelComponent from '../model.component';

class Head extends ModelComponent {
	constructor() {
		super('head');
	}
}

Head.$inject = [];

export default {
	require: {
		root: '^qGrid'
	},
	controller: Head,
	bindings: {
		headSticky: '<sticky'
	}
};