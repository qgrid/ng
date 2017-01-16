'use strict';

import Directive from '../directive';

class Head extends Directive('qGridCoreHead', {root: '^^qGrid'}) {
	constructor() {
		super();

	}

	onInit() {
		//const head = this.root.model.head();
	}
}

Head.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$head',
	controller: Head,
	require: Head.require,
	link: Head.link
};