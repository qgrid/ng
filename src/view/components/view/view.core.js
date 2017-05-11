import Component from '../component';
import Table from '@grid/view/services/dom/table';
import BodyView from '@grid/core/body/body.view';
import HeadView from '@grid/core/head/head.view';
import FootView from '@grid/core/foot/foot.view';
import LayoutView from '@grid/core/layout/layout.view';
import GroupView from '@grid/core/group/group.view';
import PivotView from '@grid/core/pivot/pivot.view';
import NavigationView from '@grid/core/navigation/navigation.view';
import HighlightView from '@grid/core/highlight/highlight.view';
import SortView from '@grid/core/sort/sort.view';
import FilterView from '@grid/core/filter/filter.view';
import EditView from '@grid/core/edit/edit.view';
import SelectionView from '@grid/core/selection/selection.view';
import PaginationView from '@grid/core/pagination/pagination.view';
import TableView from '@grid/core/table/table.view';
import StyleView from '@grid/core/style/style.view';
import ColumnView from '@grid/core/column/column.view';
import ScrollView from '@grid/core/scroll/scroll.view';
import {GRID_NAME, TH_CORE_NAME} from '@grid/view/definition';
import {isUndefined} from '@grid/core/services/utility';
import TemplateLink from '../template/template.link';
import PipeUnit from '@grid/core/pipe/units/pipe.unit';
import AppError from '@grid/core/infrastructure/error';

class ViewCore extends Component {
	constructor($rootScope, $scope, $element, $document, $timeout, $compile, $templateCache, grid, vscroll) {
		super();

		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.element = $element[0];
		this.$timeout = $timeout;
		this.$postLink = this.onLink;
		this.serviceFactory = grid.service.bind(grid);
		this.template = new TemplateLink($compile, $templateCache);
		this.vscroll = vscroll;

		this.markup = {
			document: $document[0]
		};
	}

	onLink() {
		const model = this.model;
		this.pin = this.pin || null;
		const table = new Table(model, this.markup, this.template);
		table.pin = this.pin;

		const service = this.serviceFactory(model);
		const applyFactory = mode => (f, timeout) => {
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

		this.style = new StyleView(model, table);
		this.table = new TableView(model);
		this.head = new HeadView(model, table, TH_CORE_NAME);
		this.body = new BodyView(model, table);
		this.foot = new FootView(model, table);
		this.columns = new ColumnView(model, service);
		this.layout = new LayoutView(model, table, service);
		this.selection = new SelectionView(model, table, applyFactory);
		this.group = new GroupView(model);
		this.pivot = new PivotView(model);
		this.highlight = new HighlightView(model, table, applyFactory);
		this.sort = new SortView(model);
		this.filter = new FilterView(model);
		this.edit = new EditView(model, table, applyFactory);
		this.nav = new NavigationView(model, table, applyFactory);
		this.pagination = new PaginationView(model);
		this.scroll = new ScrollView(model, table, this.vscroll, service, applyFactory);

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
				service.invalidate('selection', e.changes, PipeUnit.column);
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
							service.invalidate(name, e.changes);
						}
					}));

		if (needInvalidate) {
			service.invalidate('grid');
		}
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