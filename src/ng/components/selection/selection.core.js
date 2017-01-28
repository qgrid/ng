import Directive from '../directive';
import {VIEW_CORE_NAME, SELECTION_CORE_NAME} from 'src/definition';

class SelectionCore extends Directive(SELECTION_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		
		this.selectedItems = new Set();
	}

	onInit() {
		this.view.model.dataChanged.on(e => {
			if (e.changes.hasOwnProperty('rows')) {
				this.selectedItems = new Set();
			}
		});

		this.view.model.selectionChanged.on(e => {
			if (e.changes.hasOwnProperty('items')) {
				this.selectedItems = new Set(e.state.items);
			}
		});
	}

	state(row) {
		if (!row) {
			return this.selectedItems.size === this.view.rows.length;
		}

		return this.selectedItems.has(row);
	}

	indeterminate() {
		return this.selectedItems.size !== this.view.rows.length && this.selectedItems.size > 0;
	}

	updateSelection() {
		const selection = this.view.model.selection;

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
		if (this.state()) {
			this.selectedItems.clear();
		} else {
			this.selectedItems = new Set(this.view.rows);
		}

		this.updateSelection();
	}
}

SelectionCore.$inject = ['$scope', '$element', '$attrs'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$selection',
	controller: SelectionCore,
	require: SelectionCore.require,
	link: SelectionCore.link
};

