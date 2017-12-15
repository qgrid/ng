import Component from '../../view/components/component';
import {VIEW_CORE_NAME} from '@grid/view/definition';
import {Event, EventListener, EventManager} from '@grid/core/infrastructure';

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
