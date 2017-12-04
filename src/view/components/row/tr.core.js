import Directive from '@grid/view/directives/directive';
import {VIEW_CORE_NAME, TR_CORE_NAME, GRID_NAME} from '@grid/view/definition';

class TrCore extends Directive(TR_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`, root: `^^${GRID_NAME}`}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$attrs = $attrs;
		this.element = $element[0];
	}

	onInit() {
		const source = this.source;
		const root = this.root;
		root.bag[source].addRow(this);

		if (this.$scope.$last) {
			const scene = root.model.scene;
			scene({
				round: scene().round + 1
			}, {
				source: 'tr.core',
				behavior: 'core'
			});
		}
	}

	onDestroy() {
		const source = this.source;
		this.root.bag[source].deleteRow(this);
	}

	get source() {
		return this.$attrs[TR_CORE_NAME];
	}

	get index() {
		return this.view.scroll.y.container.position + this.$scope.$index;
	}

	get model() {
		return this.$scope.$row;
	}
}

TrCore.$inject = [
	'$scope',
	'$element',
	'$attrs'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$tr',
	controller: TrCore,
	require: TrCore.require,
	link: TrCore.link,
	scope: false
};