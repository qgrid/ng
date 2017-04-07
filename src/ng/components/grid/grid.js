import RootComponent from '../root.component';
import PipeUnit from 'core/pipe/units/pipe.unit'

export class Grid extends RootComponent {
	constructor($element, $transclude, $document, serviceFactory, $animate) {
		super('data', 'selection', 'sort', 'group', 'pivot', 'edit');

		this.$element = $element;
		this.$transclude = $transclude;
		this.serviceFactory = model => serviceFactory.service(model);
		this.markup = {
			document: $document[0]
		};

		// turn off animation due to virtual scroll performance
		$animate.enabled($element, false);
	}

	onInit() {
		this.compile();

		const model = this.model;
		const service = this.serviceFactory(model);

		model.selectionChanged.watch(e => {
			if (e.hasChanges('entries')) {
				this.onSelectionChanged({
					$event: {
						state: model.selection(),
						changes: e.changes
					}
				});
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				service.invalidate('selection', e.changes, PipeUnit.column);
			}
		});

		const triggers = model.data().triggers;

		// TODO: think about invalidation queue
		let isInvalidated = false;
		Object.keys(triggers)
			.forEach(name =>
				model[name + 'Changed']
					.watch(e => {
						const changes = Object.keys(e.changes);
						if (e.tag.behavior !== 'core' && triggers[name].find(key => changes.indexOf(key) >= 0)) {
							isInvalidated = true;
							service.invalidate(name, e.changes);
						}
					}));

		if (!isInvalidated) {
			service.invalidate('grid');
		}
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
	'$animate'
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
		selectionMode: '@',
		selectionUnit: '@',
		selectionKey: '<',
		onSelectionChanged: '&',
		groupBy: '<',
		pivotBy: '<',
		sortBy: '<',
		sortMode: '@',
		editMode: '@',
		editEnter: '<',
		editCommit: '<',
		editCancel: '<',
		editReset: '<',
	}
};