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
			() => this.table.body.rowCount(0),
			count => {
				if (count) {
					const body = this.table.body;
					const focus = this.model.focus;
					const focusState = focus();
					const cell = body.cell(focusState.rowIndex, focusState.columnIndex);
					const cellModel = cell.model();
					if (!cellModel || !cellModel.column.canFocus) {
						let rowIndex = 0;
						while (true) { // eslint-disable-line no-constant-condition
							const row = body.row(rowIndex);
							if (!row.model()) {
								break;
							}

							const cells = row.cells();
							const columnIndex = cells.findIndex(c => {
								const m = c.model();
								return m && m.column.canFocus;
							});

							if (columnIndex >= 0) {
								focus({
									rowIndex: rowIndex,
									columnIndex: columnIndex
								});
								break;
							}

							rowIndex++;
						}
					}
					else {
						// invalidate navigation
						focus({
							rowIndex: -1,
							columnIndex: -1
						});

						focus({
							rowIndex: cell.rowIndex,
							columnIndex: cell.columnIndex
						});
					}

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