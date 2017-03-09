import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'ng/definition';
import EventListener from 'core/infrastructure/event.listener';
import * as pathFinder from 'ng/services/path.find';
import {isFunction, isUndefined} from 'core/services/utility';

import toggleItemFactory from 'ng/components/body/toggle/toggle.item.factory';
import toggleRangeFactory from 'ng/components/body/toggle/toggle.range.factory';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $document) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.document = $document[0];

		this.documentListener = new EventListener(this, this.document);

		this.listener = new EventListener(this, this.element);
		this.listener.on('scroll', this.onScroll);
		
		this.rangeStart = null;

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

	onMouseDown(e) {
		if (!this.isRange) {
			return;
		}

		this.rangeStart = e;
	}

	onMouseMove(e) {
		if (!this.isRange) {
			return;
		}

		if (this.rangeStart) {
			this.view.overlay.show();
			this.view.overlay.position(this.rangeStart, e);
		}
	}

	onMouseUp(e) {
		if (!this.isRange) {
			return;
		}
		
		const startCell = pathFinder.cell(this.rangeStart.path);
		const endCell = pathFinder.cell(e.path);
		if (startCell && endCell && startCell !== endCell) {
			this.toggle(startCell, endCell);
		}

		this.rangeStart = null;
		this.view.overlay.hide();
	}

	toggle(startCell, endCell) {
		const toggle = isUndefined(endCell) 
			? toggleItemFactory(this.view, startCell) 
			: toggleRangeFactory(this.view, startCell, endCell);

		if (toggle && isFunction(toggle)) {
			this.$scope.$evalAsync(toggle);
		}
	}

	get isRange() {
		const model = this.view.model;
		const selection = model.selection();

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
