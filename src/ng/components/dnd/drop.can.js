import Directive from '../directive';
import {DRAG_NAME} from 'src/definition';

class CanDrop extends Directive(DRAG_NAME) {
	constructor($element) {
		super();

		this.$element = $element;
	}

	onInit() {
		this.$element.addClass('can-drop');
	}

	onDestroy() {
		this.$element.removeClass('can-drop');
	}
}

CanDrop.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$canDrop',
	controller: CanDrop,
	require: CanDrop.require,
	link: CanDrop.link
};