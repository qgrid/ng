import Directive from '@grid/view/directives/directive';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TF_CORE_NAME} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';

class TfCore extends Directive(TF_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.$element = $element;
		this.$scope = $scope;
	}

	onInit() {
		const column = this.column;
		const element = this.element;

		this.view.table.foot.cellBucket.set(this, this.rowIndex, this.columnIndex);

		element.classList.add(`${GRID_PREFIX}-${column.key}`);
		element.classList.add(`${GRID_PREFIX}-${column.type}`);
		if (column.hasOwnProperty('editor')) {
			element.classList.add(`${GRID_PREFIX}-${column.editor}`);
		}

		const model = this.view.model;
		const cache = model.foot().cache;
		const rowIndex = this.rowIndex;
		const key = rowIndex > 0 ? column.key + rowIndex : column.key;
		let link = cache.find(key);
		if (!link) {
			const build = cellBuilder(this.view.template);
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

	get columnIndex() {
		return this.$scope.$index;
	}

	get element() {
		return this.$element[0];
	}

	onDestroy() {
		this.view.table.foot.cellBucket.remove(this, this.rowIndex, this.columnIndex);
	}
}

TfCore.$inject = [
	'$scope',
	'$element'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TfCore,
	require: TfCore.require,
	link: TfCore.link
};