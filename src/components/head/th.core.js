'use strict';

import Directive from '../directive';
import {GRID_NAME, TH_CORE_NAME} from '../../definition';
import TemplateCore from '../template/template.core';

class ThCore extends Directive(TH_CORE_NAME, {root: `^^${GRID_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);
	}

	onInit() {
		const state = this.root.model.head();
		const key = this.$scope.$column.key;
		const index = this.rowIndex;
		const link = this.template.link(
			'qgrid.head.cell.tpl.html',
			state.resource,
			index === 0 ? key : key + index
		);

		link(this.$element, this.$scope);
	}

	get rowIndex() {
		return this.$scope.$parent.$index;
	}
}

ThCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: ThCore,
	require: ThCore.require,
	link: ThCore.link
};