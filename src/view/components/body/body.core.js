import Directive from '@grid/view/directives/directive';
import { VIEW_CORE_NAME, BODY_CORE_NAME, GRID_NAME, TABLE_CORE_NAME } from '@grid/view/definition';
import { EventListener, EventManager } from '@grid/core/infrastructure';
import { BodyCtrl } from '@grid/core/body/body.ctrl';

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
		const invokeListener = new EventListener(this.element, new EventManager(this, view.invoke));
		const applyListener = new EventListener(this.element, new EventManager(this, view.apply));

		this.using(invokeListener.on('scroll', () => ctrl.onScroll({
			scrollTop: element.scrollTop,
			scrollLeft: element.scrollLeft
		}), { passive: true }));

		this.using(invokeListener.on('wheel', e => this.onWheel({
			deltaY: e.deltaY,
			scrollHeight: element.scrollHeight,
			offsetHeight: element.offsetHeight
		})));

		this.using(applyListener.on('click', ctrl.onClick.bind(ctrl)));
		this.using(invokeListener.on('mousedown', ctrl.onMouseDown.bind(ctrl)));
		this.using(invokeListener.on('mouseup', ctrl.onMouseUp.bind(ctrl)));
		this.using(invokeListener.on('mousemove', ctrl.onMouseMove.bind(ctrl)));
		this.using(invokeListener.on('mouseleave', ctrl.onMouseLeave.bind(ctrl)));
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