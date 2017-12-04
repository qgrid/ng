import Directive from '@grid/view/directives/directive';
import { EventListener, EventManager } from '@grid/core/infrastructure';
import { DROP_NAME, CAN_DROP_NAME, DROP_EFFECT_NAME, ON_DROP_NAME } from '@grid/view/definition';
import { DropCtrl } from '@grid/core/drag/drop.ctrl';
import { DragService } from '@grid/core/drag/drag.service';

class Drop extends Directive(DROP_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.listener = new EventListener(this.element, new EventManager(this));
	}

	onInit() {
		const ctrl = this.ctrl = new DropCtrl(this.view ? this.view.model : null, this);
		this.using(this.listener.on('dragenter', ctrl.enter.bind(ctrl)));
		this.using(this.listener.on('dragover', ctrl.over.bind(ctrl)));
		this.using(this.listener.on('dragleave', ctrl.leave.bind(ctrl)));
		this.using(this.listener.on('drop', ctrl.drop.bind(ctrl)));
	}

	onDestroy() {
		super.onDestroy();

		this.ctrl.dispose();
	}

	drop(e) {
		this.$scope.$evalAsync(() => this.onDrop(e));
	}

	event(e) {
		const target = this.transfer();
		const source = arguments.length
			? DragService.decode(e.getData(DragService.mimeType))
			: DragService.transfer;

		return {
			$event: {
				source: source,
				target: target
			}
		};
	}
}

Drop.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: {
		'transfer': `&${DROP_NAME}`,
		'onDrop': `&${ON_DROP_NAME}`,
		'canDrop': `&${CAN_DROP_NAME}`,
		'effect': `@${DROP_EFFECT_NAME}`
	},
	controllerAs: '$drop',
	controller: Drop,
	require: Drop.require,
	link: Drop.link
};