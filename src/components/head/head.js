'use strict';

import Directive from '../directive';
import {GRID_NAME, HEAD_NAME} from '../../defenition';

class Head extends Directive(HEAD_NAME, {root: `^^${GRID_NAME}`}) {
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