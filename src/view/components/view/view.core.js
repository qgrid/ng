import Component from '../component';
import {Table} from '@grid/core/dom';
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
import {GRID_NAME, TH_CORE_NAME} from '@grid/view/definition';
import {isUndefined, identity} from '@grid/core/services/utility';
import {PipeUnit} from '@grid/core/pipe/units';
import TemplateLink from '../template/template.link';
import {CommandManager, Vscroll, LayerFactory} from '@grid/view/services';

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

		this.bag = new Map();
	}

	build() {
		const model = this.model;
		const bag = this.bag;
		const layerFactory = new LayerFactory(this.markup, this.template);
		const tableContext = {
			layer: name => layerFactory.create(name),
			model: element => bag.get(element) || null,
			mapper: {
				row: index => {
					const scrollState = model.scroll();
					if (scrollState.mode === 'virtual') {
						//console.log(JSON.stringify(this.scroll.y.container));
						return index - this.scroll.y.container.cursor;
					}

					return index;
				},
				column: identity
			}
		};

		const table = new Table(this.model, this.markup, tableContext);

		this.table = table;

		const gridService = this.serviceFactory(model);
		const commandManager = new CommandManager(this.applyFactory());
		const vscroll = new Vscroll(
			this.vscroll,
			this.applyFactory(() => {
				if (table.body.invalidate) {
					table.body.invalidate();
				}
			}));

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

	applyFactory(gf) {
		return (lf, timeout) => {
			if (isUndefined(timeout)) {
				return this.$scope.$applyAsync(() => {
					lf();

					if (gf) {
						gf();
					}
				});
			}

			return this.$timeout(() => {
				lf();

				if (gf) {
					gf();
				}
			}, timeout);
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
	}
}