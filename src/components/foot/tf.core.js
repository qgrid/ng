'use strict';

import Directive from '../directive';
import {GRID_NAME, TF_CORE_NAME} from '../../definition';
import TemplateCore from '../template/template.core';

class TfCore extends Directive(TF_CORE_NAME, {root: `^^${GRID_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);
	}

	onInit() {
		const state = this.root.model.foot();
		const key = this.$scope.$column.key;
		const link = this.template.link(
			'qgrid.foot.cell.tpl.html',
			state.resource,
			key
		);

		link(this.$element, this.$scope);
	}
}

TfCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TfCore,
	require: TfCore.require,
	link: TfCore.link
};