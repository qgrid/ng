import Directive from 'ng/directives/directive';
import TemplateLink from '../template/template.link';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TF_CORE_NAME} from 'ng/definition';
import {GRID_PREFIX} from 'core/definition';

class TfCore extends Directive(TF_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const column = this.column;
		const element = this.$element[0];

		element.classList.add(`${GRID_PREFIX}-${column.key}`);
		element.classList.add(`${GRID_PREFIX}-${column.type}`);
		if(column.hasOwnProperty('editor')) {
			element.classList.add(`${GRID_PREFIX}-${column.editor}`);
		}

		const model = this.view.model;
		const cache = model.foot().cache;
		const rowIndex = this.rowIndex;
		const key = rowIndex > 0 ? column.key + rowIndex : column.key;
		let link = cache.find(key);
		if (!link) {
			const build = cellBuilder(this.template);
			link = build('foot', this.view.model, this.column);
			cache.set(key, link);
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