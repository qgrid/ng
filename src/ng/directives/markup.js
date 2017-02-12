import Directive from './directive';
import {MARKUP_NAME, VIEW_CORE_NAME} from 'core/definition';

class markup extends Directive(MARKUP_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		this.view.markup[this.name] = this.element;
	}

	onDestroy() {

	}
}

markup.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: {
		'name': `@${MARKUP_NAME}`,
	},
	controllerAs: '$resize',
	controller: markup,
	require: markup.require,
	link: markup.link
};