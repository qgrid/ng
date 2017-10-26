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
		const target = this.$element[0];
		const content = this.compile();
		const $mdPanel = this.$mdPanel;
		const position = $mdPanel.newPanelPosition()
			.relativeTo(target)
			.addPanelPosition($mdPanel.xPosition.ALIGN_START, $mdPanel.yPosition.BELOW);

		const config = {
			attachTo: angular.element(document.body),   // eslint-disable-line no-undef
			controller: function () {

			},
			controllerAs: '$editor',
			contentElement: content,
			panelClass: 'q-grid-editor',
			position: position,
			locals: {},
			clickOutsideToClose: true,
			escapeToClose: true,
			focusOnOpen: true,
			zIndex: 2
		};

		$mdPanel.open(config).then(this.close.bind(this));
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

	keyDown(e) {
		this.root.keyDown(e, 'editor');
	}
}

CellEditor.$inject = ['$scope', '$element', '$transclude', '$mdPanel'];

export default {
	transclude: true,
	require: {
		'root': `^^${GRID_NAME}`
	},
	template: '',
	controller: CellEditor,
	controllerAs: '$editor',
	//transclude: true,
	bindings: {
		'onClose': '&',
		'width': '='
	}
};
