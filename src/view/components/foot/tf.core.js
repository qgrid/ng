import Directive from '@grid/view/directives/directive';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TF_CORE_NAME, TABLE_CORE_NAME, GRID_NAME} from '@grid/view/definition';
import {TdCtrl} from '@grid/core/cell/td.ctrl';

const classify = TdCtrl.classify;

class TfCore extends Directive(TF_CORE_NAME, {
	view: `^^${VIEW_CORE_NAME}`,
	table: `^^${TABLE_CORE_NAME}`,
	root: `^^${GRID_NAME}`
}) {
	constructor($scope, $element) {
		super();

		this.$element = $element;
		this.$scope = $scope;
	}

	onInit() {
		const column = this.column;
		this.root.bag.foot.addCell(this);

		classify(this.element, column);

		const model = this.view.model;
		const cache = model.foot().cache;
		const rowIndex = this.rowIndex;
		const key = rowIndex > 0 ? column.key + rowIndex : column.key;
		let link = cache.find(key);
		if (!link) {
			const build = cellBuilder(this.root.template);
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

	get columnIndex() {
		return this.$scope.column.index;
	}

	get element() {
		return this.$element[0];
	}

	onDestroy() {
		this.root.bag.foot.deleteCell(this);
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
	link: TfCore.link,
	scope: false
};