import Directive from '../directive';
import TemplateLink from '../template/template.link';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TD_CORE_NAME} from 'src/definition';

class TdCore extends Directive(TD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const model = this.view.model;
		const column = this.column;
		const cache = model.body().cache;
		let link = cache.find(column.key);
		if (!link) {
			const build = cellBuilder(this.template);
			link = build('body', model, column);
			cache.set(column.key, link);
		}

		link(this.$element, this.$scope);
	}

	get value() {
		const column = this.column;
		const row = this.row;
		return this.view.body.value(row, column);
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