import Directive from 'ng/directives/directive';
import Command from 'core/infrastructure/command';
import {VIEW_CORE_NAME, SELECTION_CORE_NAME} from 'src/definition';
import Node from 'core/node/node';

class SelectionCore extends Directive(SELECTION_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		
		this.selectionSet = new Set();

		this.toggle = new Command({
			execute: (item, state) => {
				if (!item) {
					this.toggleAll(state);
				} else if (item instanceof Node) {
					this.toggleNode(item, state);
				} else {
					this.toggleRow(item, state);
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

	state(item) {
		if (!item) {
			return this.selectionSet.size === this.view.rows.length;
		} else if (item instanceof Node) {
			return item.rows.every((index) => this.state(this.view.rows[index]));
		} else {
			return this.selectionSet.has(item);
		}
	}

	indeterminate(item) {
		if (!item) {
			return this.selectionSet.size !== this.view.rows.length && this.selectionSet.size > 0;
		} 
		
		if (item instanceof Node) {
			if (item.type === 'row'){
				return false;
			}

			return item.rows.some((index) => !this.state(this.view.rows[index])) 
				&& item.rows.some((index) => this.state(this.view.rows[index]))
		} 

		return false;
	}

	toggleRow(row, state = !this.selectionSet.has(row)) {
		if (!state) {
			this.selectionSet.delete(row);
		} else {
			this.selectionSet.add(row);
		}
	}

	toggleAll(state = !this.state()) {
		if (!state) {
			this.selectionSet = new Set();
		} else {
			this.selectionSet = new Set(this.view.rows);
		}
	}

	toggleNode(node, state = !this.state(node)) {
		node.rows.forEach((index) => this.toggleRow(this.view.rows[index], state));
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

