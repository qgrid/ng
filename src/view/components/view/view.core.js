import Component from '../component';
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
import {StyleView} from '@grid/core/style';
import {ColumnView} from '@grid/core/column';
import {ScrollView} from '@grid/core/scroll';
import {RowDetailsView} from '@grid/core/row-details';
import {GRID_NAME, TH_CORE_NAME} from '@grid/view/definition';
import {PipeUnit} from '@grid/core/pipe/units';
import {Vscroll} from '@grid/view/services';

class ViewCore extends Component {
	constructor($rootScope, $scope, $element, $timeout, grid, vscroll) {
		super();

		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.element = $element[0];
		this.$timeout = $timeout;
		this.$postLink = this.build;
		this.serviceFactory = grid.service.bind(grid);
		this.vscroll = vscroll;
	}

	build() {
		const model = this.model;
		const root = this.root;
		const table = root.table;
		const commandManager = root.commandManager;
		const gridService = this.serviceFactory(model);
		const vscroll = new Vscroll(this.vscroll, root.applyFactory());

		this.style = new StyleView(model, table);
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
		this.rowDetails = new RowDetailsView(model, table);

		// TODO: how we can avoid that?
		this.$scope.$watch(this.style.invalidate.bind(this.style));

		model.selectionChanged.watch(e => {
			if (e.hasChanges('items')) {
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
	'$timeout',
	'qgrid',
	'vscroll'
];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	}
}