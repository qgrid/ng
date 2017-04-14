import Directive from './directive';
import {INIT_CLICK_NAME} from 'ng/definition';

class InitClick extends Directive(INIT_CLICK_NAME) {
	constructor($element) {
		super();

		this.$element = $element;
	}

	onLink() {
		this.$element.triggerHandler('click');
	}
}

InitClick.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$initClick',
	controller: InitClick,
	require: InitClick.require,
	link: InitClick.link
};