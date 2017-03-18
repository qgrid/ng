import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'ng/definition';
import EventListener from 'core/infrastructure/event.listener';
import * as pathFinder from 'ng/services/path.find';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $document) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.document = $document[0];

		this.documentListener = new EventListener(this, this.document);
		this.listener = new EventListener(this, this.element);

		this.rangeStartCell = null;

		Object.defineProperty($scope, '$view', {get: () => this.view});
	}

	onScroll() {
		const element = this.element;
		const layout = this.view.model.layout;

		layout({
			scroll: {
				top: element.scrollTop,
				left: element.scrollLeft,
				width: element.scrollWidth,
				height: element.scrollHeight
			}
		})
	}

	onInit() {
		this.listener.on('scroll', this.onScroll);
		this.listener.on('click', this.onClick);
		this.listener.on('mousedown', this.onMouseDown);
		this.listener.on('mouseup', this.onMouseUp);

		this.documentListener.on('mousemove', this.onMouseMove);
	}

	onDestroy() {
		this.listener.off();
	}

	onClick(e) {
		const cell = pathFinder.cell(e.path);
		if (cell) {
			this.navigate(cell);

			if (this.view.edit.cell.enter.canExecute(cell)) {
				this.$scope.$evalAsync(() => this.view.edit.cell.enter.execute(cell));
			}

			if (cell.column.type !== 'select') {
				this.select(cell);
			}
		}
	}

	onMouseDown(e) {
		if (this.selection.mode === 'range') {
			this.rangeStartCell = pathFinder.cell(e.path);

			if (this.rangeStartCell) {
				this.select(this.rangeStartCell);
			}
		}
	}

	onMouseMove(e) {
		if (this.selection.mode === 'range') {
			const startCell = this.rangeStartCell;
			const endCell = pathFinder.cell(e.path);

			if (startCell && endCell) {
				this.select(startCell, endCell);
				this.navigate(endCell);
			}
		}
	}

	onMouseUp() {
		if (this.selection.mode === 'range') {
			this.rangeStartCell = null;
		}
	}

	navigate(cell) {
		if (!cell) {
			return;
		}

		this.view.model.navigation({
			active: {
				cell: cell
			},
			column: cell.columnIndex,
			row: cell.rowIndex
		});
	}

	select(startCell, endCell) {
		if (!startCell) {
			return;
		}

		const mixedUnit = startCell.column.type === 'row-indicator' ? 'row' : 'cell';
		
		let items = null;
		switch (this.selection.unit) {
			case 'row':
				items = this.view.table.getRows(startCell, endCell);
				break;
			case 'column':
				items = this.view.table.getColumns(startCell, endCell);
				break;
			case 'cell':
				items = this.view.table.getCells(startCell, endCell);
				break;
			case 'mixed':
				items = (mixedUnit === 'row'
					? this.view.table.getRows(startCell, endCell)
					: this.view.table.getCells(startCell, endCell)).map(item => {
						return {
							item: item,
							unit: mixedUnit
						};
					});
				break;
		}

		if (items) {
			this.view.selection.select(items);
		}
	}
	
	getMixedUnit(cell) {
		return (cell.column.type === 'row-indicator' && this.selection.unit === 'mixed') ? 'row' : 'cell';
	}

	get selection() {
		return this.view.model.selection();
	}
}

BodyCore.$inject = [
	'$scope',
	'$element',
	'$document'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link,
	scope: true
};
