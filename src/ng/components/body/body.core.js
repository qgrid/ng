import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'ng/definition';
import EventListener from 'core/infrastructure/event.listener';
import * as pathFinder from 'ng/services/path.find';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $document) {
		super();

		// this.$scope should be set cause it used by box.js
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
		const scroll = this.view.model.scroll;

		scroll({
			top: element.scrollTop,
			left: element.scrollLeft,
			width: element.scrollWidth,
			height: element.scrollHeight
		}, {
			source: 'body.core',
			pin: this.view.pin
		});
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

			if (cell.column.editorOptions.trigger === 'click'
				&& this.view.edit.cell.enter.canExecute(cell)) {
				this.$scope.$evalAsync(() => this.view.edit.cell.enter.execute(cell));
			}

			if (cell.column.type !== 'select') {
				this.view.selection.selectRange(cell);
			}
		}
	}

	onMouseDown(e) {
		if (this.selection.mode === 'range') {
			this.rangeStartCell = pathFinder.cell(e.path);

			if (this.rangeStartCell) {
				this.view.selection.selectRange(this.rangeStartCell);
			}
		}
	}

	onMouseMove(e) {
		if (this.selection.mode === 'range') {
			const startCell = this.rangeStartCell;
			const endCell = pathFinder.cell(e.path);

			if (startCell && endCell) {
				this.view.selection.selectRange(startCell, endCell);
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
