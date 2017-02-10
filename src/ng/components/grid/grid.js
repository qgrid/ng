import RootComponent from '../root.component';
import Shortcut from 'core/infrastructure/shortcut';
import Navigation from 'core/navigation/navigation';

export class Grid extends RootComponent {
	constructor($element, $transclude, $document, serviceFactory) {
		super('data', 'selection', 'sort', 'group', 'pivot', 'edit');

		this.$element = $element;
		this.$transclude = $transclude;
		this.$document = $document;
		this.serviceFactory = model => serviceFactory.service(model);
	}

	onInit() {
		const model = this.model;
		const service = this.serviceFactory(model);

		const shortcut = new Shortcut(this.$document[0]);
		const navigation = new Navigation(model.navigation);
		shortcut.register('navigation', navigation.commands);

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
}

Grid.$inject = ['$element', '$transclude', '$document', 'qgrid'];

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