import Directive from 'ng/directives/directive';
import TemplateLink from '../template/template.link';
import cellBuilder from '../cell/cell.build';
import AppError from 'core/infrastructure/error'
import {VIEW_CORE_NAME, TD_CORE_NAME} from 'src/definition';

class TdCore extends Directive(TD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$templateScope = null;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const column = this.column;
		this.$element[0].classList.add(column.key);
		this.$element[0].classList.add(column.type);
		if(column.hasOwnProperty('editor')) {
			this.$element[0].classList.add(column.editor);
		}

		this.mode('init');
		this.view.model.navigationChanged.on(e => {
			if (e.state.row === this.rowIndex && e.state.column === this.columnIndex) {
				this.$element[0].classList.add('focused');
			} else {
				this.$element[0].classList.remove('focused');
			}
		});

	}

	mode(value) {
		const model = this.view.model;
		const column = this.column;
		const templateScope = this.setup();
		const cache = model.body().cache;

		switch (value) {
			case 'view':
			case 'init': {
				let link = cache.find(column.key);
				if (!link) {
					const build = cellBuilder(this.template);
					link = build('body', model, column);
					cache.set(column.key, link);
				}

				link(this.$element, templateScope);
				if (value !== 'init') {
					this.$element[0].classList.remove('edit');
				}
				break;
			}
			case 'edit': {
				let link = cache.find(`${column.key}.edit`);
				if (!link) {
					const build = cellBuilder(this.template, 'edit');
					link = build('body', model, column);
					cache.set(`${column.key}.edit`, link);
				}

				link(this.$element, templateScope);
				this.$element[0].classList.add('edit');
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