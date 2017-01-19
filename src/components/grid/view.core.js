'use strict';

import Directive from '../directive';
import {GRID_NAME, VIEW_CORE_NAME} from '../../definition';

class ViewCore extends Directive(VIEW_CORE_NAME, {root: `^^${GRID_NAME}`}) {
	constructor($element) {
		super();

		this.$element = $element;
	}

	onInit() { }
}

ViewCore.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$view',
	controller: ViewCore,
	require: ViewCore.require,
	link: ViewCore.link
};