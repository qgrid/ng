import Directive from '@grid/view/directives/directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME, GRID_NAME, TABLE_CORE_NAME} from '@grid/view/definition';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {PathService} from '@grid/core/path';

class BodyCore extends Directive(BODY_CORE_NAME, {
	view: `^^${VIEW_CORE_NAME}`,
	root: `^^${GRID_NAME}`,
	table: `^^${TABLE_CORE_NAME}`
}) {
	constructor($scope, $element) {
		super();

		// this.$scope should be set cause it used by box.js
		this.$scope = $scope;
		this.element = $element[0];

		this.rangeStartCell = null;
		Object.defineProperty($scope, '$view', {
			get: () => this.view
		});
	}

	onInit() {
		const view = this.view;
		const invokeListener = new EventListener(this.element, new EventManager(this, view.invoke));
		const applyListener = new EventListener(this.element, new EventManager(this, view.apply));

		this.using(invokeListener.on('scroll', this.onScroll, {passive: true}));
		this.using(invokeListener.on('wheel', this.onWheel));
		this.using(applyListener.on('click', this.onClick));
		this.using(invokeListener.on('mousedown', this.onMouseDown));
		this.using(invokeListener.on('mouseup', this.onMouseUp));

		this.using(invokeListener.on('mousemove', this.onMouseMove));
		this.using(invokeListener.on('mouseleave', this.onMouseLeave));
	}

	onScroll() {
		const element = this.element;
		const scroll = this.view.model.scroll;

		const oldValue = scroll();
		const newValue = {};
		let hasChanges = false;
		if (oldValue.top !== element.scrollTop) {
			newValue.top = element.scrollTop;
			hasChanges = true;
		}

		if (oldValue.left !== element.scrollLeft) {
			newValue.left = element.scrollLeft;
			hasChanges = true;
		}

		if (hasChanges) {
			scroll(newValue, {
				source: 'body.core',
				behavior: 'core'
			});
		}
	}

	onWheel(e) {
		e.preventDefault();

		const model = this.view.model;
		if (model.edit().state === 'view') {
			const scroll = model.scroll;
			const element = this.element;
			const upper = 0;
			const lower = element.scrollHeight - element.offsetHeight;
			const top = Math.min(lower, Math.max(upper, scroll().top + e.deltaY));

			scroll({top}, {source: 'body.core'});
		}
	}

	onClick(e) {
		const pathFinder = new PathService(this.root.bag.body);
		const cell = pathFinder.cell(e.path);
		if (cell) {
			this.select(cell);
			this.navigate(cell);
			if (cell.column.editorOptions.trigger === 'click' && this.view.edit.cell.enter.canExecute(cell)) {
				this.view.edit.cell.enter.execute(cell);
			}
		}
	}

	onMouseDown(e) {
		const selectionState = this.selection;
		if (selectionState.area !== 'body') {
			return;
		}

		const pathFinder = new PathService(this.root.bag.body);
		const cell = pathFinder.cell(e.path);

		const editMode = this.view.model.edit().mode;
		if (selectionState.mode === 'range') {
			if (!editMode) {
				this.rangeStartCell = cell;
				if (this.rangeStartCell) {
					this.view.apply(() => this.view.selection.selectRange(this.rangeStartCell, null, 'body'));
				}
			}
		}
	}

	onMouseMove(e) {
		const pathFinder = new PathService(this.root.bag.body);
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
				this.view.apply(() => {
					this.view.selection.selectRange(startCell, endCell, 'body');
					this.navigate(endCell);
				});
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

	select(cell) {
		const selectionState = this.selection;
		if (cell.column.type !== 'select' &&
			(selectionState.area !== 'body' || selectionState.mode === 'range')) {
			return;
		}

		const editMode = this.view.model.edit().mode;
		switch (selectionState.unit) {
			case 'row': {
				if (cell.column.type === 'select' && cell.column.editorOptions.trigger === 'focus') {
					const focusState = this.view.model.focus();
					if (focusState.rowIndex !== cell.rowIndex || focusState.columnIndex !== cell.columnIndex) {
						this.view.selection.toggleRow.execute(cell.row, 'body');
					}
				} else if (!editMode && cell.column.canEdit) {
					this.view.selection.toggleRow.execute(cell.row, 'body');
				}
				break;
			}

			case 'column': {
				if (!editMode) {
					this.view.selection.toggleColumn.execute(cell.column, 'body');
				}
				break;
			}

			case 'mix': {
				if (cell.column.type === 'row-indicator') {
					this.view.selection.toggleCell.execute(cell, 'body');
				}
			}
		}
	}

	navigate(cell) {
		const focus = this.view.nav.focus;
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