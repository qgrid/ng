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

	get columnStartIndex() {
		const columns = this.root.table.data.columns();
		switch (this.pin) {
			case 'left':
				return 0;
			case 'right':
				return columns.filter(c => c.pin !== 'right').length;
			default:
				return columns.filter(c => c.pin === 'left').length;
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
}