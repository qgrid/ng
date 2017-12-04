import Directive from '@grid/view/directives/directive';
import cellBuilder from '../cell/cell.build';
import {AppError} from '@grid/core/infrastructure';
import {VIEW_CORE_NAME, TD_CORE_NAME, GRID_NAME} from '@grid/view/definition';
import {TdCtrl} from '@grid/core/cell/td.ctrl';
 
const classify = TdCtrl.classify;

class TdCore extends Directive(TD_CORE_NAME, {
	view: `^^${VIEW_CORE_NAME}`,
	root: `^^${GRID_NAME}`
}) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$templateScope = null;
	}

	onInit() {
		this.root.bag.body.addCell(this);
		classify(this.element, this.column);
	
		this.enterViewMode();
	}

	enterViewMode() {
		const model = this.view.model;
		const column = this.column;
		const templateScope = this.setup();
		const cache = model.body().cache;
		const key = column.key;

		let link = cache.find(key);
		if (!link) {
			const build = cellBuilder(this.root.template);
			link = build('body', model, column);
			cache.set(key, link);
		}

		link(this.$element, templateScope);
	}

	enterEditMode() {
		const model = this.view.model;
		const column = this.column;
		const templateScope = this.setup();
		const cache = model.body().cache;
		const key = `${column.key}.edit`;

		let link = cache.find(key);
		if (!link) {
			const build = cellBuilder(this.root.template, 'edit');
			link = build('body', model, column);
			cache.set(key, link);
		}

		link(this.$element, templateScope);
	}

	mode(value) {
		switch (value) {
			case 'view': {
				this.enterViewMode();
				TdCtrl.viewMode(this.element);
				break;
			}
			case 'edit': {
				TdCtrl.editMode(this.element);
				this.enterEditMode();
				break;
			}
			default:
				throw new AppError('td.core', `Invalid mode ${value}`);
		}
	}

	setup() {
		if (this.$templateScope) {
			this.$templateScope.$destroy();
		}

		this.$templateScope = this.$scope.$new();
		return this.$templateScope;
	}

	get value() {
		const column = this.column;
		const row = this.row;
		return this.view.body.value(row, column);
	}

	set value(value) {
		const column = this.column;
		const row = this.row;
		this.view.body.value(row, column, value);
	}

	get label() {
		const column = this.column;
		const row = this.row;
		return this.view.body.label(row, column);
	}

	set label(label) {
		const column = this.column;
		const row = this.row;
		this.view.body.label(row, column, label);
	}

	get rowIndex() {
		return this.view.scroll.y.container.position + this.$scope.$parent.$index;
	}

	get columnIndex() {
		return this.$scope.$column.index;
	}

	get column() {
		return this.$scope.$column.model;
	}

	get row() {
		return this.$scope.$row;
	}

	get element() {
		return this.$element[0];
	}

	onDestroy() {
		if (this.$templateScope) {
			this.$templateScope.$destroy();
		}

		this.root.bag.body.deleteCell(this);
	}
}

TdCore.$inject = [
	'$scope',
	'$element'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TdCore,
	require: TdCore.require,
	link: TdCore.link,
	scope: false
};