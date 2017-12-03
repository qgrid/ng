import Directive from '@grid/view/directives/directive';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {DragService} from '@grid/core/drag/drag.service';
import {DRAG_NAME, DROP_EFFECT_NAME, CAN_DRAG_NAME, VIEW_CORE_NAME} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';

class Drag extends Directive(DRAG_NAME, {view: `^^?${VIEW_CORE_NAME}`}) {
	constructor($element) {
		super();

		this.element = $element[0];
		this.listener = new EventListener(this.element, new EventManager(this));
	}

	onInit() {
		this.element.classList.add(`${GRID_PREFIX}-can-drag`);
		this.using(this.listener.on('dragstart', this.start));
		this.using(this.listener.on('dragend', this.end));
	}

	onDestroy() {
		super.onDestroy();

		this.element.classList.remove(`${GRID_PREFIX}-can-drag`);
	}

	start(e) {
		const transfer = e.dataTransfer;
		if (this.canDrag(this.event()) === false) {
			e.preventDefault();
			transfer.effectAllowed = 'none';
			return false;
		}

		const source = this.transfer();
		this.element.classList.add(`${GRID_PREFIX}-drag`);
		transfer.setData(DragService.mimeType, DragService.encode(source));
		transfer.effectAllowed = this.effect || 'move';
		transfer.setDragImage(this.element, 0, 0);
		DragService.transfer = source;

		if (this.view) {
			const model = this.view.model;
			model.drag({isActive: true});
		}
	}

	end() {
		this.element.classList.remove(`${GRID_PREFIX}-drag`);
		DragService.transfer = null;

		if (this.view) {
			const model = this.view.model;
			model.drag({isActive: false});
		}
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