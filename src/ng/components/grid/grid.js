import RootComponent from '../root.component';
import {GRID_PREFIX} from 'core/definition'

export class Grid extends RootComponent {
	constructor($element, $transclude, serviceFactory, theme) {
		super('data', 'selection', 'sort', 'group', 'pivot', 'edit');

		this.$element = $element;
		this.$transclude = $transclude;
		this.serviceFactory = model => serviceFactory.service(model);
		this.theme = theme;
		this.markup = {};
	}

	onInit() {
		this.initTheme();
		this.compile();

		const model = this.model;
		const service = this.serviceFactory(model);

		model.selectionChanged.watch(e => {
			if (e.changes.hasOwnProperty('items')) {
				this.onSelectionChanged({
					$event: {
						state: model.selection(),
						changes: e.changes
					}
				});
			}
		});

		model.data()
			.triggers
			.forEach(name =>
				model[name + 'Changed']
					.watch(e => service.invalidate(name, e.changes)));
	}

	compile() {
		let template = null;
		let templateScope = null;

		this.$transclude((clone, scope) => {
			template = clone;
			templateScope = scope;

			this.$element.append(clone);
		});

		template.remove();
		templateScope.$destroy();
	}

	initTheme() {
		const element = this.$element[0];
		element.classList.add(GRID_PREFIX);
		element.classList.add(`${GRID_PREFIX}-theme-${this.theme.name}`);
		this.theme.changed.watch(e => {
			element.classList.remove(`${GRID_PREFIX}-theme-${e.oldValue}`);
			element.classList.add(`${GRID_PREFIX}-theme-${e.newValue}`);
		});
	}

	get visibility() {
		// TODO: get rid of that
		return this.model.visibility();
	}
}

Grid.$inject = ['$element', '$transclude', 'qgrid', 'qgridTheme'];

/**
 * By convention all binding should be named in camelCase like: modelname + [P]ropertyname
 */
export default {
	transclude: true,
	templateUrl: 'qgrid.grid.tpl.html',
	controller: Grid,
	controllerAs: '$grid',
	bindings: {
		model: '<',
		dataRows: '<rows',
		dataColumns: '<columns',
		dataPipe: '<pipe',
		selectionItems: '<selection',
		selectionMode: '<',
		onSelectionChanged: '&',
		groupBy: '<',
		pivotBy: '<',
		sortBy: '<',
		sortMode: '@',
		editMode: '@'
	}
};