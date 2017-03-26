import Component from '../component';
import {getFactory as valueFactory, set as setValue} from 'ng/services/value';
import Table from 'ng/services/table';
import BodyView from 'core/body/body.view';
import HeadView from 'core/head/head.view';
import FootView from 'core/foot/foot.view';
import LayoutView from 'core/layout/layout.view';
import GroupView from 'core/group/group.view';
import PivotView from 'core/pivot/pivot.view';
import NavigationView from 'core/navigation/navigation.view';
import HighlightView from 'core/highlight/highlight.view';
import SortView from 'core/sort/sort.view';
import FilterView from 'core/filter/filter.view';
import EditView from 'core/edit/edit.view';
import SelectionView from 'core/selection/selection.view';
import PaginationView from 'core/pagination/pagination.view';
import TableView from 'core/table/table.view';
import RowDetailsView from 'core/row-details/row.details.view';
import StyleView from 'core/style/style.view';
import {GRID_NAME, TH_CORE_NAME} from 'ng/definition';
import {isUndefined} from 'core/services/utility';

class ViewCore extends Component {
	constructor($scope, $element, $timeout, grid) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.$timeout = $timeout;
		this.$postLink = this.onLink;
		this.serviceFactory = grid.service;
	}

	onLink() {
		const model = this.model;
		const markup = this.root.markup;
		const table = new Table(markup);

		const service = this.serviceFactory(model);
		const apply = (f, timeout) => {
			if (isUndefined(timeout)) {
				return this.$scope.$evalAsync(f);
			}

			return this.$timeout(f, timeout);
		};

		this.table = new TableView(model);
		this.head = new HeadView(model, service, TH_CORE_NAME);
		this.body = new BodyView(model, markup, valueFactory);
		this.foot = new FootView(model, valueFactory);
		this.layout = new LayoutView(model, markup);
		this.selection = new SelectionView(model, markup, apply);
		this.group = new GroupView(model, valueFactory);
		this.pivot = new PivotView(model, valueFactory);
		this.nav = new NavigationView(model, markup, table, apply);
		this.highlight = new HighlightView(model, markup, apply);
		this.sort = new SortView(model);
		this.filter = new FilterView(model);
		this.edit = new EditView(model, setValue, markup, apply);
		this.style = new StyleView(model, table, valueFactory);
		this.pagination = new PaginationView(model);
		this.rowDetails = new RowDetailsView(model);

		// TODO: how we can avoid that?
		this.$scope.$watch(() => {
			this.style.invalidate();
		});
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
	'$scope',
	'$element',
	'$timeout',
	'qgrid'
];

export default {
	controller: ViewCore,
	controllerAs: '$view',
	templateUrl: 'qgrid.view.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	}
}