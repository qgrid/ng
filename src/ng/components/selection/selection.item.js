import Directive from '../directive';
import {SELECTION_ITEM_NAME, SELECTION_CORE_NAME} from '../../../definition';

class SelectionItem extends Directive(SELECTION_ITEM_NAME, {selectionCore: `^^${SELECTION_CORE_NAME}`}) {
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
		this.isSelected = this.selectionCore.selectedItems.has(this.$scope.$row);
	}
}

SelectionItem.$inject = [
	'$scope', 
	'$element', 
	'$attrs'
];

export default {
	restrict: 'A',
	scope: true,
	bindToController: true,
	controllerAs: '$selectionItem',
	controller: SelectionItem,
	require: SelectionItem.require,
	link: SelectionItem.link
};

