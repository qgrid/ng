import Directive from '../directive';
import {GRID_NAME, DRAG_NAME, DROP_EFFECT_NAME} from 'src/definition';

class Drag extends Directive(DRAG_NAME) {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		const element = this.element;

		element.classList.add('can-drag');
		element.addEventListener('dragstart', this.start.bind(this), false);
		element.addEventListener('dragend', this.end.bind(this), false);
	}

	onDestroy() {
		const element = this.element;

		element.classList.remove('can-drag');
		element.removeEventListener('dragstart');
		element.removeEventListener('dragend');
	}

	start(e) {
		const source = this.transfer();
		e.dataTransfer.setData(`application/x-${GRID_NAME}+json`, JSON.stringify(source)); // eslint-disable-line angular/json-functions
		e.dataTransfer.effectAllowed = this.effect || 'move';
		this.element.classList.add('drag');
	}

	end() {
		this.element.classList.remove('drag');
	}
}

Drag.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: {
		'transfer': `&${DRAG_NAME}`,
		'effect': `@${DROP_EFFECT_NAME}`
	},
	controllerAs: '$drag',
	controller: Drag,
	require: Drag.require,
	link: Drag.link
};