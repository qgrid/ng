import Component from '../../view/components/component';
import {VIEW_CORE_NAME} from '@grid/view/definition';

class CellEditor extends Component {
	constructor() {
		super();
	}

	onInit() {
		const model = this.$view.model;
		this.using(model.sceneChanged.on(() => this.close()));
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
	},
	require: {
		$view: `^^${VIEW_CORE_NAME}`
	}
};
