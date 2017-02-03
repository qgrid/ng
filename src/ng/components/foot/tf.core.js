import Directive from 'ng/directives/directive';
import TemplateLink from '../template/template.link';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TF_CORE_NAME} from 'src/definition';

class TfCore extends Directive(TF_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const model = this.view.model;
		const column = this.column;
		const cache = model.foot().cache;
		let link = cache.find(column.key);
		if (!link) {
			const build = cellBuilder(this.template);
			link = build('foot', this.view.model, this.column);
			cache.set(column.key, link);
		}

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