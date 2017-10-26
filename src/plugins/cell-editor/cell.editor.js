import {GRID_NAME} from '@grid/view/definition';
import Component from '../../view/components/component';

class CellEditor extends Component {
	constructor($scope, $element, $transclude, $mdPanel) {
		super();

		this.width = 3;

		this.$scope = $scope;
		this.$element = $element;
		this.$transclude = $transclude;
		this.$mdPanel = $mdPanel;
	}

	onInit() {
	}

	compile() {
		this.template = null;
		this.templateScope = null;

		this.$transclude((clone, scope) => {
			this.template = clone;
			this.templateScope = scope;
		});

		return this.template[1];
	}

	close() {
		if (this.templateScope) {
			this.templateScope.$destroy();

			this.template = null;
			this.templateScope = null;
		}

		this.onClose();
	}

	// keyDown(e) {
	// 	this.root.keyDown(e, 'editor');
	// }
}

CellEditor.$inject = ['$scope', '$element', '$transclude', '$mdPanel'];

export default {
	transclude: true,
	require: {
		'root': `^^${GRID_NAME}`
	},
	templateUrl: 'qgrid.plugin.cell-editor.tpl.html',
	controller: CellEditor,
	controllerAs: '$editor',
	//transclude: true,
	bindings: {
		'onClose': '&',
		'width': '='
	}
};
