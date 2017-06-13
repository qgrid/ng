import Directive from '@grid/view/directives/directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME, GRID_NAME} from '@grid/view/definition';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {PathService} from '@grid/core/path';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`, root: `^^${GRID_NAME}`}) {
	constructor($scope, $element) {
		super();

		// this.$scope should be set cause it used by box.js
		this.$scope = $scope;
		this.element = $element[0];

		this.rangeStartCell = null;
		this.scrollContext = {
			top: this.element.scrollTop,
			left: this.element.scrollLeft,
		};

		Object.defineProperty($scope, '$view', {get: () => this.view});
	}

	onScroll() {
		const element = this.element;
		const scroll = this.view.model.scroll;

		const oldValue = this.scrollContext;
		const newValue = {};
		if (oldValue.top !== element.scrollTop) {
			oldValue.top = newValue.top = element.scrollTop;
		}

		if (oldValue.left !== element.scrollLeft) {
			oldValue.left = newValue.left = element.scrollLeft;
		}

		if (Object.keys(newValue)) {
			scroll(newValue, {source: 'body.core'});
		}
	}

	onInit() {
		this.listener = new EventListener(this.element, new EventManager(this, this.root.applyFactory(null, 'sync')));

		this.listener.on('scroll', this.onScroll);
		this.listener.on('click', this.onClick);
		this.listener.on('mousedown', this.onMouseDown);
		this.listener.on('mouseup', this.onMouseUp);

		this.listener.on('mousemove', this.onMouseMove);
		this.listener.on('mouseleave', this.onMouseLeave)
	}

	onDestroy() {
		this.listener.off();
	}

	onClick(e) {
		const pathFinder = new PathService(this.root.bag);
		const cell = pathFinder.cell(e.path);
		if (cell) {
			this.navigate(cell);

			if (cell.column.editorOptions.trigger === 'click' && this.view.edit.cell.enter.canExecute(cell)) {
				this.$scope.$evalAsync(() => this.view.edit.cell.enter.execute(cell));
			}
		}
	}

	onMouseDown(e) {
		if (this.selection.mode === 'range') {
			const pathFinder = new PathService(this.root.bag);
			this.rangeStartCell = pathFinder.cell(e.path);

			if (this.rangeStartCell) {
				this.view.selection.selectRange(this.rangeStartCell);
			}

			return;
		}

		if (this.selection.unit === 'row') {
			const pathFinder = new PathService(this.root.bag);
			const cell = pathFinder.cell(e.path);
			if (cell && cell.column.type !== 'select') {
				this.view.selection.toggleRow.execute(cell.row);
			}

			return;
		}

		if (this.selection.unit === 'column') {
			const pathFinder = new PathService(this.root.bag);
			const cell = pathFinder.cell(e.path);
			if (cell) {
				this.view.selection.toggleColumn.execute(cell.column);
			}

			return;
		}
	}

	onMouseMove(e) {
		const pathFinder = new PathService(this.root.bag);
		const row = pathFinder.row(e.path);
		if (row) {
			const index = row.index;
			const highlightRow = this.view.highlight.row;
			if (highlightRow.canExecute(index)) {
				this.view
					.model
					.highlight()
					.rows
					.filter(i => i !== index)
					.forEach(i => highlightRow.execute(i, false));

				highlightRow.execute(index, true);
			}
		}

		if (this.selection.mode === 'range') {
			const startCell = this.rangeStartCell;
			const endCell = pathFinder.cell(e.path);

			if (startCell && endCell) {
				this.view.selection.selectRange(startCell, endCell);
				this.navigate(endCell);
			}
		}
	}

	onMouseLeave() {
		const highlightRow = this.view.highlight.row;
		this.view
			.model
			.highlight()
			.rows
			.forEach(i => highlightRow.execute(i, false));
	}

	onMouseUp() {
		if (this.selection.mode === 'range') {
			this.rangeStartCell = null;
		}
	}

	navigate(cell) {
		const focus = this.view.nav.focusCell;
		if (focus.canExecute(cell)) {
			focus.execute(cell);
		}
	}

	get selection() {
		return this.view.model.selection();
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
