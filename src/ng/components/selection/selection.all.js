import Directive from '../directive';
import {SELECTION_ALL_NAME, SELECTION_CORE_NAME} from '../../../definition';

class SelectionAll extends Directive(SELECTION_ALL_NAME, {selectionCore: `^^${SELECTION_CORE_NAME}`}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		
		this.isSelected = false;
	}
	
	onInit() {
		this.updateIsSelected();

		this.selectionCore.selectionChanged.on(() => {
			this.updateIsSelected();
		});
	}

	updateIsSelected(){
		this.isSelected = this.selectionCore.selectAllState;
	}
}

SelectionAll.$inject = [
	'$scope', 
	'$element', 
	'$attrs'
];

export default {
	restrict: 'A',
	scope: true,
	bindToController: false,
	controllerAs: '$selectionAll',
	controller: SelectionAll,
	require: SelectionAll.require,
	link: SelectionAll.link
};

