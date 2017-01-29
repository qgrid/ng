import Directive from '../directive';
import {DRAG_NAME} from 'src/definition';

class Drop extends Directive(DRAG_NAME) {
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

Drop.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$drop',
	controller: Drop,
	require: Drop.require,
	link: Drop.link
};