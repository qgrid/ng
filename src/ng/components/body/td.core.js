import Directive from 'ng/directives/directive';
import cellBuilder from '../cell/cell.build';
import AppError from 'core/infrastructure/error'
import {VIEW_CORE_NAME, TD_CORE_NAME} from 'ng/definition';
import {GRID_PREFIX} from 'core/definition';

class TdCore extends Directive(TD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$templateScope = null;
	}

	onInit() {
		const column = this.column;
		const element = this.$element[0];

		this.view.style.monitor.cell.add(this.element);

		element.classList.add(`${GRID_PREFIX}-${column.key}`);
		element.classList.add(`${GRID_PREFIX}-${column.type}`);
		if (column.hasOwnProperty('editor')) {
			element.classList.add(`${GRID_PREFIX}-${column.editor}`);
		}

		this.mode('init');
	}

	mode(value) {
		const model = this.view.model;
		const column = this.column;
		const templateScope = this.setup();
		const cache = model.body().cache;
		const element = this.$element[0];

		switch (value) {
			case 'view':
			case 'init': {
				let link = cache.find(column.key);
				if (!link) {
					const build = cellBuilder(this.view.template);
					link = build('body', model, column);
					cache.set(column.key, link);
				}

				link(this.$element, templateScope);
				if (value !== 'init') {
					element.classList.remove(`${GRID_PREFIX}-edit`);
				}
				break;
			}
			case 'edit': {
				let link = cache.find(`${column.key}.edit`);
				if (!link) {
					const build = cellBuilder(this.view.template, 'edit');
					link = build('body', model, column);
					cache.set(`${column.key}.edit`, link);
				}

				link(this.$element, templateScope);
				element.classList.add(`${GRID_PREFIX}-edit`);
			}
				break;
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

	get label() {
		const column = this.column;
		const row = this.row;
		return this.view.body.label(row, column);
	}

	get rowIndex() {
		// use vscroll.row + vscroll.position in the future
		return this.$scope.$parent.$index;
	}

	get columnIndex() {
		// use vscroll.column + vscroll.position in the future
		return this.$scope.$index;
	}

	get column() {
		return this.$scope.$column.model;
	}

	get row() {
		return this.$scope.$row;
	}

	onDestroy() {
		if (this.$templateScope) {
			this.$templateScope.$destroy();
		}

		this.view.style.monitor.cell.remove(this.$element[0]);
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
	link: TdCore.link
};