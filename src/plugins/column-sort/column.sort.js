import Component from '../../view/components/component';
import {VIEW_CORE_NAME} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';

class ColumnSort extends Component {
	constructor($element) {
		super();

		this.element = $element[0];
	}

	onInit() {
		const view = this.view;
		const model = view.model;
		model.sortChanged.watch(e => {
			if (e.hasChanges('by')) {
				if (view.sort.order(this.column) >= 0) {
					this.element.classList.add(`${GRID_PREFIX}-active`);
				}
				else {
					this.element.classList.remove(`${GRID_PREFIX}-active`);
				}
			}
		});
	}
}

ColumnSort.$inject = ['$element'];

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
