'use strict';

import Directive from '../directive';
import {GRID_NAME, BODY_CORE_NAME} from '../../../definition';

class BodyCore extends Directive(BODY_CORE_NAME, {root: `^^${GRID_NAME}`}) {
	constructor() {
		super();
	}

	onInit() {
	}
}

BodyCore.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: 'body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link
};
