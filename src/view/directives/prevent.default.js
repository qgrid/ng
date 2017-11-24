import Directive from './directive';
import {PREVENT_DEFAULT_NAME} from '@grid/view/definition';

class PreventDefault extends Directive(PREVENT_DEFAULT_NAME) {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		this.element.addEventListener(this.key, e =>
			e.preventDefault()
		);
	}
}

PreventDefault.$inject = ['$element'];

export default {
	restrict: 'A',
	controller: PreventDefault,
	controllerAs: '$preventDefault',
	require: PreventDefault.require,
	link: PreventDefault.link,
	scope: false,
	bindToController: {
		'key': `@${PREVENT_DEFAULT_NAME}`,
	},
};