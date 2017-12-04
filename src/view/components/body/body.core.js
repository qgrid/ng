import Directive from '@grid/view/directives/directive';
import { VIEW_CORE_NAME, BODY_CORE_NAME, GRID_NAME, TABLE_CORE_NAME } from '@grid/view/definition';
import { EventListener, EventManager } from '@grid/core/infrastructure';
import { BodyCtrl } from '@grid/core/body/body.ctrl';
import { noop } from '@grid/core/utility';

class BodyCore extends Directive(BODY_CORE_NAME, {
	view: `^^${VIEW_CORE_NAME}`,
	root: `^^${GRID_NAME}`,
	table: `^^${TABLE_CORE_NAME}`
}) {
	constructor($scope, $element) {
		super();

		// this.$scope should be set cause it used by box.js
		this.$scope = $scope;
		this.element = $element[0];

		Object.defineProperty($scope, '$view', {
			get: () => this.view
		});
	}

	onInit() {
		const view = this.view;
		const element = this.element;

		const ctrl = new BodyCtrl(view, this.root.bag);
		const listener = new EventListener(this.element, new EventManager(this, view.invoke));

		this.using(listener.on('scroll', () => ctrl.onScroll({
			scrollTop: element.scrollTop,
			scrollLeft: element.scrollLeft
		}), { passive: true }));

		this.using(listener.on('wheel', e => ctrl.onWheel({
			deltaY: e.deltaY,
			scrollHeight: element.scrollHeight,
			offsetHeight: element.offsetHeight
		})));

		this.using(listener.on('mousedown', ctrl.onMouseDown.bind(ctrl)));
		this.using(listener.on('mouseup', ctrl.onMouseUp.bind(ctrl)));
		this.using(listener.on('mousemove', ctrl.onMouseMove.bind(ctrl)));
		this.using(listener.on('mouseleave', ctrl.onMouseLeave.bind(ctrl)));
		this.using(listener.on('click', ctrl.onClick.bind(ctrl)));

		this.using(this.view.model.selectionChanged.on(e => {
			if (e.hasChanges('items')) {
				this.view.apply(noop);
			}
		}));
	}

	get selection() {
		return this.view.model.selection();
	}
}

BodyCore.$inject = [
	'$scope',
	'$element'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link,
	scope: true
};