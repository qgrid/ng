import Directive from '@grid/view/directives/directive';
import {TD_ALIGN_CORE_NAME} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';
import * as css from '@grid/core/services/css';

class TdAlignCore extends Directive(TD_ALIGN_CORE_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
	}

	onInit() {
		const column = this.column;
		const element = this.element;

		element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.key}`));
		element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.type}`));
		if (column.editor) {
			element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.editor}`));
		}
	}

	get column() {
		return this.$scope.$column.model;
	}
}

TdAlignCore.$inject = [
	'$scope',
	'$element'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TdAlignCore,
	require: TdAlignCore.require,
	link: TdAlignCore.link,
	scope: false
};