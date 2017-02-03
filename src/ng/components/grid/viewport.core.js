import Directive from 'ng/directives/directive';
import {VIEWPORT_CORE_NAME} from 'src/definition';

class ViewportCore extends Directive(VIEWPORT_CORE_NAME) {
	constructor($element) {
		super();

		this.$element = $element;
	}
}

ViewportCore.$inject = ['$element'];

export default {
	restrict: 'A',
	controllerAs: '$viewport',
	controller: ViewportCore,
	require: ViewportCore.require,
	link: ViewportCore.link,
	scope: {}
};