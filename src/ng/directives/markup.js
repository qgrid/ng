import Directive from './directive';
import {MARKUP_NAME, VIEW_CORE_NAME} from 'ng/definition';

class Markup extends Directive(MARKUP_NAME, {view: `^${VIEW_CORE_NAME}`}) {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		this.view.markup[this.name] = this.element;
	}

	onDestroy() {
		delete this.view.markup[this.name];
	}
}

Markup.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: {
		'name': `@${MARKUP_NAME}`,
	},
	controllerAs: '$resize',
	controller: Markup,
	require: Markup.require,
	link: Markup.link,
	scope: false
};