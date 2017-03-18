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
			this.view.model.navigation({
				active: {
					cell: cell
				},
				column: cell.columnIndex,
				row: cell.rowIndex
			});

			if (this.view.edit.cell.enter.canExecute(cell)) {
				this.$scope.$evalAsync(() => this.view.edit.cell.enter.execute(cell));
			}

			if (cell.column.type === 'row-indicator' && this.selection.unit === 'mixed') {
				if (this.isRange) {
					this.view.selection.behavior.selectRange(cell, cell, 'row');
				} else {
					this.view.selection.behavior.selectCell(cell, 'row');
				}
			}

			if (!['select', 'row-indicator'].includes(cell.column.type)) {
				if (this.isRange) {
					this.view.selection.behavior.selectRange(cell, cell);
				} else {
					this.view.selection.behavior.selectCell(cell);
				}
			}
		}
	}

	onMouseDown(e) {
		if (!this.isRange) {
			return;
		}

		this.rangeStartCell = pathFinder.cell(e.path);
		const unit = this.getMixedUnit(this.rangeStartCell);
		this.view.selection.behavior.selectRange(this.rangeStartCell, this.rangeStartCell, unit);
	}

	onMouseMove(e) {
		if (!this.isRange) {
			return;
		}

		const startCell = this.rangeStartCell;
		const endCell = pathFinder.cell(e.path);

		if (startCell && endCell) {
			const unit = this.getMixedUnit(startCell);
			this.view.selection.behavior.selectRange(startCell, endCell, unit);

			this.view.model.navigation({
				active: {
					cell: endCell
				},
				column: endCell.columnIndex,
				row: endCell.rowIndex
			});
		}
	}

	onMouseUp() {
		if (!this.isRange) {
			return;
		}

		this.rangeStartCell = null;
	}

	getMixedUnit(cell) {
		return (cell.column.type === 'row-indicator' && this.selection.unit === 'mixed') ? 'row' : 'cell';
	}

	get isRange() {
		return this.selection.mode === 'range';
	}

	get selection() {
		return this.view.model.selection();
	}

	get mixedUnit() {
		
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
