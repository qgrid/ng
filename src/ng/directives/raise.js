import Directive from './directive';
import {RAISE_NAME} from 'ng/definition';

class Raise extends Directive(RAISE_NAME) {
	constructor($element, $attrs, $timeout) {
		super();

		this.$element = $element;
		this.$attrs = $attrs;
		this.$timeout = $timeout;
	}

	onLink() {
		const eventType = this.$attrs[RAISE_NAME];
		this.$timeout(() => this.$element.triggerHandler(eventType));
	}
}

Raise.$inject = ['$element', '$attrs', '$timeout'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$raise',
	controller: Raise,
	require: Raise.require,
	link: Raise.link
};