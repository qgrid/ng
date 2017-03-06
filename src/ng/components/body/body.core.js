import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'ng/definition';
import EventListener from 'core/infrastructure/event.listener';
import * as pathFinder from 'ng/services/path.find';
import * as columnService from 'core/column/column.service';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.listener = new EventListener(this, this.element);
		this.listener.on('scroll', this.onScroll);

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
		this.listener.on('click', this.onClick);
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
				column: cell.$element[0].cellIndex,
				row: cell.$element[0].parentNode.rowIndex - 1
			});
			if (this.view.edit.cell.enter.canExecute(cell)) {
				this.$scope.$evalAsync(() => this.view.edit.cell.enter.execute(cell));
			}

			if (cell.column.type !== 'select') {
				this.toggle(cell);
			}
		}
	}

	toggle(cell) {
		const model = this.view.model;
		const selection = model.selection();

		switch (selection.unit) {
			case 'row':
				{
					const rows = model.view().rows;
					const row = rows[cell.rowIndex];
					if (row && this.view.selection.toggleRow.canExecute(row)) {
						this.$scope.$evalAsync(() => this.view.selection.toggleRow.execute(row));
					}
				}
				break;
			case 'column':
				{
					const columns = columnService.lineView(model.view().columns);
					const column = columns.find(c => c.model === cell.column).key;
					if (column && this.view.selection.toggleColumn.canExecute(column)) {
						this.$scope.$evalAsync(() => this.view.selection.toggleColumn.execute(column));
					}
				}
				break;
			case 'cell':
				if (cell && this.view.selection.toggleCell.canExecute(cell)) {
					this.$scope.$evalAsync(() => this.view.selection.toggleCell.execute(cell));
				}
				break;
		}
	}
}

BodyCore.$inject = [
	'$scope',
	'$element'
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
