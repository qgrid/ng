import RootComponent from '../root.component';
import {GRID_PREFIX} from 'src/definition'

export class Grid extends RootComponent {
	constructor($element, $transclude, serviceFactory, theme) {
		super('data', 'selection', 'sort', 'group', 'pivot', 'edit');

		this.$element = $element;
		this.$transclude = $transclude;
		this.serviceFactory = model => serviceFactory.service(model);
		this.theme = theme;
	}

	onInit() {
		this.initTheme();

		const model = this.model;
		const service = this.serviceFactory(model);

		let template = null;
		let templateScope = null;

		this.$transclude((clone, scope) => {
			template = clone;
			templateScope = scope;

			this.$element.append(clone);
		});

		template.remove();
		templateScope.$destroy();

		model.selectionChanged.on(e => {
			if (e.changes.hasOwnProperty('items')) {
				this.onSelectionChanged({
					$event: {
						state: model.selection(),
						changes: e.changes
					}
				});
			}
		});

		// TODO: batch invalidate ?
		// TODO: rebind on triggers changed
		model.data()
			.triggers
			.forEach(name =>
				model[name + 'Changed']
					.watch(e => service.invalidate(name, e.changes)));
	}

	get visibility() {
		return this.model.visibility();
	}

	initTheme() {
		const element = this.$element[0];
		element.classList.add(GRID_PREFIX);
		element.classList.add(`${GRID_PREFIX}-theme-${this.theme.name}`);
		this.theme.changed.on(e => {
			element.classList.remove(`${GRID_PREFIX}-theme-${e.oldValue}`);
			element.classList.add(`${GRID_PREFIX}-theme-${e.newValue}`);
		});
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