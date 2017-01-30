import Directive from '../directive';
import EventListener from 'core/infrastructure/event.listener';
import DragService from './drag.service';
import {DRAG_NAME, DROP_EFFECT_NAME} from 'src/definition';

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
		this.element.classList.add('drag');
		const source = this.transfer();
		const transfer = e.dataTransfer;
		transfer.setData(DragService.mimeType, DragService.encode(source));
		transfer.effectAllowed = this.effect || 'move';
		DragService.transfer = source;
	}

	end() {
		this.element.classList.remove('drag');
		DragService.transfer = null;
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