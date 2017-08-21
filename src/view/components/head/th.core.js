import Directive from '@grid/view/directives/directive';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TH_CORE_NAME, TABLE_CORE_NAME, GRID_NAME} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';
import * as css from '@grid/core/services/css';

class ThCore extends Directive(TH_CORE_NAME, {
	view: `^^${VIEW_CORE_NAME}`,
	table: `^^${TABLE_CORE_NAME}`,
	root: `^^${GRID_NAME}`
}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.$attrs = $attrs;
	}

	onInit() {
		const column = this.column;
		const element = this.element;

		this.root.bag.head.addCell(this);
		element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.key}`));
		element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.type}`));
		if (column.type === 'filter-row') {
			element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.sourceKey}`));
			element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.sourceType}`));
		}
		if (column.editor) {
			element.classList.add(css.escapeAttr(`${GRID_PREFIX}-${column.editor}`));
		}

		if (this.$attrs[TH_CORE_NAME] !== 'body') {
			const model = this.view.model;
			const cache = model.head().cache;
			let link = cache.find(column.key);
			if (!link) {
				const build = cellBuilder(this.root.template);
				link = build('head', model, this.column);
				cache.set(column.key, link);
			}

			link(this.$element, this.$scope);
		}
	}

	get column() {
		return this.$scope.$column.model;
	}

	get rowIndex() {
		return this.$scope.$parent.$index;
	}

	get columnIndex() {
		return this.table.columnStartIndex + this.$scope.$index;
	}

	get element() {
		return this.$element[0];
	}

	onDestroy() {
		this.root.bag.head.deleteCell(this);
	}
}

ThCore.$inject = [
	'$scope',
	'$element',
	'$attrs'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: ThCore,
	require: ThCore.require,
	link: ThCore.link
};