import Directive from '../directive';
import {GRID_NAME, SELECTION_CORE_NAME} from '../../../definition';
import Event from '../../../core/infrastructure/event';
//import angular from 'angular';

class SelectionCore extends Directive(SELECTION_CORE_NAME, {'root': `^^${GRID_NAME}`}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		
		this.selectedItems = new Set();
		this.selectionChanged = new Event();
	}

	get model() {
		return this.root.model;
	}

	get rows() {
		return this.model.data().rows;
	}

	onInit() {
		this.model.dataChanged.on(e => {
			if (e.changes.hasOwnProperty('rows')) {
				this.selectedItems.clear();
			}
		});

		this.model.selectionChanged.on(e => {
			if (e.changes.hasOwnProperty('items')) {
				this.selectedItems = new Set(e.state.items);
				this.emitSelectionChanged();
			}
		});
	}

	get selectAllState() {
		const rows = this.rows;
		const rowsCount = rows ? rows.length : 0;

		return this.selectedItems.size === rowsCount && rowsCount > 0;
	}

	emitSelectionChanged() {
		this.selectionChanged.emit({
			selected: this.selectedItems,
			selectAllState: this.selectAllState
		});
	}

	updateSelection() {

		this.emitSelectionChanged();

		const selection = this.model.selection;

		selection({
			items: Array.from(this.selectedItems)
		});
	}

	toggle(row) {

		if (this.selectedItems.has(row)) {
			this.selectedItems.delete(row);
		} else {
			this.selectedItems.add(row);
		}
		
		this.updateSelection();
	}

	toggleAll() {
		if (this.selectAllState) {
			this.selectedItems.clear();
		} else {
			this.selectedItems = new Set(this.rows);
		}

		this.updateSelection();
	}
}

SelectionCore.$inject = ['$scope', '$element', '$attrs'];

export default {
	restrict: 'A',
	scope: true,
	bindToController: true,
	controllerAs: '$selectionCore',
	controller: SelectionCore,
	require: SelectionCore.require,
	link: SelectionCore.link
};

