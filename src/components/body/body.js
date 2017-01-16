'use strict';

import Directive from '../directive';
import {GRID_NAME, BODY_NAME} from '../../defenition';

class Body extends Directive(BODY_NAME, {root: `^^${GRID_NAME}`}) {
	constructor() {
		super();
	}

	onInit() {
	}
}

Body.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: 'body',
	controller: Body,
	require: Body.require,
	link: Body.link
};
