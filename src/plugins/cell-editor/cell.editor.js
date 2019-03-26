import Component from '../../view/components/component';
import {VIEW_CORE_NAME} from '@grid/view/definition';
import {CellEditorView} from '@grid/plugin/cell-editor/cell.editor.view';

class CellEditor extends Component {
	constructor($scope) {
		super();

		this.$scope = $scope;
	}

	onInit() {
		const model = this.$view.model;
		const cellEditor = new CellEditorView(model);
		this.using(cellEditor.closeEvent.on(this.onClose));
		this.$scope.$editor = cellEditor;
	}
}

CellEditor.$inject = ['$scope'];

export default {
	transclude: true,
	templateUrl: 'qgrid.plugin.cell-editor.tpl.html',
	controller: CellEditor,
	controllerAs: '$editorPlugin',
	bindings: {
		'onClose': '&'
	},
	require: {
		$view: `^^${VIEW_CORE_NAME}`
	}
};
