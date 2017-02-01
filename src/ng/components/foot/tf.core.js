import Directive from '../directive';
import TemplateCore from '../template/template.core';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TF_CORE_NAME} from 'src/definition';

class TfCore extends Directive(TF_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);

		Object.defineProperty(this.$scope, '$view', {get: () => this.view});
	}

	onInit() {
		const build = cellBuilder(this.template);
		const link = build('foot', this.view.model, this.column);
		link(this.$element, this.$scope);
	}

	get value() {
		const column = this.column;
		return this.view.foot.value(column);
	}

	get rowIndex() {
		return this.$scope.$parent.$index;
	}

	get column() {
		return this.$scope.$column.model;
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