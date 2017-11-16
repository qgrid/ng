import Component from '../../view/components/component';

class CellEditor extends Component {
	constructor() {
		super();
	}

	onInit() {
	}

	close() {
		this.onClose();
	}
}

CellEditor.$inject = [];

export default {
	transclude: true,
	templateUrl: 'qgrid.plugin.cell-editor.tpl.html',
	controller: CellEditor,
	controllerAs: '$editor',
	bindings: {
		'onClose': '&'
	}
};
