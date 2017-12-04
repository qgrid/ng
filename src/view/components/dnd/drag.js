import Directive from '@grid/view/directives/directive';
import { EventListener, EventManager } from '@grid/core/infrastructure';
import { DragCtrl } from '@grid/core/drag/drag.ctrl';
import { DRAG_NAME, DROP_EFFECT_NAME, CAN_DRAG_NAME, VIEW_CORE_NAME } from '@grid/view/definition';

class Drag extends Directive(DRAG_NAME, { view: `^^?${VIEW_CORE_NAME}` }) {
	constructor($element) {
		super();

		this.element = $element[0];
		this.listener = new EventListener(this.element, new EventManager(this));
	}

	onInit() {
		const ctrl = this.ctrl = new DragCtrl(this.view ? this.view.model : null, this);
		this.using(this.listener.on('dragstart', ctrl.start.bind(ctrl)));
		this.using(this.listener.on('dragend', ctrl.end.bind(ctrl)));
	}

	onDestroy() {
		super.onDestroy();

		this.ctrl.dispose();
	}

	event() {
		const source = this.transfer();
		return {
			$event: {
				source: source,
				target: null
			}
		};
	}
}

Drag.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: {
		'transfer': `&${DRAG_NAME}`,
		'effect': `@${DROP_EFFECT_NAME}`,
		'canDrag': `&${CAN_DRAG_NAME}`
	},
	controllerAs: '$drag',
	controller: Drag,
	require: Drag.require,
	link: Drag.link
};