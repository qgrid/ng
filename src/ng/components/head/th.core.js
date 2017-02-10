import Directive from 'ng/directives/directive';
import TemplateLink from '../template/template.link';
import cellBuilder from '../cell/cell.build';
import {VIEW_CORE_NAME, TH_CORE_NAME, GRID_PREFIX} from 'src/definition';

class ThCore extends Directive(TH_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache, $attrs) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.$attrs = $attrs;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const column = this.column;
		const element = this.$element[0];
		element.classList.add(`${GRID_PREFIX}-${column.key}`);
		element.classList.add(`${GRID_PREFIX}-${column.type}`);
		if (column.hasOwnProperty('editor')) {
			element.classList.add(`${GRID_PREFIX}-${column.editor}`);
		}

		if (this.$attrs[TH_CORE_NAME] !== 'body') {
			const model = this.view.model;
			const cache = model.head().cache;
			let link = cache.find(column.key);
			if (!link) {
				const build = cellBuilder(this.template);
				link = build('head', model, this.column);
				cache.set(column.key, link);
			}

			link(this.$element, this.$scope);
		}

		const model = this.view.model;
		model.layoutChanged.on(e => {
			if (e.changes.hasOwnProperty('columns')) {
				const columns = e.state.columns;
				for (let [key, context] of Object.entries(columns)) {
					if(key === column.key) {
						this.$element.css({
							'width': context.width + 'px',
							'max-width': context.width + 'px',
							'min-width': context.width + 'px'
						});
					}
				}
			}
		});
	}

	get column() {
		return this.$scope.$column.model;
	}
}

ThCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache',
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