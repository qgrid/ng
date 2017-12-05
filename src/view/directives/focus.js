import Directive from './directive';
import {FOCUS_NAME} from '@grid/view/definition';
import {FocusView} from '@grid/plugin/focus/focus.view';

class Focus extends Directive(FOCUS_NAME) {
	constructor($element, $attrs) {
		super();

		this.focus = new FocusView({
			element: $element[0],
			targetSelector: $attrs[FOCUS_NAME],
			delay: parseInt($attrs[FOCUS_NAME+'Delay'], 10) || 50
		});
	}

	onInit() {
		this.focus.set();
	}
}

Focus.$inject = ['$element', '$attrs'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$focus',
	controller: Focus,
	require: Focus.require,
	link: Focus.link,
	scope: false
};