import Component from '../../view/components/component';
import {VIEW_CORE_NAME} from '@grid/view/definition';
// import {ColumnSortView} from '@grid/plugin/cell-editor/cell.editor.view';

class ColumnSort extends Component {
	constructor() {
		super();
	}

	onInit() {
	}
}

ColumnSort.$inject = ['$scope'];

export default {
	transclude: true,
	templateUrl: 'qgrid.plugin.column-sort.tpl.html',
	controller: ColumnSort,
	controllerAs: '$columnSort',
	bindings: {
		'column': '<column'
	},
	require: {
		view: `^^${VIEW_CORE_NAME}`
	}
};
