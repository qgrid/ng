import Directive from '../directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'src/definition';
import EventListener from 'core/infrastructure/event.listener';
import CellEdit from '../cell/cell.edit';
import * as pathFinder from 'ng/services/path.find';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.element = $element[0];
		this.listener = new EventListener(this, this.element);
		this.cellEdit = null;
		Object.defineProperty($scope, '$view', {get: () => this.view});
	}

	onInit() {
		this.cellEdit = new CellEdit(this.view.model);
		this.listener.on('click', this.onClick);
	}

	onDestroy() {
		this.listener.off();
	}

	onClick(e) {
		const cell = pathFinder.cell(e.path);
		if (cell && this.cellEdit.enter.canExecute(cell)) {
			this.cellEdit.enter.execute(cell);
		}
	}
}

BodyCore.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link,
	scope: true
};
