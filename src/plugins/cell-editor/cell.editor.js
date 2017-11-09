import {GRID_NAME} from '@grid/view/definition';
import Component from '../../view/components/component';

class CellEditor extends Component {
	constructor() {
		super();
	}

	close() {
		this.onClose();
	}
}

CellEditor.$inject = [];

export default {
	transclude: true,
	require: {
		'root': `^^${GRID_NAME}`
	},
	templateUrl: 'qgrid.plugin.cell-editor.tpl.html',
	controller: CellEditor,
	controllerAs: '$editor',
	bindings: {
		'onClose': '&'
	}
};
