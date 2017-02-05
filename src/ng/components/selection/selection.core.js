import Directive from 'ng/directives/directive';
import Command from 'core/infrastructure/command';
import {VIEW_CORE_NAME, SELECTION_CORE_NAME} from 'src/definition';

class SelectionCore extends Directive(SELECTION_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		
		this.selectionSet = new Set();

		this.toggle = new Command({
			execute: row => {
				if (row) {
					if (this.selectionSet.has(row)) {
						this.selectionSet.delete(row);
					} else {
						this.selectionSet.add(row);
					}
				} else {
					if (this.state()) {
						this.selectionSet = new Set();
					} else {
						this.selectionSet = new Set(this.view.rows);
					}
				}

				this.invalidate();
			},
			canExecute: () => {
				return true;
			}
		});
	}

	onInit() {
		this.view.model.dataChanged.on(e => {
			if (e.changes.hasOwnProperty('rows')) {
				this.selectionSet = new Set();
			}
		});

		this.view.model.selectionChanged.on(e => {
			if (e.changes.hasOwnProperty('items')) {
				this.selectionSet = new Set(e.state.items);
			}
		});
	}

	state(row) {
		if (!row) {
			return this.selectionSet.size === this.view.rows.length;
		}

		return this.selectionSet.has(row);
	}

	indeterminate() {
		return this.selectionSet.size !== this.view.rows.length && this.selectionSet.size > 0;
	}

	invalidate() {
		const selection = this.view.model.selection;

		selection({
			items: Array.from(this.selectionSet)
		});
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

