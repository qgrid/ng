import RootComponent from '../root.component';
import {GRID_PREFIX} from 'core/definition'

export class Grid extends RootComponent {
	constructor($element, $transclude, $document, serviceFactory, theme) {
		super('data', 'selection', 'sort', 'group', 'pivot', 'edit');

		this.$element = $element;
		this.$transclude = $transclude;
		this.serviceFactory = model => serviceFactory.service(model);
		this.theme = theme;
		this.markup = {
			document: $document[0]
		};
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

		model.navigationChanged.watch(e => {
			if (e.changes.hasOwnProperty('row') ||
				e.changes.hasOwnProperty('column')) {
				const nav = e.state;
				let cell = null;
				if (nav.column >= 0 && nav.row >= 0) {
					const element = this.markup.body.rows[nav.row].cells[nav.column];
					const scope = angular.element(element).scope();
					cell = scope.$cell;
				}

				model.navigation({
					active: {
						cell: cell
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

Grid.$inject = [
	'$element',
	'$transclude',
	'$document',
	'qgrid',
	'qgridTheme'
];

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