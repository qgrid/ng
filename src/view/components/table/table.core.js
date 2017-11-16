import Component from '../component';
import {VIEW_CORE_NAME, GRID_NAME} from '@grid/view/definition';

class TableCore extends Component {
	constructor($scope) {
		super();

		Object.defineProperty($scope, '$view', {get: () => this.view});
	}

	onInit() {
		if (!this.pin) {
			this.pin = null;
		}
	}

	get model() {
		return this.view.model;
	}
}

TableCore.$inject = ['$scope'];

export default {
	controller: TableCore,
	controllerAs: '$table',
	templateUrl: 'qgrid.table.tpl.html',
	require: {
		'view': `^${VIEW_CORE_NAME}`,
		'root': `^${GRID_NAME}`
	},
	bindings: {
		'pin': '@'
	}
};