import Directive from '../directive';
import {VIEW_CORE_NAME, TF_CORE_NAME} from '../../../definition';
import TemplateCore from '../template/template.core';
import aggregation from '../../../core/services/aggregation';
import {getFactory as getValueFactory} from '../../services/value';

class TfCore extends Directive(TF_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);

		Object.defineProperty(this.$scope, '$view', {get: () => this.view});
	}

	onInit() {
		const state = this.view.model.foot();
		const key = this.$scope.$column.key;
		const index = this.rowIndex;
		const link = this.template.link(
			'qgrid.foot.cell.tpl.html',
			state.resource,
			index === 0 ? key : key + index
		);

		link(this.$element, this.$scope);
	}

	get value(){
		const column = this.$scope.$column;
		if (column.hasOwnProperty('aggregation')) {
			const rows = this.view.model.view().rows;
			const getValue = getValueFactory(column);
			return aggregation[column.aggregation](rows, getValue);
		}
	}

	get rowIndex() {
		return this.$scope.$parent.$index;
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