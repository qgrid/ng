import Directive from '@grid/view/directives/directive';
import {VIEW_CORE_NAME, HEAD_CORE_NAME, GRID_NAME} from '@grid/view/definition';
import {HeadCtrl} from '@grid/core/head/head.ctrl';
import {EventListener, EventManager} from '@grid/core/infrastructure';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`, root: `^^${GRID_NAME}`,}) {
	constructor($scope, $element) {
		super();

		// this.$scope should be set cause it used by box.js
		this.$scope = $scope;
		this.element = $element[0];
		Object.defineProperty($scope, '$view', {get: () => this.view});
	}

	onInit() {
		const ctrl = new HeadCtrl(this.view, this.root.bag);
		const listener = new EventListener(this.element, new EventManager(this));
		this.using(listener.on('mousemove', e => ctrl.onMouseMove(e)));
		this.using(listener.on('mouseleave', e => ctrl.onMouseLeave(e)));
	}
}

HeadCore.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: {},
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};