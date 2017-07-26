import Directive from './directive';
import {AUTOFOCUS_NAME, GRID_NAME} from '@grid/view/definition';

class Autofocus extends Directive(AUTOFOCUS_NAME, {root: `${GRID_NAME}`}) {
	constructor($scope, $element, $attrs, $timeout) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$timeout = $timeout;
		this.delay = parseInt($attrs[AUTOFOCUS_NAME]) || 100;
	}

	onInit() {
		const markupOff = this.$scope.$watch(
			() => Object.keys(this.markup).find(p => p.startsWith('body')),
			key => {
				if (key) {
					const element = this.markup[key];
					if (element) {
						this.$timeout(() => {
							element.focus();
						}, this.delay);
						markupOff();
					}
				}
			});

		const rowsOff = this.$scope.$watch(
			() => this.table.body.rowCount(),
			count => {
				if (count) {
					const focusableIndex = this.table.data.columns().findIndex(c => c.canFocus);
					this.model.focus({
						rowIndex: 0,
						columnIndex: focusableIndex
					});

					rowsOff();
				}
			});
	}

	get markup() {
		return this.root.markup;
	}

	get model() {
		return this.root.model;
	}

	get table() {
		return this.root.table;
	}
}

Autofocus.$inject = ['$scope', '$element', '$attrs', '$timeout'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$autofocus',
	controller: Autofocus,
	require: Autofocus.require,
	link: Autofocus.link,
	scope: false
};