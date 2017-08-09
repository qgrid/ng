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
import {Vscroll} from '@grid/view/services';
import {jobLine} from '@grid/core/services';

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
		this.selection = new SelectionView(model, table, commandManager, gridService);
		this.group = new GroupView(model, commandManager);
		this.pivot = new PivotView(model);
		this.highlight = new HighlightView(model, table, this.$timeout);
		this.sort = new SortView(model);
		this.filter = new FilterView(model);
		this.edit = new EditView(model, table, commandManager);
		this.nav = new NavigationView(model, table, commandManager);
		this.pagination = new PaginationView(model);
		this.scroll = new ScrollView(model, table, vscroll, gridService);
		this.rowDetails = new RowDetailsView(model, table, commandManager);

		// TODO: how we can avoid that?
		this.$scope.$watch(this.style.invalidate.bind(this.style));

		this.watch(gridService);
	}

	watch(service) {
		const job = jobLine(10);
		const model = this.model;
		const triggers = model.data().triggers;

		this.using(model.selectionChanged.watch(e => {
			if (e.hasChanges('items')) {
				this.root.onSelectionChanged({
					$event: {
						state: model.selection(),
						changes: e.changes
					}
				});
			}
		}));

		job(() => service.invalidate('grid'));
		Object.keys(triggers)
			.forEach(name =>
				this.using(model[name + 'Changed']
					.watch(e => {
						const changes = Object.keys(e.changes);
						if (e.tag.behavior !== 'core' && triggers[name].find(key => changes.indexOf(key) >= 0)) {
							job(() => service.invalidate(name, e.changes));
						}
					})));
	}

	onDestroy() {
		super.onDestroy();

		this.style.dispose();
		this.head.dispose();
		this.body.dispose();
		this.foot.dispose();
		this.columns.dispose();
		this.layout.dispose();
		this.selection.dispose();
		this.group.dispose();
		this.pivot.dispose();
		this.highlight.dispose();
		this.sort.dispose();
		this.filter.dispose();
		this.edit.dispose();
		this.nav.dispose();
		this.pagination.dispose();
		this.scroll.dispose();
		this.rowDetails.dispose();
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