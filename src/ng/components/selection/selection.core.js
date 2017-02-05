import Directive from 'ng/directives/directive';
import Command from 'core/infrastructure/command';
import {VIEW_CORE_NAME, SELECTION_CORE_NAME} from 'src/definition';
import Node from 'core/node/node';
import AppError from 'core/infrastructure/error';

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
					this.toggleItem(item, state);
				}

				this.invalidate();
			},
			canExecute: () => {
				return true;
			}
		});
	}

	mode(mode) {
		const currentMode = this.view.model.selection().mode;

		if (!mode) {
			return currentMode; 
		}

		return mode === currentMode;
	}

	get checkbox() {
		return  this.view.model.selection().checkbox;
	}

	get items() {
		switch (this.mode()) {
			case 'row':
				return this.view.rows;
			case 'column':
				return this.view.body.columns;
			default:
				throw new AppError('selection.core', `Invalid mode "${this.mode()}"`);
		}
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

			if (e.changes.hasOwnProperty('mode')) {
				this.selectionSet = new Set();
			}
		});
	}

	state(item) {
		if (!item) {
			return this.selectionSet.size === this.items.length;
		} else if (item instanceof Node) {
			return item.rows.every((index) => this.state(this.items[index]));
		} else {
			return this.selectionSet.has(item);
		}
	}

	indeterminate(item) {
		if (!item) {
			return this.selectionSet.size !== this.items.length && this.selectionSet.size > 0;
		} 
		
		if (item instanceof Node) {
			if (item.type === 'row'){
				return false;
			}

			return item.rows.some((index) => !this.state(this.items[index])) 
				&& item.rows.some((index) => this.state(this.items[index]))
		} 

		return false;
	}

	toggleItem(item, state = !this.selectionSet.has(item)) {
		if (!state) {
			this.selectionSet.delete(item);
		} else {
			this.selectionSet.add(item);
		}
	}

	toggleAll(state = !this.state()) {
		if (!state) {
			this.selectionSet = new Set();
		} else {
			this.selectionSet = new Set(this.items);
		}
	}

	toggleNode(node, state = !this.state(node)) {
		node.rows.forEach((index) => this.toggleItem(this.items[index], state));
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

