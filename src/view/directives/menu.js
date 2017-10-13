import Directive from './directive';
import {MENU_NAME} from '@grid/view/definition';

class Menu extends Directive(MENU_NAME) {
	constructor($element) {
		super();

		this.element = $element[0];
	}
}

Menu.$inject = ['$element'];

export default {
	restrict: 'A',
	controller: Menu,
	require: Menu.require,
	link: Menu.link,
	scope: false
};