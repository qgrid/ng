import Directive from '../directive';
import EventListener from 'core/infrastructure/event.listener';
import {GRID_NAME, DRAG_NAME, DROP_EFFECT_NAME} from 'src/definition';

class Drag extends Directive(DRAG_NAME) {
	constructor($element) {
		super();

		this.element = $element[0];
		this.listener = new EventListener(this, this.element);
	}

	onInit() {
		this.element.classList.add('can-drag');
		this.listener.on('dragstart', this.start);
		this.listener.on('dragend', this.end.bind(this));
	}

	onDestroy() {
		this.element.classList.remove('can-drag');
		this.listener.off()
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