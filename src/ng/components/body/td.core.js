import Directive from '../directive';
import {GRID_NAME, TD_CORE_NAME} from '../../../definition';
import TemplateCore from '../template/template.core';

class TdCore extends Directive(TD_CORE_NAME, {root: `^^${GRID_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);
	}

	onInit() {
		const state = this.root.model.body();
		const key = this.$scope.$column.key;
		const link = this.template.link(
			'qgrid.body.cell.tpl.html',
			state.resource,
			key
		);

		link(this.$element, this.$scope);
	}

	get value() {
		const column = this.$scope.$column;
		const row = this.$scope.$row;

		return column.$value
			? column.$value({$row: row})
			: column.value
				? column.value(row)
				: row[column.key];
	}

	get rowIndex() {
		return this.$scope.$parent.$index;
	}
}

TdCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TdCore,
	require: TdCore.require,
	link: TdCore.link
};