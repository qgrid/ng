import Directive from './directive';
import {STOP_PROPAGATE_NAME} from '@grid/view/definition';

class StopPropagate extends Directive(STOP_PROPAGATE_NAME) {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		this.element.addEventListener(this.key, e =>
			e.stopPropagation()
		);
	}
}

StopPropagate.$inject = ['$element'];

export default {
	restrict: 'A',
	controller: StopPropagate,
	controllerAs: '$stopPropagate',
	require: StopPropagate.require,
	link: StopPropagate.link,
	scope: false,
	bindToController: {
		'key': `@${STOP_PROPAGATE_NAME}`,
	},
};