import Component from '../component';
import {getFactory as valueFactory, set as setValue} from 'ng/services/value';
import * as css from 'core/services/css';
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
import {GRID_NAME} from 'ng/definition';
import {isUndefined} from 'core/services/utility';

class ViewCore extends Component {
	constructor($scope, $element, $timeout, grid) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.$timeout = $timeout;
		this.serviceFactory = grid.service;
	}

	onInit() {
		const model = this.model;
		const markup = this.root.markup;
		const service = this.serviceFactory(model);
		const apply = (f, timeout) => {
			if (isUndefined(timeout)){
				return this.$scope.$evalAsync(f);
			}

			return this.$timeout(f, timeout);
		};

		this.head = new HeadView(model, service, TH_CORE_NAME);
		this.body = new BodyView(model, markup, valueFactory);
		this.foot = new FootView(model, valueFactory);
		this.layout = new LayoutView(model, markup);
		this.selection = new SelectionView(model, markup, apply);
		this.group = new GroupView(model, valueFactory);
		this.pivot = new PivotView(model, valueFactory);
		this.nav = new NavigationView(model, markup, apply);
		this.highlight = new HighlightView(model, markup, apply);
		this.sort = new SortView(model);
		this.filter = new FilterView(model);
		this.edit = new EditView(model, setValue, markup, apply);
	}

	onDestroy() {
		const id = this.model.grid().id;
		css.removeStyle(id);
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

	get pagination() {
		return this.model.pagination();
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