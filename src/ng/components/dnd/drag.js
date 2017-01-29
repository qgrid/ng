import Directive from '../directive';
import {DRAG_NAME} from 'src/definition';

class Drag extends Directive(DRAG_NAME) {
	constructor($element) {
		super();

		this.$element = $element;
	}

	onInit() {
		this.$element[0].classList.add('can-drag');
	}

	onDestroy() {
		this.$element[0].classList.remove('can-drag');
	}
}

Drag.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$drag',
	controller: Drag,
	require: Drag.require,
	link: Drag.link
};