import Directive from '../directive';
import TemplateCore from '../template/template.core';
import {get as getValue} from 'ng/services/value';
import {VIEW_CORE_NAME, TD_CORE_NAME} from 'src/definition';

class TdCore extends Directive(TD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);

		Object.defineProperty(this.$scope, '$view', {get: () => this.view});
	}

	onInit() {
		const state = this.view.model.body();
		const key = this.column.key;
		const type = this.column.type || 'text';
		const link = this.template.link(
			`qgrid.body.${type}.cell.tpl.html`,
			state.resource,
			key
		);

		link(this.$element, this.$scope);
	}

	get value() {
		const column = this.column;
		const row = this.row;
		return getValue(row, column);
	}

	get rowIndex() {
		// use vscroll.row + vscroll.position in the future
		return this.$scope.$parent.$index;
	}

	get column() {
		return this.$scope.$column.model;
	}

	get row() {
		return this.$scope.$row;
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