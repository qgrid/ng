import {GRID_NAME} from '@grid/view/definition';
import Component from '../../view/components/component';

class CellEditor extends Component {
	constructor() {
		super();

		this.width = 3;
	}

	close() {
		this.onClose();
	}

	keyDown(e) {
		this.root.keyDown(e, 'editor');
	}
}

export default {
	require: {
		'root': `^^${GRID_NAME}`
	},
	templateUrl: 'qgrid.plugin.cell-editor.tpl.html',
	controller: CellEditor,
	controllerAs: '$editor',
	transclude: true,
	bindings: {
		'onClose': '&',
		'width': '='
	}
};
