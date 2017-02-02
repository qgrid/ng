import Directive from '../directive';
import TemplateCore from '../template/template.link';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TH_CORE_NAME} from 'src/definition';

class ThCore extends Directive(TH_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);

		Object.defineProperty(this.$scope, '$view', {get: () => this.view});
	}

	onInit() {
		const build = cellBuilder(this.template);
		const link = build('head', this.view.model, this.column);
		link(this.$element, this.$scope);
	}

	get column() {
		return this.$scope.$column.model;
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