import Directive from './directive';
import {ANIMATE_NAME} from '@grid/view/definition';

class Animate extends Directive(ANIMATE_NAME) {
	constructor($element, $attrs, $animate) {
		super();

		this.$element = $element;
		this.$attrs = $attrs;
		this.$animate = $animate;
	}

	onInit() {
		this.$animate.enabled(this.$element, this.$attrs[ANIMATE_NAME] !== 'false');
	}
}

Animate.$inject = ['$element', '$attrs', '$animate'];

export default {
	restrict: 'A',
	controller: Animate,
	require: Animate.require,
	link: Animate.link,
	scope: false
};