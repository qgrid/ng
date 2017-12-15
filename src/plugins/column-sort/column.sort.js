import Component from '../../view/components/component';
import {VIEW_CORE_NAME} from '@grid/view/definition';

import {ColumnSortView} from '@grid/plugin/column-sort/column.sort.view';

class ColumnSort extends Component {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		this.$columnSort = new ColumnSortView(this.view.model, {
			element: this.element,
			view: this.view,
			column: this.column
		});
	}

	onDestroy() {
		this.ctrl.dispose()
	}
}

ColumnSort.$inject = ['$element'];

export default {
	transclude: true,
	templateUrl: 'qgrid.plugin.column-sort.tpl.html',
	controller: ColumnSort,
	controllerAs: '$columnSortPlugin',
	bindings: {
		'column': '<column'
	},
	require: {
		view: `^^${VIEW_CORE_NAME}`
	}
};
