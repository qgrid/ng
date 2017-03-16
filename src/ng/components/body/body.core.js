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
		const selection = this.view.model.selection();
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

			if (cell.column.type !== 'select') {
				if (selection.mode === 'range') {
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
		this.view.selection.behavior.selectRange(this.rangeStartCell, this.rangeStartCell);
	}

	onMouseMove(e) {
		if (!this.isRange) {
			return;
		}

		const startCell = this.rangeStartCell;
		const endCell = pathFinder.cell(e.path);

		if (startCell && endCell) {
			this.view.selection.behavior.selectRange(startCell, endCell);

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


	get isRange() {
		const selection = this.view.model.selection();

		return selection.mode === 'range';
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
