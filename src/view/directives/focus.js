import Directive from './directive';
import {FOCUS_NAME} from '@grid/view/definition';
import {AppError} from '@grid/core/infrastructure';

class Focus extends Directive(FOCUS_NAME) {
	constructor($element, $attrs, $timeout) {
		super();

		this.$element = $element;
		this.$attrs = $attrs;
		this.$timeout = $timeout;
	}

	onInit() {
		let element = this.$element[0];
		if (element.getAttribute('tabindex') === null
			|| element.getAttribute('tabindex') !== '') {
			element.setAttribute('tabindex', -1);
		}

		const delay = parseInt(this.$attrs[FOCUS_NAME+'Delay']) || 50;
		this.$timeout(() => {
			const targetSelector = this.$attrs[FOCUS_NAME];
			let targetElement = element;
			if (targetSelector) {
				const target = this.$element.find(targetSelector);
				if (target.length > 0) {
					targetElement = target[0];
				}
				else {
					throw new AppError('focus', `Element "${targetSelector}" is not found`);
				}
			}

			targetElement.focus();
		}, delay);
	}
}

Focus.$inject = ['$element', '$attrs', '$timeout'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$focus',
	controller: Focus,
	require: Focus.require,
	link: Focus.link,
	scope: false
};