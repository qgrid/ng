import Component from '../component';
import Table from '@grid/view/services/dom/table';
import {BodyView} from '@grid/core/body';
import {HeadView} from '@grid/core/head';
import {FootView} from '@grid/core/foot';
import {LayoutView} from '@grid/core/layout';
import {GroupView} from '@grid/core/group';
import {PivotView} from '@grid/core/pivot';
import {NavigationView} from '@grid/core/navigation';
import {HighlightView} from '@grid/core/highlight';
import {SortView} from '@grid/core/sort';
import {FilterView} from '@grid/core/filter';
import {EditView} from '@grid/core/edit';
import {SelectionView} from '@grid/core/selection';
import {PaginationView} from '@grid/core/pagination';
import {TableView} from '@grid/core/table';
import {StyleView} from '@grid/core/style';
import {ColumnView} from '@grid/core/column';
import {ScrollView} from '@grid/core/scroll';
import {GRID_NAME, TH_CORE_NAME} from '@grid/view/definition';
import {isUndefined} from '@grid/core/services/utility';
import {PipeUnit} from '@grid/core/pipe/units';
import {AppError} from '@grid/core/infrastructure';
import TemplateLink from '../template/template.link';
import {CommandManager, Vscroll} from '@grid/view/services';

class ViewCore extends Component {
	constructor($rootScope, $scope, $element, $document, $timeout, $compile, $templateCache, grid, vscroll) {
		super();

		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.element = $element[0];
		this.$timeout = $timeout;
		this.$postLink = this.build;
		this.serviceFactory = grid.service.bind(grid);
		this.template = new TemplateLink($compile, $templateCache);
		this.vscroll = vscroll;

		this.markup = {
			document: $document[0]
		};
	}

	build() {
		const model = this.model;
		this.pin = this.pin || null;
		const table = new Table(model, this.markup, this.template);
		table.pin = this.pin;

		const gridService = this.serviceFactory(model);

		const commandManager = new CommandManager(this.applyFactory('async'));
		const vscroll = new Vscroll(this.vscroll, this.applyFactory('async'));

		this.style = new StyleView(model, table);
		this.table = new TableView(model);
		this.head = new HeadView(model, table, TH_CORE_NAME);
		this.body = new BodyView(model, table);
		this.foot = new FootView(model, table);
		this.columns = new ColumnView(model, gridService);
		this.layout = new LayoutView(model, table, gridService);
		this.selection = new SelectionView(model, table, commandManager);
		this.group = new GroupView(model);
		this.pivot = new PivotView(model);
		this.highlight = new HighlightView(model, table, this.$timeout);
		this.sort = new SortView(model);
		this.filter = new FilterView(model);
		this.edit = new EditView(model, table, commandManager);
		this.nav = new NavigationView(model, table, commandManager);
		this.pagination = new PaginationView(model);
		this.scroll = new ScrollView(model, table, vscroll, gridService);

		// TODO: how we can avoid that?
		this.$scope.$watch(this.style.invalidate.bind(this.style));

		model.selectionChanged.watch(e => {
			if (e.hasChanges('entries')) {
				this.root.onSelectionChanged({
					$event: {
						state: model.selection(),
						changes: e.changes
					}
				});
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				gridService.invalidate('selection', e.changes, PipeUnit.column);
			}
		});

		const triggers = model.data().triggers;

		// TODO: think about invalidation queue
		let needInvalidate = true;
		Object.keys(triggers)
			.forEach(name =>
				model[name + 'Changed']
					.watch(e => {
						const changes = Object.keys(e.changes);
						if (e.tag.behavior !== 'core' && triggers[name].find(key => changes.indexOf(key) >= 0)) {
							needInvalidate = false;
							gridService.invalidate(name, e.changes);
						}
					}));

		if (needInvalidate) {
			gridService.invalidate('grid');
		}
	}

	applyFactory(mode) {
		return (f, timeout) => {
			if (isUndefined(timeout)) {
				switch (mode) {
					case 'async': {
						return this.$scope.$applyAsync(f);
					}
					case 'sync': {
						const phase = this.$rootScope.$$phase; // eslint-disable-line angular/no-private-call
						if (phase == '$apply' || phase == '$digest') {
							return f();
						}
						return this.$scope.$apply(f);
					}
					default:
						throw new AppError('view.core', `Invalid apply mode '${mode}'`);
				}
			}

			return this.$timeout(f, timeout);
		};
	}

	onDestroy() {
		this.layout.destroy();
		this.nav.destroy();
		this.selection.destroy();
	}

	templateUrl(key) {
		return `qgrid.${key}.tpl.html`;
	}

	get model() {
		return this.root.model;
	}

	get visibility() {
		return this.model.visibility();
	}

	get rows() {
		return this.model.data().rows;
	}
}

ViewCore.$inject = [
	'$rootScope',
	'$scope',
	'$element',
	'$document',
	'$timeout',
	'$compile',
	'$templateCache',
	'qgrid',
	'vscroll'
];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	},
	bindings: {
		'pin': '@'
	}
}