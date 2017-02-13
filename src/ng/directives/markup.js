import Directive from './directive';
import {MARKUP_NAME, GRID_NAME} from 'ng/definition';

class markup extends Directive(MARKUP_NAME, {root: `^^${GRID_NAME}`}) {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		this.root.markup[this.name] = this.element;
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